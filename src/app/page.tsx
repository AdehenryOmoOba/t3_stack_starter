import TaskListClient from '@/components/TaskListClient'
import TaskListServer from '@/components/TaskListServer'
import {Inter} from "next/font/google"


const inter = Inter({subsets: ["latin"], weight: "500"})

export default function Home() {
  return (
    <main className={`${inter.className} flex min-h-screen flex-col items-center justify-start gap-y-10 p-24`}>
      {/* <TaskListClient /> */}
      <TaskListServer />
    </main>
  )
}
