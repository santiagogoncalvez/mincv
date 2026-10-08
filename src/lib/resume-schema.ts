import { z } from "zod";
import type { ResumeData } from "@/lib/types";
import { reactToString } from "@/lib/types";

/**
 * Esquema Zod de `ResumeData` pensado para carga de datos por JSON.
 * - Casi todo es opcional con defaults: un JSON incompleto se completa, no se rechaza.
 * - `name` es lo único obligatorio: un CV sin nombre indica JSON equivocado.
 * - `summary` y `description` se validan como string (el JSON puro no lleva JSX).
 */

const iconTypeSchema = z.enum([
   "github",
   "linkedin",
   "x",
   "globe",
   "mail",
   "phone",
]);

const linkGeneralSchema = z.object({
   name: z.string().default(""),
   url: z.string().default(""),
   label: z.string().default(""),
});

const linkWithIconSchema = linkGeneralSchema.extend({
   icon: iconTypeSchema.optional(),
});

export const resumeJsonSchema = z.object({
   name: z.string(),
   initials: z.string().default(""),
   location: z.string().default(""),
   locationLink: z.string().default(""),
   about: z.string().default(""),
   summary: z.string().default(""),
   avatarUrl: z.string().default(""),
   personalWebsiteUrl: linkGeneralSchema.nullable().default(null),
   contact: z
      .object({
         email: z.string().default(""),
         tel: z.string().default(""),
         social: z.array(linkWithIconSchema).default([]),
      })
      .default({ email: "", tel: "", social: [] }),
   education: z
      .array(
         z.object({
            school: z.string().default(""),
            degree: z.string().default(""),
            start: z.string().default(""),
            end: z.string().default(""),
         }),
      )
      .default([]),
   courses: z
      .array(
         z.object({
            name: z.string().default(""),
            start: z.string().default(""),
            end: z.string().default(""),
         }),
      )
      .default([]),
   languages: z
      .array(
         z.object({
            name: z.string().default(""),
            level: z.string().default(""),
         }),
      )
      .default([]),
   work: z
      .array(
         z.object({
            company: z.string().default(""),
            link: z.string().default(""),
            badges: z.array(z.string()).default([]),
            title: z.string().default(""),
            start: z.string().default(""),
            end: z.string().nullable().default(null),
            description: z.string().default(""),
            highlights: z.array(z.string()).optional(),
         }),
      )
      .default([]),
   skills: z.array(z.string()).default([]),
   projects: z
      .array(
         z.object({
            title: z.string().default(""),
            techStack: z.array(z.string()).default([]),
            description: z.string().default(""),
            link: z
               .object({
                  label: z.string().default(""),
                  href: z.string().default(""),
               })
               .optional(),
         }),
      )
      .default([]),
});

export type ParseResult =
   | { ok: true; data: ResumeData }
   | { ok: false; error: string };

/** Busca un valor en el JSON crudo siguiendo un path (para distinguir "falta" de "tipo mal"). */
function getFieldByPath(obj: unknown, path: PropertyKey[]): unknown {
   let current: unknown = obj;
   for (const key of path) {
      if (current === null || typeof current !== "object") return undefined;
      current = (current as Record<PropertyKey, unknown>)[key];
   }
   return current;
}

/**
 * Parsea y valida un JSON de datos del CV.
 * Devuelve los errores en lenguaje humano, nunca un stack trace.
 */
export function parseResumeJson(text: string): ParseResult {
   let raw: unknown;

   try {
      raw = JSON.parse(text);
   } catch {
      return {
         ok: false,
         error:
            "El JSON no está bien formado. Revisá que no falte una llave «}», una coma o una comilla.",
      };
   }

   const result = resumeJsonSchema.safeParse(raw);

   if (!result.success) {
      const issue = result.error.issues[0];
      const field = issue.path.length > 0 ? issue.path.join(".") : "inicio";

      if (issue.code === "invalid_type") {
         if (issue.path.length === 0) {
            return {
               ok: false,
               error:
                  "Debés pegar un objeto JSON, o sea un texto que empiece con «{» y termine con «}».",
            };
         }

         if (issue.input === undefined && getFieldByPath(raw, issue.path) === undefined) {
            return { ok: false, error: `Falta el campo «${field}».` };
         }

         const expected: Record<string, string> = {
            array: "una lista",
            string: "un texto",
            object: "un objeto",
            number: "un número",
         };

         return {
            ok: false,
            error: `El campo «${field}» tiene el tipo incorrecto: debe ser ${
               expected[String(issue.expected)] ?? issue.expected
            }.`,
         };
      }

      return { ok: false, error: `Problema en «${field}»: ${issue.message}` };
   }

   return { ok: true, data: result.data as ResumeData };
}

/**
 * Convierte los datos del CV a un JSON string (listo para copiar y pegar
 * a una IA). `summary` y `description` pasan a string vía `reactToString`.
 * Si la foto es una imagen subida (data URL), se omite: solo haría un JSON gigante.
 */
export function resumeToJson(data: ResumeData): string {
   const plain = {
      ...data,
      avatarUrl: data.avatarUrl.startsWith("data:") ? "" : data.avatarUrl,
      summary: reactToString(data.summary),
      work: data.work.map((job) => ({
         ...job,
         description: reactToString(job.description),
      })),
   };

   return JSON.stringify(plain, null, 2);
}
