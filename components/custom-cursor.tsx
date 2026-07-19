"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const mx = useMotionValue(-20);
  const my = useMotionValue(-20);
  const x = useSpring(mx, { stiffness: 420, damping: 32 });
  const y = useSpring(my, { stiffness: 420, damping: 32 });

  useEffect(() => {
    if (!window.matchMedia("(pointer:fine)").matches) return;
    const onMove = (event: PointerEvent) => { mx.set(event.clientX - 5); my.set(event.clientY - 5); setVisible(true); };
    const onLeave = () => setVisible(false);
    window.addEventListener("pointermove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => { window.removeEventListener("pointermove", onMove); document.documentElement.removeEventListener("mouseleave", onLeave); };
  }, [mx, my]);

  return <motion.div aria-hidden="true" className="cursor-dot" style={{ x, y, opacity: visible ? 1 : 0 }} />;
}
