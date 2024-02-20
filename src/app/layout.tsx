import "./globals.css";
import Head from "next/head";
import Layout from "@/components/layout/layout";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "Fynance",
  description:
    "Fynance é um noticiário financeiro que te ajuda a entender o mercado de forma simples e descomplicada.",
  favicon: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body>
        <Head>
          <meta title="Fynance" />
        </Head>
        <Layout>{children}</Layout>
        <Toaster />
      </body>
    </html>
  );
}
