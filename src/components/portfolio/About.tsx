import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { fadeUp, stagger } from "@/animations/variants";

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Sobre"
          title={<>Quem sou <span className="text-gradient">eu ?</span></>}
        />
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="absolute -inset-4 rounded-full bg-gradient-primary opacity-20 blur-2xl animate-pulse" />
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/50 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-accent/30 animate-[spin_15s_linear_infinite_reverse]" />
            <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-full gradient-border shadow-violet">
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 via-card to-accent/20">
                <div className="text-center">
                  <div className="font-mono text-xs text-muted-foreground">{"<dev />"}</div>
                  <motion.div 
                    className="mt-2 font-display text-7xl font-bold text-gradient md:text-8xl"
                    animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    CC
                  </motion.div>
                  <div className="mt-2 font-mono text-[10px] text-muted-foreground">v2.0.26</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h3 variants={fadeUp} className="font-display text-2xl font-semibold md:text-3xl">
              Olá! Sou <span className="text-gradient">Camira Chissico</span>
            </motion.h3>
            <motion.p variants={fadeUp} className="mt-4 text-muted-foreground leading-relaxed">
              Uma desenvolvedora frontend apaixonada por criar experiências digitais incríveis e interfaces que fazem a diferença.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-4 text-muted-foreground leading-relaxed">
              Especializada em <span className="text-foreground font-semibold">React, TypeScript, Tailwind CSS</span> e tecnologias modernas do ecossistema JavaScript. 
              Sempre buscando aprender novas tecnologias e melhores práticas para entregar soluções de alta qualidade.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}