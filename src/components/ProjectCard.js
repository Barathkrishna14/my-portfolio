"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ProjectCard({ project }) {
  const router = useRouter();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      layout
      onClick={() => router.push(`/projects/${project.slug}`)}
      className="cursor-pointer p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg hover:border-purple-400 transition"
    >
      <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
      <p className="text-sm text-gray-400">{project.short}</p>
    </motion.div>
  );
}