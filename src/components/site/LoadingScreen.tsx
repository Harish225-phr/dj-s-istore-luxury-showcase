import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [done, setDone] = useState(false);
  useEffect(() => { const t = setTimeout(() => setDone(true), 1400); return () => clearTimeout(t); }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background">
          <div className="absolute inset-0 grid-bg" />
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="h-16 w-16 rounded-full bg-gradient-to-r from-glow to-glow-2 p-px">
              <div className="grid h-full w-full place-items-center rounded-full bg-background">
                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}
                  className="h-3 w-3 rounded-full bg-gradient-to-br from-glow to-glow-2" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-sm uppercase tracking-[0.5em] text-shimmer">
              Dj's iStore
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
