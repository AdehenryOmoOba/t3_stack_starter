"use client"
import { tRPC } from '@/trpc/client/trpc'


function TaskListClient() {

  const {data} = tRPC.getTasks.useQuery()
  
  return (
    <div className='w-[300px]'>
      <h4 className='py-1 px-4 bg-slate-600 rounded-full mb-6 text-center'>Client Component</h4>
      {data?.map((task) => (
        <p key={task.id} className='my-2'>
          {task.content} - <small className='text-slate-500'>{task.isDone ? "Done" : "Pending"}</small>
        </p>
      ))}
    </div>
  )
}

export default TaskListClient