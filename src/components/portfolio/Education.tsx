import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const edu = [
  { degree: "B.Tech (CSE)", school: "KC Institute of Engineering and Technology", year: "2022", score: "77.9%" },
  { degree: "12th Standard", school: "Govt. Sr. Sec. School Rapoh Missran", year: "2018", score: "84%" },
  { degree: "10th Standard", school: "Govt. Sr. Sec. School Chaksarai", year: "2016", score: "80%" },
];

export function Education() {
  return (
    <section id="education" className="py-5 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary mb-3">Education</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Academic <span className="gradient-text">background</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {edu.map((e, i) => (
            <motion.div
              key={e.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover:scale-[1.03] transition-transform"
            >
              <div className="gradient-bg w-12 h-12 rounded-xl flex items-center justify-center mb-4 glow">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-lg">{e.degree}</h3>
              <p className="text-sm text-muted-foreground mb-3">{e.school}</p>
              <div className="flex justify-between items-baseline pt-3 border-t border-border">
                <span className="text-xs text-muted-foreground">{e.year || "—"}</span>
                <span className="gradient-text font-display font-bold text-xl">{e.score}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
