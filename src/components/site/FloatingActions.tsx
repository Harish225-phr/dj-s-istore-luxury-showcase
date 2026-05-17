import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <motion.a
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }}
        href="https://wa.me/917888634080"
        target="_blank" rel="noreferrer"
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white shadow-[0_10px_40px_-10px_oklch(0.7_0.2_150/0.8)] transition hover:scale-110"
        aria-label="WhatsApp">
        <motion.span animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-emerald-500" />
        <MessageCircle size={22} className="relative" />
      </motion.a>
      <motion.a
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.7 }}
        href="tel:07888634080"
        className="grid h-12 w-12 place-items-center rounded-full glass-strong glow-ring transition hover:scale-110"
        aria-label="Call">
        <Phone size={18} />
      </motion.a>
    </div>
  );
}
