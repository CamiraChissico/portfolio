import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { projects, categories, type Project } from "@/data/projects";
import { SectionHeader } from "./SectionHeader";
import { fadeUp, stagger } from "@/animations/variants";

// ITRANSMAR Project Data
const itransmarProject: Project = {
  id: "itransmar",
  title: "ITRANSMAR IP",
  description: "Instituto de Transporte Marítimo de Moçambique",
  longDescription: "O ITRANSMAR IP é a autoridade reguladora do sector marítimo em Moçambique, responsável pela supervisão e regulamentação das actividades de transporte marítimo, garantindo a segurança da navegação nas águas nacionais. Como parte da nossa missão, disponibilizamos publicações náuticas essenciais, incluindo tabelas de marés e cartas náuticas oficiais, fundamentais para a navegação segura ao longo da costa moçambicana e no Canal de Moçambique.",
  technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  github: "",
  demo: "",
  images: [
    "/images/projects/itransmar1.png",
    "/images/projects/itransmar2.png",
    "/images/projects/itransmar3.png",
    "/images/projects/itransmar4.png",
  ],
  category: "Web App",
  featured: true,
};

// Combine existing projects with ITRANSMAR project only
const allProjects = [itransmarProject, ...projects];

export function Projects() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [active, setActive] = useState<Project | null>(null);
  const filtered = filter === "All" ? allProjects : allProjects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Trabalhos Selecionados"
          title={<>Projetos que <span className="text-gradient">entreguei</span></>}
          description="Uma seleção de projetos — desde sistemas reais até explorações pessoais."
        />

        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {categories.map((c) => (
            <motion.button
              key={c} variants={fadeUp}
              onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium font-mono uppercase tracking-wider transition-all ${
                filter === c
                  ? "bg-gradient-primary text-primary-foreground shadow-neon"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          layout
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.article
                key={p.id}
                layout
                variants={fadeUp}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8 }}
                onClick={() => setActive(p)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl gradient-border bg-card"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-secondary/30">
                  <img
                    src={p.images[0]}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      console.error(`Failed to load image: ${p.images[0]}`);
                      e.currentTarget.src = "https://placehold.co/1200x800/1e1b2e/ffffff?text=No+Image";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  {p.featured && (
                    <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-gradient-primary px-2 py-1 text-[10px] font-bold uppercase text-primary-foreground shadow-neon z-10">
                      <Star size={10} /> Destaque
                    </div>
                  )}
                  <div className="absolute right-3 top-3 rounded-full glass px-2 py-1 font-mono text-[10px] uppercase text-muted-foreground z-10">
                    {p.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold transition-colors group-hover:text-primary">
                    {p.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.technologies.slice(0, 4).map((t) => (
                      <span key={t} className="rounded-md bg-secondary/50 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const [idx, setIdx] = useState(0);
  const imgs = project?.images ?? [];

  // Auto-slideshow: troca de imagem a cada 3 segundos
  useEffect(() => {
    if (!project || imgs.length <= 1) return;
    
    const interval = setInterval(() => {
      setIdx((prev) => (prev + 1) % imgs.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [project, imgs.length]);

  // Reset index when project changes
  useEffect(() => {
    setIdx(0);
  }, [project]);

  return (
    <AnimatePresence onExitComplete={() => setIdx(0)}>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[80] grid place-items-center bg-black/80 p-4 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl glass shadow-violet"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full glass text-foreground hover:text-primary"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
              <AnimatePresence mode="wait">
                <motion.img
                  key={idx}
                  src={imgs[idx]}
                  alt=""
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    console.error(`Failed to load modal image: ${imgs[idx]}`);
                    e.currentTarget.src = "https://placehold.co/1200x800/1e1b2e/ffffff?text=Image+Not+Found";
                  }}
                />
              </AnimatePresence>

              {/* Botão anterior */}
              {imgs.length > 1 && (
                <button
                  onClick={() => setIdx((prev) => (prev - 1 + imgs.length) % imgs.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 grid h-10 w-10 place-items-center rounded-full glass hover:text-primary transition-all"
                >
                  <ChevronLeft size={18} />
                </button>
              )}

              {/* Próximo botão */}
              {imgs.length > 1 && (
                <button
                  onClick={() => setIdx((prev) => (prev + 1) % imgs.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 grid h-10 w-10 place-items-center rounded-full glass hover:text-primary transition-all"
                >
                  <ChevronRight size={18} />
                </button>
              )}

              {/* Indicadores de slide */}
              {imgs.length > 1 && (
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 z-10">
                  {imgs.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIdx(i)}
                      className={`h-2 rounded-full transition-all ${
                        i === idx ? "w-8 bg-primary" : "w-2 bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-primary">{project.category}</div>
                  <h3 className="mt-1 font-display text-2xl font-bold md:text-3xl">{project.title}</h3>
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full glass text-muted-foreground hover:text-primary transition-all">
                      <Github size={16} />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-neon">
                      Live <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">{project.longDescription}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span key={t} className="rounded-md bg-secondary/60 px-3 py-1 font-mono text-xs text-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}