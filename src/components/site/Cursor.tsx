import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 300, damping: 30, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 300, damping: 30, mass: 0.5 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [data-cursor='hover']"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseover", over); };
  }, [x, y]);

  return (
    <>
      <motion.div
        style={{ translateX: sx, translateY: sy }}
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground mix-blend-difference md:block"
      />
      <motion.div
        style={{ translateX: sx, translateY: sy, scale: hover ? 2.2 : 1 }}
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-glow/60 mix-blend-difference transition-transform md:block"
      />
    </>
  );
}
