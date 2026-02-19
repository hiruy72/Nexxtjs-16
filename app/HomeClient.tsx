'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Explorebtn from "@/components/Explorebtn";
import EventCard from "@/components/EventCard";
import { Search, Filter, Sparkles } from 'lucide-react';
import { EVENT_CATEGORIES, EventItem } from '@/lib/constants';

interface HomeClientProps {
    initialEvents: EventItem[];
}

const HomeClient = ({ initialEvents }: HomeClientProps) => {

    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');


    const filteredEvents = useMemo(() => {
        return initialEvents.filter(event => {
            const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                event.location.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = activeCategory === 'All' || event.category === activeCategory;
            return matchesSearch && matchesCategory;
        });
    }, [initialEvents, searchQuery, activeCategory]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <motion.section
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="relative z-10"
        >
            <div className="flex flex-col items-center justify-center text-center space-y-8 pt-12 pb-24">
                <motion.div
                    variants={itemVariants}
                    className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-sm font-medium text-primary mb-2 shadow-inner"
                >
                    <Sparkles size={14} />
                    <span>Discover 2025&apos;s Top Tech Events</span>
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="text-center leading-[1] tracking-tight"
                >
                    The Hub for Every Dev <br /> Event You <span className="text-primary italic">Can&apos;t</span> Miss
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-center text-light-100 text-lg max-w-2xl mx-auto leading-relaxed"
                >
                    From global hackathons to local meetups, find your next big opportunity and connect with the world&apos;s most innovative developer communities.
                </motion.p>

                <motion.div variants={itemVariants}>
                    <Explorebtn />
                </motion.div>
            </div>

            {/* Filtering Section */}
            <motion.div
                variants={itemVariants}
                className="sticky top-20 z-40 py-6 mb-12 backdrop-blur-md border-y border-white/5 bg-black/20"
            >
                <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                    <div className="relative w-full md:w-96 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-light-200 group-focus-within:text-primary transition-colors" size={18} />
                        <input
                            type="text"
                            placeholder="Search events, cities, or topics..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-3 focus:outline-none focus:border-primary/50 transition-all shadow-xl placeholder:text-light-200/50"
                        />
                    </div>

                    <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar w-full md:w-auto">
                        <Filter size={16} className="text-light-200 shrink-0 mr-2" />
                        {EVENT_CATEGORIES.map((cat) => (

                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all shrink-0 border ${activeCategory === cat
                                    ? 'bg-primary text-black border-primary shadow-lg shadow-primary/20 scale-105'
                                    : 'bg-white/5 text-light-200 border-white/10 hover:bg-white/10'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </motion.div>

            <motion.div
                variants={itemVariants}
                id="events"
                className="space-y-12 scroll-mt-32"
            >
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-3xl font-bold">
                            {searchQuery || activeCategory !== 'All' ? 'Search Results' : 'Featured Events'}
                        </h3>
                        <p className="text-light-200 text-sm mt-1">
                            {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'} found
                        </p>
                    </div>
                    {initialEvents.length > 0 && (
                        <Link href="/events" className="text-primary font-bold hover:underline group flex items-center gap-1">
                            Explore All
                            <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>→</motion.span>
                        </Link>
                    )}
                </div>

                {filteredEvents.length > 0 ? (
                    <div className="events grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <AnimatePresence mode="popLayout">
                            {filteredEvents.map((event) => (
                                <motion.div
                                    key={event.slug}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <EventCard {...event} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                ) : (
                    <div className="text-center py-24 bg-white/5 rounded-[2.5rem] border border-white/10 space-y-8 backdrop-blur-sm">
                        <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto border border-white/10">
                            <Search size={32} className="text-light-200/50" />
                        </div>
                        <div className="space-y-3">
                            <p className="text-light-200 text-2xl font-bold">No events matching your search</p>
                            <p className="text-light-100 max-w-md mx-auto">
                                We couldn&apos;t find anything for &quot;{searchQuery}&quot;. Try adjusting your filters or check back later!
                            </p>
                        </div>
                        {initialEvents.length === 0 && (
                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                                <Link href="/create" className="bg-primary px-10 py-4 rounded-2xl text-black font-bold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20">
                                    Host First Event
                                </Link>
                                <button
                                    onClick={async () => {
                                        const { seedDatabase } = await import('@/lib/seed');
                                        const res = await seedDatabase();
                                        if (res.success) window.location.reload();
                                    }}
                                    className="bg-white/5 border border-white/10 px-10 py-4 rounded-2xl text-white font-bold hover:bg-white/10 transition-all"
                                >
                                    Seed with Demo Data
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </motion.div>
        </motion.section>
    );
};

export default HomeClient;

