"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Tilt from "react-parallax-tilt";
import SkillsSection from "./components/SkillsSection";

const projects = [
  {
    title: "XtremeNext Trading Platform",
    desc: "A scalable white-label trading system powering 160+ mobile applications across Play Store & App Store.",
    slug: "trading",
  },
  {
    title: "Kooturavu Platform",
    desc: "Enterprise inspection system with dynamic forms, offline sync, and 300+ conditional questions",
    slug: "kooturavu",
  },
  {
    title: "Blutasker Service Marketplace",
    desc: "Developed an Urban Company-like platform with task posting, payments, voice recording, and real-time updates. Focused on reusable UI and scalable architecture.",
    slug: "service",
  },
  {
    title: "Pole Vault Field System",
    desc: "Designed a QR-based field app with offline-first architecture using SQLite, geolocation tracking, and sync mechanisms for real-time reporting.",
    slug: "pole-vault",
  },
  {
    title: "EHS Safety Data Platform",
    desc: "Built a secure cross-platform app with Google Sign-In, in-app payments, and real-time web-mobile content sync for safety data access.",
    slug: "ehs",
  },
  {
    title: "Monitoring & Management System",
    desc: "Engineered an internal platform for real-time monitoring of system health, SSL tracking, logs, and backups with role-based access control.",
    slug: "monitoring",
  },
];

export default function Portfolio() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen text-white overflow-hidden bg-black">

      {/* 🌌 Animated Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-black to-blue-900 opacity-40 animate-[pulse_8s_ease-in-out_infinite]"></div>

      {/* Glow Orbs */}
      <div className="absolute w-[600px] h-[600px] bg-purple-600 opacity-20 blur-3xl rounded-full top-[-200px] left-[-200px]"></div>
      <div className="absolute w-[500px] h-[500px] bg-blue-600 opacity-20 blur-3xl rounded-full bottom-[-200px] right-[-200px]"></div>

      <div className="relative z-10">

        {/* HERO */}
        <section className="h-[95vh] flex flex-col justify-center items-center text-center px-6">

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight"
          >
            Barath D
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-xl max-w-2xl leading-relaxed"
          >
            Flutter Engineer crafting scalable real-time systems,
            delivering 160+ production apps with high performance & reliability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex gap-5"
          >
            <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-md sm:max-w-none justify-center">

  {/* Resume */}
  <a
    href="/Barath_Flutter_Developer.pdf"
    download
    className="w-full sm:w-auto text-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-semibold hover:scale-105 transition"
  >
    Download Resume
  </a>

  {/* LinkedIn */}
  <a
    href="https://linkedin.com/in/barath-d-69232b165"
    target="_blank"
    className="w-full sm:w-auto text-center px-6 py-3 border border-gray-600 rounded-xl hover:bg-gray-800 transition"
  >
    LinkedIn
  </a>

  {/* Contact */}
  <a
    href="mailto:barathkrishna14@gmail.com"
    className="w-full sm:w-auto text-center px-6 py-3 border border-gray-600 rounded-xl hover:bg-gray-800 transition"
  >
    Contact
  </a>

</div>
          </motion.div>
        </section>

        {/* STATS */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-8 px-10 py-20 max-w-6xl mx-auto">
          {[
            { value: "160+", label: "Apps Delivered" },
            { value: "10K+", label: "Active Users" },
            { value: "40%", label: "Latency Reduced" },
            { value: "20%", label: "Performance Boost" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="backdrop-blur-xl bg-white/5 p-8 rounded-2xl border border-white/10 text-center"
            >
              <h2 className="text-4xl font-bold">{item.value}</h2>
              <p className="text-gray-400 mt-2">{item.label}</p>
            </motion.div>
          ))}
        </section>
        {/* Skills */}

        <SkillsSection />

        {/* PROJECTS */}
        <section className="px-6 py-20 max-w-6xl mx-auto">
          <h2 className="text-5xl text-center font-bold mb-14 text-cyan-300">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((p, i) => (
              <Tilt
                key={i}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareEnable={true}
                glareMaxOpacity={0.2}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  onClick={() => router.push(`/projects/${p.slug}`)}
                  className="cursor-pointer p-8 backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 hover:border-purple-400 transition"
                >
                  {/* <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
                  <p className="text-gray-400">{p.desc}</p> */}
                  <h3 className="text-2xl font-semibold mb-3 leading-snug">
                    {p.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="py-24 text-center">
          <h2 className="text-4xl font-bold mb-6 text-purple-300">
            Let's Build Something Amazing
          </h2>

          <a
            href="mailto:barathkrishna14@gmail.com"
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl text-lg font-semibold hover:scale-110 transition shadow-lg shadow-blue-500/30"
          >
            Contact Me
          </a>
        </section>

        {/* FOOTER */}
        <footer className="text-center py-6 text-gray-500 text-sm">
          © 2026 Barath D •
          <a
            href="https://linkedin.com/in/barath-d-69232b165"
            target="_blank"
            className="ml-2 text-blue-400 hover:underline"
          >
            LinkedIn
          </a>
        </footer>
      </div>
    </div>
  );
}