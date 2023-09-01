"use client"
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { signOut, useSession } from 'next-auth/react'


function NavLinks() {
  const session = useSession()
  const router = useRouter()

  return (
    <div className='flex gap-x-4 w-[15%]'>
    <Button onClick={() => router.push("/dashboard")} className='min-w-fit bg-white text-slate-950 py-2 px-4 hover:bg-slate-100'>View Dashboard</Button>
    {session.data?.user ? <Button onClick={() => signOut()} className='min-w-fit bg-transparent text-white py-2 px-4 hover:bg-slate-800 border border-white'>Logout</Button> :
    <Button onClick={() => router.push("/login")} className='min-w-fit bg-transparent text-white py-2 px-4 hover:bg-slate-800 border border-white'>Login</Button>
    }
  </div>
  )
}

export default NavLinks