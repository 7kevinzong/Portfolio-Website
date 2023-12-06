import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import airbnbPrettyMuch from "@/public/airbnb-pretty-much.png";

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
    title: "Software Development Engineer",
    location: "Seattle, WA",
    description:
      "Developed and maintained scalable infrastructure for an internal web service used by over 40K developers daily. Collaborated with subject matter experts across the company to formulate “Golden Paths”, providing opinionated and supported paths for building and deploying applications. Designed and integrated an ETL pipeline to quantify the 16% improvement of developer velocity after releasing the Golden Paths.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Airbnb Pretty Much",
    description:
      "I created a full stack clone of the Airbnb website. Users can create and manage trips, reservations, and listings just as you would on Airbnb.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma", "NextAuth"],
    imageUrl: airbnbPrettyMuch,
  },
] as const;

export const skillsData = [
  "Python",
  "Java",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "SQL",
  "AWS CDK",
  "AWS DynamoDB",
  "React",
  "Next.js",
  "Node.js",
  "Docker",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Express",
  "MySQL",
  "Framer Motion",
] as const;
