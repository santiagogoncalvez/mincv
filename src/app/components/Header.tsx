import { GlobeIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { Avatar } from "@/components/avatar";
import { Button } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { XIcon } from "@/components/icons/x-icon";
import type { IconType, LinkGeneralWithIcon, ResumeData } from "@/lib/types";

// const formatLink = (str: string) =>
//    str
//       .replace("mailto:", "")
//       .replace("https://www.", "")
//       .replace("https://", "")
//       .replace("http://www.", "")
//       .replace("tel:", "");

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
   location: string;
   locationLink: string;
}

function LocationLink({ location, locationLink }: LocationLinkProps) {
   return (
      <p className="max-w-md items-center text-pretty  text-xs text-foreground/80">
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
               <IconComponent
                  className="size-4 text-foreground"
                  aria-hidden="true"
               />
            )}
            <span className="text-foreground/80">{label}</span>
         </a>
      </Button>
   );
}

interface ContactButtonsProps {
   contact: ResumeData["contact"];
   personalWebsiteUrl?: LinkGeneralWithIcon | null;
}

function ContactButtons({ contact, personalWebsiteUrl }: ContactButtonsProps) {
   return (
      <ul
         className="flex flex-wrap list-none gap-x-4 gap-y-2  text-sm  print:hidden"
         aria-label="Contact links"
      >
         {contact.tel && (
            <li>
               <SocialButton
                  href={`tel:${contact.tel}`}
                  iconType="phone"
                  label={contact.tel}
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

         {contact.social.map((social) => (
            <>
               {social.name === "LinkedIn" && (
                  <li key={social.name}>
                     <SocialButton
                        href={social.url}
                        iconType={social.icon}
                        label={social.label}
                     />
                  </li>
               )}
            </>
         ))}
         {personalWebsiteUrl && (
            <li>
               <SocialButton
                  href={personalWebsiteUrl.url}
                  iconType="globe"
                  label={personalWebsiteUrl.label}
               />
            </li>
         )}
         {contact.social.map((social) => (
            <>
               {social.name === "GitHub" && (
                  <li key={social.name}>
                     <SocialButton
                        href={social.url}
                        iconType={social.icon}
                        label={social.label}
                     />
                  </li>
               )}
            </>
         ))}
      </ul>
   );
}

interface PrintContactProps {
   contact: ResumeData["contact"];
   personalWebsiteUrl?: LinkGeneralWithIcon | null;
}

function PrintContact({ contact, personalWebsiteUrl }: PrintContactProps) {
   return (
      <ul
         className="hidden
print:flex print:text-[12px] flex-wrap list-none gap-x-4 gap-y-2  text-sm "
         aria-label="Contact links"
      >
         {contact.tel && (
            <li>
               <SocialButton
                  href={`tel:${contact.tel}`}
                  iconType="phone"
                  label={contact.tel}
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
         {contact.social.map((social) => (
            <>
               {social.name === "LinkedIn" && (
                  <li key={social.name}>
                     <SocialButton
                        href={social.url}
                        iconType={social.icon}
                        label={social.label}
                     />
                  </li>
               )}
            </>
         ))}
         {personalWebsiteUrl && (
            <li>
               <SocialButton
                  href={personalWebsiteUrl.url}
                  iconType="globe"
                  label={personalWebsiteUrl.label}
               />
            </li>
         )}
         {contact.social.map((social) => (
            <>
               {social.name === "GitHub" && (
                  <li key={social.name}>
                     <SocialButton
                        href={social.url}
                        iconType={social.icon}
                        label={social.label}
                     />
                  </li>
               )}
            </>
         ))}
      </ul>
   );
}

/**
 * Header component displaying personal information and contact details
 */
export function Header({ data }: { data: ResumeData }) {
   return (
      <header className="flex justify-between">
         <div className="flex-1 space-y-2">
            <div className="flex justify-between">
               <div className="flex-1 space-y-2">
                  <h1 className="text-2xl font-bold" id="resume-name">
                     {data.name}
                  </h1>
                  <p className="max-w-lg text-pretty  text-sm text-foreground/80 print:text-[12px]">
                     {data.about}
                  </p>

                  <LocationLink
                     location={data.location}
                     locationLink={data.locationLink}
                  />
               </div>
            </div>

            <ContactButtons
               contact={data.contact}
               personalWebsiteUrl={data.personalWebsiteUrl}
            />

            <PrintContact
               contact={data.contact}
               personalWebsiteUrl={data.personalWebsiteUrl}
            />
         </div>

         <Avatar
            className="size-28 "
            src={data.avatarUrl}
            alt={`${data.name}'s profile picture`}
            fallback={data.initials}
         />
      </header>
   );
}
