"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
export default function About() {
  const {ref}=useSectionInView("About",0.75)
  
  return (
    <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175}}
    id="about"
    ref={ref}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3 font-medium">
        Systems engineer with two years of experience in software development,
        both in frontend and backend technologies. I have solid knowledge in
        databases, both relational and non-relational, as well as in unit
        testing, integration and continuous deployment of software. I am
        familiar with agile methodologies for development. I have participated
        in several projects, both nationally and internationally, where I have
        developed software tools that have been widely accepted by customers. I
        am characterized for being results oriented and for keeping myself
        constantly updated in the most used technologies nowadays.
      </p>
    </motion.section>
  );
}
