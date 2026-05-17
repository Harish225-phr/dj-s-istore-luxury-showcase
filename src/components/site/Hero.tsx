import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-iphone.jpg";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} id="top" className="relative min-h-screen overflow-hidden">
      {/* Animated background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -60, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-glow/30 blur-[120px]" />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 80, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-40 top-40 h-[600px] w-[600px] rounded-full bg-glow-2/30 blur-[140px]" />
        <div className="absolute inset-0 grid-bg" />
      </div>

      <motion.div style={{ y, opacity, scale }} className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground">
          <Sparkles size={12} className="text-glow" />
          <span>Authorised Apple Reseller Experience</span>
          <span className="ml-1 h-1.5 w-1.5 animate-pulse-glow rounded-full bg-glow" />
        </motion.div>

        <h1 className="max-w-5xl text-5xl font-bold leading-[1.05] md:text-7xl lg:text-[5.5rem]">
          {"Punjab's Most Trusted".split(" ").map((w, i) => (
            <motion.span key={i} className="mr-3 inline-block"
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}>
              {w}
            </motion.span>
          ))}
          <br />
          <motion.span className="inline-block text-gradient"
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.9 }}>
            iPhone Destination
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Buy Genuine iPhones, Open Box Devices & Premium Accessories with complete trust —
          a showroom built around craftsmanship, transparency, and the Apple experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#showcase"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition hover:scale-[1.03]">
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-glow to-glow-2 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
            <span className="relative">Explore Collection</span>
            <ArrowRight size={16} className="relative transition group-hover:translate-x-1" />
          </a>
          <a href="#locations"
            className="group inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-medium transition hover:glow-ring">
            <MapPin size={16} className="text-glow" />
            Visit Store
          </a>
        </motion.div>

        {/* Floating product card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 1 }}
          className="relative mt-16 w-full max-w-3xl">
          <motion.div animate={{ y: [0, -16, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative mx-auto aspect-[16/10] w-full overflow-hidden rounded-3xl glass-strong glow-ring">
            <img src={heroImg} alt="iPhone" className="h-full w-full object-cover" width={1536} height={1536} />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Featured</div>
                <div className="mt-1 text-2xl font-semibold">iPhone 15 Pro Max</div>
              </div>
              <div className="rounded-full glass px-4 py-2 text-xs">In Stock · Both Stores</div>
            </div>
          </motion.div>

          {/* Floating mini cards */}
          <motion.div animate={{ y: [0, 14, 0] }} transition={{ duration: 7, repeat: Infinity }}
            className="absolute -left-4 top-1/2 hidden -translate-y-1/2 rounded-2xl glass px-4 py-3 text-left md:block">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Rating</div>
            <div className="text-lg font-semibold">4.9 ★</div>
          </motion.div>
          <motion.div animate={{ y: [0, -14, 0] }} transition={{ duration: 8, repeat: Infinity }}
            className="absolute -right-4 top-1/3 hidden rounded-2xl glass px-4 py-3 text-left md:block">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Reviews</div>
            <div className="text-lg font-semibold">311+</div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
          className="mt-12 flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
          <span>Scroll</span>
          <div className="relative h-10 w-px overflow-hidden bg-border">
            <motion.div animate={{ y: ["-100%", "100%"] }} transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-x-0 h-1/2 bg-gradient-to-b from-glow to-transparent" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
