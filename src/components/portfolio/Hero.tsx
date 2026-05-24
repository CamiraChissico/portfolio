import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Code2, Sparkles, Boxes, Cpu, Layers, Terminal, ChevronRight } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";
import { Particles } from "./Particles";
import { socials } from "@/data/site";

const floatingIcons = [
  { Icon: Code2, x: "8%", y: "20%", d: 0 },
  { Icon: Sparkles, x: "85%", y: "18%", d: 1 },
  { Icon: Boxes, x: "12%", y: "75%", d: 2 },
  { Icon: Cpu, x: "88%", y: "70%", d: 1.5 },
  { Icon: Layers, x: "78%", y: "45%", d: 0.8 },
];

export function Hero() {
  const role = useTypewriter(["<Frontend Developer />", "// React Specialist", "const creator = () => {}"]);

  const scrollToProjects = () => {
    setTimeout(() => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ 
          behavior: "smooth", 
          block: "start",
          inline: "nearest"
        });
      } else {
        const fallback = document.querySelector("#projects");
        if (fallback) {
          fallback.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 100);
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-accent/20 blur-[120px]" />
      <Particles />

      {floatingIcons.map(({ Icon, x, y, d }, i) => (
        <motion.div
          key={i}
          className="absolute hidden text-primary/30 lg:block"
          style={{ left: x, top: y }}
          animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 6 + i, repeat: Infinity, delay: d, ease: "easeInOut" }}
        >
          <div className="grid h-14 w-14 place-items-center rounded-2xl glass">
            <Icon size={24} />
          </div>
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Terminal Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-3 rounded-lg bg-black/60 px-4 py-2 font-mono text-xs backdrop-blur-sm border border-primary/30"
          >
            <div className="flex gap-1.5">
              <div className="h-2 w-2 rounded-full bg-red-500" />
              <div className="h-2 w-2 rounded-full bg-yellow-500" />
              <div className="h-2 w-2 rounded-full bg-green-500" />
            </div>
            <Terminal size={12} className="text-primary" />
            <span className="text-green-400">camira@portfolio</span>
            <span className="text-muted-foreground">:</span>
            <span className="text-blue-400">~/dev</span>
            <span className="text-primary animate-pulse">█</span>
          </motion.div>

          {/* Nome com tags HTML */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
              <span className="text-muted-foreground text-2xl md:text-3xl block mb-2 font-mono">&lt;h1&gt;</span>
              <span className="text-gradient">&lt;Camira /&gt;</span>
              <br />
              <span className="text-foreground">Chissico</span>
              <span className="text-primary">;</span>
              <span className="text-muted-foreground text-2xl md:text-3xl block mt-2 font-mono">&lt;/h1&gt;</span>
            </h1>
          </motion.div>

          {/* Linhas de código */}
          <div className="mt-6 space-y-2 font-mono text-sm">
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <span className="text-purple-400">const</span>
              <span className="text-yellow-400">developer</span>
              <span className="text-white">=</span>
              <span className="text-green-400">{'{'}</span>
            </div>
            <div className="flex items-center justify-center gap-2 flex-wrap pl-4">
              <span className="text-blue-400">name</span>
              <span className="text-white">:</span>
              <span className="text-orange-400">"Camira Chissico"</span>
              <span className="text-white">,</span>
            </div>
            <div className="flex items-center justify-center gap-2 flex-wrap pl-4">
              <span className="text-blue-400">role</span>
              <span className="text-white">:</span>
              <span className="text-orange-400">"Frontend Developer"</span>
              <span className="text-white">,</span>
            </div>
            <div className="flex items-center justify-center gap-2 flex-wrap pl-4">
              <span className="text-blue-400">passion</span>
              <span className="text-white">:</span>
              <span className="text-orange-400">["React", "TypeScript", "UI/UX", "Motion"]</span>
            </div>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <span className="text-green-400">{'}'}</span>
              <span className="text-white">;</span>
            </div>
          </div>

          {/* Typing animation */}
          <div className="mt-6 flex items-center justify-center gap-3 font-mono text-base md:text-lg text-muted-foreground bg-black/30 inline-block px-6 py-2 rounded-lg mx-auto">
            <span className="text-green-400">$</span>
            <span className="text-primary">npm run</span>
            <span className="text-yellow-400">dev</span>
            <span className="text-white">→</span>
            <span className="text-foreground">{role}</span>
            <span className="inline-block h-5 w-[2px] animate-pulse bg-primary" />
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/cv.pdf"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-neon transition-all hover:scale-105 hover:shadow-xl"
            >
              <Download size={16} className="group-hover:animate-bounce" />
              Baixar CV
            </a>
            <button
              onClick={scrollToProjects}
              className="group inline-flex items-center gap-2 rounded-full glass px-8 py-3 text-sm font-semibold transition-all hover:bg-white/10 hover:scale-105"
            >
              Ver Projetos
              <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Social icons */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full glass text-muted-foreground transition-all hover:text-primary hover:shadow-neon hover:-translate-y-1"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>

          {/* Linha de status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 flex items-center justify-center gap-4 text-[10px] font-mono text-muted-foreground"
          >
            <span className="flex items-center gap-1">
              <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
              ready to code
            </span>
            <span></span>
            <span></span>
            <span>•</span>
            <span>✨</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative circle */}
      <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 lg:block">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-30 blur-3xl animate-pulse-glow" />
          <div className="relative h-36 w-36 overflow-hidden rounded-full gradient-border shadow-violet">
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 via-card to-accent/20">
              <div className="text-center">
                <div className="font-mono text-[8px] text-muted-foreground">{"<dev />"}</div>
                <div className="font-display text-3xl font-bold text-gradient">CC</div>
                <div className="font-mono text-[8px] text-primary">v2.0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}