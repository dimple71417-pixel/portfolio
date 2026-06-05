import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Toaster as Toaster$1, toast } from "sonner";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, X, Menu, Sparkles, Download, Mail, Code2, Zap, Layout, Plug, Briefcase, Calendar, CheckCircle2, ExternalLink, Github, GraduationCap, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { z } from "zod";
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function ThemeToggle() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark = stored ? stored === "dark" : true;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: toggle,
      "aria-label": "Toggle theme",
      className: "glass rounded-full p-2.5 hover:scale-110 transition-transform",
      children: dark ? /* @__PURE__ */ jsx(Sun, { className: "w-4 h-4" }) : /* @__PURE__ */ jsx(Moon, { className: "w-4 h-4" })
    }
  );
}
const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" }
];
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsx(
    motion.nav,
    {
      initial: { y: -100 },
      animate: { y: 0 },
      transition: { duration: 0.6 },
      className: `fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? "py-3" : "py-5"}`,
      children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl px-5 py-3 flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("a", { href: "#home", className: "font-display font-bold text-lg gradient-text", children: "DB." }),
          /* @__PURE__ */ jsx("div", { className: "hidden lg:flex items-center gap-1", children: links.map((l) => /* @__PURE__ */ jsx(
            "a",
            {
              href: l.href,
              className: "px-3 py-1.5 text-sm rounded-lg hover:bg-primary/10 hover:text-primary transition-colors",
              children: l.label
            },
            l.href
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(ThemeToggle, {}),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "lg:hidden glass rounded-full p-2.5",
                onClick: () => setOpen(!open),
                "aria-label": "Menu",
                children: open ? /* @__PURE__ */ jsx(X, { className: "w-4 h-4" }) : /* @__PURE__ */ jsx(Menu, { className: "w-4 h-4" })
              }
            )
          ] })
        ] }),
        open && /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: -10 },
            animate: { opacity: 1, y: 0 },
            className: "lg:hidden glass mt-2 rounded-2xl p-4 flex flex-col gap-1",
            children: links.map((l) => /* @__PURE__ */ jsx(
              "a",
              {
                href: l.href,
                onClick: () => setOpen(false),
                className: "px-3 py-2 rounded-lg hover:bg-primary/10",
                children: l.label
              },
              l.href
            ))
          }
        )
      ] })
    }
  );
}
const heroImg = "/assets/hero-dev-GBn5nxW0.jpg";
function Hero() {
  return /* @__PURE__ */ jsx("section", { id: "home", className: "min-h-screen flex items-center pt-28 pb-16", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -40 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.8 },
        children: [
          /* @__PURE__ */ jsxs("div", { className: "glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-sm", children: [
            /* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5 text-primary" }),
            "Available for opportunities"
          ] }),
          /* @__PURE__ */ jsxs("h1", { className: "text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-5", children: [
            "Hi, I'm ",
            /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Dimple Bhardwaj" })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-display font-medium text-muted-foreground mb-4", children: "ReactJS Developer" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed", children: "Building Modern, Scalable & User-Centric Web Applications with React, Next.js, and the modern frontend ecosystem." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "/Dimple-Bhardwaj.pdf",
                download: true,
                className: "gradient-bg glow text-primary-foreground rounded-xl px-6 py-3 font-medium inline-flex items-center gap-2 hover:scale-105 transition-transform",
                children: [
                  /* @__PURE__ */ jsx(Download, { className: "w-4 h-4" }),
                  " Download Resume"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "#contact",
                className: "glass rounded-xl px-6 py-3 font-medium inline-flex items-center gap-2 hover:scale-105 transition-transform",
                children: [
                  /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4" }),
                  " Contact Me"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex gap-8 mt-12", children: [
            { n: "1.6+", l: "Years Exp" },
            { n: "10+", l: "Projects" },
            { n: "15+", l: "Technologies" }
          ].map((s) => /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-display font-bold gradient-text", children: s.n }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: s.l })
          ] }, s.l)) })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.8, delay: 0.2 },
        className: "relative",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 gradient-bg blur-3xl opacity-30 rounded-full" }),
          /* @__PURE__ */ jsx("div", { className: "relative glass rounded-3xl p-3 glow", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: heroImg,
              alt: "Dimple Bhardwaj — React Developer",
              width: 1024,
              height: 1024,
              className: "rounded-2xl w-full"
            }
          ) })
        ]
      }
    )
  ] }) }) });
}
const items = [
  { icon: Code2, title: "1.6+ Years", desc: "Hands-on ReactJS development experience building production apps." },
  { icon: Zap, title: "React & Next.js", desc: "Expert in React, Next.js, Redux, RTK Query and modern tooling." },
  { icon: Layout, title: "Responsive UI", desc: "Pixel-perfect, mobile-first interfaces with Tailwind CSS." },
  { icon: Plug, title: "API Integration", desc: "Seamless REST API integration with robust state management." }
];
function About() {
  return /* @__PURE__ */ jsx("section", { id: "about", className: "py-5 lg:py-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "text-center max-w-2xl mx-auto mb-16",
        children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-widest text-primary mb-3", children: "About Me" }),
          /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold mb-4", children: [
            "Crafting ",
            /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "digital experiences" }),
            " that scale"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg leading-relaxed", children: "I'm a passionate ReactJS Developer with strong frontend skills and a focus on building scalable, user-centric web applications. I love turning complex problems into clean, accessible interfaces." })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: items.map((item, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.1 },
        className: "glass rounded-2xl p-6 hover:scale-[1.03] transition-transform",
        children: [
          /* @__PURE__ */ jsx("div", { className: "gradient-bg w-12 h-12 rounded-xl flex items-center justify-center mb-4 glow", children: /* @__PURE__ */ jsx(item.icon, { className: "w-5 h-5 text-primary-foreground" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-display font-semibold text-lg mb-1", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: item.desc })
        ]
      },
      item.title
    )) })
  ] }) });
}
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
      { name: "Bootstrap", level: 85 }
    ]
  },
  {
    title: "State Management",
    skills: [
      { name: "Redux", level: 88 },
      { name: "RTK Query", level: 85 },
      { name: "Axios", level: 90 }
    ]
  },
  {
    title: "Backend Basics",
    skills: [
      { name: "Node.js", level: 72 },
      { name: "Express.js", level: 70 },
      { name: "MongoDB", level: 70 }
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 95 }
    ]
  }
];
function Skills() {
  return /* @__PURE__ */ jsx("section", { id: "skills", className: "py-5 lg:py-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "text-center max-w-2xl mx-auto mb-16",
        children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-widest text-primary mb-3", children: "Skills" }),
          /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold mb-4", children: [
            "My ",
            /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "tech stack" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg", children: "Technologies and tools I work with daily." })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: groups.map((g, gi) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: gi * 0.1 },
        className: "glass rounded-2xl p-7",
        children: [
          /* @__PURE__ */ jsxs("h3", { className: "font-display font-semibold text-xl mb-6 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full gradient-bg" }),
            g.title
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-5", children: g.skills.map((s, i) => /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm mb-1.5", children: [
              /* @__PURE__ */ jsx("span", { className: "font-medium", children: s.name }),
              /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground", children: [
                s.level,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "h-2 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { width: 0 },
                whileInView: { width: `${s.level}%` },
                viewport: { once: true },
                transition: { duration: 1, delay: i * 0.05, ease: "easeOut" },
                className: "h-full gradient-bg rounded-full"
              }
            ) })
          ] }, s.name)) })
        ]
      },
      g.title
    )) })
  ] }) });
}
const responsibilities = [
  "Developed reusable React.js and Next.js components",
  "Integrated REST APIs with Redux & RTK Query",
  "Worked with Node.js and MongoDB on full-stack features",
  "Built fully responsive user interfaces",
  "Improved application performance and Core Web Vitals"
];
function Experience() {
  return /* @__PURE__ */ jsx("section", { id: "experience", className: "py-5 lg:py-24", children: /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto", children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      whileHover: { y: -5 },
      className: "relative group",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -inset-1 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 rounded-3xl blur-lg opacity-50 group-hover:opacity-100 transition duration-500" }),
        /* @__PURE__ */ jsxs("div", { className: "relative glass rounded-3xl p-8 md:p-10 border border-primary/20 overflow-hidden", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-5", children: [
              /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center shadow-lg", children: /* @__PURE__ */ jsx(Briefcase, { className: "w-8 h-8 text-primary-foreground" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold", children: "ReactJS Developer" }),
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg", children: "LBM Solutions" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4 text-primary" }),
              /* @__PURE__ */ jsx("span", { className: "font-medium", children: "1.6+ Years Experience" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-lg mb-5", children: "Key Responsibilities" }),
            /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-4", children: responsibilities.map((item) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex items-start gap-3 p-4 rounded-xl bg-background/30 border border-border/50 hover:border-primary/40 transition-all",
                children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-primary mt-0.5 shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm leading-relaxed", children: item })
                ]
              },
              item
            )) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl" })
        ] })
      ]
    }
  ) }) });
}
const greenfin = "/assets/project-greenfin-U2Ib2Dow.jpg";
const venture = "/assets/project-venture-B6uQ6afx.jpg";
const stylehub = "/assets/project-stylehub-Cu6oopKb.jpg";
const admin = "/assets/project-admin-B5pP9pGB.jpg";
const auth = "/assets/project-auth-6ZUrOoLH.jpg";
const projects = [
  {
    title: "GreenFin",
    desc: "KYC system, Binary Tree structure, Support Ticket Management, API integrations and dynamic user interfaces.",
    image: greenfin,
    tech: ["React", "Redux", "RTK Query", "Node.js", "MongoDB"]
  },
  {
    title: "Venture Gold",
    desc: "Wallet management and cryptocurrency modules with secure transaction workflows.",
    image: venture,
    tech: ["Next.js", "TypeScript", "Tailwind", "REST API"]
  },
  {
    title: "StyleHub",
    desc: "E-commerce clothing platform with responsive product listing pages and shopping features.",
    image: stylehub,
    tech: ["React", "Redux", "Tailwind", "Stripe"]
  },
  {
    title: "Admin Dashboard",
    desc: "Analytics dashboards, charts, reports and full user management systems.",
    image: admin,
    tech: ["Next.js", "Recharts", "RTK Query", "Tailwind"]
  },
  {
    title: "Authentication & User Management",
    desc: "Login, Registration, Role-Based Access, Form Validation and Profile Management.",
    image: auth,
    tech: ["React", "JWT", "Formik", "Yup"]
  }
];
function Projects() {
  return /* @__PURE__ */ jsx("section", { id: "projects", className: "py-5 lg:py-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "text-center max-w-2xl mx-auto mb-16",
        children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-widest text-primary mb-3", children: "Projects" }),
          /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold mb-4", children: [
            "Featured ",
            /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "work" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: projects.map((p, i) => /* @__PURE__ */ jsxs(
      motion.article,
      {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.08 },
        className: "glass rounded-2xl overflow-hidden group hover:scale-[1.02] transition-all hover:glow",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden aspect-[16/10]", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: p.image,
                alt: p.title,
                loading: "lazy",
                className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center gap-2 pb-4", children: [
              /* @__PURE__ */ jsxs("a", { href: "#", className: "gradient-bg text-primary-foreground rounded-lg px-3 py-1.5 text-xs font-medium inline-flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsx(ExternalLink, { className: "w-3 h-3" }),
                " Live"
              ] }),
              /* @__PURE__ */ jsxs("a", { href: "#", className: "glass rounded-lg px-3 py-1.5 text-xs font-medium inline-flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsx(Github, { className: "w-3 h-3" }),
                " Code"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-display font-bold text-lg mb-2", children: p.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-4 leading-relaxed", children: p.desc }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5", children: p.tech.map((t) => /* @__PURE__ */ jsx("span", { className: "text-[11px] px-2 py-1 rounded-md bg-primary/10 text-primary font-medium", children: t }, t)) })
          ] })
        ]
      },
      p.title
    )) })
  ] }) });
}
const edu = [
  { degree: "B.Tech (CSE)", school: "KC Institute of Engineering and Technology", year: "2022", score: "77.9%" },
  { degree: "12th Standard", school: "Govt. Sr. Sec. School Rapoh Missran", year: "2018", score: "84%" },
  { degree: "10th Standard", school: "Govt. Sr. Sec. School Chaksarai", year: "2016", score: "80%" }
];
function Education() {
  return /* @__PURE__ */ jsx("section", { id: "education", className: "py-5 lg:py-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "text-center max-w-2xl mx-auto mb-16",
        children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-widest text-primary mb-3", children: "Education" }),
          /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold mb-4", children: [
            "Academic ",
            /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "background" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-5 max-w-5xl mx-auto", children: edu.map((e, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.1 },
        className: "glass rounded-2xl p-6 hover:scale-[1.03] transition-transform",
        children: [
          /* @__PURE__ */ jsx("div", { className: "gradient-bg w-12 h-12 rounded-xl flex items-center justify-center mb-4 glow", children: /* @__PURE__ */ jsx(GraduationCap, { className: "w-5 h-5 text-primary-foreground" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-display font-bold text-lg", children: e.degree }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-3", children: e.school }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-baseline pt-3 border-t border-border", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: e.year || "—" }),
            /* @__PURE__ */ jsx("span", { className: "gradient-text font-display font-bold text-xl", children: e.score })
          ] })
        ]
      },
      e.degree
    )) })
  ] }) });
}
const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1e3)
});
const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "dimplebhardwaj85807@gmail.com",
    href: "mailto:dimplebhardwaj85807@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 85807 71417",
    href: "tel:+918580771417"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Una, Himachal Pradesh",
    href: "#"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/dimple-bhardwaj",
    href: "https://www.linkedin.com/in/dimple-bhardwaj/"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/yourusername",
    href: "https://github.com/yourusername"
  }
];
function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success("Message sent! I'll get back to you soon.");
      setForm({
        name: "",
        email: "",
        message: ""
      });
      setLoading(false);
    }, 800);
  };
  return /* @__PURE__ */ jsx(
    "section",
    {
      id: "contact",
      className: "py-16 sm:py-20 lg:py-5 lg:py-24 overflow-hidden",
      children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "text-center max-w-2xl mx-auto mb-10 sm:mb-16",
            children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm uppercase tracking-widest text-primary mb-3", children: "Contact" }),
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight", children: [
                "Let's ",
                /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "work together" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-base sm:text-lg px-2", children: "Have a project in mind or just want to say hi? My inbox is always open." })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              className: "lg:col-span-2 space-y-3 sm:space-y-4",
              children: contacts.map((c) => /* @__PURE__ */ jsxs(
                "a",
                {
                  href: c.href,
                  target: c.label === "LinkedIn" || c.label === "GitHub" ? "_blank" : void 0,
                  rel: c.label === "LinkedIn" || c.label === "GitHub" ? "noopener noreferrer" : void 0,
                  className: "glass rounded-xl sm:rounded-2xl p-3 sm:p-5 flex items-center gap-3 sm:gap-4 hover:scale-[1.02] transition-transform",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "gradient-bg w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(c.icon, { className: "w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" }) }),
                    /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground", children: c.label }),
                      /* @__PURE__ */ jsx("div", { className: "font-medium text-sm sm:text-base break-all", children: c.value })
                    ] })
                  ]
                },
                c.label
              ))
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.form,
            {
              onSubmit: submit,
              initial: { opacity: 0, x: 20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              className: "lg:col-span-3 glass rounded-xl sm:rounded-2xl p-4 sm:p-7 space-y-4",
              children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { className: "text-sm font-medium mb-1.5 block", children: "Name" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      value: form.name,
                      onChange: (e) => setForm({ ...form, name: e.target.value }),
                      maxLength: 100,
                      className: "w-full rounded-xl bg-background/50 border border-border px-3 sm:px-4 py-2.5 sm:py-3 outline-none focus:border-primary transition-colors text-sm sm:text-base",
                      placeholder: "Your name"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { className: "text-sm font-medium mb-1.5 block", children: "Email" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "email",
                      value: form.email,
                      onChange: (e) => setForm({ ...form, email: e.target.value }),
                      maxLength: 255,
                      className: "w-full rounded-xl bg-background/50 border border-border px-3 sm:px-4 py-2.5 sm:py-3 outline-none focus:border-primary transition-colors text-sm sm:text-base",
                      placeholder: "you@email.com"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { className: "text-sm font-medium mb-1.5 block", children: "Message" }),
                  /* @__PURE__ */ jsx(
                    "textarea",
                    {
                      value: form.message,
                      onChange: (e) => setForm({ ...form, message: e.target.value }),
                      maxLength: 1e3,
                      rows: 5,
                      className: "w-full rounded-xl bg-background/50 border border-border px-3 sm:px-4 py-2.5 sm:py-3 outline-none focus:border-primary transition-colors resize-none text-sm sm:text-base",
                      placeholder: "Tell me about your project..."
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    type: "submit",
                    disabled: loading,
                    className: "w-full sm:w-auto gradient-bg glow text-primary-foreground rounded-xl px-6 py-3 font-medium inline-flex justify-center items-center gap-2 hover:scale-105 transition-transform disabled:opacity-60",
                    children: [
                      /* @__PURE__ */ jsx(Send, { className: "w-4 h-4" }),
                      loading ? "Sending..." : "Send Message"
                    ]
                  }
                )
              ]
            }
          )
        ] })
      ] })
    }
  );
}
const socials = [
  {
    icon: Github,
    href: "https://github.com/yourusername",
    // Replace with your GitHub
    label: "GitHub"
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/dimple-bhardwaj/",
    // Replace with your LinkedIn
    label: "LinkedIn"
  },
  {
    icon: Mail,
    href: "mailto:dimplebhardwaj85807@gmail.com",
    label: "Email"
  }
];
const quickLinks = ["About", "Skills", "Projects", "Contact"];
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "py-12 border-t border-border", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8 mb-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display font-bold text-xl gradient-text mb-3", children: "Dimple Bhardwaj" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-4 leading-relaxed", children: "Frontend Developer with 1.8+ years of experience building responsive, scalable, and user-friendly web applications using React.js, Next.js, JavaScript, Tailwind CSS, and modern frontend technologies." }),
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 glass px-3 py-2 rounded-full", children: [
          /* @__PURE__ */ jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Available for Work" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-display font-semibold mb-4", children: "Quick Links" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2", children: quickLinks.map((link) => /* @__PURE__ */ jsx(
          "a",
          {
            href: `#${link.toLowerCase()}`,
            className: "text-sm text-muted-foreground hover:text-primary transition-colors w-fit",
            children: link
          },
          link
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
          /* @__PURE__ */ jsx("h5", { className: "font-medium mb-2", children: "Tech Stack" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: [
            "React.js",
            "Next.js",
            "JavaScript",
            "Tailwind",
            "Bootstrap"
          ].map((tech) => /* @__PURE__ */ jsx(
            "span",
            {
              className: "text-xs glass px-3 py-1 rounded-full text-muted-foreground",
              children: tech
            },
            tech
          )) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-display font-semibold mb-4", children: "Let's Connect" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "Open to React.js, Next.js, Frontend Developer and Web Development opportunities." }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-3 mb-6", children: socials.map((social) => /* @__PURE__ */ jsx(
          "a",
          {
            href: social.href,
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": social.label,
            className: "glass rounded-xl p-3 hover:scale-110 hover:text-primary transition-all",
            children: /* @__PURE__ */ jsx(social.icon, { className: "w-5 h-5" })
          },
          social.label
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "pt-6 border-t border-border", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Dimple Bhardwaj. All rights reserved."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-center", children: "Crafted with React.js, Next.js & ❤️" })
    ] }) })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(About, {}),
      /* @__PURE__ */ jsx(Skills, {}),
      /* @__PURE__ */ jsx(Experience, {}),
      /* @__PURE__ */ jsx(Projects, {}),
      /* @__PURE__ */ jsx(Education, {}),
      /* @__PURE__ */ jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(Toaster, {})
  ] });
}
export {
  Index as component
};
