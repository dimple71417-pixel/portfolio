import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dimple Bhardwaj — ReactJS Developer Portfolio" },
      { name: "description", content: "Portfolio of Dimple Bhardwaj — ReactJS Developer with 1.6+ years experience in React, Next.js, Redux, RTK Query. Building modern, scalable & user-centric web applications." },
      { name: "author", content: "Dimple Bhardwaj" },
      { property: "og:title", content: "Dimple Bhardwaj — ReactJS Developer" },
      { property: "og:description", content: "Building Modern, Scalable & User-Centric Web Applications with React & Next.js." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Dimple Bhardwaj",
        jobTitle: "ReactJS Developer",
        email: "dimplebhardwaj85807@gmail.com",
        telephone: "+91-8580771417",
        address: { "@type": "PostalAddress", addressLocality: "Una", addressRegion: "Himachal Pradesh", addressCountry: "IN" },
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </>
  );
}
