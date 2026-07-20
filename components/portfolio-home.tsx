"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, MapPin, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { CustomCursor } from "@/components/custom-cursor";
import { MagneticLink } from "@/components/magnetic-link";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/projects";
import { assetPath } from "@/lib/asset-path";

const experience = [
  { years: "2024 — Present", role: "Assistant Creative Manager", company: "Global Office World", detail: "Leading brand strategy, integrated campaigns, creative production and cross-functional delivery across digital and print." },
  { years: "2023 — 2024", role: "Creative Designer & Animator", company: "Global Office World", detail: "Created motion-led campaigns, social content, photography and video while maintaining a coherent brand language." },
  { years: "2013 — 2023", role: "Creative Designer & 3D Visualizer", company: "Molecule Pakistan", detail: "Specialized in 3D visualization, graphic design, animation and spatial storytelling for architecture, interiors and furniture." },
];

const services = [
  { index: "01", name: "Brand & Campaign Direction", text: "From an initial thought to a complete visual system that works across every touchpoint." },
  { index: "02", name: "Motion & Video", text: "Concept, storyboards, animation, editing and delivery shaped around one clear communication idea." },
  { index: "03", name: "3D & Spatial Design", text: "Photoreal visualization and branded environments that make ideas tangible before production." },
  { index: "04", name: "Digital & Social Systems", text: "Scalable content languages that balance speed, consistency and everyday creative quality." },
];

const tools = ["Photoshop", "Illustrator", "InDesign", "After Effects", "Premiere Pro", "3ds Max", "Corona / V-Ray", "Photography"];

