import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./lib/providers";
import Navigation from "@/app/ui/components/Layout/Navigation";
import Footer from "@/app/ui/components/Layout/Footer";
import SpaceBackground from "./ui/components/SpaceBackground";

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
      <body
        className={
          inter.className + " bg-white dark:bg-black max-w-[1900px] mx-auto"
        }
      >
        <Providers>
          <SpaceBackground />
          <Navigation />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
