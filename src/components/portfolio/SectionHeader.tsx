import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/animations/variants";

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="mx-auto mb-16 max-w-2xl text-center"
    >
      <motion.div variants={fadeUp} className="mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-primary">
        <span className="h-1 w-1 rounded-full bg-primary" /> {eyebrow}
      </motion.div>
      <motion.h2 variants={fadeUp} className="font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
        {title}
      </motion.h2>
      {description && (
        <motion.p variants={fadeUp} className="mt-4 text-muted-foreground">
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
