"use client"
import { tRPC } from '@/trpc/client/trpc'
import { FormEvent, useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'


function TaskListClient() {
  const [newTask, setNewTtask] = useState("")
  const {data, refetch} = tRPC.getTasks.useQuery()
  const {mutate: addTask} = tRPC.addTask.useMutation({
    onSettled: () => refetch()
  })
  const {mutate: setIsDone} = tRPC.setIsDone.useMutation({
    onSettled: () => refetch()
  })

  const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    newTask && addTask(newTask)
    setNewTtask("")
  }
  
  return (
    <div className='flex flex-col items-center'>
      <form onSubmit={handleAddTask} className='flex gap-2 w-[450px]'>
        <Input type="text" name='content' value={newTask} onChange={(e) => setNewTtask(e.target.value)} className='text-slate-50 border-slate-700 h-12'/>
        <Button type='submit' className='min-w-fit bg-slate-500 h-12 hover:bg-slate-700'>Add Task</Button>
      </form>
      <div className='flex flex-col self-start gap-y-4 mt-8 w-full'>
      {data?.map((task) => (
        <div key={task.id}  className={`flex relative justify-between bg-slate-900 pr-4 pl-8 h-14 items-center before:left-0 before:h-[100%] before:w-1 before:absolute ${task.isDone ? "before:bg-green-200" : "before:bg-slate-700"}`}>
        <input type='radio' checked={task.isDone} onChange={() => ("")}  value={newTask} id={`${task.id}`} className='accent-green-200'/>
        <label htmlFor={`${task.id}`} onClick={() => setIsDone({id: task.id, isDone: task.isDone})} className='my-2 cursor-pointer'>
          {task.content}
        </label>
        <small className='text-slate-500 w-14'>{task.isDone ? "Done" : "Pending"}</small>
        </div>
      ))}
      </div>
    </div>
  )
}

export default TaskListClient