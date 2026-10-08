import { resumeToJson, parseResumeJson } from "../src/lib/resume-schema";
import type { ResumeData } from "../src/lib/types";

const data: ResumeData = {
  name: "Ana", initials: "A", location: "", locationLink: "", about: "",
  summary: "s", avatarUrl: "data:image/png;base64,AAAA SUPERLARGO",
  personalWebsiteUrl: null,
  contact: { email: "", tel: "", social: [] },
  education: [], courses: [], languages: [], work: [], skills: [], projects: [],
};
const json = resumeToJson(data);
console.log("excluye foto data URL:", !json.includes("base64"), "| bytes:", json.length);
const parsed = parseResumeJson(json);
console.log("roundtrip ok:", parsed.ok);
