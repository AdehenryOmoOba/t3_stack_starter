"use client"
import { FormEvent, useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { tRPC } from '@/trpc/client/trpc'
import { useRouter } from 'next/navigation'


function InputField() {
  const router = useRouter()
  const [task, seTtask] = useState("")
  const {mutate: addTask} = tRPC.addTask.useMutation({
    onSettled: () => router.refresh()
  })

  const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    task && addTask(task)
    seTtask("")
  }

  return (
    <form onSubmit={handleAddTask} className='flex gap-2 w-[450px]'>
      <Input type="text" name='content' value={task} onChange={(e) => seTtask(e.target.value)} className='text-slate-50 border-slate-700 h-12'/>
      <Button type='submit' className='min-w-fit bg-slate-500 h-12 hover:bg-slate-700'>Add Task</Button>
    </form>
  )
}

export default InputField