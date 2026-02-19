import { getEventBySlug } from "@/lib/actions";
import EventDetailClient from "./EventDetailClient";
import Link from "next/link";

export const dynamic = "force-dynamic";


interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
    const { slug } = await params;
    const event = await getEventBySlug(slug);

    if (!event) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent italic">
                    Event Not Found
                </h2>
                <p className="text-light-200">The event you are looking for doesn't exist or has been moved.</p>
                <Link href="/" className="bg-white/5 border border-white/10 px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                    Return to Hub
                </Link>
            </div>
        );
    }

    return <EventDetailClient event={event} />;
}
