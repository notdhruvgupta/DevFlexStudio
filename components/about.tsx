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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Us</SectionHeading>
      <p className="mb-3 text-lg">
        <span className="font-semibold text-lg">💻Welcome to our coding universe, </span><br />
        Where innovation meets expertise. At DevFlex, we're not just developers;
        we're architects of digital solutions, crafting tomorrow's technology today.
        With a collective experience of 3 years, we bring a dynamic blend of creativity,
        precision, and passion to every project.
      </p>

      <p className="text-lg">
        <br /><span className="font-bold text-lg">🚀 Our Mission:</span> <br />
        Empowering businesses through cutting-edge technology. We strive to transform ideas into robust, scalable, and user-friendly applications that stand the test of time.
      </p>

      <p className="text-lg">
        <br /><span className="text-lg font-bold">🤝 Let's Build Together:</span> <br />
        Whether you're a startup, SME, or enterprise, we're here to turn your ideas into digital masterpieces. Let's collaborate, innovate, and elevate your online presence.
      </p>
    </motion.section>
  );
}
