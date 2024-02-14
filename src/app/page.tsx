import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div>
      <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w-full p-40 dark:opacity-40 shadow-lg shadow-inherit absolute sm:rounded-b-[100%]" />
      <section className="container flex flex-col gap-4 pb-12 pt-4 text-center lg:items-center lg:gap-8 lg:py-20">
        <div className="flex flex-1 flex-col items-center gap-4 text-center lg:gap-8 z-10">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold lg:text-6xl">
              Um novo olhar sobre o mercado financeiro
            </h1>
            <h2 className="text-lg font-light dark:text-muted-foreground lg:text-3xl">
              Fynance é um noticiário financeiro que te ajuda a entender o
              mercado de forma simples e descomplicada.
            </h2>
          </div>
          <Link
            href="https://github.com/redpangilinan/next-shadcn-landing"
            target="_blank"
            className={`w-[10rem] ${cn(buttonVariants({ size: "lg" }))}`}
          >
            Saiba mais
          </Link>
        </div>
      </section>
    </div>
  );
}
