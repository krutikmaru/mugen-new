"use client";
import Meteors from "@/components/magicui/meteors";
import Particles from "@/components/magicui/particles";
import { useTheme } from "next-themes";
import React from "react";

function SpaceBackground() {
  const { theme } = useTheme();
  return (
    <>
      <Particles
        className="w-full h-full fixed pointer-events-none particles"
        color={theme === "dark" ? "#fff" : "#000"}
      />
      <Meteors />
    </>
  );
}

export default SpaceBackground;
