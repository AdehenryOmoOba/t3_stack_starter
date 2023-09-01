
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'


async function page() {
  const session = await getServerSession()
  if(!session?.user) redirect("/login")

  return (
    <div className='flex items-center justify-center h-1/2'>
        <p className='bg-white text-slate-950 py-4 px-8 rounded-md font-semibold'>Welcome to your Dashboard 🤩</p>
    </div>
  )
}

export default page