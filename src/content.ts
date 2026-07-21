/**
 * Single source of truth for all site content.
 * Edit values here to update the whole portfolio — no need to touch components.
 */

export const site = {
  name: "Sachin",
  role: "Full-Stack Developer",
  location: "Bengaluru, India",
  email: "sachinsnegali@gmail.com",
  github: "https://github.com/sachinnegali",
  linkedin: "https://www.linkedin.com/in/sachin-negali-4162631a6/",
  // Downloadable résumé (lives in /public).
  resume: "/SachinResume.pdf",
  tagline:
    "Full-stack engineer with 5+ years building and scaling production web and mobile applications.",
} as const;

/** Phrases cycled by the hero typewriter effect. */
export const heroPhrases = [
  "an Idio",
  "a Full Stack Developer",
] as const;

/** Two-paragraph About bio. */
export const about = [
  "Full-stack engineer with 5+ years building and scaling production web and mobile applications across React, Next.js, React Native, and Node.js, with MongoDB, MySQL, and Redis. Founding-engineer experience owning features end to end, integrating payments, and shipping real-time systems.",
  "Comfortable across the stack - from React/React Native front-ends to Node.js/Express services, message queues, and AWS deployments and used to owning features from design through release.",
] as const;

/** Skills, grouped for tag-style chips. */
export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "ReScript", "Java (Core)", "SQL"],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "React Native",
      "Next.js",
      "Redux",
      "Expo",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Microservices", "RabbitMQ"],
  },
  {
    title: "Real-time",
    items: ["WebSockets", "Server-Sent Events (SSE)", "Long Polling"],
  },
  {
    title: "Databases & Cloud",
    items: [
      "MongoDB",
      "MySQL",
      "Redis",
      "Firebase",
      "AWS (EC2, S3, ELB, Amplify)",
    ],
  },
  {
    title: "Practices & Tools",
    items: [
      "Git",
      "CI/CD",
      "Code Review",
      "Agile",
      "Postman",
      "VS Code",
      "Android Studio",
      "Xcode",
    ],
  },
];

/** Work history, newest first. */
export const experience: {
  role: string;
  company: string;
  location: string;
  dates: string;
  points: string[];
  url: string;
}[] = [
  {
    role: "Software Development Engineer II",
    company: "Porter (Contract)",
    url: "https://porter.in/",
    location: "Bengaluru",
    dates: "May 2025 – Dec 2025",
    points: [
      "Owned a rewards-based utilization module in React (ReScript) end to end, lifting order fulfillment by 8%.",
      "Architected a JSON-driven configuration platform enabling non-engineering teams to manage product configurations independently.",
      "Drove features from design through release, partnering with product and backend teams to define API contracts.",
    ],
  },
  {
    role: "Founding Software Development Engineer",
    company: "Unsweetened Beauty",
    url: "https://www.linkedin.com/company/unsweetened-beauty/",
    location: "Remote",
    dates: "Mar 2023 – Feb 2025",
    points: [
      "First engineering hire; built the company's cross-platform mobile app from scratch (React Native, Redux), which won Google Play's Hidden Gem award in 2023.",
      "Developed multiple production web applications from the ground up with React, Node.js, and MySQL.",
      "Integrated secure payment gateways across web and mobile.",
      "Set early engineering standards and partnered with co-founders, designers, and product managers.",
    ],
  },
  {
    role: "Software Development Engineer",
    company: "LogiPe Fintech Pvt. Ltd",
    url: "https://www.linkedin.com/company/logipe/",
    location: "Bengaluru",
    dates: "Aug 2022 – Mar 2023",
    points: [
      "Built web (React) and cross-platform iOS/Android (React Native) apps powering core fintech features, using Redux across complex, multi-step transaction flows.",
      "Built key modules and integrated payment gateways, third-party libraries, and REST APIs.",
    ],
  },
  {
    role: "Software Development Engineer",
    company: "LetsEndorse Development",
    url: "https://www.linkedin.com/company/letsendorse/",
    location: "Bengaluru",
    dates: "Apr 2021 – Aug 2022",
    points: [
      "Prototyped and shipped microservices-based web and mobile applications in close partnership with UX designers.",
      "Independently delivered multiple production applications using React, React Native, Node.js, and MongoDB.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "OwnersTown",
    url: "https://www.linkedin.com/company/ownerstown/",
    location: "Bengaluru",
    dates: "Dec 2020 – Mar 2021",
    points: [
      "Built responsive websites with React and Bootstrap, and reusable mobile components with React Native and Expo.",
    ],
  },
];

/** Featured projects. */
export const projects: {
  title: string;
  url: string;
  description: string;
  tech: string[];
}[] = [
  {
    title: "THaF",
    url: "https://www.tankhalfull.com/",
    description:
      "Group riding companion app offering navigation, real-time group tracking, invite-only rides, SOS alerts, instant messaging, expense management, and high-resolution media sharing.",
    tech: [
      "React",
      "React Native",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Redis",
      "RabbitMQ",
      "WebSockets",
      "SSE",
      "Long Polling",
      "AWS (EC2, S3)",
    ],
  },
  {
    title: "Within",
    url: "https://app.withinapp.com",
    description:
      "Wellness app for web and mobile offering guided meditation, journaling, focus challenges, and study rooms.",
    tech: [
      "Next.js",
      "React Native",
      "Redux",
      "Express.js",
      "Node.js",
      "MongoDB",
      "AWS",
      "Razorpay",
    ],
  },
];

/** Anchor targets for the navbar. */
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;
