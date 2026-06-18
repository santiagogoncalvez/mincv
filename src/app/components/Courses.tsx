import { Card, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";

type Courses = (typeof RESUME_DATA)["courses"][number];

interface CoursesPeriodProps {
   date: Courses["date"];
}

/**
 * Displays the courses period in a consistent format
 */
function CoursePeriod({ date}: CoursesPeriodProps) {
   return (
      <div
         className="text-xs tabular-nums text-gray-500"
         title={`Period: ${date}`}
      >
         {date}
      </div>
   );
}

interface CoursesItemProps {
   courses: Courses;
}

/**
 * Individual courses card component
 */
function CoursesItem({ courses }: CoursesItemProps) {
   const { name, date } = courses;

   return (
      <Card>
         <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
               <h3
                  className="font-semibold leading-none print:text-sm"
                  id={`courses-${name.toLowerCase().replace(/\s+/g, "-")}`}
               >
                  {name}
               </h3>
               <CoursePeriod date={date} />
            </div>
         </CardHeader>
      </Card>
   );
}

interface CoursesListProps {
   courses: readonly Courses[];
}

/**
 * Main courses section component
 * Renders a list of courses experiences
 */
export function Courses({ courses }: CoursesListProps) {
   return (
      <Section>
         <h2 className="text-xl font-semibold" id="courses-section">
            Cursos
            {/* Cursos */}
         </h2>
         <div
            className="space-y-4"
            role="feed"
            aria-labelledby="courses-section"
         >
            {courses.map((item) => (
               <article key={item.name}>
                  <CoursesItem courses={item} />
               </article>
            ))}
         </div>
      </Section>
   );
}
