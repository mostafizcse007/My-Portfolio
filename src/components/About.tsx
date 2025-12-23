import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { technologies } from "@/constants";
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const allTechs = [...technologies.languages.map(t => ({
    ...t,
    category: "Languages"
  })), ...technologies.mlAi.map(t => ({
    ...t,
    category: "ML & AI"
  })), ...technologies.tools.map(t => ({
    ...t,
    category: "Tools"
  }))];
  return;
};
export default About;