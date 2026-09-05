import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
} from "lucide-react";
import { MorphingText } from "../lightswind/morphing-text";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.85 9.85 0 0 0 12.04 2m0 1.67a8.2 8.2 0 0 1 5.83 2.42 8.19 8.19 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.25 8.24a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.55 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.26 3.73.59.27 1.06.42 1.42.54.6.19 1.14.16 1.57.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28-.25-.13-1.46-.72-1.69-.8-.22-.08-.39-.13-.56.13-.16.25-.64.8-.78.97-.15.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.42h-.48z" />
  </svg>
);

export const Footer = () => {
  const morphingTexts = [
    "Full-Stack Developer",
    "3D Artist",
    "AR or VR Enthusiast",
    "Let's Build Something Amazing Together",
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Career", href: "#career" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { Icon: Github, href: "https://github.com/Sonnif21", label: "GitHub" },
    { Icon: Linkedin, href: "https://linkedin.com/in/ilham-musonnif", label: "LinkedIn" },
    { Icon: Mail, href: "mailto:immusonnif@gmail.com", label: "Email" },
    { Icon: WhatsAppIcon, href: "https://wa.me/6285117210302", label: "WhatsApp" },
  ];

  return (
    <footer className="w-full relative z-10 pt-16 pb-28 md:pb-36 bg-card/60 backdrop-blur-2xl border-t border-black/5 dark:border-white/10 shadow-2xl rounded-t-[3rem] overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col gap-10">
        
        {/* Top Header Row: Logo & Back-to-Top Button */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-black/5 dark:border-white/10">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-primary to-sky-400 p-[1px] shadow-lg">
              <div className="w-full h-full bg-background rounded-[11px] flex items-center justify-center">
                <span className="font-extrabold text-xs tracking-tighter bg-gradient-to-r from-purple-500 to-sky-400 bg-clip-text text-transparent">
                  IM
                </span>
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-extrabold tracking-tight text-foreground text-base leading-none">
                Ilham Musonnif
              </span>
              <span className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase mt-0.5">
                Portfolio
              </span>
            </div>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel border border-black/5 dark:border-white/10 text-xs font-bold text-foreground hover:text-primary hover:border-primary/40 transition-all shadow-sm cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </motion.button>
        </div>

        {/* Center Banner: Morphing Text Container with Mild Borders */}
        <div className="py-12 px-6 rounded-3xl bg-black/[0.015] dark:bg-white/[0.02] border border-black/5 dark:border-white/10 text-center flex flex-col items-center justify-center my-2 shadow-sm">
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary mb-3 bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 shadow-sm">
            Innovate & Build
          </span>

          <MorphingText
            texts={morphingTexts}
            morphTime={1.6}
            cooldownTime={0.8}
            className="text-3xl md:text-5xl lg:text-6xl text-foreground font-extrabold min-h-[70px] text-center"
          />
        </div>

        {/* Quick Navigation Links */}
        <div className="py-6 border-t border-black/5 dark:border-white/10 flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm font-semibold text-muted-foreground">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="hover:text-foreground transition-colors hover:scale-105 transform duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Bottom Row: Social Icons & Copyright */}
        <div className="pt-6 border-t border-black/5 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-muted-foreground">
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, i) => {
              const Icon = social.Icon;
              return (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full glass-panel border border-black/5 dark:border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 hover:scale-110 transition-all shadow-sm"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>

          {/* Copyright notice */}
          <div className="flex items-center gap-1.5 font-medium text-center md:text-right">
            <span>© {new Date().getFullYear()} Ilham Musonnif. All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;