import { LucideIcon } from "lucide-react";

export type Slide = {
  title: string;
  description: string;
  nextSlide: string | null;
};

export type Service = {
  id: string;
  title: string;
  Icon: LucideIcon;
  description: string;
  slides: Slide[];
  displayImage: string;
  getServiceActionCardTitle: string;
  getServiceActionCardDescription: string;
  nextServiceImage: string;
  nextServiceTitle: string;
  nextServiceSlug: string;
};
