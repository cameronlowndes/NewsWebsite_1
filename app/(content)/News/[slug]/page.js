import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import BigPictureMode from "@/components/BigPictureMode";

export default function NewsDetailPage({ params }) {
  const NewsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === NewsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <BigPictureMode
          imageSrc={`/images/news/${newsItem.image}`}
          alt={newsItem.title}
        />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
