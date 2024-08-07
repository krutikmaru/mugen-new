import React from "react";

import { Dock, DockIcon } from "@/components/magicui/dock";
import ThemeSwitcher from "../ThemeSwitcher";
import { Mail, Phone, Wrench } from "lucide-react";
import Link from "next/link";

export type IconProps = React.HTMLAttributes<SVGElement>;

export default function DockMugen() {
  return (
    <div className="fixed left-1/2 -translate-x-1/2 bottom-4 z-[1000]">
      <Dock magnification={60} distance={100}>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
          <ThemeSwitcher />
        </DockIcon>

        <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
          <Link href="mailto:admin@mugen.ae">
            <Mail size={16} className="text-black dark:text-white" />
          </Link>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
          <Link href="tel:+971585183003">
            <Phone size={16} className="text-black dark:text-white" />
          </Link>
        </DockIcon>
      </Dock>
    </div>
  );
}
