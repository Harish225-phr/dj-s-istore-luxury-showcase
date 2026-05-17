import { Instagram, Facebook, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-border/60 pt-20">
      <div className="mx-auto max-w-7xl px-6 pb-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="relative h-9 w-9 rounded-full bg-gradient-to-br from-glow to-glow-2 shadow-[0_0_30px_oklch(0.7_0.25_285/0.6)]">
                <div className="absolute inset-[3px] rounded-full bg-background grid place-items-center text-[10px] font-bold text-gradient">DJ</div>
              </div>
              <span className="text-base font-semibold tracking-wider">
                DJ'S <span className="text-gradient">iSTORE</span>
              </span>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Punjab's most trusted iPhone destination. Genuine devices, premium accessories,
              and an experience built around you.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Phone, Mail].map((Icon, i) => (
                <a key={i} href="#"
                  className="group rounded-full p-px bg-gradient-to-br from-glow to-glow-2 transition hover:scale-110">
                  <div className="rounded-full bg-background p-2.5">
                    <Icon size={16} />
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Explore</div>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { l: "Collection", h: "#showcase" },
                { l: "Experience", h: "#experience" },
                { l: "FAQ", h: "#faq" },
              ].map((x) => (
                <li key={x.l}><a href={x.h} className="text-muted-foreground transition hover:text-foreground">{x.l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Locations</div>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li><span className="text-foreground/80">Chandigarh</span> — Sector 22B</li>
              <li><span className="text-foreground/80">Patiala</span> — Leela Bhawan</li>
              <li><a href="tel:07888634080" className="text-foreground/80 hover:text-foreground">078886 34080</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 text-xs text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} Dj's iStore. All rights reserved.</div>
          <div>Designed with obsessive care for the Apple experience.</div>
        </div>
      </div>

      {/* Big brand wordmark */}
      <div aria-hidden className="overflow-hidden">
        <div className="bg-gradient-to-b from-transparent to-glow/10 bg-clip-text text-center text-[24vw] font-bold leading-none text-transparent">
          iSTORE
        </div>
      </div>
    </footer>
  );
}
