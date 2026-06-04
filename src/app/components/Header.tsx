import { GlobeIcon, MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import React from "react";
import { Avatar } from "@/components/avatar";
import { Button } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { XIcon } from "@/components/icons/x-icon";
import { RESUME_DATA } from "@/data/resume-data";
import type { ResumeIcon, IconType, LinkGeneralWithIcon } from "@/lib/types";

const formatLink = (str: string) =>
   str
      .replace("mailto:", "")
      .replace("https://www.", "")
      .replace("https://", "")
      .replace("http://www.", "")
      .replace("tel:", "");

// Type-safe icon mapping
const ICON_MAP: Record<
   IconType,
   React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
   github: GitHubIcon,
   linkedin: LinkedInIcon,
   x: XIcon,
   globe: GlobeIcon,
   mail: MailIcon,
   phone: PhoneIcon,
} as const;

interface LocationLinkProps {
   location: typeof RESUME_DATA.location;
   locationLink: typeof RESUME_DATA.locationLink;
}

function LocationLink({ location, locationLink }: LocationLinkProps) {
   return (
      <p className="max-w-md items-center text-pretty font-mono text-xs text-foreground">
         <a
            className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
            href={locationLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Location: ${location}`}
         >
            <MapPinIcon className="size-3" aria-hidden="true" />
            {location}
         </a>
      </p>
   );
}

interface SocialButtonProps {
   href: string;
   iconType: IconType | undefined;
   label: string;
}

function SocialButton({ href, iconType, label }: SocialButtonProps) {
   const IconComponent = iconType ? ICON_MAP[iconType] : null;

   return (
      <Button
         className=" w-fit flex gap-2"
         variant="link"
         asChild={true}
         size={"link"}
      >
         <a
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
         >
            {IconComponent && (
               <IconComponent className="size-4" aria-hidden="true" />
            )}
            {label}
         </a>
      </Button>
   );
}

interface ContactButtonsProps {
   contact: typeof RESUME_DATA.contact;
   personalWebsiteUrl?: LinkGeneralWithIcon;
}

function ContactButtons({ contact, personalWebsiteUrl }: ContactButtonsProps) {
   return (
      <ul
         className="flex flex-wrap list-none gap-x-4 gap-y-2 font-mono text-sm text-foreground/80 print:hidden"
         aria-label="Contact links"
      >
         {personalWebsiteUrl && (
            <li>
               <SocialButton
                  href={personalWebsiteUrl.url}
                  iconType="globe"
                  label={personalWebsiteUrl.label}
               />
            </li>
         )}
         {contact.email && (
            <li>
               <SocialButton
                  href={`mailto:${contact.email}`}
                  iconType="mail"
                  label={contact.email}
               />
            </li>
         )}
         {contact.tel && (
            <li>
               <SocialButton
                  href={`tel:${contact.tel}`}
                  iconType="phone"
                  label={contact.tel}
               />
            </li>
         )}
         {contact.social.map((social) => (
            <li key={social.name}>
               <SocialButton
                  href={social.url}
                  iconType={social.icon}
                  label={social.label}
               />
            </li>
         ))}
      </ul>
   );
}

interface PrintContactProps {
   contact: typeof RESUME_DATA.contact;
   personalWebsiteUrl?: LinkGeneralWithIcon;
}

/*
function PrintContact({ contact, personalWebsiteUrl }: PrintContactProps) {
   return (
      <div className="hidden gap-x-2 font-mono text-sm text-foreground/80 print:flex print:text-[12px] flex flex-wrap">
         {personalWebsiteUrl && (
            <>
               <a
                  className=" hover:text-foreground/70"
                  href={personalWebsiteUrl}
               >
                  {new URL(personalWebsiteUrl).hostname}
               </a>
               <span aria-hidden="true">/</span>
            </>
         )}
         {contact.email && (
            <>
               <a
                  className=" hover:text-foreground/70"
                  href={`mailto:${contact.email}`}
               >
                  {contact.email}
               </a>
               <span aria-hidden="true">/</span>
            </>
         )}
         {contact.tel && (
            <>
               <a
                  className=" hover:text-foreground/70"
                  href={`tel:${contact.tel}`}
               >
                  {contact.tel}
               </a>
               <span aria-hidden="true">/</span>
            </>
         )}
         {contact.social.map((item, index) => (
            <>
               <a
                  key={index}
                  className=" hover:text-foreground/70"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  {formatLink(formatLink(item.url))}
               </a>
               {index !== contact.social.length - 1 && (
                  <span aria-hidden="true">/</span>
               )}
            </>
         ))}
      </div>
   );
}
*/

function PrintContact({ contact, personalWebsiteUrl }: PrintContactProps) {
   return (
      <ul
         className="hidden
print:flex print:text-[12px] flex-wrap list-none gap-x-4 gap-y-2 font-mono text-sm text-foreground/80"
         aria-label="Contact links"
      >
         {personalWebsiteUrl && (
            <li>
               <SocialButton
                  href={personalWebsiteUrl.url}
                  iconType="globe"
                  label={personalWebsiteUrl.label}
               />
            </li>
         )}
         {contact.email && (
            <li>
               <SocialButton
                  href={`mailto:${contact.email}`}
                  iconType="mail"
                  label={contact.email}
               />
            </li>
         )}
         {contact.tel && (
            <li>
               <SocialButton
                  href={`tel:${contact.tel}`}
                  iconType="phone"
                  label={contact.tel}
               />
            </li>
         )}
         {contact.social.map((social) => (
            <li key={social.name}>
               <SocialButton
                  href={social.url}
                  iconType={social.icon}
                  label={social.label}
               />
            </li>
         ))}
      </ul>
   );
}

/**
 * Header component displaying personal information and contact details
 */
export function Header() {
   return (
      <header className="flex justify-between">
         <div className="flex-1 space-y-2">
            <div className="flex justify-between">
               <div className="flex-1 space-y-2">
                  <h1 className="text-2xl font-bold" id="resume-name">
                     {RESUME_DATA.name}
                  </h1>
                  <p className="max-w-lg text-pretty font-mono text-sm text-foreground/80 print:text-[12px]">
                     {RESUME_DATA.about}
                  </p>

                  <LocationLink
                     location={RESUME_DATA.location}
                     locationLink={RESUME_DATA.locationLink}
                  />
               </div>
            </div>

            <ContactButtons
               contact={RESUME_DATA.contact}
               personalWebsiteUrl={RESUME_DATA.personalWebsiteUrl}
            />

            <PrintContact
               contact={RESUME_DATA.contact}
               personalWebsiteUrl={RESUME_DATA.personalWebsiteUrl}
            />
         </div>

         <Avatar
            className="size-28 "
            src={RESUME_DATA.avatarUrl}
            alt={`${RESUME_DATA.name}'s profile picture`}
            fallback={RESUME_DATA.initials}
         />
      </header>
   );
}
