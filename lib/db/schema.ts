import { pgTable, serial, text, varchar, timestamp, date } from 'drizzle-orm/pg-core';

export const events = pgTable('events', {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 255 }).notNull(),
    description: text('description').notNull(),
    image: text('image').notNull(),
    slug: varchar('slug', { length: 255 }).notNull().unique(),
    location: varchar('location', { length: 255 }).notNull(),
    date: date('date').notNull(),
    time: varchar('time', { length: 50 }).notNull(),
    category: varchar('category', { length: 100 }).default('General'),
    createdAt: timestamp('created_at').defaultNow(),
});

export const registrations = pgTable('registrations', {
    id: serial('id').primaryKey(),
    eventId: serial('event_id').references(() => events.id),
    name: varchar('name', { length: 255 }).notNull(),
    email: varchar('email', { length: 255 }).notNull(),
    createdAt: timestamp('created_at').defaultNow(),
});
