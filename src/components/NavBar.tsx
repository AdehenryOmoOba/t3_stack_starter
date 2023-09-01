import Link from 'next/link'
import NavLinks from './NavLinks'

export default async function NavBar() {
  
  return (
    <div className='flex items-center px-8 justify-between w-screen h-20 bg-transparent text-white'>
      <Link href="/">
        <h2 className='text-4xl font-bold cursor-pointer bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]  bg-clip-text text-transparent'>t3_Stack</h2>
      </Link>
      <NavLinks />
    </div>
  )
}
