import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { experience } from "@/data/site";
import { fadeUp, stagger } from "@/animations/variants";

// Update the existing experience to change Tech Studio to North Digits
const updatedExperience = experience.map(exp => {
  if (exp.company === "Tech Studio") {
    return {
      ...exp,
      company: "North Digits"
    };
  }
  return exp;
});

export function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="Experience"
          title={<>A timeline of <span className="text-gradient">work</span></>}
        />
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent md:left-1/2" />
          {updatedExperience.map((e, i) => (
            <motion.div
              key={e.role}
              variants={fadeUp}
              className={`relative mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Left side - Period, Role, Company */}
              <div className={`pl-12 md:pl-0 ${
                i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
              }`}>
                <div className="font-mono text-[11px] uppercase tracking-widest text-primary">{e.period}</div>
                <h3 className="mt-1 font-display text-xl font-bold">{e.role}</h3>
                <div className="text-sm text-muted-foreground">{e.company}</div>
              </div>

              {/* Right side - Description and Technologies */}
              <div className="relative pl-12 md:pl-0">
                <span className="absolute left-0 top-2 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-neon md:left-1/2 md:-translate-x-[calc(50%+1.5rem)]">
                  <Briefcase size={14} />
                </span>
                <div className="rounded-2xl gradient-border p-5 bg-card/50 backdrop-blur-sm">
                  <p className="text-sm text-muted-foreground leading-relaxed">{e.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {e.stack.map((s) => (
                      <span key={s} className="rounded-full bg-primary/10 px-3 py-1 font-mono text-[10px] text-primary border border-primary/20">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}