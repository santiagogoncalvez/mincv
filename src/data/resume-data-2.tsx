import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
   name: "Santiago Goncalvez",

   initials: "SG",

   location: "Morón, Buenos Aires, Argentina",

   locationLink:
      "https://www.google.com/maps/place/B1708+Mor%C3%B3n,+Provincia+de+Buenos+Aires",

   about: "Frontend Developer especializado en React, TypeScript y Next.js.",

   summary: (
      <>
         Frontend Developer con experiencia desarrollando productos para
         clientes utilizando React, TypeScript, Next.js y Astro. Me enfoco en
         construir interfaces rápidas, mantenibles y orientadas a la experiencia
         de usuario.
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
            label: "Santiago Goncalvez",
         },

         {
            name: "GitHub",
            url: "https://github.com/santiagogoncalvez",
            icon: "github",
            label: "Santiago Goncalvez",
         },
      ],
   },

   education: [
      {
         school: "Universidad Nacional de la Matanza",

         degree:
            "Grado en Ingeniería, Ingeniería Informática. Cursé el primer año de una carrera orientada al desarrollo de software y la resolución de problemas complejos. Durante esta etapa adquirí bases de programación estructurada, lógica algorítmica, fundamentos de sistemas y pensamiento computacional. Complemento esta formación con proyectos prácticos de desarrollo frontend utilizando React y TypeScript, aplicando buenas prácticas de arquitectura, optimización de rendimiento y experiencia de usuario.",

         start: "jul. 2023",

         end: "jul. 2025",
      },
   ],
   courses: [
      {
         name: "Next.js App Router Fundamentals de Vercel",

         start: "may. 2026",
         end: "may. 2026",
      },
      {
         name: "Especialización en React de Midudev",

         start: "nov. 2025",
         end: "ene. 2026",
      },
      {
         name: "Eloquent JavaScript de Marijn Haverbeke",

         start: "ene. 2025",
         end: "abr. 2025",
      },
   ],

   languages: [
      {
         name: "Español",
         level: "Nativo",
      },
      {
         name: "Inglés",
         level: "B1",
      },
   ],

   work: [
      {
         company: "Freelance",

         link: "",

         badges: ["React", "TypeScript", "Astro", "Sanity CMS", "Tailwind CSS"],

         title: "Frontend Developer",

         start: "feb. 2026",

         end: "actualidad",

         description: `Desarrollo soluciones web enfocadas en la conversión, el posicionamiento orgánico y la construcción de experiencias digitales memorables. Trabajo junto a marcas personales y emprendimientos para transformar su identidad en plataformas rápidas, visualmente atractivas y orientadas a resultados, acompañando el proceso desde la conceptualización hasta la puesta en producción.
            Mi enfoque combina diseño centrado en el usuario, arquitectura frontend moderna y optimización técnica para lograr sitios que no solo se vean bien, sino que también generen impacto comercial. Priorizo el rendimiento, la accesibilidad y el SEO como pilares fundamentales de cada proyecto.`,

         // highlights: [
         //    "",
         // ],
      },
      {
         company: "Nidotrama",

         link: "https://nidotrama.com",

         badges: ["Astro", "React", "TypeScript", "Sanity CMS", "Tailwind CSS"],

         title: "Frontend Developer (Freelance)",

         start: "abr. 2026",

         end: "may. 2026",

         description:
            "Desarrollo integral de una tienda online moderna para una marca de productos textiles hechos a mano.",

         highlights: [
            "Diseño e implementación de una experiencia de compra intuitiva y optimizada para todos los dispositivos.",
            "Desarrollo del catálogo de productos, páginas de detalle y carrito compartible.",
            "Integración con Sanity CMS para la autogestión de contenidos y productos.",
            "Optimización del rendimiento y mejora de Core Web Vitals para garantizar tiempos de carga reducidos.",
            "Construcción de una arquitectura escalable utilizando Astro, React y TypeScript.",
         ],
      },

      {
         company: "Jorgelina Reales",

         link: "https://jorgelinareales.com.ar",

         badges: [
            "Astro",
            "JavaScript",
            "Tailwind CSS",
            "SEO Técnico",
            "Lighthouse",
         ],

         title: "Frontend Developer (Freelance)",

         start: "mar. 2026",

         end: "mar. 2026",

         description:
            "Desarrollo y optimización de la plataforma digital de una marca vinculada al desarrollo personal y la espiritualidad, trasladando su esencia al entorno digital mediante una experiencia boutique de alta calidad.",

         highlights: [
            "Implementación de una arquitectura basada en Astro para maximizar la velocidad de carga.",
            "Obtención de una puntuación de 100/100 en Google Lighthouse en Performance, Accessibility, Best Practices y SEO.",
            "Diseño de una interfaz alineada con la identidad visual y narrativa de la marca.",
            "Configuración avanzada de SEO técnico, favoreciendo una rápida indexación y posicionamiento orgánico.",
            "Optimización integral de Core Web Vitals y experiencia móvil.",
         ],
      },

      {
         company: "Any Giraldez",

         link: "https://anygiraldez.com",

         badges: ["Astro", "JavaScript", "Tailwind CSS", "SEO", "Lighthouse"],

         title: "Frontend Developer (Freelance)",

         start: "feb. 2026",

         end: "mar. 2026",

         description:
            "Desarrollo integral de una landing page premium orientada al posicionamiento de una marca personal vinculada al mundo de la moda y la televisión.",

         highlights: [
            "Traducción de una estética de autor y boutique a una experiencia digital sofisticada.",
            "Alcance de métricas sobresalientes de rendimiento: 100/100 en Desktop y 95/100 en Mobile según Google Lighthouse.",
            "Optimización completa de Core Web Vitals y accesibilidad.",
            "Implementación de metadatos Open Graph y buenas prácticas SEO.",
            "Diseño de una interfaz Dark Mode con una propuesta visual alineada con un posicionamiento de lujo.",
         ],
      },

      {
         company: "Isabel López",

         link: "https://isabellopez.com.ar",

         badges: [
            "Astro",
            "JavaScript",
            "Tailwind CSS",
            "HTML5",
            "CSS3",
            "SEO Técnico",
         ],

         title: "Frontend Developer (Freelance)",

         start: "feb. 2026",

         end: "feb. 2026",

         description:
            "Desarrollo de una landing page orientada a la conversión, diseñada para transmitir cercanía, confianza y profesionalismo.",

         highlights: [
            "Diseño editorial responsive con una arquitectura visual asimétrica y tipografía fluida.",
            "Optimización SEO mediante una correcta estructuración de metadatos y contenidos.",
            "Colaboración en la jerarquización del mensaje y el refinamiento del copywriting para potenciar la conversión.",
            "Optimización de recursos visuales, configuración de favicons multiplataforma y mejora del rendimiento general del sitio.",
         ],
      },
      {
         company: "Freelance",

         link: "",

         badges: [
            "Google Workspace",
            "Microsoft Office",
            "Windows",
            "AnyDesk",
            "Zoom",
            "Google Meet",
            "OBS",
         ],

         title: "Asistente Virtual y Soporte Tecnológico Independiente",

         start: "nov. 2024",

         end: "ene. 2026",

         description:
            "Brindé asistencia virtual y soporte tecnológico a profesionales independientes, facilitando la adopción y el uso eficiente de herramientas digitales para sus actividades diarias.",

         highlights: [
            "Gestión, organización y mantenimiento de documentación digital mediante Google Workspace y Microsoft Office.",
            "Resolución remota de incidencias técnicas utilizando AnyDesk, incluyendo diagnóstico, optimización y configuración de equipos Windows.",
            "Configuración y soporte de herramientas de comunicación y videoconferencia como Zoom, Google Meet y OBS.",
            "Implementación de backups, instalación de software y asistencia en tareas de mantenimiento tecnológico.",
            "Comunicación de soluciones técnicas de forma clara y accesible para usuarios no especializados.",
         ],
      },
   ],

   skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Astro Framework",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
      "REST APIs",
      "TanStack Query",
      "State Management",
      "Git",
      "GitHub",
      "Sanity CMS",
      "SEO",
      "UX/UI",
      "Rendimiento Web",
      "Resolución de problemas",
      "Atención al detalle",
      "Proactividad",
      "Comunicación",
   ],

   projects: [
      {
         title: "resu",
         techStack: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Strapi v5",
            "PostgreSQL",
            "Gemini",
            "Vercel",
         ],
         description:
            "Plataforma para generar, editar, guardar y organizar resúmenes de videos de YouTube utilizando inteligencia artificial.",
         link: {
            label: "Web",
            href: "https://resu.santiagogoncalvez.com",
         },
      },

      {
         title: "Admin Dashboard",
         techStack: [
            "Next.js",
            "React",
            "TypeScript",
            "PostgreSQL",
            "NextAuth",
            "Tailwind CSS",
         ],
         description:
            "Desarrollo de una plataforma administrativa moderna utilizando Next.js App Router, enfocada en la gestión de información, usuarios y métricas dentro de un dashboard.",
         link: {
            label: "GitHub",
            href: "https://admindashboard.santiagogoncalvez.com",
         },
      },

      {
         title: "Hacker Stories",
         techStack: [
            "React",
            "TypeScript",
            "React Router",
            "Vitest",
            "REST APIs",
            "CSS",
         ],
         description:
            "Desarrollo de un cliente de Hacker News utilizando React y TypeScript, enfocado en la experiencia de usuario, rendimiento y consumo de APIs REST.",
         link: {
            label: "Demo",
            href: "https://hackerstories.santiagogoncalvez.com",
         },
      },
   ],
} as const;
