import { socials } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-primary font-mono text-sm font-bold text-primary-foreground">CC</span>
          <div className="font-mono text-xs text-muted-foreground">
            2026 — Feito com <span className="text-red-500">❤️</span> por Camira Chissico
          </div>
        </div>
        <div className="flex gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} aria-label={label} className="grid h-9 w-9 place-items-center rounded-full glass text-muted-foreground hover:text-primary">
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}