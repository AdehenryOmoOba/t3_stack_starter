import { trpcServerClient } from '@/trpc/client/trpcCaller'
import React from 'react'


async function TaskListServer() {
  
  const tasks = await trpcServerClient.getTasks()

  return (
    <div>
    <h4 className='py-1 px-4 bg-slate-600 rounded-full mb-6'>Server Component</h4>
    {tasks?.map((task) => (
      <p key={task.id} className='my-2'>
        {task.content} - <small className='text-slate-500'>{task.isDone ? "Done" : "Pending"}</small>
      </p>
    ))}
  </div>
  )
}

export default TaskListServer