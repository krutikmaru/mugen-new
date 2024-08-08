import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row space-x-0 p-4 md:p-10 mt-24 md:space-x-4 md:space-y-0 text-white">
      <div className="w-full p-10 flex flex-col space-y-6 bg-gradient-to-br from-indigo-600 to-fuchsia-700 backdrop-blur-2xl rounded-lg mt-5 md:mt-0">
        <h2 className="text-white text-5xl">Get in touch</h2>
        <div>
          <h2 className="text-white text-xl font-medium">Visit Us</h2>
          <p>Come say a hello at our office HQ.</p>
          <address>Company Address Here Street 124 Dubai</address>
        </div>
        <div>
          <h2 className="text-white text-xl font-medium">Chat with us</h2>
          <p>Our friendly team is here to help.</p>
          <Link href="mailto:support@mugen.ae">support@mugen.ae</Link>
        </div>
        <div>
          <h2 className="text-white text-xl font-medium">Call Us</h2>
          <p>Mon-Fri from 8am to 5pm.</p>
          <Link href="tel:+971588352107">+971 58 835 2107</Link>
        </div>
        <div>
          <h2 className="text-white text-xl font-medium">Social Media</h2>
          <div className="flex items-center justify-start space-x-5 mt-2">
            <Link href={"https://www.linkedin.com/in/krutik-maru/"}>
              <Linkedin />
            </Link>
            <Link href={"https://www.x.com"}>
              <Twitter />
            </Link>
            <Link href={"https://www.instagram.com"}>
              <Instagram />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full p-10 flex flex-col space-y-4 bg-white/20 dark:bg-black/20 backdrop-blur-md border-2 border-neutral-200 dark:border-neutral-900 rounded-lg ">
        {/* First & Last Name */}
        <div className="flex flex-col space-x-0 space-y-4 justify-between items-center sm:flex-row sm:space-x-2 sm:space-y-0">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="name" className="text-neutral-600">
              Name
            </Label>
            <Input
              type="text"
              id="name"
              placeholder="Name"
              className="border-neutral-400 text-black dark:text-white"
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex justify-between w-full items-center space-x-2">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email" className="text-neutral-600">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              className="border-neutral-400 text-black dark:text-white"
            />
          </div>
        </div>
        {/* Phone */}
        <div className="flex justify-between w-full items-center space-x-2">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="phone" className="text-neutral-600">
              Phone
            </Label>
            <Input
              type="number"
              id="phone"
              placeholder="Phone"
              className="border-neutral-400 text-black dark:text-white"
            />
          </div>
        </div>
        {/* Message */}
        <div className="flex justify-between w-full items-center space-x-2">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="message" className="text-neutral-600">
              Message
            </Label>
            <Textarea placeholder="Type your message here." />
          </div>
        </div>
        <Button>Get in touch</Button>
      </div>
    </div>
  );
}

export default Page;
