import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/metrogate.png";
import french from "@/public/french.png"
import languageexpert from "@/public/languageexpert.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "College",
    location: "Chandigarh University, Mohali",
    description:
      "Developed an interest in Web Development and started creating small projects using varios tech stack",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Front-End Developer Freelancing",
    location: "Remote",
    description:
      "Started working as freelancers, offering services on platforms such as Fiverr and Upwork. Successfully improved clients' user traffic by implementing the latest features and best practices in web development.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Summer Internship at Innovative Tech Solutions",
    location: "Mohali",
    description:
      "Created multiple reusable components and contributed to live projects while collaborating with a team. Utilized APIs and Node.js for backend development and seamlessly integrated these into the overall application architecture.",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "MetroGate",
    description: "Developed a revolutionary web application designed to enhance the Delhi Metro commuting experience.",
    tags: ["React", "Next.js", "Node.js", "Tailwind", "Figma", "JavaScript"],
    imageUrl: corpcommentImg,
    href: "https://metrogate.in/"
  },
  {
    title: "Language Expert",
    description:
      "Developed a website for Language Hub which is a premier training institute that specializes in providing comprehensive education to students",
    tags: ["React", "JavaScript", "Tailwind", "Redux"],
    imageUrl: languageexpert,
    href: "https://languageexperts.in/"

  },
  {
    title: "Learn French with Anks",
    description:
      "A french tutor connection app to ace French TEF/TCF exams.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: french,
    href: "https://www.learnfrenchwithanks.com/"

  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
