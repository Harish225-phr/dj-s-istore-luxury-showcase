import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  { q: "Are all iPhones genuine?", a: "Yes. Every iPhone we sell is 100% authentic, sourced through trusted channels, with original IMEI and Apple verification." },
  { q: "Do you sell open-box devices?", a: "Absolutely. Our open-box iPhones are fully sealed, untouched and inspected — offered at a more accessible price point." },
  { q: "Can I exchange my old phone?", a: "Yes. We accept trade-ins for almost every iPhone model. Bring your device in for a quick, fair valuation." },
  { q: "Do you offer accessories?", a: "AirPods, MagSafe accessories, cases, chargers, cables — all genuine, all curated, available across both stores." },
  { q: "Is warranty available?", a: "Yes. New iPhones carry the standard Apple warranty. Open box and pre-owned devices come with our own service assurance." },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-32">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-glow">Questions</div>
          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            Everything <span className="text-gradient">answered.</span>
          </h2>
        </motion.div>

        <div className="mt-16 space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="overflow-hidden rounded-2xl glass">
                <button onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-white/[0.03]">
                  <span className="text-base font-medium md:text-lg">{f.q}</span>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="shrink-0 rounded-full glass p-2">
                    <Plus size={16} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                      <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
