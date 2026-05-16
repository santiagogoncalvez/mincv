import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
   name: "Santiago Goncalvez",

   initials: "SG",

   location: "Buenos Aires, Argentina",

   locationLink: "https://www.google.com/maps/place/Buenos+Aires,+Argentina",

   about: "Desarrollador Frontend especializado en JavaScript, React y TypeScript. Desarrollo interfaces modernas, rápidas y mantenibles, priorizando rendimiento y experiencia de usuario.",

   summary: (
      <>
         <strong>Desarrollador Frontend</strong> con experiencia construyendo
         aplicaciones y plataformas web modernas utilizando{" "}
         <strong>JavaScript</strong>, <strong>React</strong> y{" "}
         <strong>TypeScript</strong>.
         <br />
         Trabajo desarrollando interfaces responsive y mantenibles, integrando
         APIs REST y priorizando buenas prácticas, arquitectura frontend y
         optimización de rendimiento.
         <br />
         He desarrollado e-commerce, landing pages premium y plataformas
         autogestionables utilizando React, Astro y Tailwind CSS, colaborando
         directamente con clientes desde la planificación hasta la
         implementación final.
         <br />
         Actualmente curso Ingeniería Informática y busco seguir creciendo
         profesionalmente en equipos de desarrollo web.
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
            "Universidad Nacional de La Matanza. Enfoque en arquitectura de software, lógica algorítmica y resolución de problemas.",

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
               Desarrollo de plataformas web y experiencias digitales utilizando
               React, TypeScript, JavaScript y Astro. Implementación de
               interfaces responsive, integración de APIs REST y optimización de
               rendimiento enfocada en experiencia de usuario y mantenibilidad
               del código.
            </>
         ),
      },
   ],

   skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Astro",
      "APIs REST",
      "Git",
      "Diseño responsive",
      "Arquitectura frontend",
      "UX/UI",
      "Optimización de rendimiento",
      "Metodologías ágiles",
   ],

   projects: [
      {
         title: "Nidotrama E-commerce",

         techStack: [
            "Astro",
            "React",
            "TypeScript",
            "Sanity CMS",
            "Tailwind CSS",
         ],

         description:
            "E-commerce moderno para una marca textil artesanal con catálogo autogestionable, páginas de producto y carrito compartible, optimizado para rendimiento y experiencia de usuario.",

         link: {
            label: "Vista previa",

            href: "https://nidotrama.com",
         },
      },

      {
         title: "Jorgelina Reales - La Flor Sagrada",

         techStack: ["Astro", "React", "TypeScript", "SEO", "Tailwind CSS"],

         description:
            "Plataforma digital desarrollada con foco en velocidad, posicionamiento orgánico y optimización técnica, alcanzando métricas 100/100 en Google Lighthouse.",

         link: {
            label: "Vista previa",

            href: "https://jorgelinareales.com.ar",
         },
      },

      {
         title: "Any Giraldez - Estilista de Autor",

         techStack: ["Astro", "React", "TypeScript", "Tailwind CSS", "SEO"],

         description:
            "Landing page premium enfocada en transmitir una identidad visual sofisticada mediante una experiencia responsive optimizada para dispositivos móviles y escritorio.",

         link: {
            label: "Vista previa",

            href: "https://anygiraldez.com",
         },
      },
   ],
} as const;
