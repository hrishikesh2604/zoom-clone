import React,{ReactNode} from 'react'
import  Sidebar from '@/components/ui/Sidebar'
import Navbar  from  '@/components/ui/Navbar'
const HomeLayout=({children}:{children:ReactNode}) =>{
  return (
    <main className="relative">
    <Navbar/>
     <div className='flex'>

<Sidebar/>

<section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-m:pb-14 sm:px-14">
    <div className="w-full">
        {children}
    </div>
</section>
     </div>
    </main>
  )
}

export default  HomeLayout