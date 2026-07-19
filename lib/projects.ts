import { assetPath } from "@/lib/asset-path";

export type Project = {
  slug: string;
  index: string;
  title: string;
  category: string;
  year: string;
  image: string;
  alt: string;
  intro: string;
  problem: string;
  solution: string;
  tools: string[];
  process: { number: string; title: string; text: string }[];
  result: string;
};

export const projects: Project[] = [
  {
    slug: "forward-energy",
    index: "01",
    title: "Forward Energy",
    category: "Brand System · Concept Study",
    year: "2026",
    image: assetPath("/assets/project-brand-system.webp"),
    alt: "Editorial brand identity applications in navy, orange and warm white",
    intro: "A modular identity study for a new-generation mobility brand designed to move confidently across digital, print and physical touchpoints.",
    problem: "The category is visually crowded with predictable green gradients, technical clichés and fragmented product communication.",
    solution: "A direct editorial language pairs a disciplined grid with high-contrast typography, one decisive accent and flexible motion rules.",
    tools: ["Illustrator", "Photoshop", "After Effects", "InDesign"],
    process: [
      { number: "01", title: "Position", text: "Define a clear promise and strip the visual language back to its most ownable ingredients." },
      { number: "02", title: "System", text: "Build a modular type, color and composition system that can scale from icon to environment." },
      { number: "03", title: "Activate", text: "Stress-test the system across launch content, signage and motion-led campaign assets." },
    ],
    result: "A coherent concept system that feels progressive without relying on category conventions.",
  },
  {
    slug: "motion-language",
    index: "02",
    title: "Motion Language",
    category: "Motion Design · Concept Study",
    year: "2026",
    image: assetPath("/assets/project-motion-language.webp"),
    alt: "Abstract motion design frames with sculptural typography",
    intro: "A cinematic motion toolkit designed to make a brand recognizable before its logo appears.",
    problem: "Campaign films often look individually polished but lack a repeatable rhythm, transition logic and visual signature.",
    solution: "A reusable motion grammar built from masked typography, deliberate camera movement, elastic timing and authored sound cues.",
    tools: ["After Effects", "Premiere Pro", "Photoshop", "Cinema 4D"],
    process: [
      { number: "01", title: "Rhythm", text: "Translate brand personality into a set of pacing, easing and transition principles." },
      { number: "02", title: "Frames", text: "Design key visual moments as strong static compositions before animating them." },
      { number: "03", title: "Toolkit", text: "Package repeatable title, reveal and end-frame behaviors for campaign production." },
    ],
    result: "A motion concept that improves consistency while leaving room for creative variation across formats.",
  },
  {
    slug: "spatial-signals",
    index: "03",
    title: "Spatial Signals",
    category: "3D & Spatial · Concept Study",
    year: "2026",
    image: assetPath("/assets/project-spatial-experience.webp"),
    alt: "Premium exhibition pavilion with sculptural white architecture and orange wayfinding",
    intro: "A spatial brand experience where architecture, navigation and content operate as one visual system.",
    problem: "Exhibition spaces can become a collection of disconnected graphics, displays and sales messages competing for attention.",
    solution: "A single architectural gesture organizes the journey while bold information zones guide attention from discovery to conversation.",
    tools: ["3ds Max", "Corona Renderer", "Photoshop", "Illustrator"],
    process: [
      { number: "01", title: "Journey", text: "Map visitor sightlines, dwell points and the sequence of product discovery." },
      { number: "02", title: "Space", text: "Develop the architectural massing, lighting and material hierarchy in 3D." },
      { number: "03", title: "Detail", text: "Integrate graphics and wayfinding so every surface contributes to the same story." },
    ],
    result: "A confident concept environment that is easy to navigate, photograph and translate into production drawings.",
  },
  {
    slug: "social-first",
    index: "04",
    title: "Social, First",
    category: "Campaign Design · Concept Study",
    year: "2026",
    image: assetPath("/assets/project-social-campaign.webp"),
    alt: "Art-directed social campaign grid with bold typography and product imagery",
    intro: "A content system designed for speed without sacrificing art direction or brand consistency.",
    problem: "High-volume social calendars often dilute creative quality and make every campaign feel visually interchangeable.",
    solution: "A small set of strong composition rules creates recognizable variety across launch, educational and lifestyle content.",
    tools: ["Photoshop", "Illustrator", "After Effects", "Premiere Pro"],
    process: [
      { number: "01", title: "Plan", text: "Group communication into clear content jobs and assign a distinct visual behavior to each." },
      { number: "02", title: "Create", text: "Build art-directed key visuals with flexible crops and motion-ready layers." },
      { number: "03", title: "Scale", text: "Adapt the system across posts, stories, reels and paid placements without losing hierarchy." },
    ],
    result: "A scalable concept toolkit that keeps everyday production fast, consistent and recognizably premium.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
