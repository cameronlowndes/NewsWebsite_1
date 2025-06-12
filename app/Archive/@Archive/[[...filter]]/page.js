import NewsList from "@/components/NewsList";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";

export default function FilteredNewsPage({ params }) {
  const filter = params.filter || [];

  const selectedYear = filter[0];
  const selectedMonth = filter[1];

  let news = [];
  let months = [];
  let years = [];

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    months = getAvailableNewsMonths(selectedYear);
    years = getAvailableNewsYears();
  } else if (selectedYear) {
    news = getNewsForYear(selectedYear);
    months = getAvailableNewsMonths(selectedYear);
    years = getAvailableNewsYears();
  } else {
    years = getAvailableNewsYears();
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          {(selectedYear || selectedMonth) && (
            <ul style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
              {years.map((year) => (
                <li key={year} style={{ listStyle: "none" }}>
                  <Link
                    href={`/Archive/${year}`}
                    style={{
                      fontWeight: year === selectedYear ? "bold" : "normal",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    {year}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {selectedYear && (
            <ul style={{ display: "flex", gap: "1rem" }}>
              {months.map((month) => {
                const href = `/Archive/${selectedYear}/${month}`;
                return (
                  <li key={month} style={{ listStyle: "none" }}>
                    <Link
                      href={href}
                      style={{
                        fontWeight: month === selectedMonth ? "bold" : "normal",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      {month}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}

          {!selectedYear && (
            <ul>
              {years.map((year) => (
                <li key={year}>
                  <Link href={`/Archive/${year}`}>{year}</Link>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </header>

      <main>
        {/* Show "No news found" ONLY if filter applied and news is empty */}
        {(selectedYear || selectedMonth) && news.length === 0 ? (
          <p>No news found for the selected period.</p>
        ) : (
          news.length > 0 && <NewsList news={news} />
        )}
      </main>
    </>
  );
}
