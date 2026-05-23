import { Code2, Layout, Palette, Zap, Github, Linkedin, Mail } from "lucide-react";

export const skills = [
  { name: "HTML", level: 95, color: "#e34f26" },
  { name: "CSS", level: 92, color: "#1572b6" },
  { name: "JavaScript", level: 90, color: "#f7df1e" },
  { name: "TypeScript", level: 82, color: "#3178c6" },
  { name: "React", level: 90, color: "#61dafb" },
  { name: "Tailwind CSS", level: 94, color: "#06b6d4" },
  { name: "GitHub", level: 88, color: "#ffffff" },
];

export const experience = [
  {
    role: "Front-End Developer Intern",
    company: "North Digits",
    period: "2026 — Present",
    description:
      "Building responsive React interfaces, collaborating with designers, and shipping features used by thousands of users.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    role: "Técnico de Suporte - Impressoras",
    company: "ITRANSMAR",
    period: "2026",
    description:
      "Configuração, instalação e manutenção de impressoras. Instalação de drivers e resolução de problemas de impressão. Configuração de impressoras em rede (LAN/Wi-Fi). Suporte técnico a usuários.",
    stack: ["Impressoras", "Drivers", "Redes LAN/Wi-Fi", "Suporte Técnico"],
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    period: "2023 — Present",
    description:
      "Designed and delivered custom websites for small businesses with a focus on performance, accessibility, and modern aesthetics.",
    stack: ["React", "Next.js", "Framer Motion"],
  },
  {
    role: "Junior Developer",
    company: "Open Source Contributions",
    period: "2022 — 2023",
    description:
      "Contributed UI components and bug fixes to community projects; learned the engineering discipline of code review and CI.",
    stack: ["JavaScript", "Git", "CSS"],
  },
];

export const services = [
  {
    icon: Code2,
    title: "Front-End Development",
    description: "Desenvolvimento de aplicações web modernas com React, TypeScript e Tailwind CSS.",
  },
  {
    icon: Layout,
    title: "Responsive Web Design",
    description: "Criação de interfaces adaptáveis que funcionam perfeitamente em qualquer dispositivo.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Design de interfaces intuitivas e centradas na melhor experiência do usuário.",
  },
  {
    icon: Zap,
    title: "Website Optimization",
    description: "Otimização de performance, SEO e acessibilidade para melhores resultados.",
  },
];

export const socials = [
  { icon: Github, href: "https://github.com/camirachissico", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/camirachissico", label: "LinkedIn" },
  { icon: Mail, href: "mailto:chissicocamira1@gmail.com", label: "Email" },
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];