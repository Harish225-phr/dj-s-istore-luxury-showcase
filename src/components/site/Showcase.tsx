import { motion } from "framer-motion";
import iphoneNew from "@/assets/iphone-new.jpg";
import openbox from "@/assets/openbox.jpg";
import accessories from "@/assets/accessories.jpg";
import showroom2 from "@/assets/showroom-2.jpg";
import { ArrowUpRight } from "lucide-react";

const items = [
  { tag: "01 / New", title: "Latest iPhones", desc: "Genuine, sealed and brand-new iPhones across every series — straight from Apple's lineup.", img: iphoneNew, accent: "from-blue-500/30 to-purple-500/30" },
  { tag: "02 / Open Box", title: "Open Box Devices", desc: "Untouched and inspected — premium devices at smarter prices, with complete transparency.", img: openbox, accent: "from-emerald-500/30 to-cyan-500/30" },
  { tag: "03 / Accessories", title: "Premium Accessories", desc: "AirPods, MagSafe, cases, chargers and more — only authentic products on our shelves.", img: accessories, accent: "from-fuchsia-500/30 to-rose-500/30" },
  { tag: "04 / Trade In", title: "Buy · Sell · Exchange", desc: "Best trade-in values in Punjab. Bring your old phone, walk out with a new experience.", img: showroom2, accent: "from-amber-500/30 to-orange-500/30" },
];

export default function Showcase() {
  return (
    <section id="showcase" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mb-20 flex flex-col items-end justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.3em] text-glow">The Collection</div>
            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
              Every Apple device, <br /><span className="text-gradient">curated for you.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            From the newest iPhones to certified open-box devices and premium accessories —
            <span className="text-foreground/80"> Replace these images with uploaded store images provided by client.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((item, i) => (
            <motion.article key={item.title}
              initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1 }}
              className="group relative overflow-hidden rounded-[2rem] glass-strong p-8 transition-all duration-500 hover:-translate-y-2 hover:glow-ring">
              <div className={`absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gradient-to-br ${item.accent} blur-3xl opacity-50 transition-opacity duration-500 group-hover:opacity-100`} />
              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{item.tag}</div>
                    <h3 className="mt-3 text-3xl font-semibold">{item.title}</h3>
                  </div>
                  <div className="rounded-full glass p-3 transition group-hover:rotate-45">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                <div className="mt-8 overflow-hidden rounded-2xl">
                  <motion.img src={item.img} alt={item.title}
                    width={1024} height={1024} loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Marquee of categories */}
        <div className="mt-24 overflow-hidden border-y border-border py-8 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
          <motion.div className="flex shrink-0 gap-12 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }}>
            {[...Array(2)].flatMap((_, k) =>
              ["iPhone 15 Pro Max", "Open Box Deals", "AirPods Pro", "Apple Watch", "MagSafe", "iPad Air", "Trade-In", "Genuine Apple"].map((t, i) => (
                <div key={`${k}-${i}`} className="flex items-center gap-12 text-3xl font-bold md:text-5xl">
                  <span className="text-foreground/30 hover:text-foreground transition">{t}</span>
                  <span className="text-glow">✦</span>
                </div>
              ))
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
