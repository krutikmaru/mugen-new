import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./lib/providers";
import Navigation from "@/app/ui/components/Layout/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mugen",
  description: "Nithin Sir's Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className + " bg-white dark:bg-black"}>
          <Navigation />
          {children}
        </body>
      </Providers>
    </html>
  );
}
