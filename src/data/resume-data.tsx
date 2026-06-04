import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
   name: "Santiago Goncalvez",

   initials: "SG",

   location: "Buenos Aires, Argentina",

   locationLink: "https://www.google.com/maps/place/Buenos+Aires,+Argentina",

   about: "Desarrollador Frontend especializado en React y TypeScript.",

   summary: (
      <>
         <strong>Desarrollador Frontend</strong> con experiencia desarrollando
         aplicaciones y plataformas web modernas utilizando{" "}
         <strong>React</strong>, <strong>JavaScript</strong> y{" "}
         <strong>TypeScript</strong>.
         Trabajo construyendo interfaces responsive, componentes reutilizables,
         integración de APIs REST y experiencias enfocadas en rendimiento.
      </>
   ),

   avatarUrl: "https://github.com/santiagogoncalvez.png",

   personalWebsiteUrl: {
      name: "Web personal",
      url: "https://santiagogoncalvez.com",
      label: "santiagogoncalvez.com",
   },

   contact: {
      email: "santiago.goncalvez.dev@gmail.com",

      tel: "+54 9 11 3582-1266",

      social: [
         {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/santiagogoncalvez",
            icon: "linkedin",
            label: "santiagogoncalvez",
         },

         {
            name: "GitHub",
            url: "https://github.com/santiagogoncalvez",
            icon: "github",
            label: "santiagogoncalvez",
         },
      ],
   },

   education: [
      {
         school: "Ingeniería Informática (en curso)",

         degree:
            "Universidad Nacional de La Matanza. Formación enfocada en lógica, arquitectura de software y resolución de problemas.",

         start: "2023",

         end: "Presente",
      },
   ],

   work: [
      {
         company: "Nidotrama",

         link: "https://nidotrama.com",

         badges: ["React", "TypeScript", "Astro", "Sanity CMS", "Tailwind CSS"],

         title: "Frontend Developer (Freelance)",

         start: "Abr. 2025",

         end: "May. 2025",

         description:
            "Desarrollo de e-commerce para marca textil artesanal con catálogo autogestionable, páginas de producto y experiencia de compra optimizada.",

         highlights: [
            "Implementación de catálogo autogestionable con Sanity CMS",
            "Optimización de rendimiento y experiencia mobile-first",
            "Desarrollo de interfaz enfocada en conversión y usabilidad",
         ],
      },
      {
         company: "Jorgelina Reales",

         link: "https://jorgelinareales.com.ar",

         badges: ["React", "TypeScript", "Astro", "SEO", "Tailwind CSS"],

         title: "Frontend Developer",

         start: "Mar. 2025",

         end: "Mar. 2025",

         description:
            "Plataforma web optimizada para posicionamiento orgánico y velocidad de carga.",

         highlights: [
            "Métricas 100/100 en Google Lighthouse",
            "Optimización SEO técnica y rendimiento",
            "Experiencia responsive para todos los dispositivos",
         ],
      },
      {
         company: "Any Giraldez",

         link: "https://anygiraldez.com",

         badges: ["React", "TypeScript", "Astro", "Tailwind CSS", "SEO"],

         title: "Frontend Developer (Freelance)",

         start: "Feb. 2025",

         end: "Mar. 2025",

         description:
            "Landing page premium enfocada en transmitir una identidad visual sofisticada y moderna.",

         highlights: [
            "Diseño responsive optimizado para mobile y desktop",
            "Implementación de experiencia visual orientada a marca",
            "Optimización de rendimiento y accesibilidad",
         ],
      },
   ],

   skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Next.js",
      "Astro",
      "Tailwind CSS",
      "Git",
      "APIs REST",
      "GitHub",
      "SEO",
      "Sanity CMS",
   ],

   projects: [
      {
         title: "Next.js Dashboard",
         techStack: [
            "Next.js",
            "TypeScript",
            "PostgreSQL",
            "NextAuth",
            "Tailwind CSS",
         ],
         description:
            "Aplicación full-stack de administración con autenticación, Server Actions, Streaming, Suspense, validación con Zod y arquitectura basada en App Router.",
         link: {
            label: "GitHub",
            href: "https://github.com/santiagogoncalvez/nextjs-fullstack-dashboard",
         },
      },

      {
         title: "Hacker Stories",
         techStack: [
            "React",
            "TypeScript",
            "TanStack Query",
            "React Router",
            "Vitest",
         ],
         description:
            "Cliente avanzado de Hacker News con búsqueda, favoritos, historial, scroll infinito, testing y arquitectura escalable.",
         link: {
            label: "Demo",
            href: "https://hackerstories-dev.web.app",
         },
      },

      {
         title: "Tu País",
         techStack: ["JavaScript", "HTML", "CSS"],
         description:
            "Juego de adivinanzas geográficas construido sin frameworks, con estado global propio, routing por hash y enfoque en UX.",
         link: {
            label: "Demo",
            href: "https://santiagogoncalvez.github.io/tupais/",
         },
      },
   ],
} as const;
