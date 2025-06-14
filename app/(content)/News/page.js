import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/NewsList";

export default function NewsPage({ params }) {

  return (
    <>
      <h1>This is the NewsPage.</h1>
      <NewsList  news={DUMMY_NEWS} />
    </>
  );
}
