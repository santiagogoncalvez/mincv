import type { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import { generateResumeStructuredData } from "@/lib/structured-data";
import { ResumeApp } from "./components/resume-app";

export const metadata: Metadata = {
   title: `${RESUME_DATA.name}`,
   description: RESUME_DATA.about,
   openGraph: {
      title: `${RESUME_DATA.name}`,
      description: RESUME_DATA.about,
      type: "profile",
      locale: "en_US",
      images: [
         {
            url: "https://cv.jarocki.me/opengraph-image",
            width: 1200,
            height: 630,
            alt: `${RESUME_DATA.name}'s profile picture`,
         },
      ],
   },
   twitter: {
      card: "summary_large_image",
      title: `${RESUME_DATA.name}`,
      description: RESUME_DATA.about,
      images: ["https://cv.jarocki.me/opengraph-image"],
   },
};

export default function ResumePage() {
   const structuredData = generateResumeStructuredData();

   return (
      <>
         <script
            type="application/ld+json"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: Safe for JSON-LD structured data
            dangerouslySetInnerHTML={{
               __html: JSON.stringify(structuredData),
            }}
         />
         <ResumeApp initialData={RESUME_DATA} />
      </>
   );
}
