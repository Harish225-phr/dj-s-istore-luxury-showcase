import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Collection", href: "#showcase" },
  { label: "Experience", href: "#experience" },
  { label: "Locations", href: "#locations" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 200], [8, 22]);
  const bg = useTransform(scrollY, [0, 200], ["oklch(1 0 0 / 0)", "oklch(0.08 0.02 270 / 0.6)"]);
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      style={{ backdropFilter: blur.get() ? `blur(${blur.get()}px)` : undefined, backgroundColor: bg }}
      className="fixed inset-x-0 top-0 z-50 border-b border-border/40"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="group flex items-center gap-2">
          <div className="relative h-8 w-8 rounded-full bg-gradient-to-br from-glow to-glow-2 shadow-[0_0_30px_oklch(0.7_0.25_285/0.6)]">
            <div className="absolute inset-[3px] rounded-full bg-background" />
            <div className="absolute inset-0 grid place-items-center text-xs font-bold text-gradient">DJ</div>
          </div>
          <span className="text-sm font-semibold tracking-wider">
            DJ'S <span className="text-gradient">iSTORE</span>
          </span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="relative rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:text-foreground">
              {l.label}
              <span className="absolute inset-x-4 -bottom-0.5 h-px scale-x-0 bg-gradient-to-r from-transparent via-glow to-transparent transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
        <a href="#locations"
          className="hidden rounded-full glass px-5 py-2 text-sm font-medium transition hover:glow-ring md:inline-block">
          Visit Store
        </a>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <motion.div initial={{ height: 0 }} animate={{ height: "auto" }}
          className="overflow-hidden border-t border-border/40 bg-background/80 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-2 px-6 py-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground">
                {l.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
