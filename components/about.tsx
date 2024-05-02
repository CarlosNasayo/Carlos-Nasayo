"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175}}
    
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
