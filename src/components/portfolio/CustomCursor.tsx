import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [data-cursor]"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-3 w-3 rounded-full bg-primary mix-blend-difference md:block"
        animate={{ x: pos.x - 6, y: pos.y - 6, scale: hover ? 1.8 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.3 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[99] hidden h-10 w-10 rounded-full border border-primary/50 md:block"
        animate={{ x: pos.x - 20, y: pos.y - 20, scale: hover ? 1.5 : 1, opacity: hover ? 0.8 : 0.4 }}
        transition={{ type: "spring", stiffness: 200, damping: 22 }}
      />
    </>
  );
}
