import SkillCategory from "./SkillCategory";
import { motion } from "framer-motion";
import { GraduationCap, Award, CheckCircle2, Calendar, Building2 } from "lucide-react";
import { MagicCard } from "../lightswind/magic-card";

export const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor's Degree - Information Technology",
      school: "UIN Walisongo Semarang",
      year: "2018 – 2023",
      badge: "IPK 3.69 / 4.00",
      badgeIcon: Award,
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      icon: GraduationCap,
      details: [
        "Focused studies on Software Engineering, Databases, and Augmented Reality/Virtual Reality development",
        "FST Navigation - an AR indoor navigation system for the FST building using Unity and the Immersal SDK",
        "Graduated with a GPA of 3.69/4.00 while actively working on freelance projects since early 2023",
      ],
    },
  ];

  return (
    <section id="education" className="max-w-7xl mx-auto px-6 py-24 space-y-20">
      
      {/* Education Header & Card */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary shadow-md">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Academic <span className="text-gradient-primary">Background</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2x4">
          An Information Technology foundation that supports hands-on experience in building web, mobile, and AR/VR applications, as well as 3D modeling, for real clients in Indonesia and Malaysia.          </p>
        </motion.div>

        <div className="w-full">
          {education.map((edu, i) => {
            const DegreeIcon = edu.icon;
            const BadgeIcon = edu.badgeIcon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <MagicCard
                  className="p-8 md:p-10 rounded-[2.25rem] border border-border/80 bg-card/80 shadow-xl"
                  gradientSize={400}
                  gradientColor="rgba(139, 92, 246, 0.12)"
                  gradientFrom="#8b5cf6"
                  gradientTo="#38bdf8"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 lg:gap-12">
                    {/* Left: Identity */}
                  <div className="flex flex-col gap-6 lg:border-r lg:border-gray-200 lg:pr-10">                      <div className="flex items-start justify-between gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/25 text-primary flex items-center justify-center shadow-sm">
                          <DegreeIcon className="w-7 h-7 text-primary" />
                        </div>
                        <span className={`px-3.5 py-1.5 rounded-full border text-xs font-extrabold flex items-center gap-1.5 shadow-sm ${edu.badgeColor}`}>
                          <BadgeIcon className="w-3.5 h-3.5" />
                          {edu.badge}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight mb-3">
                          {edu.degree}
                        </h3>
                        <div className="flex flex-col gap-2 text-xs font-semibold text-muted-foreground">
                          <span className="flex items-center gap-1.5 text-foreground font-bold">
                            <Building2 className="w-3.5 h-3.5 text-primary" /> {edu.school}
                          </span>
                          <span className="flex items-center gap-1.5 font-mono text-primary font-bold">
                            <Calendar className="w-3.5 h-3.5" /> {edu.year}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Highlights */}
                    <div className="flex items-center">
                      <ul className="space-y-4 w-full">
                        {edu.details.map((detail, j) => (
                          <li key={j} className="text-sm text-muted-foreground flex items-start gap-3 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-foreground/90 font-medium">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </MagicCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Expertise & Skills Component */}
      <div>
        <SkillCategory />
      </div>

    </section>
  );
};