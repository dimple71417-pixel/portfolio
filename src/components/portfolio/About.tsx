import { motion } from "framer-motion";
import { Code2, Zap, Layout, Plug } from "lucide-react";

const items = [
  { icon: Code2, title: "1.6+ Years", desc: "Hands-on ReactJS development experience building production apps." },
  { icon: Zap, title: "React & Next.js", desc: "Expert in React, Next.js, Redux, RTK Query and modern tooling." },
  { icon: Layout, title: "Responsive UI", desc: "Pixel-perfect, mobile-first interfaces with Tailwind CSS." },
  { icon: Plug, title: "API Integration", desc: "Seamless REST API integration with robust state management." },
];

export function About() {
  return (
    <section id="about" className="py-5 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary mb-3">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Crafting <span className="gradient-text">digital experiences</span> that scale
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I'm a passionate ReactJS Developer with strong frontend skills and a focus on
            building scalable, user-centric web applications. I love turning complex problems
            into clean, accessible interfaces.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover:scale-[1.03] transition-transform"
            >
              <div className="gradient-bg w-12 h-12 rounded-xl flex items-center justify-center mb-4 glow">
                <item.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
