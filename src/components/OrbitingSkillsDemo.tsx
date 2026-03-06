import OrbitingSkills from "@/src/components/ui/orbiting-skills";

export function OrbitingSkillsDemo() {
  return (
    <section id="skills" className="bg-neutral-950 py-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-8 mb-12 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Skills</h2>
        <p className="text-neutral-500">Technologies I use to bring ideas to life.</p>
      </div>
      <div className="flex justify-center">
        <OrbitingSkills />
      </div>
    </section>
  );
}
