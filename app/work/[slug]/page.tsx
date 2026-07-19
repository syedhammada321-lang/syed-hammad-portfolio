import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { MagneticLink } from "@/components/magnetic-link";
import { Reveal } from "@/components/reveal";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.intro };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="case-study">
      <header className="case-header">
        <Link href="/" className="monogram">SHA</Link>
        <Link href="/#work" className="back-link"><ArrowLeft size={16} /> All work</Link>
        <span>{project.category}</span>
      </header>

      <section className="case-hero">
        <div className="case-number">{project.index}</div>
        <div>
          <p className="kicker">{project.category} · {project.year}</p>
          <h1>{project.title}</h1>
          <p className="case-intro">{project.intro}</p>
        </div>
      </section>

      <div className="case-image">
        <Image src={project.image} alt={project.alt} fill priority sizes="100vw" />
      </div>

      <section className="case-columns">
        <Reveal><article><p className="case-label">01 / Problem</p><h2>A reason to rethink the familiar.</h2><p>{project.problem}</p></article></Reveal>
        <Reveal delay={0.08}><article><p className="case-label">02 / Solution</p><h2>A system with a point of view.</h2><p>{project.solution}</p></article></Reveal>
      </section>

      <section className="case-process">
        <div className="case-section-head"><p className="case-label">03 / Process</p><h2>Built with intention,<br /><em>step by step.</em></h2></div>
        <div>{project.process.map((step) => <Reveal key={step.number}><article><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article></Reveal>)}</div>
      </section>

      <section className="case-result">
        <div><p className="case-label">04 / Final result</p><h2>{project.result}</h2></div>
        <aside><p className="case-label">Tools used</p>{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</aside>
      </section>

      <section className="next-project">
        <p>Next project / {nextProject.index}</p>
        <Link href={`/work/${nextProject.slug}`}><span>{nextProject.title}</span><ArrowUpRight /></Link>
      </section>

      <footer className="case-footer"><span>Concept study · Demo content</span><MagneticLink href="mailto:syedhammada321@gmail.com">Start a conversation</MagneticLink></footer>
    </main>
  );
}
