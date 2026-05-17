import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ExperienceBanner() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] glass-strong p-12 md:p-20">
          {/* moving lights */}
          <motion.div
            animate={{ x: [0, 200, 0], y: [0, -100, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-glow/40 blur-[120px]" />
          <motion.div
            animate={{ x: [0, -200, 0], y: [0, 80, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-glow-2/40 blur-[140px]" />

          <div className="relative text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-4xl font-bold leading-[1.05] md:text-7xl">
              More than a store — <br />
              it's an <span className="text-gradient">Apple experience.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground">
              Walk in for an iPhone. Walk out with a relationship. Built on honesty, run with passion.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
              className="mt-10">
              <a href="#locations"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition hover:scale-[1.03]">
                Plan Your Visit
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
