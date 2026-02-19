'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EventCard from "@/components/EventCard";
import { Search, Filter, Calendar } from 'lucide-react';

interface EventsListProps {
    initialEvents: any[];
}

const CATEGORIES = ['All', 'Hackathon', 'Meetup', 'Conference', 'Workshop'];

const EventsList = ({ initialEvents }: EventsListProps) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredEvents = useMemo(() => {
        return initialEvents.filter(event => {
            const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                event.description?.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = activeCategory === 'All' || event.category === activeCategory;
            return matchesSearch && matchesCategory;
        });
    }, [initialEvents, searchQuery, activeCategory]);

    return (
        <div className="space-y-12">
            {/* Search and Filters */}
            <div className="flex flex-col lg:flex-row gap-8 items-center justify-between bg-white/5 p-8 rounded-[2rem] border border-white/10 backdrop-blur-xl">
                <div className="relative w-full lg:w-1/3 group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-light-200 group-focus-within:text-primary transition-colors" size={20} />
                    <input
                        type="text"
                        placeholder="Search events, cities, or tech..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-black/40 border border-white/10 rounded-2xl pl-14 pr-6 py-4 focus:outline-none focus:border-primary/50 transition-all text-lg shadow-2xl"
                    />
                </div>

                <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                    <div className="flex items-center gap-2 mr-4 text-light-200 font-medium">
                        <Filter size={18} />
                        <span>Filter by:</span>
                    </div>
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all border ${activeCategory === cat
                                    ? 'bg-primary text-black border-primary shadow-xl shadow-primary/20 scale-105'
                                    : 'bg-white/5 text-light-200 border-white/10 hover:border-white/20'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Results Grid */}
            <div className="space-y-8">
                <div className="flex items-center justify-between border-b border-white/5 pb-6">
                    <p className="text-light-200 font-medium">
                        Showing <span className="text-white font-bold">{filteredEvents.length}</span> results
                    </p>
                </div>

                {filteredEvents.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <AnimatePresence mode="popLayout">
                            {filteredEvents.map((event) => (
                                <motion.div
                                    key={event.slug}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <EventCard {...event} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                ) : (
                    <div className="text-center py-32 bg-white/5 rounded-[3rem] border border-white/10">
                        <div className="max-w-md mx-auto space-y-6">
                            <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto border border-white/10">
                                <Calendar size={40} className="text-light-200/30" />
                            </div>
                            <h3 className="text-2xl font-bold">No events found</h3>
                            <p className="text-light-200">
                                We couldn&apos;t find any events matching your current selection. Try broadening your search or choosing a different category.
                            </p>
                            <button
                                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                                className="text-primary font-bold hover:underline"
                            >
                                Clear all filters
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EventsList;
