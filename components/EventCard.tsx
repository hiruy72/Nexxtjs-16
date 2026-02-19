import Link from "next/link";
import Image from "next/image";
import { MapPin, Calendar, Clock, ChevronRight, Sparkles } from "lucide-react";

interface Props {
    title: string;
    image: string;
    slug: string;
    location: string;
    date: string;
    time: string;
    category?: string | null;
}

const EventCard = ({ title, image, slug, location, date, time, category }: Props) => {
    const displayCategory = category || "General";

    return (
        <Link href={`/events/${slug}`} className="group block h-full">
            <div className="relative h-full flex flex-col overflow-hidden rounded-[2.5rem] bg-white/[0.02] border border-white/10 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_40px_-10px_rgba(var(--primary-rgb),0.2)] hover:bg-white/[0.04]">
                {/* Image Container */}
                <div className="relative h-52 w-full overflow-hidden shrink-0">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030708] via-transparent to-transparent opacity-80" />

                    {/* Category Badge */}
                    <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.15em] text-white">
                            {displayCategory}
                        </span>

                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-7 space-y-5">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-primary/90">
                            <MapPin size={14} className="shrink-0" />
                            <p className="text-[11px] font-black uppercase tracking-widest line-clamp-1">{location}</p>
                        </div>

                        <h4 className="text-2xl font-bold leading-[1.2] group-hover:text-primary transition-colors duration-300 line-clamp-2 min-h-[3.5rem]">
                            {title}
                        </h4>
                    </div>

                    <div className="flex-grow" />

                    <div className="flex flex-col gap-5 pt-6 border-t border-white/5">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-light-200/80">
                                <div className="flex items-center gap-2">
                                    <Calendar size={14} className="text-primary/60" />
                                    <span className="text-[11px] font-bold">{date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={14} className="text-primary/60" />
                                    <span className="text-[11px] font-bold">{time}</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                                <span>Details</span>
                                <ChevronRight size={16} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Subtle Glow Effect */}
                <div className="absolute inset-x-0 -bottom-px h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
        </Link>
    );
};

export default EventCard;
