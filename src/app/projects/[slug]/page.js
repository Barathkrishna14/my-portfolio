"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";

const data = {
    trading: {
        title: "XtremeNext Trading Platform",
        subtitle: "White-label trading system powering 160+ apps",
        metrics: ["160+ Apps", "10K+ Users", "40% Latency ↓"],
        desc: "A high-performance trading platform supporting forex & crypto markets with real-time data streaming, charting, and scalable white-label architecture.",

        points: [
            "Built WebSocket-based real-time data streaming",
            "Designed white-label architecture for 160+ apps",
            "Implemented order execution & charting systems",
            "Optimized performance for low-latency trading",
            "Managed Play Store & App Store deployments",
        ],

        apps: [
            {
                name: "InfinexFX",
                link: "https://play.google.com/store/apps/details?id=com.e.infinefx",
                platform: "android",
            },
            {
                name: "TradeXN",
                link: "https://play.google.com/store/apps/details?id=com.e.tradexn",
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
            {
                name: "MyForex Cart",
                link: "https://play.google.com/store/apps/details?id=com.e.myforex_cart",
                platform: "android",
            },
        ],
    },
    service: {
        title: "Blutasker Service Marketplace",
        subtitle: "Urban Company-like service platform",
        metrics: ["Cross-platform", "Payments", "Realtime"],
        desc: "A scalable marketplace enabling users to post tasks and hire professionals.",
        points: [
            "Implemented task posting and service workflows",
            "Integrated payment system via InAppWebView",
            "Added voice recording and media uploads",
            "Designed reusable and scalable UI components",
        ],
    },

    "pole-vault": {
        title: "Pole Vault Field System",
        subtitle: "QR-based offline-first field tracking app",
        metrics: ["Offline Sync", "Geo Tracking", "QR Scan"],
        desc: "A smart field application for tracking pole installations using QR scanning, offline-first architecture, and real-time synchronization.",

        points: [
            "Built QR-based pole registration workflow",
            "Implemented offline-first architecture using SQLite",
            "Captured geolocation, photos, and field data",
            "Designed sync mechanism for remote data updates",
            "Enabled secure deep-link-based access",
        ],

        apps: [
            {
                name: "Pole Vault (Play Store)",
                link: "https://play.google.com/store/apps/details?id=com.schnelliot.polevault",
                platform: "android",
            },
        ],
    },

    ehs: {
        title: "EHS Safety Data Platform",
        subtitle: "Secure safety data mobile app",
        metrics: ["Auth", "Payments", "Realtime Sync"],
        desc: "A cross-platform app providing access to safety data sheets.",
        points: [
            "Integrated Google Sign-In authentication",
            "Built payment gateway using web integration",
            "Enabled real-time content sync",
            "Designed secure access control system",
        ],
    },

    monitoring: {
        title: "Monitoring & Management System",
        subtitle: "Internal platform monitoring system",
        metrics: ["Logs", "SSL Tracking", "RBAC"],
        desc: "A system for monitoring platform health, logs, and operations.",
        points: [
            "Built backend services using PHP",
            "Implemented SSL and uptime monitoring",
            "Developed centralized logging system",
            "Designed role-based access control",
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
                            key={i}
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
                                key={i}
                                className="p-4 bg-white/5 rounded-xl border border-white/10"
                            >
                                • {p}
                            </div>
                        ))}
                    </div>
                </div>

                {/* 🔥 LIVE APPS SHOWCASE */}
                {project.apps && (
                    <div>
                        <h2 className="text-2xl font-semibold mb-6 text-cyan-300">
                            Live Applications
                        </h2>

                        <div className="grid md:grid-cols-2 gap-4">
                            {project.apps.map((app, i) => (
                                <motion.div
                                    whileHover={{ scale: 1.06, y: -5 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                    onClick={() => window.open(app.link, "_blank")}
                                    className="group cursor-pointer relative p-[1px] rounded-2xl bg-gradient-to-r from-purple-500/40 via-blue-500/40 to-cyan-500/40"
                                >
                                    {/* Inner Card */}
                                    <div key={i} className="relative h-full w-full rounded-2xl bg-black/80 backdrop-blur-xl p-5 border border-white/10 group-hover:border-transparent transition">

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