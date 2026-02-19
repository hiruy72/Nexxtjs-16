'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, MessageSquare, Zap, Github, Twitter, Disc as Discord, Sparkles } from 'lucide-react';
import Link from 'next/link';

const COMMUNITIES = [
    {
        name: "WebDev Collective",
        description: "A global community of frontend and backend enthusiasts sharing knowledge and trends.",
        members: "12k+",
        icon: Globe,
        color: "from-blue-500/20 to-cyan-500/20"
    },
    {
        name: "AI Innovators",
        description: "Deep dive into machine learning, LLMs, and the future of artificial intelligence.",
        members: "8k+",
        icon: Zap,
        color: "from-amber-500/20 to-orange-500/20"
    },
    {
        name: "Open Source Heroes",
        description: "Contributing to the projects that power the internet. Find your next project here.",
        members: "15k+",
        icon: Github,
        color: "from-purple-500/20 to-fuchsia-500/20"
    }
];

const CommunitiesPage = () => {
    return (
        <div className="max-w-7xl mx-auto space-y-20 pb-20">
            <div className="flex flex-col items-center text-center space-y-8 pt-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-2 rounded-full text-sm font-bold text-primary shadow-xl"
                >
                    <Users size={18} />
                    <span>JOIN THE MOVEMENT</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.9]"
                >
                    Built by Devs, <br /> For <span className="text-primary italic">Devs</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-light-100 text-xl max-w-3xl leading-relaxed"
                >
                    Connect with like-minded individuals, share your projects, and grow your career with the world&apos;s most active tech communities.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {COMMUNITIES.map((community, index) => {
                    const IconComponent = community.icon;
                    return (
                        <motion.div
                            key={community.name}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                            whileHover={{ y: -10 }}
                            className={`relative p-8 rounded-[2.5rem] bg-gradient-to-br ${community.color} border border-white/10 backdrop-blur-xl group overflow-hidden`}
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-150 group-hover:rotate-12 transition-transform duration-700">
                                <IconComponent size={120} />
                            </div>

                            <div className="relative space-y-6">
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10">
                                    <IconComponent size={32} />
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-3xl font-bold">{community.name}</h3>
                                    <p className="text-light-100/80 leading-relaxed">
                                        {community.description}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                    <div className="flex items-center gap-2 text-sm text-light-200">
                                        <Users size={16} className="text-primary" />
                                        <span className="font-bold text-white">{community.members}</span> members
                                    </div>
                                    <button className="bg-white/10 hover:bg-white/20 px-6 py-2 rounded-xl text-sm font-bold transition-all border border-white/10">
                                        Join Now
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Hero-like Call to Action */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative bg-white/5 border border-white/10 rounded-[3rem] p-12 md:p-24 overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10 opacity-50" />
                <div className="relative z-10 flex flex-col items-center text-center space-y-10">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-6xl font-bold italic">Start Your Own Community</h2>
                        <p className="text-light-200 text-xl max-w-2xl">
                            Have a niche interest? Host your own community hub on DevEvent and start gathering your tribe today.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <button className="bg-primary px-12 py-4 rounded-2xl text-black font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/20">
                            Create Community
                        </button>
                        <div className="flex items-center gap-4 text-light-100 bg-white/5 px-8 py-4 rounded-2xl border border-white/10">
                            <Link href="#" className="hover:text-primary transition-colors"><Twitter size={24} /></Link>
                            <Link href="#" className="hover:text-primary transition-colors"><Discord size={24} /></Link>
                            <Link href="#" className="hover:text-primary transition-colors"><MessageSquare size={24} /></Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default CommunitiesPage;
