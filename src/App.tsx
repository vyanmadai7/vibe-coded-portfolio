/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SplineSceneBasic } from "./components/SplineSceneBasic";
import { NavBarDemo } from "./components/NavBarDemo";
import { AboutSectionDemo } from "./components/AboutSectionDemo";
import { ProjectCardDemo } from "./components/ProjectCardDemo";
import { TestimonialsSectionDemo } from "./components/TestimonialsMarqueeDemo";
import { OrbitingSkillsDemo } from "./components/OrbitingSkillsDemo";
import { ContactDemo } from "./components/ContactDemo";

export default function App() {
  return (
    <main className="min-h-screen w-screen bg-neutral-950 relative overflow-x-hidden">
      <NavBarDemo />
      <section className="h-[100dvh] w-full">
        <SplineSceneBasic />
      </section>
      <OrbitingSkillsDemo />
      <AboutSectionDemo />
      <ProjectCardDemo />
      <TestimonialsSectionDemo />
      <ContactDemo />
    </main>
  );
}
