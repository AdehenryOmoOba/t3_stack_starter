import { db } from "@/db/dbClient";
import { router, procedure } from "./trpc";
import { task } from "@/db/schema";
import {z} from "zod"
import { desc, eq } from "drizzle-orm";


export const appRouter = router({
    getTasks: procedure.query(async () => {
        const result = await db.select().from(task).orderBy(desc(task.id))
        return result
    }),

    addTask: procedure.input(z.string()).mutation(async ({input}) => {
      await db.insert(task).values({content: input})
      return true
    }),

    setIsDone: procedure.input(z.object({id: z.number(), isDone: z.boolean()})).mutation(async ({input}) => {
        await db.update(task).set({isDone: !input.isDone}).where(eq(task.id, input.id))
        return true
    })
})

export type AppRouter = typeof appRouter