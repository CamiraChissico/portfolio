import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Github, Linkedin, CheckCircle2, Phone } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { fadeUp, stagger } from "@/animations/variants";
import { socials } from "@/data/site";

export function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Contact"
          title={<>Let's build <span className="text-gradient">something great</span></>}
          description="Open to internships, freelance work, and full-time opportunities."
        />
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid gap-10 lg:grid-cols-[1fr_1.3fr]"
        >
          <motion.div variants={fadeUp} className="space-y-6">
            <div className="rounded-2xl gradient-border p-6">
              <div className="font-mono text-xs uppercase tracking-widest text-primary">Email</div>
              <a href="mailto:chissicocamira1@gmail.com" className="mt-2 block font-display text-xl font-semibold hover:text-primary break-all">
                chissicocamira1@gmail.com
              </a>
            </div>
            <div className="rounded-2xl gradient-border p-6">
              <div className="font-mono text-xs uppercase tracking-widest text-primary">Phone</div>
              <a href="tel:+258863239800" className="mt-2 block font-display text-xl font-semibold hover:text-primary">
                +258 86 323 9800
              </a>
            </div>
            <div className="rounded-2xl gradient-border p-6">
              <div className="font-mono text-xs uppercase tracking-widest text-primary">Location</div>
              <div className="mt-2 font-display text-xl font-semibold">Maputo · Remote-friendly</div>
            </div>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label} href={href} aria-label={label}
                  className="grid h-12 w-12 place-items-center rounded-2xl glass text-muted-foreground transition-all hover:text-primary hover:shadow-neon"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            variants={fadeUp} onSubmit={onSubmit}
            className="space-y-4 rounded-3xl gradient-border p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" placeholder="Your name" />
              <Field label="Email" type="email" placeholder="you@email.com" />
            </div>
            <Field label="Subject" placeholder="What's it about?" />
            <div>
              <label className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea
                required rows={5} placeholder="Tell me about your project..."
                className="mt-2 w-full resize-none rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60"
              />
            </div>
            <motion.button
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-neon transition-transform hover:scale-[1.01]"
            >
              {sent ? (<><CheckCircle2 size={16} /> Message sent</>) : (<>Send message <Send size={16} /></>)}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}

function Field({ label, type = "text", placeholder }: { label: string; type?: string; placeholder: string }) {
  return (
    <div>
      <label className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        required type={type} placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60"
      />
    </div>
  );
}