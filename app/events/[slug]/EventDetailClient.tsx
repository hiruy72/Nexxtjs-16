'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, Users, ArrowLeft, Share2, Heart, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { registerForEvent } from '@/lib/actions';

interface EventDetailClientProps {
    event: any;
}

const EventDetailClient = ({ event }: EventDetailClientProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        formData.append('eventId', event.id.toString());

        const result = await registerForEvent(formData);

        if (result.success) {
            setIsRegistered(true);
        } else {
            setError(result.error || 'Failed to register');
            setIsSubmitting(false);
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto space-y-12 pb-20"
        >
            {/* Back Button */}
            <Link href="/" className="inline-flex items-center gap-2 text-light-200 hover:text-primary transition-colors group">
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span>Back to Events</span>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left Column: Image and Description */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="relative h-[450px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                        <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                            <div className="space-y-4">
                                <span className="bg-primary px-4 py-1 rounded-full text-black text-sm font-bold uppercase tracking-wider">
                                    Upcoming
                                </span>
                                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                    {event.title}
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold border-b border-white/5 pb-4">About the Event</h2>
                        <p className="text-light-100 text-lg leading-relaxed whitespace-pre-wrap">
                            {event.description || `Join us for ${event.title} in ${event.location}. This event brings together the brightest minds in the industry for a day of learning, networking, and innovation.`}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/5">
                                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                                    <Users size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold">500+ Attendees</h4>
                                    <p className="text-sm text-light-200">Global community</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/5">
                                <div className="p-3 rounded-xl bg-blue-400/10 text-blue-400">
                                    <Share2 size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold">Networking</h4>
                                    <p className="text-sm text-light-200">Connect with peers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Details Card */}
                <div className="space-y-6">
                    <div className="sticky top-24 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-8 shadow-xl">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-white/10">
                                    <Calendar className="text-primary" size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-light-200 uppercase tracking-widest font-semibold">Date</p>
                                    <p className="text-lg font-bold">{event.date}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-white/10">
                                    <Clock className="text-primary" size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-light-200 uppercase tracking-widest font-semibold">Time</p>
                                    <p className="text-lg font-bold">{event.time}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-white/10">
                                    <MapPin className="text-primary" size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-light-200 uppercase tracking-widest font-semibold">Location</p>
                                    <p className="text-lg font-bold">{event.location}</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {isRegistered ? (
                                <div className="bg-primary/10 border border-primary/20 p-6 rounded-2xl text-center space-y-3">
                                    <div className="flex justify-center">
                                        <CheckCircle size={48} className="text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">You&apos;re In!</h3>
                                    <p className="text-sm text-light-200">Check your email for details.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleRegister} className="space-y-4">
                                    <div className="space-y-2">
                                        <input
                                            name="name"
                                            required
                                            placeholder="Your Name"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <input
                                            name="email"
                                            type="email"
                                            required
                                            placeholder="Your Email"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors"
                                        />
                                    </div>
                                    {error && <p className="text-rose-500 text-xs">{error}</p>}
                                    <button
                                        disabled={isSubmitting}
                                        className="w-full bg-primary hover:bg-primary/90 text-black py-4 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-primary/20 disabled:opacity-50"
                                    >
                                        {isSubmitting ? 'Registering...' : 'Register Now'}
                                    </button>
                                </form>
                            )}

                            <div className="flex gap-4">
                                <button className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 py-3 rounded-xl transition-colors">
                                    <Heart size={20} className="text-rose-500" />
                                    <span>Favorite</span>
                                </button>
                                <button className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 py-3 rounded-xl transition-colors">
                                    <Share2 size={20} className="text-blue-400" />
                                    <span>Share</span>
                                </button>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-white/5 text-center">
                            <p className="text-sm text-light-200">
                                Tickets are selling fast! <br /> Don&apos;t wait to secure your spot.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default EventDetailClient;
