"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { MouseEvent } from "react";

export function MagneticLink({ href, children, inverted = false }: { href: string; children: React.ReactNode; inverted?: boolean }) {
  const reduced = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });

  function move(event: MouseEvent<HTMLAnchorElement>) {
    if (reduced) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.035);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.16);
  }

  return (
    <motion.div style={{ x, y }} onMouseLeave={() => { x.set(0); y.set(0); }}>
      <Link
        href={href}
        onMouseMove={move}
        className={inverted ? "magnetic-link magnetic-link--light" : "magnetic-link"}
      >
        <span>{children}</span><ArrowUpRight aria-hidden="true" size={19} />
      </Link>
    </motion.div>
  );
}
