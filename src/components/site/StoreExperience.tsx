import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import showroom1 from "@/assets/showroom-1.jpg";
import showroom2 from "@/assets/showroom-2.jpg";
import showroom3 from "@/assets/showroom-3.jpg";

const imgs = [showroom1, showroom2, showroom3];

export default function StoreExperience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const y3 = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="experience" ref={ref} className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="text-xs uppercase tracking-[0.3em] text-glow">Showroom</div>
            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
              Step inside an <br /><span className="text-gradient">Apple experience.</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Polished glass surfaces. Ambient lighting. Devices waiting to be touched, felt, and explored.
              Both our Chandigarh and Patiala stores are designed to make every visit feel like an unveiling.
            </p>
            <p className="mt-6 text-xs italic text-muted-foreground">
              Use actual showroom images uploaded by client.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[{ k: "Stores", v: "2" }, { k: "Brands", v: "Apple" }, { k: "Since", v: "Years" }].map((s) => (
                <div key={s.k} className="rounded-2xl glass p-4">
                  <div className="text-2xl font-bold text-gradient">{s.v}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">{s.k}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative h-[600px]">
            <motion.div style={{ y: y1 }} className="absolute left-0 top-0 h-64 w-48 overflow-hidden rounded-3xl glass-strong glow-ring">
              <img src={imgs[0]} alt="showroom" className="h-full w-full object-cover" loading="lazy" width={1280} height={896} />
            </motion.div>
            <motion.div style={{ y: y2 }} className="absolute right-0 top-20 h-72 w-56 overflow-hidden rounded-3xl glass-strong glow-ring">
              <img src={imgs[1]} alt="showroom" className="h-full w-full object-cover" loading="lazy" width={1280} height={896} />
            </motion.div>
            <motion.div style={{ y: y3 }} className="absolute bottom-0 left-1/4 h-72 w-64 overflow-hidden rounded-3xl glass-strong glow-ring">
              <img src={imgs[2]} alt="showroom" className="h-full w-full object-cover" loading="lazy" width={1280} height={896} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
