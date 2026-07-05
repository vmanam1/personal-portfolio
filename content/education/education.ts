import type { Education } from "@/lib/schemas/education";

export const educationContent = [
  {
    id: "asu-ms-computer-science",
    institution: "Arizona State University",
    degree: "Master of Science",
    field: "Computer Science",
    startDate: "2024-08",
    endDate: "2026-05",
    location: "Arizona, United States",
    coursework: [
      "CSE 511: Data Processing at Scale",
      "CSE 575: Statistical Machine Learning",
      "CSE 579: Knowledge Representation & Reasoning",
      "CSE 545: Software Security",
      "CSE 578: Data Visualization",
      "CSE 598: Engineering Blockchain Applications",
      "CSE 572: Data Mining",
      "CSE 573: Semantic Web Mining",
      "CSE 598: Statistical Learning Theory",
      "CSE 548: Advanced Computer Network Security",
    ],
    activities: [],
    achievements: [],
    links: [],
  },
  {
    id: "iiit-bhubaneswar-btech-it",
    institution:
      "International Institute of Information Technology, Bhubaneswar",
    degree: "Bachelor of Technology",
    field: "Information Technology",
    startDate: "2020-12",
    endDate: "2024-05",
    location: "Bhubaneswar, India",
    coursework: [
      "Object-Oriented Programming",
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Networks",
      "Image Processing",
    ],
    activities: ["Cloud Computing Lead at GDSC IIIT-Bh"],
    achievements: [],
    links: [],
  },
] satisfies Education[];
