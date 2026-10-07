import { Card, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";

type Languages = (typeof RESUME_DATA)["languages"][number];

interface LanguagesPeriodProps {
   level: Languages["level"];
}

/**
 * Displays the languages period in a consistent format
 */
function LanguageLevel({ level }: LanguagesPeriodProps) {
   return (
      <div
         className="text-xs tabular-nums text-gray-500"
         title={`Level: ${level}`}
      >
         {level}
      </div>
   );
}

interface LanguagesItemProps {
   languages: Languages;
}

/**
 * Individual languages card component
 */
function LanguagesItem({ languages }: LanguagesItemProps) {
   const { name, level } = languages;

   return (
      <Card>
         <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
               <h3
                  className="font-semibold leading-none print:text-sm"
                  id={`languages-${name.toLowerCase().replace(/\s+/g, "-")}`}
               >
                  {name}
               </h3>
               <LanguageLevel level={level} />
            </div>
         </CardHeader>
      </Card>
   );
}

interface LanguagesListProps {
   languages: readonly Languages[];
}

/**
 * Main languages section component
 * Renders a list of languages experiences
 */
export function Languages({ languages }: LanguagesListProps) {
   if (!languages.length) return null;

   return (
      <Section>
         <h2 className="text-xl font-semibold" id="languages-section">
            Idiomas
            {/* Cursos */}
         </h2>
         <div
            className="space-y-4"
            role="feed"
            aria-labelledby="languages-section"
         >
            {languages.map((item) => (
               <article key={item.name}>
                  <LanguagesItem languages={item} />
               </article>
            ))}
         </div>
      </Section>
   );
}
