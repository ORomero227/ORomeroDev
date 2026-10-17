export const profile = {
  name: "Oscar Romero Barbosa",
  shortName: "Oscar Romero",
  role: "Full-Stack Developer",
  location: "Puerto Rico",
  email: "oromero2812@outlook.com",
  github: "https://github.com/ORomero227",
  linkedin: "https://www.linkedin.com/in/oscar-romero-barbosa/",
  cv: "/CV-OscarRomero.pdf",
  summary:
    "I build digital products that make a real impact — across web, mobile and backend. I care about clean, scalable and maintainable code, follow best practices, and keep learning what's next.",
};

export const education = [
  {
    kind: "Certification",
    title: "AWS Certified Cloud Practitioner",
    institution: "Amazon Web Services",
    date: "Oct 2026",
    status: "Certified",
  },
  {
    kind: "Degree",
    title: "B.S. in Computer Science",
    institution: "Inter American University of Puerto Rico — Bayamón",
    date: "Aug 2020 – May 2024",
    status: "Completed",
  },
  {
    kind: "Certificate",
    title: "Google Cybersecurity Professional Certificate",
    institution: "Coursera — Google",
    date: "Aug 2024",
    status: "Completed",
    description:
      "Linux, SIEM tools and IDS; identifying and mitigating risks, threats and vulnerabilities.",
  },
];

export const skills = [
  { category: "Languages", items: ["TypeScript", "Java", "PHP", "SQL"] },
  { category: "Front-end", items: ["React", "Angular", "Astro", "Tailwind"] },
  { category: "Back-end", items: ["Express", "Laravel", "Spring Boot"] },
  { category: "Mobile", items: ["Android SDK", "Jetpack Compose", "React Native"] },
  { category: "Databases", items: ["PostgreSQL", "SQL Server", "MySQL", "Firebase"] },
  { category: "Tools", items: ["Git", "GitHub", "GitLab", "Docker", "Postman", "Claude Code"] },
];

/** Formats a date like "March 3, 2024" */
export const formatDate = (d: Date) =>
  d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });

/** Status pill for a project, derived from its data. */
export const projectStatus = (data: { liveUrl?: string; projectType: string }) => {
  if (data.liveUrl) return { label: "Live", tone: "pill-green" };
  if (/mobile/i.test(data.projectType)) return { label: "Android", tone: "pill-blue" };
  return { label: "Source on GitHub", tone: "" };
};
