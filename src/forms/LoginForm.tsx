"use client"
import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react'
import Image from 'next/image'
import { signIn, useSession } from 'next-auth/react'
import userSvg from "@/public/assets/login-user.svg"
import passwordSvg from "@/public/assets/password.svg"
import { redirect } from 'next/navigation'


function LoginForm() {
  const [formData, setformData] = useState({email: "", password: ""})
  const session =  useSession()
  useEffect(() => {
    if(session.data?.user) redirect("/dashboard")
  }, [session.data?.user])
  
  const handleFormUpdate = (e:ChangeEvent<HTMLInputElement>) => {
      setformData({...formData, [e.target.name]: e.target.value})
    }
  
  const handleSubmit = async (e: SyntheticEvent) => {
      e.preventDefault()
      if(!formData.email || !formData.password) return
      const response = await signIn("credentials", {
        email: formData.email, 
        password: formData.password, 
        redirect: false,
    })
  }

  return (
    <form className="flex flex-col w-[90vw] items-center h-max px-8 py-16 bg-transparent rounded-xl  gap-y-4 md:w-[28rem] md:px-16 md:py-16">

    <div className="flex flex-col items-center mb-2">
      <p className="text-[24px] font-bold mb-2 text-white">Login</p>
    </div>

    <div className="w-full">
      <div className="mb-4">
        <label className="text-small-medium text-slate-400 inline-block mb-2">Email</label>
        <div className="flex px-2 py-4 rounded-lg border border-slate-800">
          <Image height={20} width={20} src={userSvg} alt="user svg" className="mr-1"/>
          <input type="text" name="email" value={formData.email} onChange={handleFormUpdate} placeholder="someone@example.com" className="bg-transparent text-small-medium flex-1 px-1 text-sm outline-none text-slate-200 placeholder:text-small-medium placeholder:text-slate-600"/> 
        </div>
      </div>

      <div>
        <label className="text-small-medium text-slate-400 inline-block mb-2">Password</label>
        <div className="flex px-2 py-4 rounded-lg border border-slate-800">
          <Image height={15} width={15} src={passwordSvg} alt="password svg" className="mr-1"/>
          <input type="password" name="password" value={formData.password} onChange={handleFormUpdate} placeholder="Password" className="bg-transparent text-small-medium flex-1 px-1 text-sm outline-none text-slate-200 placeholder:text-small-medium placeholder:text-slate-600"/> 
        </div>
      </div>
    </div>

    <button type="submit" onClick={handleSubmit} className="bg-white outline-none text-sm font-bold w-full text-slate-950 py-3 rounded-lg">Login</button>

  </form>
  )
}

export default LoginForm