import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
   name: "Santiago Goncalvez",

   initials: "SG",

   location: "Buenos Aires, Argentina",

   locationLink: "https://www.google.com/maps/place/Buenos+Aires,+Argentina",

   about: "Desarrollador Frontend especializado en React, JavaScript y TypeScript. Desarrollo interfaces modernas, rápidas y mantenibles, enfocadas en experiencia de usuario, rendimiento y escalabilidad.",

   summary: (
      <>
         <strong>Desarrollador Frontend</strong> con experiencia desarrollando
         aplicaciones y plataformas web modernas utilizando{" "}
         <strong>React</strong>, <strong>JavaScript</strong> y{" "}
         <strong>TypeScript</strong>.
         <br />
         Trabajo construyendo interfaces responsive, componentes reutilizables,
         integración de APIs REST y experiencias enfocadas en rendimiento,
         mantenibilidad y buenas prácticas frontend.
         <br />
         He desarrollado e-commerce, landing pages premium y plataformas web
         modernas utilizando React, Astro y Tailwind CSS, colaborando
         directamente con clientes desde la planificación hasta la
         implementación final.
         <br />
         También tengo experiencia trabajando con manejo de estado, consumo de
         APIs, dashboards y flujos frontend enfocados en mobile-first.
         <br />
         Actualmente continúo profundizando mis conocimientos en Next.js,
         arquitectura frontend y desarrollo de aplicaciones escalables.
      </>
   ),

   avatarUrl: "https://github.com/santiagogoncalvez.png",

   personalWebsiteUrl: "https://santiagogoncalvez.com",

   contact: {
      email: "santiago.goncalvez.dev@gmail.com",

      tel: "+54 9 11 3582-1266",

      social: [
         {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/santiagogoncalvez",
            icon: "linkedin",
         },

         {
            name: "GitHub",
            url: "https://github.com/santiagogoncalvez",
            icon: "github",
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
         company: "Freelance",

         link: "https://santiagogoncalvez.com",

         badges: ["Remoto"],

         title: "Frontend Developer",

         start: "feb. 2026",

         end: "Presente",

         description: (
            <>
               Desarrollo de plataformas web utilizando React, TypeScript,
               JavaScript y Astro. Implementación de interfaces responsive,
               integración de APIs REST, optimización de rendimiento y
               construcción de experiencias frontend modernas enfocadas en
               mantenibilidad y escalabilidad.
            </>
         ),
      },
   ],

   skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Astro",
      "Git",
      "APIs REST",
      "Responsive Design",
      "Frontend Architecture",
      "State Management",
      "UI Components",
      "Performance Optimization",
      "SCRUM",
      "Trabajo en equipo",
   ],

   projects: [
      {
         title: "Nidotrama E-commerce",

         techStack: [
            "React",
            "TypeScript",
            "Astro",
            "Sanity CMS",
            "Tailwind CSS",
         ],

         description:
            "E-commerce moderno con catálogo autogestionable, páginas de producto y experiencia responsive optimizada para rendimiento y experiencia de usuario.",

         link: {
            label: "Vista previa",

            href: "https://nidotrama.com",
         },
      },

      {
         title: "Jorgelina Reales - La Flor Sagrada",

         techStack: ["React", "TypeScript", "Astro", "SEO", "Tailwind CSS"],

         description:
            "Plataforma web optimizada para velocidad y posicionamiento orgánico, alcanzando métricas 100/100 en Google Lighthouse.",

         link: {
            label: "Vista previa",

            href: "https://jorgelinareales.com.ar",
         },
      },

      {
         title: "Any Giraldez - Estilista de Autor",

         techStack: ["React", "TypeScript", "Astro", "Tailwind CSS", "SEO"],

         description:
            "Landing page premium con foco en identidad visual, experiencia responsive y rendimiento en dispositivos móviles y escritorio.",

         link: {
            label: "Vista previa",

            href: "https://anygiraldez.com",
         },
      },
   ],
} as const;
