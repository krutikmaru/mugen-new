"use client";
import { ThemeProvider } from "next-themes";
import { ChakraProvider } from "@chakra-ui/react";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <ChakraProvider>{children}</ChakraProvider>
    </ThemeProvider>
  );
}

export default Providers;
