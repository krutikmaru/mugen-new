import Ripple from "@/components/magicui/ripple";
import { Cloud } from "lucide-react";

export function RippleCloud() {
  return (
    <div className="relative">
      <Cloud
        className=" absolute left-1/2 -translate-x-1/2 top-16 text-black dark:text-white"
        size={40}
      />
      <Ripple />
    </div>
  );
}
