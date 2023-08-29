import {createTRPCReact} from "@trpc/react-query"
import type { AppRouter } from "@/tRPCServer"

export const tRPC = createTRPCReact<AppRouter>({})