import { getEvents } from "@/lib/actions";
import { Sparkles } from "lucide-react";
import EventsList from "./EventsList";

export default async function EventsPage() {
    const events = await getEvents();

    return (
        <div className="max-w-7xl mx-auto space-y-16 pb-20">
            <div className="space-y-6 pt-10">
                <div className="flex items-center gap-2 text-primary font-medium">
                    <Sparkles size={18} />
                    <span className="uppercase tracking-widest text-sm">Full Catalog</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                    Explore All <span className="text-primary italic">Opportunities</span>
                </h1>
                <p className="text-light-100 text-xl max-w-2xl leading-relaxed">
                    Browse our complete list of developer events. Filter by category, location, or date to find exactly what you&apos;re looking for.
                </p>
            </div>

            <EventsList initialEvents={events} />
        </div>
    );
}
