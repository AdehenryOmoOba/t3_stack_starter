import { db } from "@/db/dbClient";
import { router, procedure } from "./trpc";
import { task } from "@/db/schema";


export const appRouter = router({
    getTasks: procedure.query(async () => {
        const result = await db.select().from(task)
        return result
    })
})

export type AppRouter = typeof appRouter