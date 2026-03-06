import React from "react";

import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Textarea } from "@/src/components/ui/textarea";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

export const Contact2 = ({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  phone = "(123) 34567890",
  email = "email@example.com",
  web = { label: "shadcnblocks.com", url: "https://shadcnblocks.com" },
}: Contact2Props) => {
  return (
    <section id="contact" className="py-32 bg-neutral-950 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                {title}
              </h1>
              <p className="text-neutral-500">{description}</p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left text-neutral-200">
                Contact Details
              </h3>
              <ul className="ml-4 list-disc text-neutral-400 space-y-2">
                <li>
                  <span className="font-bold text-neutral-200">Phone: </span>
                  {phone}
                </li>
                <li>
                  <span className="font-bold text-neutral-200">Email: </span>
                  <a href={`mailto:${email}`} className="underline hover:text-white transition-colors">
                    {email}
                  </a>
                </li>
                <li>
                  <span className="font-bold text-neutral-200">Web: </span>
                  <a href={web.url} target="_blank" className="underline hover:text-white transition-colors">
                    {web.label}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto flex w-full max-w-screen-md flex-col gap-6 rounded-lg border border-neutral-800 bg-neutral-900/50 p-10 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname">First Name</Label>
                <Input type="text" id="firstname" placeholder="First Name" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastname">Last Name</Label>
                <Input type="text" id="lastname" placeholder="Last Name" />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject">Subject</Label>
              <Input type="text" id="subject" placeholder="Subject" />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea placeholder="Type your message here." id="message" />
            </div>
            <Button className="w-full font-bold">Send Message</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
