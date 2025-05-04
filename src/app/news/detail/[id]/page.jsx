import { NewsDetailClient } from "@/components/page/news-page/news-detail";

export default async function NewsDetailPage({ params }) {
  const newsId = await Promise.resolve(params.id);

  return <NewsDetailClient id={newsId} />;
}
