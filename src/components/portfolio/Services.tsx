import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { services } from "@/data/site";
import { fadeUp, stagger } from "@/animations/variants";

export function Services() {
  return (
    <section id="services" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Services"
          title={<>What I can <span className="text-gradient">build for you</span></>}
        />
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {services.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl gradient-border p-6"
            >
              <div className="absolute inset-x-0 -bottom-20 h-32 bg-gradient-primary opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-neon transition-transform group-hover:scale-110 group-hover:rotate-6">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
