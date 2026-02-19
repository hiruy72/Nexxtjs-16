'use server';

import { db } from './db';
import { events } from './db/schema';
import { initialEvents } from './constants';
import { revalidatePath } from 'next/cache';

const CATEGORIES = ['Hackathon', 'Meetup', 'Conference', 'Workshop'];

export async function seedDatabase() {
    try {
        // Check if events already exist
        const existingEvents = await db.query.events.findMany();
        if (existingEvents.length > 0) {
            return { success: false, message: 'Database already has events' };
        }

        // Insert initial events
        for (const [index, event] of initialEvents.entries()) {
            // Assign categories based on index or title for better variety
            let category = CATEGORIES[index % CATEGORIES.length];
            if (event.title.toLowerCase().includes('hack')) category = 'Hackathon';
            if (event.title.toLowerCase().includes('summit') || event.title.toLowerCase().includes('conf')) category = 'Conference';

            await db.insert(events).values({
                title: event.title,
                description: `Welcome to ${event.title}! This premier ${category.toLowerCase()} is designed to bring together the most passionate developers from around the globe. Join us in ${event.location} for deep-dive technical sessions, hands-on workshops, and unparalleled networking opportunities. Whether you're looking to master new frameworks or connect with industry leaders, this is the place to be.`,
                location: event.location,
                date: event.date,
                time: event.time,
                image: event.image,
                slug: event.slug,
                category: category,
            });
        }

        revalidatePath('/');
        return { success: true, message: 'Database seeded successfully' };
    } catch (error) {
        console.error('Error seeding database:', error);
        return { success: false, error: 'Failed to seed database' };
    }
}
