import { motion } from "framer-motion";

const groups = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 92 },
      { name: "Next.js", level: 88 },
      { name: "JavaScript ES6+", level: 90 },
      { name: "TypeScript", level: 82 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    title: "State Management",
    skills: [
      { name: "Redux", level: 88 },
      { name: "RTK Query", level: 85 },
      { name: "Axios", level: 90 },
    ],
  },
  {
    title: "Backend Basics",
    skills: [
      { name: "Node.js", level: 72 },
      { name: "Express.js", level: 70 },
      { name: "MongoDB", level: 70 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 95 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-5 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary mb-3">Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">tech stack</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I work with daily.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1 }}
              className="glass rounded-2xl p-7"
            >
              <h3 className="font-display font-semibold text-xl mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full gradient-bg" />
                {g.title}
              </h3>
              <div className="space-y-5">
                {g.skills.map((s, i) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium">{s.name}</span>
                      <span className="text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.05, ease: "easeOut" }}
                        className="h-full gradient-bg rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
