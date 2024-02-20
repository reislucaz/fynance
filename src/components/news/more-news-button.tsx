"use client";

import { Button } from "../ui/button";

type MoreNewsButtonProps = {
  onClick: () => void;
};

export default function MoreNewsButton({ onClick }: MoreNewsButtonProps) {
  return (
    <div className="w-full justify-center text-center">
      <Button onClick={onClick}>Mais notícias</Button>
    </div>
  );
}
