import React from "react";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

type Skills = readonly string[];

interface SkillsListProps {
   skills: Skills;
   className?: string;
}

/**
 * Renders a list of skills as badges
 */
function SkillsList({ skills, className }: SkillsListProps) {
   return (
      <ul
         className={cn("flex list-none flex-wrap gap-y-2 gap-x-1 p-0", className)}
         aria-label="List of skills"
      >
         {skills.map((skill) => (
            <li key={skill} className="flex h-fit">
               <Badge
               variant={"secondary"}
                  className="print:text-[10px] h-fit"
                  aria-label={`Skill: ${skill}`}
               >
                  {skill}
               </Badge>
            </li>
         ))}
      </ul>
   );
}

interface SkillsProps {
   skills: Skills;
   className?: string;
}

/**
 * Skills section component
 * Displays a list of professional skills as badges
 */
export function Skills({ skills, className }: SkillsProps) {
   return (
      <Section className={className}>
         <h2 className="text-xl font-semibold" id="skills-section">
            Aptitudes
            {/* Skills */}
         </h2>
         <SkillsList skills={skills} aria-labelledby="skills-section" />
      </Section>
   );
}
