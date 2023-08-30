import InputField from './InputField'
import ListItems from './ListItems'
import { trpcServerClient } from '@/trpc/client/trpcCaller'


async function TaskListServer() {

  const data = await trpcServerClient.getTasks()
  
  return (
    <div className='flex flex-col items-center'>
      <InputField />
      <div className='flex flex-col self-start gap-y-4 mt-8 w-full'>
      {data?.map((task) => (
        <ListItems key={task.id} task={task} />
      ))}
      </div>
    </div>
  )
}

export default TaskListServer