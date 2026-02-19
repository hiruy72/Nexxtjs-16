'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { createEvent } from '@/lib/actions';
import { ArrowLeft, Send, MapPin, Calendar, Clock, Image as ImageIcon, AlignLeft, Type, Filter } from 'lucide-react';
import Link from 'next/link';

const CreateEventPage = () => {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(event.currentTarget);
        const result = await createEvent(formData);

        if (result.success) {
            router.push('/');
        } else {
            setError(result.error || 'Something went wrong');
            setIsSubmitting(false);
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto py-12 px-5"
        >
            <Link href="/" className="inline-flex items-center gap-2 text-light-200 hover:text-primary transition-colors group mb-8">
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span>Back to Hub</span>
            </Link>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-xl">
                <div className="space-y-4 mb-10">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent italic">
                        Host a New Event
                    </h1>
                    <p className="text-light-200 text-lg">
                        Share your event with the global developer community. Fill in the details below to get started.
                    </p>
                </div>

                {error && (
                    <div className="bg-rose-500/10 border border-rose-500/20 text-rose-500 p-4 rounded-xl mb-8">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Title */}
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-light-200">
                                <Type size={16} className="text-primary" />
                                Event Title
                            </label>
                            <input
                                name="title"
                                required
                                placeholder="e.g. Next.js Global Summit"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors"
                            />
                        </div>

                        {/* Category */}
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-light-200">
                                <Filter size={16} className="text-primary" />
                                Category
                            </label>
                            <select
                                name="category"
                                required
                                className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors"
                            >
                                <option value="General">General</option>
                                <option value="Hackathon">Hackathon</option>
                                <option value="Meetup">Meetup</option>
                                <option value="Conference">Conference</option>
                                <option value="Workshop">Workshop</option>
                            </select>
                        </div>

                        {/* Location */}
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-light-200">
                                <MapPin size={16} className="text-primary" />
                                Location
                            </label>
                            <input
                                name="location"
                                required
                                placeholder="e.g. San Francisco or Online"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-all shadow-sm"
                            />
                        </div>

                        {/* Date */}
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-light-200">
                                <Calendar size={16} className="text-primary" />
                                Date
                            </label>
                            <input
                                name="date"
                                type="date"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors"
                            />
                        </div>

                        {/* Time */}
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-light-200">
                                <Clock size={16} className="text-primary" />
                                Time
                            </label>
                            <input
                                name="time"
                                required
                                placeholder="e.g. 10:00 AM"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors"
                            />
                        </div>
                    </div>

                    {/* Image URL */}
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-light-200">
                            <ImageIcon size={16} className="text-primary" />
                            Image URL (Optional)
                        </label>
                        <input
                            name="image"
                            placeholder="https://example.com/image.jpg"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors"
                        />
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-light-200">
                            <AlignLeft size={16} className="text-primary" />
                            Description
                        </label>
                        <textarea
                            name="description"
                            required
                            rows={4}
                            placeholder="Tell us more about the event, agenda, and speakers..."
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 text-black py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                        {isSubmitting ? (
                            <span className="animate-pulse">Creating...</span>
                        ) : (
                            <>
                                <span>Publish Event</span>
                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </>
                        )}
                    </button>
                </form>
            </div>
        </motion.div>
    );
};

export default CreateEventPage;
