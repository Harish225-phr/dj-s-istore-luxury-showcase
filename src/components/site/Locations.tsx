import { motion } from "framer-motion";
import { MapPin, Phone, Navigation } from "lucide-react";

const locations = [
  {
    city: "Chandigarh",
    name: "Dj's iStore Chandigarh",
    address: "43, First Floor, SCO 1042, Above Anmol Samsung, Sector 22B, Chandigarh, 160022",
    phone: "078886 34080",
    map: "https://www.google.com/maps?q=SCO+1042+Sector+22B+Chandigarh&output=embed",
  },
  {
    city: "Patiala",
    name: "Dj's iStore Patiala",
    address: "SCO 43, Opposite Food Factory, Leela Bhawan, Ajit Nagar, Patiala, Punjab 147001",
    phone: "078886 34080",
    map: "https://www.google.com/maps?q=Leela+Bhawan+Ajit+Nagar+Patiala&output=embed",
  },
];

export default function Locations() {
  return (
    <section id="locations" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-glow">Find Us</div>
          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            Two stores. <span className="text-gradient">One promise.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {locations.map((loc, i) => (
            <motion.div key={loc.city}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative overflow-hidden rounded-[2rem] p-px transition hover:glow-ring">
              <div className="absolute inset-0 bg-gradient-to-br from-glow via-transparent to-glow-2 opacity-50 transition group-hover:opacity-100" />
              <div className="relative h-full rounded-[2rem] bg-background p-8">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.3em] text-glow">{loc.city}</div>
                    <h3 className="mt-3 text-2xl font-semibold">{loc.name}</h3>
                  </div>
                  <div className="rounded-full glass p-3">
                    <MapPin size={18} className="text-glow" />
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-2xl border border-border">
                  <iframe
                    src={loc.map}
                    title={loc.city}
                    className="h-56 w-full grayscale invert-[0.92] hue-rotate-180 contrast-[0.85]"
                    loading="lazy"
                  />
                </div>

                <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <MapPin size={14} className="mt-1 shrink-0 text-glow" />
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={14} className="text-glow" />
                    <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="hover:text-foreground">{loc.phone}</a>
                  </div>
                </div>

                <a href={`https://www.google.com/maps/search/${encodeURIComponent(loc.address)}`}
                  target="_blank" rel="noreferrer"
                  className="group/btn mt-6 inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm transition hover:glow-ring">
                  Get Directions
                  <Navigation size={14} className="text-glow transition group-hover/btn:translate-x-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
