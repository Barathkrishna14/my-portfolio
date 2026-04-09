"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";

const data = {
    trading: {
        title: "XtremeNext Trading Platform",
        subtitle: "White-label trading system powering 160+ apps",

        metrics: ["160+ Apps", "10K+ Users", "40% Latency ↓"],

        desc: "A high-performance trading platform supporting forex and crypto markets with real-time data streaming and scalable white-label architecture.",

        problem:
            "Traditional trading apps suffered from latency issues and lacked scalability for multiple clients.",

        solution:
            "Designed a WebSocket-based real-time architecture with a white-label system enabling rapid deployment of customized trading apps.",

        impact: [
            "Delivered 160+ production apps",
            "Reduced latency by 40%",
            "Handled 10K+ active users",
        ],

        points: [
            "Implemented WebSocket-based real-time streaming",
            "Built trading order execution & charting system",
            "Designed white-label architecture",
            "Optimized UI rendering for high-frequency updates",
            "Managed Play Store & App Store deployments",
        ],

        apps: [
            {
                name: "InfinexFX",
                link: "https://play.google.com/store/apps/details?id=com.e.infinefx",
                platform: "android",
            },
            {
                name: "MyFX",
                link: "https://play.google.com/store/apps/details?id=com.e.myforex_cart",
                platform: "android",
            },
            {
                name: "Citizen FX (Android)",
                link: "https://play.google.com/store/apps/details?id=com.e.citizen_fx",
                platform: "android",
            },
            {
                name: "Citizen FX (iOS)",
                link: "https://apps.apple.com/in/app/citizen-fx/id6748392545",
                platform: "ios",
            },
        ],
    },

    service: {
        title: "Blutasker Service Marketplace",
        subtitle: "Urban Company-like scalable platform",

        metrics: ["Realtime", "Payments", "Push Notifications"],

        desc: "A service marketplace enabling users to post tasks and hire professionals with real-time updates and seamless payments.",

        problem:
            "Users needed a fast and reliable platform to find service providers with instant updates and notifications.",

        solution:
            "Built a scalable Flutter app with push notifications, real-time updates, and integrated payment workflows.",

        impact: [
            "Improved user engagement via push notifications",
            "Reduced response time for task acceptance",
            "Delivered smooth cross-platform UX",
        ],

        points: [
            "Implemented Firebase Cloud Messaging (push notifications)",
            "Handled foreground & background notification states",
            "Integrated payment flow using InAppWebView",
            "Built reusable UI components",
            "Implemented media upload & voice recording",
        ],
    },

    "pole-vault": {
        title: "Pole Vault Field System",
        subtitle: "Offline-first QR tracking app",

        metrics: ["Offline Sync", "Geo Tracking", "QR Scan"],

        desc: "A smart field tracking system for registering and monitoring pole installations using QR scanning and offline sync.",

        problem:
            "Field engineers needed a reliable way to capture data in remote areas without internet connectivity.",

        solution:
            "Built an offline-first system using SQLite with background synchronization when connectivity is restored.",

        impact: [
            "Enabled seamless data capture in remote areas",
            "Improved field efficiency and reporting",
            "Reduced data loss during offline usage",
        ],

        points: [
            "Implemented offline-first architecture using SQLite",
            "Built QR-based scanning workflow",
            "Captured geolocation and media data",
            "Designed background sync mechanism",
            "Enabled secure deep-link-based access",
        ],

        apps: [
            {
                name: "Pole Vault",
                link: "https://play.google.com/store/apps/details?id=com.schnelliot.polevault",
                platform: "android",
            },
        ],
    },

    ehs: {
        title: "EHS Safety Data Platform",
        subtitle: "Secure safety data mobile application",

        metrics: ["Auth", "Payments", "Realtime Sync"],

        desc: "A cross-platform mobile app providing access to safety data sheets with secure authentication and content control.",

        problem:
            "Users needed quick and secure access to safety data with controlled visibility.",

        solution:
            "Built a secure app with authentication, gated content, and real-time sync between web and mobile.",

        impact: [
            "Improved secure access to safety data",
            "Enabled seamless cross-platform usage",
            "Enhanced content delivery performance",
        ],

        points: [
            "Integrated Google Sign-In authentication",
            "Built payment gateway via web integration",
            "Enabled real-time content sync",
            "Implemented secure access control",
        ],
    },

    monitoring: {
        title: "Monitoring & Management System",
        subtitle: "Internal platform monitoring system",

        metrics: ["Logs", "SSL Tracking", "RBAC"],

        desc: "A system for monitoring platform health, SSL status, logs, and operational metrics.",

        problem:
            "Needed centralized monitoring for system health, security, and operational metrics.",

        solution:
            "Developed a backend-driven monitoring system with real-time tracking and role-based access control.",

        impact: [
            "Improved system reliability monitoring",
            "Enabled proactive issue detection",
            "Centralized platform management",
        ],

        points: [
            "Developed backend services using PHP",
            "Implemented SSL and uptime monitoring",
            "Built centralized logging system",
            "Designed RBAC system",
            "Tracked database backups",
        ],
    },
    kooturavu: {
        title: "Kooturavu Inspection Platform",
        subtitle: "Enterprise-grade dynamic form & field inspection system",

        metrics: [
            "300+ Questions",
            "Offline First",
            "10+ Input Types",
        ],

        desc: "A production-grade Flutter application designed for field inspections and feasibility assessments with a powerful dynamic form engine supporting complex conditional logic and offline-first architecture.",

        problem:
            "Manual inspection processes were error-prone, inconsistent, and difficult to manage across multiple sectors with complex validation requirements.",

        solution:
            "Built a dynamic form engine using a type-driven widget factory pattern with multi-level conditional logic, real-time validation, and offline-first data synchronization.",

        impact: [
            "Handled 300+ dynamic conditional questions",
            "Enabled reliable offline inspections in rural areas",
            "Improved inspection efficiency and data accuracy",
        ],

        points: [
            "Built type-driven dynamic form engine (10+ input types)",
            "Implemented multi-level conditional rendering system",
            "Designed offline-first architecture using SQLite & SharedPreferences",
            "Developed multi-tab validation framework with aggregate error handling",
            "Implemented repeat groups for dynamic data entry",
            "Built table-based structured data input system",
            "Integrated GPS tracking and location-based workflows",
            "Implemented PDF report generation using Syncfusion",
        ],
        apps: [
            {
                name: "Kooturavu",
                link: "https://play.google.com/store/apps/details?id=com.e.tamilnadu_kootturavu",
                platform: "android",
            },
        ],
    },
};

