"use client";

import { useState } from "react";
import { Skeleton } from "../ui/skeleton";
import NewsItem from "./news-item";
import { useQuery } from "react-query";
import { post } from "@supabase/storage-js/dist/module/lib/fetch";
import MoreNewsButton from "./more-news-button";
import { useToast } from "../ui/use-toast";

type NewsFetchingRequest = {
  title: string;
  banner_url: string;
  font_url: string;
}[];

export default function NewsGrid() {
  const { toast } = useToast();

  const [page, setPage] = useState(15);
  const [news, setNews] = useState<NewsFetchingRequest>([]);

  const { isLoading } = useQuery<void>({
    queryKey: ["news", page],
    queryFn: async () => {
      const response = await fetch(`/api/news?page=${page}`);
      const data = await response.json();

      setNews((prev) => [...prev, ...data]);
    },
    onError: (error: any) => {
      toast({
        title: "Erro ao carregar notícias",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  function handleLoadMore() {
    setPage((prev) => prev + 1);
  }

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((post, idx) => (
          <NewsItem
            key={idx}
            title={post.title}
            bannerUrl={post.banner_url}
            fontUrl={post.font_url}
          />
        ))}
      </div>
      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array.from({ length: 12 })].map((_, idx) => (
            <Skeleton key={idx} className="relative w-full h-80 md:h-96" />
          ))}
        </div>
      )}
      <MoreNewsButton onClick={handleLoadMore} />
    </div>
  );
}
