"use client";

import { Suspense, useState } from "react";
import { SectionErrorBoundary } from "@/components/section-error-boundary";
import { SectionSkeleton } from "@/components/section-skeleton";
import { Button } from "@/components/ui/button";
import type { ResumeData } from "@/lib/types";
import { Courses } from "./Courses";
import { EditPanel } from "./edit-panel";
import { Education } from "./Education";
import { Header } from "./Header";
import { Languages } from "./Languages";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Summary } from "./Summary";
import { WorkExperience } from "./WorkExperience";

interface ResumeAppProps {
   initialData: ResumeData;
}

/**
 * Vista del CV con los datos en estado.
 * El estado se reemplaza desde el panel de edición.
 */
export function ResumeApp({ initialData }: ResumeAppProps) {
   const [data, setData] = useState<ResumeData>(initialData);
   const [editing, setEditing] = useState(false);

   return (
      <>
         <Button
            size="sm"
            variant="outline"
            className="fixed right-4 top-4 z-20 h-8 px-3 text-xs print:hidden"
            onClick={() => setEditing(true)}
         >
            Editar
         </Button>

         <EditPanel
            open={editing}
            onOpenChange={setEditing}
            data={data}
            originalData={initialData}
            onDataLoad={setData}
         />

         <main
         className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-0 md:p-16"
         id="main-content"
      >
         <div className="sr-only">
            <h1>{data.name}&apos;s Resume</h1>
         </div>

         <section
            className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6"
            aria-label="Resume Content"
         >
            <SectionErrorBoundary sectionName="Header">
               <Suspense fallback={<SectionSkeleton lines={4} />}>
                  <Header data={data} />
               </Suspense>
            </SectionErrorBoundary>

            <div className="space-y-8 print:space-y-6">
               <SectionErrorBoundary sectionName="Summary">
                  <Suspense fallback={<SectionSkeleton lines={2} />}>
                     <Summary summary={data.summary} />
                  </Suspense>
               </SectionErrorBoundary>

               <SectionErrorBoundary sectionName="Work Experience">
                  <Suspense fallback={<SectionSkeleton lines={6} />}>
                     <WorkExperience work={data.work} />
                  </Suspense>
               </SectionErrorBoundary>

               <SectionErrorBoundary sectionName="Education">
                  <Suspense fallback={<SectionSkeleton lines={3} />}>
                     <Education education={data.education} />
                  </Suspense>
               </SectionErrorBoundary>

               <SectionErrorBoundary sectionName="Projects">
                  <Suspense fallback={<SectionSkeleton lines={5} />}>
                     <Projects projects={data.projects} />
                  </Suspense>
               </SectionErrorBoundary>

               <SectionErrorBoundary sectionName="Skills">
                  <Suspense fallback={<SectionSkeleton lines={2} />}>
                     <Skills skills={data.skills} />
                  </Suspense>
               </SectionErrorBoundary>

               <SectionErrorBoundary sectionName="courses">
                  <Suspense fallback={<SectionSkeleton lines={3} />}>
                     <Courses courses={data.courses} />
                  </Suspense>
               </SectionErrorBoundary>

               <SectionErrorBoundary sectionName="languages">
                  <Suspense fallback={<SectionSkeleton lines={3} />}>
                     <Languages languages={data.languages} />
                  </Suspense>
               </SectionErrorBoundary>
            </div>
         </section>
         </main>
      </>
   );
}
