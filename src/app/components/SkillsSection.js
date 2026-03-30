"use client";

import { motion } from "framer-motion";

export default function SkillsSection() {
  return (
    <section className="px-6 py-0 max-w-6xl mx-auto text-white">

      {/* 🔥 HEADLINE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-6xl font-bold mb-10 leading-tight"
      >
        Engineering systems, not just apps{" "}
        <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          focused on performance, scalability, and real-world reliability.
        </span>
      </motion.h2>

      {/* 🔥 CORE SKILLS (HIGHLIGHT) */}
      <div className="flex flex-wrap gap-4 mb-16">
        {[
          "Flutter",
          "Real-time Systems",
          "Offline-first Architecture",
          "WebSockets",
          "Flutter Isolates",
          "Push Notifications",
        ].map((skill, i) => (
          <span
            key={i}
            className="px-5 py-2 text-sm rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* 🔥 STRUCTURED SKILLS */}
      <div className="space-y-10 text-lg">

        <div>
          <p className="text-gray-400 mb-2">Mobile Development</p>
          <p className="text-white">
            Flutter, Dart, Cross-platform Apps, Responsive UI, Material & Cupertino
          </p>
        </div>

        <div>
          <p className="text-gray-400 mb-2">Architecture & System Design</p>
          <p className="text-white">
            Clean Architecture, SOLID Principles, Modular Design, Scalable Systems
          </p>
        </div>

        <div>
          <p className="text-gray-400 mb-2">Real-time & Performance</p>
          <p className="text-white">
            WebSockets, Low-latency Systems, Flutter Isolates, Performance Optimization
          </p>
        </div>

        <div>
          <p className="text-gray-400 mb-2">Advanced Features</p>
          <p className="text-white">
            Deep Linking, Push Notification Routing, Background Scheduling, Localization
          </p>
        </div>

        <div>
          <p className="text-gray-400 mb-2">Backend & Integration</p>
          <p className="text-white">
            REST APIs, Firebase, FCM, Payment Integration, InAppWebView
          </p>
        </div>

        <div>
          <p className="text-gray-400 mb-2">Game Development</p>
          <p className="text-white">
            Flame Engine, 2D Game Development, Game Loop Optimization
          </p>
        </div>

        <div>
          <p className="text-gray-400 mb-2">Tools & DevOps</p>
          <p className="text-white">
            Git, CI/CD, Postman, Play Store & App Store Deployment, Debugging
          </p>
        </div>

      </div>
    </section>
  );
}