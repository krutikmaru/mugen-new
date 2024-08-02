"use client";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}

export default Providers;
