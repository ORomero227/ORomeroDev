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

export const experience = [
  {
    company: "Utreee",
    role: "Full-Stack Software Developer",
    location: "Puerto Rico",
    start: "Jul 2025",
    end: "Present",
    current: true,
    highlights: [
      "Primary developer on a core banking platform — architecture, security and feature work.",
      "Built the bank's digital channels and API gateway on top of the core: a customer web banking portal in Laravel, which also serves as the API for a mobile banking app in React Native (Expo).",
      "Primary developer on a contract and rebate management system for supermarket chains, with a Node.js backend and a React frontend hosted on AWS — calculation logic and reporting.",
      "Handle deployments for these applications.",
    ],
  },
  {
    company: "Freelance",
    role: "Software Developer",
    start: "Jul 2024",
    end: "Sep 2024",
    current: false,
    highlights: [
      "Worked on a C# desktop app with SQL Server to support business operations.",
      "Provided support and minor enhancements for internal systems built on Odoo ERP.",
    ],
  },
  {
    company: "Involve LLC",
    role: "Front-End Intern",
    start: "Mar 2024",
    end: "Apr 2024",
    current: false,
    highlights: [
      "Redesigned UI/UX for Laravel-based web apps, improving usability and responsiveness.",
      "Improved performance and accessibility.",
      "Collaborated with the team using Bitbucket for version control and workflow.",
    ],
  },
  {
    company: "Raytheon UAS University Innovation Project",
    role: "Software Developer",
    start: "Jan 2024",
    end: "Mar 2024",
    current: false,
    highlights: [
      "Developed Python scripts for automation and control logic in autonomous systems.",
      "Worked in Linux environments using shell scripting for task automation.",
    ],
  },
];

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
  { category: "Back-end", items: ["Node.js", "Express", "Laravel", "Spring Boot"] },
  { category: "Mobile", items: ["Android SDK", "Jetpack Compose", "React Native"] },
  { category: "Databases", items: ["PostgreSQL", "SQL Server", "MySQL", "Firebase"] },
  { category: "Tools", items: ["Git", "GitHub", "GitLab", "Docker", "AWS", "Postman", "Claude Code"] },
  { category: "Environment", items: ["macOS", "Cursor", "Terminal"] },
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
