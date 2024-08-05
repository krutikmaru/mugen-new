import React from "react";

import { Dock, DockIcon } from "@/components/magicui/dock";
import ThemeSwitcher from "../ThemeSwitcher";
import { Wrench } from "lucide-react";

export type IconProps = React.HTMLAttributes<SVGElement>;

export default function DockMugen() {
  return (
    <div className="fixed left-1/2 -translate-x-1/2 bottom-4 z-[1000]">
      <Dock magnification={60} distance={100}>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
          <ThemeSwitcher />
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
          <Wrench size={16} />
        </DockIcon>
      </Dock>
    </div>
  );
}
