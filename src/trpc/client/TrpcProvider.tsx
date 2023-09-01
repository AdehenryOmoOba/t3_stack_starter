"use client"
import React, {useState} from 'react'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query" 
import { httpBatchLink } from '@trpc/client'
import { tRPC } from './trpc'


function TrpcProvider({children}: {children: React.ReactNode}) {
  const [queryClient] = useState(() => new QueryClient({}))
  const [trpcClient] = useState(() => tRPC.createClient({
    links: [
        httpBatchLink({url: "http://localhost:3000/api/trpc"})
    ]
  }))

  return (
    <tRPC.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </tRPC.Provider>
  )
}

export default TrpcProvider