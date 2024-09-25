'use client'
import logo from '@/assets/logo/car logo 1.png'
import Image from 'next/image'
import { Headerdata } from './data'
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
const Header:React.FC=()=>{
    const [Isopen,setIsopen]=useState<boolean>(false)
    return(
        <header className='bg-primary'>
            <nav className='container mx-auto flex items-center py-5 px-3 justify-between '> 
                
                <div className='flex items-center gap-x-2 '>
                <Image src={logo} alt='logo' className='w-16  '/>
                <h2 className='text-lg text-black font-bold font-Abril'>Dribes</h2>
            </div>
            <ul className='flex items-center gap-x-16 font-Lato text-lg transition-all duration-300 cursor-pointer'>
               {Headerdata.map(({id,name})=>{

                return <li key={id} className='text-success hover:text-secondary hover:border-b-2 hidden lg:block  border-secondary'>{name}</li>
               })}
            </ul>
            <button className='border rounded border-secondary text-secondary p-3 px-10 font-semibold font-Lato hidden lg:block'>Sign In</button>

              
       
            {/* mobile menu icon */}
            {Isopen?<span className=' lg:hidden text-4xl' onClick={()=>setIsopen(false)}><IoMdClose/></span>:<span className=' lg:hidden text-4xl' onClick={()=>setIsopen(true)}><HiOutlineMenuAlt1/></span>}
           
          
            </nav>
              {/* mobile menu */}
              {Isopen && <ul className={`grid place-items-center gap-y-6 py-10 bg-box_color font-Lato text-lg  transition-all duration-300 cursor-pointer`}>
               {Headerdata.map(({id,name})=>{

                return <li key={id} className='text-success hover:text-white hover:border-b-2 '>{name}</li>
               })}
            </ul>}
            
        </header>
    )
}

export default Header