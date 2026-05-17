import { motion } from "framer-motion";
import { ShieldCheck, Heart, Tag, Headphones, Repeat, Sparkles } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Genuine Apple Devices", desc: "Every iPhone is 100% authentic, verified, and originally sourced." },
  { icon: Heart, title: "Trusted by Hundreds", desc: "311+ five-star reviews and a community that keeps coming back." },
  { icon: Tag, title: "Competitive Pricing", desc: "Best-in-class pricing on new, open box, and accessory ranges." },
  { icon: Headphones, title: "Premium Support", desc: "Friendly experts who guide, never push. Real human help, always." },
  { icon: Repeat, title: "Buy / Sell / Exchange", desc: "Highest trade-in value in Punjab — swap, sell, or upgrade with ease." },
  { icon: Sparkles, title: "Smooth Experience", desc: "From walk-in to walk-out, a calm, premium and unhurried experience." },
];

export default function Features() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-glow">Why Dj's iStore</div>
          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            Built on <span className="text-gradient">trust</span>, <br />delivered with <span className="text-gradient">precision</span>.
          </h2>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div key={f.title}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6, rotateX: 4, rotateY: -4 }}
                style={{ transformStyle: "preserve-3d" }}
                className="group relative overflow-hidden rounded-3xl glass p-8 transition hover:glow-ring">
                <div className="absolute inset-0 bg-gradient-to-br from-glow/0 to-glow-2/0 opacity-0 transition group-hover:from-glow/10 group-hover:to-glow-2/10 group-hover:opacity-100" />
                <div className="relative">
                  <div className="inline-flex rounded-2xl bg-gradient-to-br from-glow to-glow-2 p-px">
                    <div className="rounded-2xl bg-background p-4">
                      <Icon className="text-foreground" size={22} />
                    </div>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
