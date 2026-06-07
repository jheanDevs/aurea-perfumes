import { createFileRoute } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import type { CSSProperties } from "react";
import logo from "@/assets/aurea-logo.png";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

// Brand-style WhatsApp glyph
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.001 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.26.6 4.46 1.74 6.4L3.2 28.8l6.58-1.72a12.77 12.77 0 0 0 6.22 1.6h.01c7.06 0 12.8-5.73 12.8-12.8 0-3.42-1.33-6.63-3.75-9.05A12.72 12.72 0 0 0 16.001 3.2zm0 23.36h-.01a10.6 10.6 0 0 1-5.41-1.48l-.39-.23-3.9 1.02 1.04-3.8-.25-.4a10.6 10.6 0 0 1-1.62-5.66c0-5.86 4.77-10.62 10.63-10.62 2.84 0 5.5 1.1 7.5 3.11a10.55 10.55 0 0 1 3.11 7.51c0 5.86-4.77 10.62-10.63 10.62zm6.05-7.95c-.33-.17-1.96-.97-2.27-1.08-.3-.11-.52-.17-.74.17-.22.33-.85 1.08-1.04 1.3-.19.22-.39.25-.71.08-.33-.17-1.39-.51-2.65-1.63-.98-.87-1.64-1.95-1.83-2.28-.19-.33-.02-.51.14-.68.15-.15.33-.39.5-.58.16-.19.22-.33.33-.55.11-.22.06-.41-.03-.58-.08-.17-.74-1.79-1.02-2.45-.27-.64-.54-.56-.74-.57h-.63c-.22 0-.58.08-.88.41-.3.33-1.16 1.13-1.16 2.76 0 1.63 1.19 3.2 1.35 3.42.17.22 2.34 3.57 5.66 5 .79.34 1.41.54 1.89.69.79.25 1.51.21 2.08.13.63-.09 1.96-.8 2.24-1.58.28-.78.28-1.45.2-1.58-.08-.14-.3-.22-.63-.39z"/>
    </svg>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AUREA PERFUMES • Link in Bio" },
      { name: "description", content: "Perfumes importados • Elegância • Sofisticação. Acesse nossas lojas e fale conosco." },
      { property: "og:title", content: "AUREA PERFUMES" },
      { property: "og:description", content: "Perfumes importados • Elegância • Sofisticação." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Italiana&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  component: Index,
});

type LinkKind = "whatsapp" | "logo";
type LinkItem = {
  href: string;
  title: string;
  subtitle: string;
  kind: LinkKind;
};

const links: LinkItem[] = [
  {
    href: import.meta.env.VITE_LINK_WHATSAPP,
    title: "Falar no WhatsApp",
    subtitle: "Atendimento rápido e personalizado",
    kind: "whatsapp",
  },
  {
    href: import.meta.env.VITE_LINK_EUDORA,
    title: "Loja Eudora",
    subtitle: "Promoções e perfumes exclusivos",
    kind: "logo",
  },
  {
    href: import.meta.env.VITE_LINK_BOTICARIO,
    title: "O Boticário",
    subtitle: "Perfumes e kits especiais",
    kind: "logo",
  },
].filter((item) => item.href);

