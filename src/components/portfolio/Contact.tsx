import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "dimplebhardwaj85807@gmail.com",
    href: "mailto:dimplebhardwaj85807@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 85807 71417",
    href: "tel:+918580771417",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Una, Himachal Pradesh",
    href: "#",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/dimple-bhardwaj",
    href: "https://www.linkedin.com/in/dimple-bhardwaj/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/yourusername",
    href: "https://github.com/yourusername",
  },
];

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
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
        message: "",
      });

      setLoading(false);
    }, 800);
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-5 lg:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
        >
          <p className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3">
            Contact
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Let's <span className="gradient-text">work together</span>
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg px-2">
            Have a project in mind or just want to say hi? My inbox is always
            open.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-3 sm:space-y-4"
          >
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={
                  c.label === "LinkedIn" || c.label === "GitHub"
                    ? "_blank"
                    : undefined
                }
                rel={
                  c.label === "LinkedIn" || c.label === "GitHub"
                    ? "noopener noreferrer"
                    : undefined
                }
                className="glass rounded-xl sm:rounded-2xl p-3 sm:p-5 flex items-center gap-3 sm:gap-4 hover:scale-[1.02] transition-transform"
              >
                <div className="gradient-bg w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0">
                  <c.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">
                    {c.label}
                  </div>

                  <div className="font-medium text-sm sm:text-base break-all">
                    {c.value}
                  </div>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass rounded-xl sm:rounded-2xl p-4 sm:p-7 space-y-4"
          >
            {/* Name */}
            <div>
              <label className="text-sm font-medium mb-1.5 block">
                Name
              </label>

              <input
                type="text"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                maxLength={100}
                className="w-full rounded-xl bg-background/50 border border-border px-3 sm:px-4 py-2.5 sm:py-3 outline-none focus:border-primary transition-colors text-sm sm:text-base"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium mb-1.5 block">
                Email
              </label>

              <input
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                maxLength={255}
                className="w-full rounded-xl bg-background/50 border border-border px-3 sm:px-4 py-2.5 sm:py-3 outline-none focus:border-primary transition-colors text-sm sm:text-base"
                placeholder="you@email.com"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm font-medium mb-1.5 block">
                Message
              </label>

              <textarea
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                maxLength={1000}
                rows={5}
                className="w-full rounded-xl bg-background/50 border border-border px-3 sm:px-4 py-2.5 sm:py-3 outline-none focus:border-primary transition-colors resize-none text-sm sm:text-base"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto gradient-bg glow text-primary-foreground rounded-xl px-6 py-3 font-medium inline-flex justify-center items-center gap-2 hover:scale-105 transition-transform disabled:opacity-60"
            >
              <Send className="w-4 h-4" />

              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}