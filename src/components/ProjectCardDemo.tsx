import { ProjectCard } from "@/src/components/ui/project-card";

export function ProjectCardDemo() {
  return (
    <section id="projects" className="py-24 px-6 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-16">
          <span className="text-cyan-500 font-bold tracking-[0.3em] uppercase text-sm mb-4">Portfolio</span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            Featured <span className="text-neutral-500">Projects</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="Aero Landing Page"
            description="A comprehensive AI chatbot platform. This project focuses on the design and development of a user-friendly and visually appealing landing page."
            imgSrc="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1364&auto=format&fit=crop"
            link="#"
          />
          <ProjectCard
            title="Dreamland App Concept"
            description="A dreamy mobile app prototype designed for mindfulness and relaxation, featuring calming animations and a serene user interface."
            imgSrc="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1470&auto=format&fit=crop"
            link="#"
            linkText="Explore Concept"
          />
          <ProjectCard
            title="Quantum Analytics Dashboard"
            description="A data visualization tool for quantum computing experiments, providing real-time insights and complex data analysis."
            imgSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
            link="#"
          />
        </div>
      </div>
    </section>
  );
}