export function PortfolioHome() {
  const hero = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const artY = useTransform(scrollYProgress, [0, 0.22], [0, reduced ? 0 : 70]);

  useEffect(() => {
    if (!hero.current || reduced) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-hero-line]", { yPercent: 110, duration: 1.05, stagger: 0.08, ease: "power4.out", delay: 0.22 });
      gsap.from("[data-hero-meta]", { opacity: 0, y: 24, duration: 0.8, stagger: 0.08, ease: "power3.out", delay: 0.65 });
    }, hero);
    return () => ctx.revert();
  }, [reduced]);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), reduced ? 100 : 1150);
    return () => window.clearTimeout(timer);
  }, [reduced]);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div className="intro-loader" exit={{ y: "-100%" }} transition={{ duration: .75, ease: [0.76, 0, 0.24, 1] }}>
            <div><span>SHA</span><p>Creative portfolio</p></div>
            <motion.i initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: .95, ease: [0.65, 0, 0.35, 1] }} />
            <small>Karachi · 2026</small>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <CustomCursor />
      <header className="site-header">
        <Link className="monogram" href="#top" aria-label="Back to top">SHA</Link>
        <span className="header-rule" aria-hidden="true" />
        <span className="header-name">Syed Hammad Ali</span>
        <nav aria-label="Primary navigation">
          <Link href="#work">Work</Link><Link href="#about">About</Link><Link href="#experience">Experience</Link><Link href="#contact">Contact</Link>
        </nav>
        <span className="availability" title="Available for selected collaborations"><span /> Available</span>
        <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? "Close navigation" : "Open navigation"}>{menuOpen ? <X /> : <Menu />}</button>
      </header>
      <AnimatePresence>{menuOpen && <motion.nav id="mobile-menu" className="mobile-menu" aria-label="Mobile navigation" initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }}><Link href="#work" onClick={() => setMenuOpen(false)}>Work <span>01</span></Link><Link href="#about" onClick={() => setMenuOpen(false)}>About <span>02</span></Link><Link href="#experience" onClick={() => setMenuOpen(false)}>Experience <span>03</span></Link><Link href="#contact" onClick={() => setMenuOpen(false)}>Contact <span>04</span></Link></motion.nav>}</AnimatePresence>

      <main id="top">
        <section className="hero" ref={hero} aria-labelledby="hero-title">
          <div className="hero-rail"><span>01</span><p>Creative · Strategy · Design</p></div>
          <div className="hero-copy">
            <h1 id="hero-title">
              <span className="hero-mask"><span data-hero-line>Syed</span></span>
              <span className="hero-mask"><span data-hero-line>Hammad</span></span>
              <span className="hero-mask"><span data-hero-line>Ali</span></span>
            </h1>
            <div className="hero-intro" data-hero-meta>
              <p className="eyebrow orange">Creative Manager & Multidisciplinary Designer</p>
              <p>13 years shaping brands through<br />design, motion and spatial experiences.</p>
              <MagneticLink href="#work">View selected work</MagneticLink>
            </div>
            <a href="#work" className="scroll-cue" aria-label="Scroll to selected work">Scroll <ArrowDown size={15} /></a>
          </div>
          <motion.div className="hero-art" style={{ y: artY }} data-hero-meta>
            <span className="art-index">20<br />26</span>
            <div className="art-orbit" aria-hidden="true" />
            <Image className="hero-portrait" src={assetPath("/assets/portrait-syed-hammad.webp")} alt="Portrait of Syed Hammad Ali, Creative Manager" fill priority sizes="(max-width: 800px) 100vw, 48vw" />
            <span className="portrait-mark" aria-hidden="true">SHA</span>
            <div className="hero-location"><MapPin size={19} aria-hidden="true" /> Karachi, Pakistan</div>
          </motion.div>
        </section>

        <section id="work" className="section work-section" aria-labelledby="work-title">
          <div className="section-index"><span>02</span><p>Selected work</p></div>
          <div className="section-main">
            <Reveal><div className="section-heading"><p className="kicker">A selective mix of disciplines</p><h2 id="work-title">Ideas made<br /><em>visible.</em></h2></div></Reveal>
            <div className="project-list">
              {projects.map((project, i) => (
                <Reveal key={project.slug} delay={i % 2 ? 0.08 : 0}>
                  <Link className="project" href={`/work/${project.slug}`}>
                    <div className="project-image"><Image src={project.image} alt={project.alt} fill sizes="(max-width: 800px) 100vw, 58vw" /></div>
                    <div className="project-meta"><span>{project.index}</span><div><h3>{project.title}</h3><p>{project.category}</p></div><span>{project.year}</span><ArrowUpRight aria-hidden="true" /></div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section about-section" aria-labelledby="about-title">
          <div className="section-index"><span>03</span><p>About</p></div>
          <div className="section-main">
            <Reveal><p className="kicker">Designing across dimensions</p><h2 id="about-title" className="statement">I turn business needs into <em>clear, memorable</em> visual experiences—then guide them all the way to delivery.</h2></Reveal>
            <div className="about-grid">
              <Reveal><div className="about-portrait-wrap"><Image src={assetPath("/assets/portrait-syed-hammad.webp")} alt="Syed Hammad Ali, Creative Manager and multidisciplinary designer" fill sizes="(max-width: 800px) 88vw, 25vw" /></div></Reveal>
              <Reveal><p className="body-large">My practice sits between brand thinking and hands-on craft. That means I can lead the direction, build the system and stay close to the details across graphic design, motion, video and 3D visualization.</p></Reveal>
              <div className="stat-grid"><Reveal><div><strong>13+</strong><span>Years of creative experience</span></div></Reveal><Reveal delay={0.08}><div><strong>04</strong><span>Core creative disciplines</span></div></Reveal></div>
            </div>
          </div>
        </section>

        <section id="experience" className="section experience-section" aria-labelledby="experience-title">
          <div className="section-index"><span>04</span><p>Experience</p></div>
          <div className="section-main">
            <Reveal><div className="section-heading compact"><p className="kicker">The path so far</p><h2 id="experience-title">Experience<br /><em>with depth.</em></h2></div></Reveal>
            <div className="experience-list">{experience.map((item, i) => <Reveal key={item.role} delay={i * 0.05}><article><span>{item.years}</span><div><h3>{item.role}</h3><p className="company">{item.company}</p><p>{item.detail}</p></div></article></Reveal>)}</div>
          </div>
        </section>

        <section className="section services-section" aria-labelledby="services-title">
          <div className="section-index"><span>05</span><p>Services</p></div>
          <div className="section-main">
            <Reveal><div className="section-heading compact"><p className="kicker">How I can help</p><h2 id="services-title">From direction<br />to <em>delivery.</em></h2></div></Reveal>
            <div className="service-list">{services.map((service) => <Reveal key={service.name}><article><span>{service.index}</span><h3>{service.name}</h3><p>{service.text}</p><ArrowUpRight aria-hidden="true" /></article></Reveal>)}</div>
          </div>
        </section>

        <section className="section skills-section" aria-labelledby="skills-title">
          <div className="section-index"><span>06</span><p>Capabilities</p></div>
          <div className="section-main">
            <Reveal><h2 id="skills-title" className="statement small">A broad toolkit, connected by <em>one standard:</em> thoughtful execution.</h2></Reveal>
            <div className="capability-grid">
              <Reveal><div><p className="kicker">Skills</p><ul><li>Creative direction</li><li>Brand strategy & campaigns</li><li>3D modeling & rendering</li><li>2D animation & video editing</li><li>Social media design</li><li>Project management</li></ul></div></Reveal>
              <Reveal delay={0.08}><div><p className="kicker">Software</p><div className="tool-cloud">{tools.map((tool) => <span key={tool}>{tool}</span>)}</div></div></Reveal>
              <Reveal delay={0.14}><div><p className="kicker">Education</p><div className="education"><p><span>2012—2015</span><strong>Bachelor of Commerce</strong>University of Karachi</p><p><span>2010—2013</span><strong>AMSP Diploma</strong>Arena Multimedia</p></div></div></Reveal>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="contact-top"><span>07 / Contact</span><span>Karachi · Pakistan</span></div>
          <Reveal><p className="kicker light">Have a project or opportunity?</p><h2 id="contact-title">Let’s make<br />something <em>matter.</em></h2></Reveal>
          <div className="contact-bottom"><MagneticLink href="mailto:syedhammada321@gmail.com" inverted>Start a conversation</MagneticLink><div><a href="mailto:syedhammada321@gmail.com">syedhammada321@gmail.com</a><a href="tel:+923362544216">+92 336 2544216</a></div></div>
        </section>
      </main>

      <footer><div><span>SHA</span><p>Creative Manager & Multidisciplinary Designer</p></div><div><a href="https://www.linkedin.com/in/syed-hammad-creative" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="#top">Back to top ↑</a></div><p>© 2026 Syed Hammad Ali</p></footer>
    </>
  );
}
