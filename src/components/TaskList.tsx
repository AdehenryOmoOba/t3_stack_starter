"use client"
import { tRPC } from '@/trpcClient/client'


function TaskList() {

  const {data} = tRPC.getTasks.useQuery()
  
  return (
    <div>
      {data?.map((task) => (
        <p className='my-2'>
          {task.content} - <small className='text-slate-500'>{task.isDone ? "Done" : "Pending"}</small>
        </p>
      ))}
    </div>
  )
}

export default TaskList