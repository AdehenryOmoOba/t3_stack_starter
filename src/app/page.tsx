import TaskListClient from '@/components/TaskListClient'
import TaskListServer from '@/components/TaskListServer'
import {Inter} from "next/font/google"


const inter = Inter({subsets: ["latin"], weight: "500"})

export default function Home() {
  return (
    <main className={`${inter.className} flex min-h-screen flex-col items-center justify-start gap-y-10 p-24`}>
      <h1 className='text-3xl font-bold text-blue-200'>tRPC</h1>
      <TaskListClient />
      <TaskListServer />
    </main>
  )
}
