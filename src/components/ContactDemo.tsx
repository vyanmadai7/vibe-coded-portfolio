import { Contact2 } from "@/src/components/ui/contact-2";

export function ContactDemo() {
  return (
    <Contact2 
      title="Get in Touch"
      description="I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions."
      phone="+1 (555) 000-0000"
      email="hello@example.com"
      web={{ label: "github.com/yourprofile", url: "https://github." }}
    />
  );
}
