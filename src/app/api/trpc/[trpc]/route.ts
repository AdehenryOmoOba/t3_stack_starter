import {fetchRequestHandler} from "@trpc/server/adapters/fetch"
import { appRouter } from "@/trpc/server"


const handler = (req: Request) => {
 return  fetchRequestHandler({
    endpoint: "/api/trpc",
    router: appRouter,
    req,
    createContext: () => ({})
  })
}

export {handler as GET, handler as POST}
