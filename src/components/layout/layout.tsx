"use client";

import { ThemeProvider } from "next-themes";
import Navbar from "../nav-bar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Navbar />
      {children}
    </ThemeProvider>
  );
}
