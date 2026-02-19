'use server';

import { db } from './db';
import { events, registrations } from './db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export async function getEvents() {
    try {
        return await db.query.events.findMany({
            orderBy: (events, { desc }) => [desc(events.createdAt)],
        });
    } catch (error) {
        console.error('Error fetching events:', error);
        return [];
    }
}

export async function getEventBySlug(slug: string) {
    try {
        return await db.query.events.findFirst({
            where: eq(events.slug, slug),
        });
    } catch (error) {
        console.error('Error fetching event by slug:', error);
        return null;
    }
}

export async function createEvent(formData: FormData) {
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const location = formData.get('location') as string;
    const date = formData.get('date') as string;
    const time = formData.get('time') as string;
    const image = formData.get('image') as string || '/images/default-event.png';
    const category = formData.get('category') as string || 'General';

    const slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

    try {
        await db.insert(events).values({
            title,
            description,
            location,
            date,
            time,
            image,
            slug,
            category,
        });

        revalidatePath('/');
        return { success: true };
    } catch (error) {
        console.error('Error creating event:', error);
        return { success: false, error: 'Failed to create event' };
    }
}

export async function registerForEvent(formData: FormData) {
    const eventId = parseInt(formData.get('eventId') as string);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;

    try {
        await db.insert(registrations).values({
            eventId,
            name,
            email,
        });

        return { success: true };
    } catch (error) {
        console.error('Error registering for event:', error);
        return { success: false, error: 'Failed to register' };
    }
}