function Sparkle({ top, left, delay, size }: { top: string; left: string; delay: string; size: number }) {
  return (
    <Sparkles
      className="absolute text-[oklch(0.78_0.1_80)] animate-twinkle pointer-events-none"
      style={{ top, left, animationDelay: delay, width: size, height: size }}
    />
  );
}

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden flex flex-col items-center px-5 py-10 sm:py-14">
      {/* Decorative blurred orbs */}
      <div className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full bg-[oklch(0.88_0.06_80)] opacity-50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-[oklch(0.9_0.04_30)] opacity-40 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 h-60 w-60 rounded-full bg-[oklch(0.92_0.05_60)] opacity-40 blur-3xl" />

      {/* Sparkles */}
      <Sparkle top="8%" left="12%" delay="0s" size={18} />
      <Sparkle top="22%" left="82%" delay="1.2s" size={14} />
      <Sparkle top="55%" left="6%" delay="0.6s" size={12} />
      <Sparkle top="70%" left="88%" delay="2s" size={16} />
      <Sparkle top="40%" left="50%" delay="1.8s" size={10} />
      <Sparkle top="90%" left="30%" delay="0.3s" size={14} />

      <section className="relative w-full max-w-md mx-auto flex flex-col items-center">
        {/* Logo */}
        <div className="relative animate-fade-up" style={{ animationDelay: "0.05s" }}>
          <div className="absolute inset-0 rounded-full bg-[oklch(0.88_0.06_80)] blur-2xl opacity-60 animate-glow" />
          <div className="relative h-40 w-40 sm:h-44 sm:w-44 rounded-full overflow-hidden glass shadow-[var(--shadow-soft)] animate-float">
            <img
              src={logo}
              alt="AUREA PERFUMES logo"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>

        {/* Brand */}
        <header className="mt-7 text-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <h1 className="font-display text-5xl sm:text-6xl text-[var(--taupe)] tracking-[0.08em]">
            AUREA <span className="text-gradient-gold italic font-display-italic">Perfumes</span>
          </h1>
          <div className="mt-3 flex items-center justify-center gap-3 text-[var(--taupe)]/70">
            <span className="h-px w-8 bg-[var(--gold)]/60" />
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.28em]">
              Perfumes importados • Elegância • Sofisticação
            </p>
            <span className="h-px w-8 bg-[var(--gold)]/60" />
          </div>
        </header>

        {/* Buttons */}
        <nav className="mt-10 w-full flex flex-col gap-4">
          {links.map(({ href, title, subtitle, kind }, i) => {
            const borderVars: Record<string, string> =
              kind === "whatsapp"
                ? {
                    "--bd-a": "oklch(0.78 0.14 150 / 0.95)",
                    "--bd-b": "oklch(0.62 0.16 150 / 0.95)",
                  }
                : {
                    "--bd-a": "oklch(0.85 0.08 80 / 0.95)",
                    "--bd-b": "oklch(0.78 0.1 60 / 0.95)",
                  };

            return (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-btn border-draw cursor-pointer group glass animate-fade-up rounded-2xl px-5 py-4 flex items-center gap-4 shadow-[var(--shadow-soft)] hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-12px_oklch(0.55_0.05_55/0.28)] transition-all duration-500 focus-visible:outline-none"
                style={{
                  animationDelay: `${0.35 + i * 0.12}s`,
                  ...(borderVars as CSSProperties),
                }}
              >
                {kind === "whatsapp" ? (
                  <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[oklch(0.78_0.14_150)] to-[oklch(0.62_0.16_150)] text-white shadow-inner">
                    <WhatsAppIcon className="h-6 w-6" />
                  </span>
                ) : (
                  <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--gradient-gold)] shadow-inner ring-1 ring-white/60 overflow-hidden">
                    <img src={logo} alt="" className="h-10 w-10 rounded-lg object-cover" loading="lazy" />
                  </span>
                )}
                <span className="flex-1 text-left">
                  <span className="font-display block text-xl leading-tight text-[var(--taupe)]">
                    {title}
                  </span>
                  <span className="block text-[12px] text-[var(--taupe)]/65 mt-0.5">
                    {subtitle}
                  </span>
                </span>
                <span className="text-[var(--gold)] opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  →
                </span>
              </a>
            );
          })}
        </nav>

        <div className="mt-6 w-full animate-fade-up" style={{ animationDelay: "0.75s" }}>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button
                type="button"
                className="w-full shimmer-btn border-draw cursor-pointer group glass rounded-2xl px-5 py-4 flex items-center gap-4 shadow-[var(--shadow-soft)] hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-12px_oklch(0.55_0.05_55/0.28)] transition-all duration-500 focus-visible:outline-none"
                style={
                  {
                    "--bd-a": "oklch(0.78 0.14 150 / 0.95)",
                    "--bd-b": "oklch(0.62 0.16 150 / 0.95)",
                  } as CSSProperties
                }
              >
                <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[oklch(0.78_0.14_150)] to-[oklch(0.62_0.16_150)] text-white shadow-inner">
                  <WhatsAppIcon className="h-6 w-6" />
                </span>
                <span className="flex-1 text-left">
                  <span className="font-display block text-xl leading-tight text-[var(--taupe)]">
                    Entrar no Grupo do WhatsApp
                  </span>
                  <span className="block text-[12px] text-[var(--taupe)]/65 mt-0.5">
                    Novidades, reposições e promoções
                  </span>
                </span>
                <span className="text-[var(--gold)] opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  →
                </span>
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>GRUPO EM DESENVOLVIMENTO</AlertDialogTitle>
                <AlertDialogDescription>
                  ESTAMOS PREPARANDO TUDO PRA VOCÊS!
                </AlertDialogDescription>
              </AlertDialogHeader>
              <div className="flex justify-end">
                <AlertDialogAction>OK</AlertDialogAction>
              </div>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        {/* Footer */}
        <footer className="mt-14 mb-2 text-center animate-fade-up" style={{ animationDelay: "0.9s" }}>
          <div className="mx-auto mb-3 h-px w-16 bg-[var(--gold)]/50" />
          <p className="font-serif-luxe text-xs tracking-[0.3em] text-[var(--taupe)]/70 uppercase">
            AUREA PERFUMES © 2026
          </p>
        </footer>
      </section>
    </main>
  );
}
