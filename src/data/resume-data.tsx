import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
   name: "Santiago Goncalvez",

   initials: "SG",

   location: "Buenos Aires, Argentina",

   locationLink: "https://www.google.com/maps/place/Buenos+Aires,+Argentina",

   about: "Frontend Developer especializado en React y TypeScript.",

   summary: (
      <>
         Desarrollo aplicaciones web con React y TypeScript enfocadas en
         arquitectura mantenible, experiencia de usuario y escalabilidad.
         Experiencia construyendo productos reales para clientes y proyectos
         full-stack con Next.js.
      </>
   ),

   avatarUrl: "https://github.com/santiagogoncalvez.png",

   personalWebsiteUrl: {
      name: "Portfolio",
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
         school: "Universidad Nacional de La Matanza",

         degree: "Ingeniería Informática (en curso)",

         start: "2023",

         end: "Presente",
      },
   ],

   work: [
      {
         company: "Nidotrama",

         link: "https://nidotrama.com",

         badges: ["React", "TypeScript", "Astro", "Sanity CMS"],

         title: "Frontend Developer (Freelance)",

         start: "Abr. 2025",

         end: "May. 2025",

         description:
            "E-commerce autogestionable desarrollado con Astro, React y Sanity CMS.",
         highlights: [
            "Implementación de catálogo autogestionable mediante Sanity CMS.",
         ],
      },

      {
         company: "Jorgelina Reales",

         link: "https://jorgelinareales.com.ar",

         badges: ["React", "TypeScript", "Astro", "Tailwind CSS"],

         title: "Frontend Developer (Freelance)",

         start: "Mar. 2025",

         end: "Mar. 2025",

         description:
            "Plataforma web optimizada para SEO, rendimiento y experiencia de usuario.",
         highlights: [
            "Optimización SEO y rendimiento alcanzando métricas 100/100 en Lighthouse.",
         ],
      },

      {
         company: "Any Giraldez",

         link: "https://anygiraldez.com",

         badges: ["React", "TypeScript", "Astro", "Tailwind CSS"],

         title: "Frontend Developer (Freelance)",

         start: "Feb. 2025",

         end: "Mar. 2025",

         description:
            "Landing page premium enfocada en identidad visual y conversión.",
         highlights: [
            "Desarrollo de experiencia visual premium alineada a la identidad de marca.",
         ],
      },
      {
         company: "Isabel López",

         link: "https://isabellopez.com.ar", // o la URL que corresponda

         badges: ["Astro", "React", "TypeScript", "Tailwind CSS"],

         title: "Frontend Developer (Freelance)",

         start: "Feb. 2025",

         end: "Feb. 2025",

         description:
            "Landing page profesional para coaching ontológico enfocada en conversión, experiencia de usuario y posicionamiento SEO.",
         highlights: [
            "Diseño de arquitectura visual y contenido orientados a conversión.",
         ],
      },
   ],

   skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Astro",
      "Tailwind CSS",
      "PostgreSQL",
      "Sanity CMS",
      "Vitest",
      "Git",
      "REST APIs",
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
            "Aplicación full-stack con autenticación, Server Actions y PostgreSQL.",

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
            "Cliente avanzado de Hacker News construido con React y TypeScript.",

         link: {
            label: "Demo",

            href: "https://hackerstories-dev.web.app",
         },
      },
      {
         title: "Tu País",

         techStack: ["JavaScript", "HTML", "CSS"],

         description:
            "Juego de adivinanzas geográficas desarrollado con JavaScript vanilla.",

         link: {
            label: "Demo",

            href: "https://santiagogoncalvez.github.io/tupais/",
         },
      },
   ],
} as const;
