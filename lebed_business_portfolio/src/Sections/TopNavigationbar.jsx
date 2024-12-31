import React from 'react'
import {useState, useEffect} from 'react'
import '../index.css'
export default function TopNavigationbar() {
    const [sticky, setSticky] = useState(false);
    useEffect(()=> {
        window.addEventListener('scroll', ()=> {
            window.scrollY > 500 ? setSticky(true) : setSticky(false)
        })
    }, []);
  return (
    <div className='fixed -top-0 w-full bg-[#aca9bb] h-[50px] '>
        <nav className = {`container ${sticky? 'bg-[#212EA0]' : 'bg-[#aca9bb]' } shadow-md pl-[25%] rounded-lg transition duration-300`}>
        <ul class='p-[10]'>
            <a><li class = "inline-block text-white font-semibold text-shadow-md list-none p-[10px] cursor-pointer hover:text-[#612d2b] transition duration-300">About us</li></a>
            <a><li class = "inline-block text-white font-semibold text-shadow-md list-none p-[10px] cursor-pointer hover:text-[#612d2b] transition duration-300 ">Services</li></a>
            <a><li class = "inline-block text-white font-semibold text-shadow-md list-none p-[10px] cursor-pointer hover:text-[#612d2b] transition duration-300 ">Info pack</li></a>
            <a><li class = "inline-block text-blue font-semibold text-shadow-md list-none p-[10px] bg-white rounded-lg float-right cursor-pointer hover:bg-[#612d2b] hover:text-white transition duration-300 ">contact us</li>
            </a>
        </ul>
        </nav>
    </div>
  )
}