export default function ProjectPage() {
    const { slug } = useParams();
    const project = data[slug];

    if (!project) return <div className="text-white p-10">Not Found</div>;

    return (
        <div className="relative min-h-screen bg-black text-white overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900 opacity-40"></div>

            <div className="relative z-10 px-6 py-16 max-w-5xl mx-auto">

                {/* HERO */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        {project.title}
                    </h1>

                    <p className="text-gray-400 text-lg">{project.subtitle}</p>
                </motion.div>

                {/* METRICS */}
                <div className="grid grid-cols-3 gap-4 mb-12">
                    {project.metrics.map((m, i) => (
                        <div
                            key={`metric-${i}`}
                            className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
                        >
                            {m}
                        </div>
                    ))}
                </div>

                {/* OVERVIEW */}
                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3 text-purple-300">
                        Overview
                    </h2>
                    <p className="text-gray-400">{project.desc}</p>
                </div>

                {/* CONTRIBUTIONS */}
                <div className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-300">
                        Key Contributions
                    </h2>

                    <div className="space-y-3">
                        {project.points.map((p, i) => (
                            <div
                                key={`point-${i}`}
                                className="p-4 bg-white/5 rounded-xl border border-white/10"
                            >
                                • {p}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mb-10">
                    <h2 className="text-xl font-semibold text-purple-300 mb-2">Problem</h2>
                    <p className="text-gray-400">{project.problem}</p>
                </div>

                <div className="mb-10">
                    <h2 className="text-xl font-semibold text-blue-300 mb-2">Solution</h2>
                    <p className="text-gray-400">{project.solution}</p>
                </div>

                <div className="mb-10">
                    <h2 className="text-xl font-semibold text-cyan-300 mb-2">Impact</h2>
                    <ul className="text-gray-400 space-y-2">
                        {project.impact?.map((i, idx) => (
                            <li key={`impact-${idx}`}>• {i}</li>
                        ))}
                    </ul>
                </div>

                {/* 🔥 LIVE APPS SHOWCASE */}
                {project.apps && (
                    <div>
                        <h2 className="text-2xl font-semibold mb-6 text-cyan-300">
                            Live Applications
                        </h2>

                        <div className="grid md:grid-cols-2 gap-4">
                            {project.apps.map((app, i) => (
                                <motion.div key={app.link}
                                    whileHover={{ scale: 1.06, y: -5 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                    onClick={() => window.open(app.link, "_blank")}
                                    className="group cursor-pointer relative p-[1px] rounded-2xl bg-gradient-to-r from-purple-500/40 via-blue-500/40 to-cyan-500/40"
                                >
                                    {/* Inner Card */}
                                    <div className="relative h-full w-full rounded-2xl bg-black/80 backdrop-blur-xl p-5 border border-white/10 group-hover:border-transparent transition">

                                        {/* Glow effect */}
                                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 blur-xl"></div>

                                        {/* Content */}
                                        <div className="relative z-10">

                                            {/* Title */}
                                            <h3 className="text-lg font-semibold mb-2">
                                                {app.name}
                                            </h3>

                                            {/* Platform Badge */}
                                            <div className="mb-3">
                                                <span className={`text-xs px-3 py-1 rounded-full 
          ${app.platform === "android"
                                                        ? "bg-green-500/20 text-green-400"
                                                        : "bg-gray-300/20 text-gray-200"}`}
                                                >
                                                    {app.platform === "android" ? "📱 Android" : "🍎 iOS"}
                                                </span>
                                            </div>

                                            {/* CTA */}
                                            <div className="flex items-center justify-between mt-4">
                                                <span className="text-xs text-gray-400">
                                                    View Application
                                                </span>

                                                <span className="text-sm text-blue-400 group-hover:translate-x-1 transition">
                                                    →
                                                </span>
                                            </div>

                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}