import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
   name: "Santiago Goncalvez",
   initials: "SG",
   location: "Buenos Aires, Argentina",
   locationLink: "https://www.google.com/maps/place/Buenos+Aires,+Argentina",
   about: "Desarrollador Frontend (React & TypeScript). Estudiante de Ingeniería Informática. Enfocado en construir interfaces rápidas, mantenibles y bien pensadas, con especial atención al rendimiento y la experiencia de usuario.",
   summary: (
      <>
         <strong>Desarrollador Frontend</strong> con foco en{" "}
         <strong>React</strong> y <strong>TypeScript</strong>. Me especializo en
         construir interfaces eficientes y escalables, cuidando la arquitectura
         de código y la experiencia de usuario. He desarrollado aplicaciones con
         routing avanzado, scroll infinito, persistencia de datos y manejo de
         estado global. Busco mi primera oportunidad profesional en equipos de
         producto donde aportar soluciones claras y de impacto real.
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
            "Universidad Nacional de La Matanza. Enfoque en lógica algorítmica y resolución de problemas.",
         start: "2023",
         end: "Presente",
      },
   ],
   work: [
      // Sin experiencia laboral formal aún.
   ],
   skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML & CSS",
      "Tailwind CSS",
      // "React Query (TanStack Query)",
      // "Redux Toolkit",
      // "Zustand",
      // "Gestión de estado",
      // "React Router",
      "Astro",
      "Vitest",
      // "Testing unitario e integración",
      // "Optimización de rendimiento",
      // "Experiencia de usuario (UX)",
      "Diseño responsive",
      // "Browser APIs / DOM",
      // "Git",
   ],
   projects: [
      // {
      //    title: "Tech Test: Data Management Dashboard",
      //    techStack: ["React", "TypeScript", "React Query", "Vite"],
      //    description:
      //       "Dashboard de usuarios con filtrado avanzado, ordenamiento multicapa y recuperación de datos. Enfocado en optimización de rendimiento y manejo de estado asíncrono.",
      //    link: {
      //       label: "Vista previa",
      //       href: "https://userops-dashboard.web.app",
      //    },
      // },
      {
         title: "Hacker Stories",
         techStack: [
            "React",
            "TypeScript",
            "React Query",
            "React Router",
            "Vitest",
            "Vite",
         ],
         description:
            "Cliente avanzado de Hacker News con scroll infinito, persistencia de favoritos, gestión de historial de búsqueda y navegación optimizada. Incluye tests unitarios y de integración con Vitest.",
         link: {
            label: "Vista previa",
            href: "https://hackerstories-dev.web.app",
         },
      },
      {
         title: "Admin User Management System",
         techStack: [
            "React",
            "TypeScript",
            "Redux Toolkit",
            "Tremor",
            "Tailwind CSS",
            "Vite",
         ],
         description:
            "CRUD profesional con estado global predecible, tipado estricto y un sistema de actualización optimista con rollback para garantizar la integridad de los datos.",
         link: {
            label: "Vista previa",
            href: "https://core-crud-interface.web.app",
         },
      },
      {
         title: "Tu País",
         techStack: [
            "Vanilla JavaScript",
            "HTML",
            "CSS",
            "Arquitectura Flux",
            "Hash routing",
            "Vite",
         ],
         description:
            "Juego interactivo de adivinanzas de banderas con arquitectura inspirada en Flux, estado global y routing por hash.",
         link: {
            label: "Vista previa",
            href: "https://santiagogoncalvez.github.io/tupais/",
         },
      },
   ],
} as const;
