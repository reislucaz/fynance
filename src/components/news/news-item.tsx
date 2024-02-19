/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export interface NewsItemProps {
  title: string;
  fontUrl: string;
  bannerUrl: string;
}

export default function NewsItem({ title, fontUrl, bannerUrl }: NewsItemProps) {
  return (
    <div className="relative w-full h-64 md:h-80 group hover:cursor-pointer">
      <a href={fontUrl} target="__blank">
        {bannerUrl && (
          <Image
            src={bannerUrl}
            alt={title}
            fill
            className="rounded-lg"
            style={{
              objectFit: "cover",
            }}
          />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-md group-hover:bg-opacity-70 transition delay-50 duration-150 ease-in-out" />
        <div className="absolute inset-0 flex items-end justify-center p-4">
          <h3 className={`text-white font-bold text-2xl md:text-3xl`}>
            {title}
          </h3>
        </div>
      </a>
    </div>
  );
}
