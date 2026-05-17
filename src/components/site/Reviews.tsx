import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Star } from "lucide-react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(mv, to, { duration: 2, ease: "easeOut" });
    const unsub = mv.on("change", (v) => { if (ref.current) ref.current.textContent = Math.floor(v).toLocaleString() + suffix; });
    return () => { ctrl.stop(); unsub(); };
  }, [inView, to, suffix, mv]);
  return <span ref={ref}>0{suffix}</span>;
}

const reviews = [
  { name: "Aman S.", text: "Got a genuine iPhone 15 at the best price. Owner is super honest — no fluff, no upsell." },
  { name: "Harleen K.", text: "Sold my old phone here, great trade-in value. The staff feels like family." },
  { name: "Rohit M.", text: "Open box deal saved me a lot. Sealed, untouched, looked brand new." },
  { name: "Priya G.", text: "Walked in for accessories, left with confidence. Premium showroom vibe." },
  { name: "Karan D.", text: "Best iPhone destination in Chandigarh, hands down." },
  { name: "Simran J.", text: "Smooth experience, transparent pricing, and proper warranty info." },
];

export default function Reviews() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Google Verified
          </div>
          <h2 className="mt-6 text-4xl font-bold md:text-6xl">
            Trusted by <span className="text-gradient">hundreds</span> of customers
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { label: "Average Rating", value: 4.9, suffix: "", icon: "★" },
            { label: "Verified Reviews", value: 311, suffix: "+" },
            { label: "Happy Customers", value: 2500, suffix: "+" },
          ].map((stat, i) => (
            <motion.div key={stat.label}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl glass-strong p-8 transition hover:glow-ring">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-glow/20 blur-3xl opacity-0 transition group-hover:opacity-100" />
              <div className="relative">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</div>
                <div className="mt-3 text-5xl font-bold text-gradient">
                  {stat.icon && <span className="mr-1 text-yellow-400">{stat.icon}</span>}
                  <Counter to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-3 flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee reviews */}
        <div className="mt-20 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
          <motion.div className="flex gap-6 will-change-transform"
            animate={{ x: ["0%", "-50%"] }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}>
            {[...reviews, ...reviews].map((r, i) => (
              <div key={i} className="w-[340px] shrink-0 rounded-2xl glass p-6">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/90">"{r.text}"</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-glow to-glow-2" />
                  <div className="text-xs text-muted-foreground">{r.name}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
