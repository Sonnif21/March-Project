import { motion, animate } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import TechStackSection from "../TechStackSection/TechStackSection";
import { Button } from "../lightswind/button";
import { HangingIdCard } from "../lightswind/HangingIdCard";
import { AuroraTextEffect } from "../lightswind/aurora-text-effect";
import { DotPattern } from "../lightswind/dot-pattern";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.85 9.85 0 0 0 12.04 2m0 1.67a8.2 8.2 0 0 1 5.83 2.42 8.19 8.19 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.25 8.24a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.55 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.26 3.73.59.27 1.06.42 1.42.54.6.19 1.14.16 1.57.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28-.25-.13-1.46-.72-1.69-.8-.22-.08-.39-.13-.56.13-.16.25-.64.8-.78.97-.15.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.42h-.48z" />
  </svg>
);

export const HeroSection = () => {
  const scrollToProjects = () => {
    const target = document.getElementById("projects");
    if (!target) return;

    const startY = window.scrollY;
    const endY = target.getBoundingClientRect().top + window.scrollY;

    animate(startY, endY, {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (value) => window.scrollTo(0, value),
    });
  };

  return (
    <section id="hero" className="relative min-h-[100vh] flex flex-col pt-12 md:pt-16 overflow-hidden bg-background">
      {/* Background Dot Pattern with Radial Vignette Shade */}
      <DotPattern width={16} height={16} cx={1} cy={1} cr={1} glow />
      
      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 pb-12">
        
        {/* Left Content */}
        <motion.div 
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left pt-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4 text-center md:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2">
              Hi, I'm
            </h1>
            
            {/* Light Theme: Clean Vibrant Gradient Text */}
            <div className="block dark:hidden">
              <span className="bg-gradient-to-r from-violet-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent font-extrabold text-[clamp(2.2rem,5vw,4.2rem)] leading-tight tracking-tight block pb-2 select-none">
                Ilham Musonnif
              </span>
            </div>

            {/* Dark Theme: Rich Lightswind Aurora Text Effect */}
            <div className="hidden dark:block">
              <AuroraTextEffect
                text="Ilham Musonnif"
                fontSize="clamp(2.2rem, 5vw, 4.2rem)"
                className="bg-transparent overflow-visible p-0 justify-start"
                textClassName="bg-gradient-to-r from-cyan-400 via-purple-400 to-sky-300 bg-clip-text text-transparent pb-2 font-extrabold"
              />
            </div>
          </motion.div>

          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Founder of PT March Project. I've delivered 20+ production applications spanning Website, Unity 3D, and 3D modeling - helping clients across Indonesia and beyond turn ideas into working products.
          </motion.p>

          <motion.div 
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10 w-full md:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="rounded-full px-7 h-12 bg-primary text-primary-foreground font-semibold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:-translate-y-1"
            >
              View Work <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex items-center gap-5 justify-center md:justify-start w-full md:w-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {[
              { Icon: Github, href: "https://github.com/Sonnif21" },
              { Icon: Linkedin, href: "https://linkedin.com/in/ilham-musonnif" },
              { Icon: Mail, href: "mailto:immusonnif@gmail.com" },
              { Icon: WhatsAppIcon, href: "https://wa.me/6285117210302" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors hover:-translate-y-1 transform duration-200"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content - Visual Hanging ID Card */}
        <motion.div 
          className="flex-1 w-full max-w-md relative flex justify-center items-center py-2"
          initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <HangingIdCard
            name="Ilham Musonnif"
            role="Founder, PT March Project"
            badgeId="IM-2023-DEV"
            accentColor="#8b5cf6"
            ropeLength={75}
            ropeColor="#27272a"
            cardWidth="w-72 sm:w-80 md:w-84"
          >
            <div className="flex flex-col h-full bg-card w-full">
              {/* Card Header Banner with Avatar */}
              <div className="relative px-5 pt-7 pb-6 flex flex-col items-center bg-gradient-to-br from-purple-700 via-primary to-indigo-950 text-white overflow-hidden">
                {/* Circuit background overlay */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

                {/* Profile Photo with Dual Glowing Ring */}
                <div className="mt-1 relative w-28 h-28 rounded-full p-1 bg-gradient-to-tr from-cyan-400 via-primary to-purple-400 backdrop-blur-md shadow-2xl border border-white/50 overflow-hidden group">
                  <img 
                    src="/profile.jpg" 
                    alt="Ilham Musonnif" 
                    className="w-full h-full object-cover rounded-full filter contrast-105"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col items-center text-center bg-card text-card-foreground flex-1 gap-3">
                <div>
                  <h3 className="text-xl font-extrabold tracking-tight text-foreground">Ilham Musonnif</h3>
                  <div className="inline-flex items-center gap-1 mt-1 px-3 py-0.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold">
                    <span>Founder PT March Project</span>
                  </div>
                </div>

                {/* Specialty Chips */}
                <div className="w-full text-left bg-muted/40 p-3 rounded-xl border border-border/50">
                  <span className="text-muted-foreground block text-[9px] uppercase tracking-widest font-bold mb-1.5">
                    Specialty
                  </span>
                  <div className="flex flex-col gap-0">
                    {["Full-Stack Development"].map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-[10px] font-extrabold uppercase tracking-wide text-center"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Location / Experience / Status */}
                <div className="grid grid-cols-3 divide-x divide-muted-foreground/20 w-full bg-muted/40 p-1 rounded-xl border border-border/50">
                  <div className="text-center px-1">
                    <span className="text-muted-foreground block text-[9px] uppercase tracking-widest font-bold mb-0.5">Location</span>
                    <span className="font-bold text-foreground text-xs whitespace-nowrap">Semarang</span>      
                  </div>
                  <div className="text-center px-1">
                    <span className="text-muted-foreground block text-[9px] uppercase tracking-widest font-bold mb-0.5">Experience</span>
                    <span className="font-bold text-foreground text-xs whitespace-nowrap">3+ Years</span>
                  </div>
                  <div className="text-center px-1">
                    <span className="text-muted-foreground block text-[9px] uppercase tracking-widest font-bold mb-0.5">Status</span>
                    <span className="font-bold text-emerald-500 text-xs flex items-center justify-center gap-1">
                      ● Active
                    </span>
                  </div>
                </div>

                {/* HD Barcode & Auth Tag */}
                <div className="flex flex-col items-center mt-1 w-full gap-1">
                  <div className="flex gap-[2.5px] items-end h-7 px-3 py-0.5 bg-white/90 dark:bg-black/40 rounded-lg border border-border/40 w-full justify-center">
                    {Array.from({ length: 36 }).map((_, i) => (
                      <div
                        key={i}
                        className="bg-foreground rounded-[1px]"
                        style={{
                          width: i % 4 === 0 ? "3.5px" : i % 2 === 0 ? "2px" : "1px",
                          height: `${50 + Math.sin(i * 1.4) * 45}%`,
                        }}
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-center w-full px-1 text-[10px]">
                    <span className="font-mono font-bold tracking-widest text-primary">
                      IM-2023-DEV
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </HangingIdCard>
        </motion.div>

      </div>

      {/* Marquee appended natively to the bottom to span Full Width */}
      <div className="w-full relative z-10 mt-auto">
        <TechStackSection />
      </div>
    </section>
  );
};