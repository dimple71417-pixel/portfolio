import { motion } from "framer-motion";
import { Download, Mail, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-dev.jpg";


export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-28 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-sm">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              Available for opportunities
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-5">
              Hi, I'm <span className="gradient-text">Dimple Bhardwaj</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-display font-medium text-muted-foreground mb-4">
              ReactJS Developer
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
              Building Modern, Scalable & User-Centric Web Applications with React, Next.js, and the modern frontend ecosystem.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/Dimple-Bhardwaj.pdf"
                download
                className="gradient-bg glow text-primary-foreground rounded-xl px-6 py-3 font-medium inline-flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <Download className="w-4 h-4" /> Download Resume
              </a>
              <a
                href="#contact"
                className="glass rounded-xl px-6 py-3 font-medium inline-flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <Mail className="w-4 h-4" /> Contact Me
              </a>
            </div>
            <div className="flex gap-8 mt-12">
              {[
                { n: "1.6+", l: "Years Exp" },
                { n: "10+", l: "Projects" },
                { n: "15+", l: "Technologies" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-3xl font-display font-bold gradient-text">{s.n}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 gradient-bg blur-3xl opacity-30 rounded-full" />
            <div className="relative glass rounded-3xl p-3 glow">
              <img
                src={heroImg}
                alt="Dimple Bhardwaj — React Developer"
                width={1024}
                height={1024}
                className="rounded-2xl w-full"
              />
            </div>
       
           
          </motion.div>
        </div>
      </div>
    </section>
  );
}
