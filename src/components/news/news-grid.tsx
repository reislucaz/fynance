import supabase from "@/utils/supabase";
import { Suspense } from "react";
import NewsItem from "./news-item";

interface NewsGridProps {
  limit: number;
}

export default async function NewsGrid({ limit }: NewsGridProps) {
  const { data: posts } = await supabase
    .from("news")
    .select("title, banner_url, font_url", { count: "exact" })
    .limit(limit);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts?.map((post, idx) => (
        <NewsItem
          key={idx}
          title={post.title}
          bannerUrl={post.banner_url}
          fontUrl={post.font_url}
        />
      ))}
    </div>
  );
}
