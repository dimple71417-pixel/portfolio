import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const socials = [
  {
    icon: Github,
    href: "https://github.com/yourusername", // Replace with your GitHub
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/dimple-bhardwaj/", // Replace with your LinkedIn
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:dimplebhardwaj85807@gmail.com",
    label: "Email",
  },
];

const quickLinks = ["About", "Skills", "Projects", "Contact"];

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-display font-bold text-xl gradient-text mb-3">
              Dimple Bhardwaj
            </h3>

            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Frontend Developer with 1.8+ years of experience building
              responsive, scalable, and user-friendly web applications using
              React.js, Next.js, JavaScript, Tailwind CSS, and modern frontend
              technologies.
            </p>

            <div className="inline-flex items-center gap-2 glass px-3 py-2 rounded-full">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-medium">
                Available for Work
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">
              Quick Links
            </h4>

            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit"
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="mt-6">
              <h5 className="font-medium mb-2">
                Tech Stack
              </h5>

              <div className="flex flex-wrap gap-2">
                {[
                  "React.js",
                  "Next.js",
                  "JavaScript",
                  "Tailwind",
                  "Bootstrap",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs glass px-3 py-1 rounded-full text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-semibold mb-4">
              Let's Connect
            </h4>

            <p className="text-sm text-muted-foreground mb-4">
              Open to React.js, Next.js, Frontend Developer and Web Development
              opportunities.
            </p>

            <div className="flex gap-3 mb-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="glass rounded-xl p-3 hover:scale-110 hover:text-primary transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

           
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Dimple Bhardwaj. All rights
              reserved.
            </p>

            <p className="text-center">
              Crafted with React.js, Next.js & ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}