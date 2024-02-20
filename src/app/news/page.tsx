import { Newspaper } from "lucide-react";
import NewsGrid from "@/components/news/news-grid";
import Title from "@/components/title";

export default function News() {
  return (
    <div className="w-full p-8 flex-col space-y-8">
      <Title title="Notícias" icon={<Newspaper />} />
      <NewsGrid />
    </div>
  );
}
