import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import logo from '@/assets/logo/car logo 1.png'
import Image from "next/image";
import { FooterData1, FooterData2, FooterData3, FooterData4 } from "./data";

const Footer:React.FC=()=>{
    return(
       <footer className="mb-10 ">
        <div className="flex lg:justify-around flex-col md:flex-row lg:items-center md:justify-center md:items-center md:gap-x-20 lg:gap-x-10 gap-y-10 flex-wrap xl:flex-nowrap container mx-auto ">
            <ul>
<li className="flex gap-x-2 items-center"><Image src={logo} alt="logo" className="w-10" /><span className='text-lg text-black font-bold font-Abril'>Dribes</span></li>
<li className="text-sm md:text-lg  w-52 md:w-64">We are a rent a car agency that will help
you fins best car you have been
dream to ride, lets</li>
<li className="flex  gap-x-3 mt-4">
    <span className="text-2xl">  <FaInstagramSquare/></span>
    <span className="text-2xl"> <FaFacebookSquare/></span>
    <span className="text-2xl"><FaTwitterSquare/></span>
    <span className="text-2xl"><FaLinkedin/></span>
</li>
            </ul>
            <ul>
                {FooterData1.map(({id,name})=>{
                    return <li key={id} className={`${id==1?"text-xl font-bold mb-4  text-secondary":"text-lg text-success"} text-sm md:text-lg`}>{name}</li>
                })}
            </ul>
            <ul>

            {FooterData2.map(({id,name})=>{
                    return <li key={id} className={`${id==1?"text-xl font-bold mb-4  text-secondary":"text-lg text-success"} text-sm md:text-lg`}>{name}</li>
                })} 
            </ul>
            <ul>
            {FooterData3.map(({id,name})=>{
                    return <li key={id} className={`${id==1?"text-xl font-bold mb-4  text-secondary":"text-lg text-success"} text-sm md:text-lg`}>{name}</li>
                })}
            </ul>
            <ul>
            {FooterData4.map(({id,name})=>{
                    return <li key={id} className={`${id==1?"text-xl font-bold mb-4  text-secondary":"text-lg text-success"} text-sm md:text-lg`}>{name}</li>
                })}
            </ul>

        </div>
        <div className="w-full h-[2px] bg-slate-300 mt-10"></div>
        <p className="text-center text-success mt-10">©2024 All Rights Reserved by Dribes</p>

       </footer>
    )
}

export default Footer