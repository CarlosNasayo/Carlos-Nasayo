import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import gap from "@/public/gap.png";
import apiwp from "@/public/wpapi.png";
import wpadmin from "@/public/webadmin.png";

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
  }
  
] as const;

export const experiencesData = [
  {
    title: "Software Testing",
    location: "Corporación Universitaria Comfacauca",
    description:
      "Integration, black-box, and white-box testing were implemented for the coffee export software within the Colombia Innova (Colinova) project, aimed at enhancing its operation and ensuring its efficiency. These tests span from validating the system as a whole to scrutinizing its internal structure, thus ensuring software quality and reliability across all dimensions",
    icon: React.createElement(LuGraduationCap),
    date: "December 2021 - February 2022",	
  },
  {
    title: "Professional Practice ",
    location: "Centro Internacional de Agricultura Tropical (CIAT)",
    description:
      "Support was provided in developing forms for data capture utilizing ODK (Open Data Kit). Additionally, requirements were gathered and a software architecture was developed for a progressive web application aimed at visualizing soil moisture data. Subsequently, a progressive web application for visualizing soil moisture data was developed.",
    icon: React.createElement(CgWorkAlt),
    date: "April 2022 - October 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Centro Internacional de Agricultura Tropical (CIAT)",
    description:
      "Frontend development was done for a gap analysis application to aid genetic material collection. A new module was added to an existing chatbot for coffee yield estimates. Continuous delivery practices were implemented across projects, alongside documentation support. Backend development, ETL, and user management were handled for a water point monitoring platform in Ethiopia.",
    icon: React.createElement(FaReact),
    date: "October 2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Gap Analsysis Tool",
    description:
      "I developed the frontend of a gap analysis tool to help CIAT researchers collect missing genetic material.",
    tags: ["React", "Google Maps API", "Boostrap","Javascript"],
    imageUrl: gap,
  },
  {
    title: "Waterpoints API",
    description:
      "I have developed the bakend for a water point monitoring tool in ethiopia, this api consists of certain endpoints to provide the monitored data, historical data and profiles of the water points.",
    tags: ["Flask", "Python", "MongoDB", "Pandas","Swagger"],
    imageUrl: apiwp,
  },
  {
    title: "Web administrator",
    description:
      "I have developed a web administrator for a water point monitoring database in ethiopia, this administrator is responsible for updating the database and that they are reflected on the web.",
    tags: ["Flask", "MongoDB", "PostgreSQL", "Boostrap",],
    imageUrl: wpadmin,
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
  "MongoDB",
  "PostgreSQL",
  "Python",
  "Flask",
  "Docker",
  "CI/CD",
  "Geoserver"
] as const;