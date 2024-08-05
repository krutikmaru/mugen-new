"use client";
import Particles from "@/components/magicui/particles";
import ThemeSwitcher from "@/app/ui/components/ThemeSwitcher";
import { useTheme } from "next-themes";
import ShimmerButton from "@/components/magicui/shimmer-button";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Meteors from "@/components/magicui/meteors";
import Globe from "@/components/magicui/globe";

function Landing() {
  const { theme, setTheme } = useTheme();

  return (
    <main className="flex flex-col md:flex-row min-h-screen relative overflow-x-hidden items-center justify-between text-white ">
      {/* <Particles
        className="w-full h-full absolute pointer-events-none particles"
        color={theme === "dark" ? "#fff" : "#000"}
      />
      <Meteors /> */}
      <div className="w-full pt-28 md:pt-0 pl-0 md:pl-16 h-full flex flex-col justify-center items-center z-10 bg-fuchsia-00">
        <TitleParagraph />
        <ConnectDialog />
      </div>
      <div className="w-full h-full bg-blue-00">
        <div className="relative flex min-h-[70vh] md:min-h-screen w-full items-center justify-center overflow-hidden ">
          <Globe className="top-1/2 -translate-y-1/2 w-[400px] lg:w-[500px]" />
          {/* <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" /> */}
        </div>
      </div>
    </main>
  );
}

function TitleParagraph() {
  return (
    <>
      <div className="scroll-m-20 text-5xl sm:text-5xl md:text-6xl font-extrabold tracking-tight lg:text-8xl text-black dark:text-white flex flex-col justify-center items-center">
        <span>We Power</span>{" "}
        <span className="bg-gradient-to-br from-indigo-600 to-fuchsia-500 inline-block text-transparent bg-clip-text">
          SME
        </span>
      </div>
      <p className="leading-7 [&:not(:first-child)]:mt-6 text-black text-lg dark:text-neutral-400 mb-4 text-center px-5 md:px-0">
        Designed to dramatically scale down costs, optimize processes, and
        simplify operations.
      </p>
    </>
  );
}

function ConnectDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <ShimmerButton className="text-white">Connect With Us</ShimmerButton>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] dark:bg-black/20 backdrop-blur-lg z-[1000000]">
        <DialogHeader>
          <DialogTitle>Your Details</DialogTitle>
          <DialogDescription>
            Let us know about you and we will get in touch.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 w-full  ">
          <div className="grid w-full  items-center gap-1.5">
            <Label htmlFor="name" className="text-xs text-neutral-600">
              Name
            </Label>
            <Input type="text" id="name" placeholder="Meera Haria" />
          </div>
          <div className="grid w-full  items-center gap-1.5">
            <Label htmlFor="email" className="text-xs text-neutral-600">
              Email
            </Label>
            <Input type="email" id="email" placeholder="meera@example.com" />
          </div>

          <div className=" text-neutral-500">
            <span className="text-xs text-neutral-600">
              What are you looking for?
            </span>
            <div className="flex items-center space-x-2 mt-2">
              <Checkbox id="server" />
              <label
                htmlFor="server"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Server
              </label>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <Checkbox id="website" />
              <label
                htmlFor="website"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Website
              </label>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <Checkbox id="hcs" />
              <label
                htmlFor="hcs"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Purchase
              </label>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <Checkbox id="accounting" />
              <label
                htmlFor="accounting"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accounting
              </label>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <Checkbox id="project-management" />
              <label
                htmlFor="project-management"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Project Management
              </label>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Connect</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default Landing;
