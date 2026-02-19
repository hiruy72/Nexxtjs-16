import HomeClient from "./HomeClient";
import { getEvents } from "@/lib/actions";

export default async function Page() {
    const events = await getEvents();

    return <HomeClient initialEvents={events} />;
}
