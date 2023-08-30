import {  pgTable, serial, text, boolean} from 'drizzle-orm/pg-core';
 
 
export const task = pgTable('task', {
  id: serial('id').primaryKey().notNull(),
  content: text('content').notNull(),
  isDone: boolean("is_done").default(false).notNull(),
});