import { Service } from "@/app/lib/types/service";
import { motion } from "framer-motion";

export default function VisualArea({ service }: { service: Service }) {
  return (
    <div className="h-[400px] lg:h-full relative rounded-lg overflow-hidden w-full lg:w-[40%] ">
      <img
        src={service.displayImage}
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}
