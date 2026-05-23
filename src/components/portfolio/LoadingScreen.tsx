import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1200);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[200] grid place-items-center bg-background"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              className="mx-auto grid h-20 w-20 place-items-center rounded-2xl bg-gradient-primary font-display text-3xl font-bold text-primary-foreground shadow-neon"
            >
              CC
            </motion.div>
            <motion.div
              initial={{ width: 0 }} animate={{ width: 120 }} transition={{ duration: 1 }}
              className="mx-auto mt-6 h-px bg-gradient-primary"
            />
            <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Initializing</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
