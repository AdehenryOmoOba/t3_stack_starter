import {  pgTable, serial, text, boolean} from 'drizzle-orm/pg-core';
 
 
export const task = pgTable('task', {
  id: serial('id').primaryKey(),
  content: text('content'),
  isDone: boolean("isDone").default(false),
});