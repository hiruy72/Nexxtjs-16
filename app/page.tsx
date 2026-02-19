import HomeClient from "./HomeClient";
import { getEvents } from "@/lib/actions";

export const dynamic = "force-dynamic";


export default async function Page() {
    const events = await getEvents();

    return <HomeClient initialEvents={events} />;
}
