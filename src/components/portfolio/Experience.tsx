import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const responsibilities = [
  "Developed reusable React.js and Next.js components",
  "Integrated REST APIs with Redux & RTK Query",
  "Worked with Node.js and MongoDB on full-stack features",
  "Built fully responsive user interfaces",
  "Improved application performance and Core Web Vitals",
];

export function Experience() {
  return (
    <section id="experience" className="py-5 lg:py-24">
     <div className="max-w-5xl mx-auto">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="relative group"
  >
    {/* Glow Effect */}
    <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 rounded-3xl blur-lg opacity-50 group-hover:opacity-100 transition duration-500"></div>

    {/* Card */}
    <div className="relative glass rounded-3xl p-8 md:p-10 border border-primary/20 overflow-hidden">
      
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
        
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center shadow-lg">
            <Briefcase className="w-8 h-8 text-primary-foreground" />
          </div>

          <div>
            <h3 className="text-2xl font-bold">
              ReactJS Developer
            </h3>

            <p className="text-muted-foreground text-lg">
              LBM Solutions
            </p>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
          <Calendar className="w-4 h-4 text-primary" />
          <span className="font-medium">1.6+ Years Experience</span>
        </div>
      </div>

      {/* Responsibilities */}
      <div>
        <h4 className="font-semibold text-lg mb-5">
          Key Responsibilities
        </h4>

        <div className="grid md:grid-cols-2 gap-4">
          {responsibilities.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 p-4 rounded-xl bg-background/30 border border-border/50 hover:border-primary/40 transition-all"
            >
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <span className="text-sm leading-relaxed">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Circle */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
    </div>
  </motion.div>
</div>
    </section>
  );
}
