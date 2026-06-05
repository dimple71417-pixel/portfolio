import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import greenfin from "@/assets/project-greenfin.jpg";
import venture from "@/assets/project-venture.jpg";
import stylehub from "@/assets/project-stylehub.jpg";
import admin from "@/assets/project-admin.jpg";
import auth from "@/assets/project-auth.jpg";

const projects = [
  {
    title: "GreenFin",
    desc: "KYC system, Binary Tree structure, Support Ticket Management, API integrations and dynamic user interfaces.",
    image: greenfin,
    tech: ["React", "Redux", "RTK Query", "Node.js", "MongoDB"],
  },
  {
    title: "Venture Gold",
    desc: "Wallet management and cryptocurrency modules with secure transaction workflows.",
    image: venture,
    tech: ["Next.js", "TypeScript", "Tailwind", "REST API"],
  },
  {
    title: "StyleHub",
    desc: "E-commerce clothing platform with responsive product listing pages and shopping features.",
    image: stylehub,
    tech: ["React", "Redux", "Tailwind", "Stripe"],
  },
  {
    title: "Admin Dashboard",
    desc: "Analytics dashboards, charts, reports and full user management systems.",
    image: admin,
    tech: ["Next.js", "Recharts", "RTK Query", "Tailwind"],
  },
  {
    title: "Authentication & User Management",
    desc: "Login, Registration, Role-Based Access, Form Validation and Profile Management.",
    image: auth,
    tech: ["React", "JWT", "Formik", "Yup"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-5 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary mb-3">Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl overflow-hidden group hover:scale-[1.02] transition-all hover:glow"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center gap-2 pb-4">
                  <a href="#" className="gradient-bg text-primary-foreground rounded-lg px-3 py-1.5 text-xs font-medium inline-flex items-center gap-1.5">
                    <ExternalLink className="w-3 h-3" /> Live
                  </a>
                  <a href="#" className="glass rounded-lg px-3 py-1.5 text-xs font-medium inline-flex items-center gap-1.5">
                    <Github className="w-3 h-3" /> Code
                  </a>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[11px] px-2 py-1 rounded-md bg-primary/10 text-primary font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
