import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Services } from "@/components/portfolio/Services";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { BackToTop } from "@/components/portfolio/BackToTop";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { LoadingScreen } from "@/components/portfolio/LoadingScreen";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Camira Chissico — Front-End Software Developer" },
      {
        name: "description",
        content:
          "Portfolio of Camira Chissico, a front-end software developer building premium, high-performance web experiences with React, TypeScript, and motion.",
      },
      { property: "og:title", content: "Camira Chissico — Front-End Software Developer" },
      { property: "og:description", content: "Premium developer portfolio — React, TypeScript, motion, craft." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch(activeSection) {
      case "home": return <Hero />;
      case "about": return <About />;
      case "projects": return <Projects />;
      case "skills": return <Skills />;
      case "experience": return <Experience />;
      case "services": return <Services />;
      case "contact": return <Contact />;
      default: return <Hero />;
    }
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased">
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <Navbar setActiveSection={setActiveSection} />
      <main>
        {renderSection()}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}