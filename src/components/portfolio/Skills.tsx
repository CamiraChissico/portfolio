import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { skills } from "@/data/site";
import { fadeUp, stagger } from "@/animations/variants";

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="absolute left-0 top-1/3 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Stack"
          title={<>Tools of <span className="text-gradient">the trade</span></>}
          description="Technologies I use daily to build modern, performant interfaces."
        />
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skills.map((s) => (
            <motion.div
              key={s.name}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl gradient-border p-5"
            >
              <div
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-30"
                style={{ background: s.color }}
              />
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-display text-lg font-semibold">{s.name}</div>
                  <div className="font-mono text-xs text-muted-foreground">{s.level}% proficiency</div>
                </div>
                <div
                  className="grid h-12 w-12 place-items-center rounded-xl bg-secondary/60 font-mono text-sm font-bold transition-transform group-hover:scale-110"
                  style={{ color: s.color, boxShadow: `0 0 24px ${s.color}33` }}
                >
                  {s.name.slice(0, 2).toUpperCase()}
                </div>
              </div>
              <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-secondary/60">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className="h-full bg-gradient-primary"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
