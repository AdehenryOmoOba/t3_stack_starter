"use client"
import { useRouter } from 'next/navigation'
import { tRPC } from "@/trpc/client/trpc"

function ListItems({task}: {task: {id: number, content: string, isDone: boolean}}) {
  const router = useRouter()
  const {mutate: setIsDone} = tRPC.setIsDone.useMutation({
    onSettled: () => router.refresh()
  })
  
  return (
      <div key={task.id}  className={`flex relative justify-between bg-slate-900 pr-4 pl-8 h-14 items-center before:left-0 before:h-[100%] before:w-1 before:absolute ${task.isDone ? "before:bg-green-200" : "before:bg-slate-700"}`}>
        <input type='radio' checked={task.isDone} onChange={() => ("")}  value={task.content} id={`${task.id}`} className='accent-green-200'/>
        <label htmlFor={`${task.id}`} onClick={() => setIsDone({id: task.id, isDone: task.isDone})} className='my-2 cursor-pointer'>
          {task.content}
        </label>
        <small className='text-slate-500 w-14'>{task.isDone ? "Done" : "Pending"}</small>
      </div>
    )
}

export default ListItems