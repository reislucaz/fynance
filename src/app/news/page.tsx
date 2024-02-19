import MoreNewsButton from "@/components/news/more-news-button";
import NewsGrid from "@/components/news/news-grid";
import Title from "@/components/title";
import { Skeleton } from "@/components/ui/skeleton";
import { Newspaper } from "lucide-react";
import { Suspense } from "react";

export default async function News({ searchParams: { limit = 12 } }) {
  return (
    <div className="w-full p-8 flex-col space-y-8">
      <Title title="Notícias" icon={<Newspaper />} />
      <Suspense
        fallback={
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array.from({ length: 12 })].map((_, idx) => (
              <Skeleton key={idx} className="relative w-full h-80 md:h-96" />
            ))}
          </div>
        }
      >
        <NewsGrid limit={limit} />
      </Suspense>
      <MoreNewsButton />
    </div>
  );
}
