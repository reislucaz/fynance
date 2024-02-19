"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";

export default function MoreNewsButton() {
  const router = useRouter();
  const { get } = useSearchParams();

  const handleClick = () => {
    const limit = get("limit");

    const actualLimit = limit ? Number(limit) + 12 : 24;

    router.replace(`/news?limit=${actualLimit}`);
  };

  return (
    <div className="w-full justify-center text-center">
      <Button onClick={handleClick}>Mais notícias</Button>
    </div>
  );
}
