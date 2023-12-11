"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40
      scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading> About me </SectionHeading>
      <p className="mb-3">
        I'm a former software development engineer at Amazon Web Services. I
        spent 2 years in the Builder Tools organization building scalable
        distributed backend services and tools to support internal developers
        building applications with AWS. I graduated from the University of
        Maryland, College Park in 2021 with a B.S. in Computer Engineering and a
        citation from the Advanced Cybersecurity Experience for Students (ACES)
        honors college.
      </p>
      <p>
        When I'm not coding, you'll probably find me learning a new song on the
        guitar or cruising around on my e-bike. I grew up playing hockey, but
        I've also recently picked up a knack for golf and volleyball. And as an
        Eagle Scout, I love pretty much anything outdoors, especially hiking,
        snowboarding, and paddleboarding.
      </p>
    </motion.section>
  );
}
