import { LucideIcon } from "lucide-react";

export type Integration = {
  title: string;
  icon: LucideIcon;
};

export type Difficulty = {
  title: string;
  progress: number;
};

export type Content = {
  type: string;
  data: string;
  tailwindCss?: string;
};

export type Project = {
  id: string;
  title: string;
  icon: LucideIcon;
  industry: string;
  duration: string;
  overview: string;
  name: string;
  sector: string[];
  integrations: Integration[];
  difficulty: Difficulty;
  timeline: number;
  content: Content[];
};
