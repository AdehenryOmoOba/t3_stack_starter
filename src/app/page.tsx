import TaskList from '@/components/TaskList'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-y-10 p-24">
      <h1 className='text-3xl font-bold text-blue-200'>Hello tRPC</h1>
      <TaskList />
    </main>
  )
}
