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
    <div className='nav-container'>
        <nav className = {`container ${sticky? 'bg-#212EA0': 'bg-transpaent' } shadow-md p-[50px]'`}>
        <ul class='p-[10]'>
            <li class = "inline-block text-white font-semibold text-shadow-md list-none p-[10px] cursor-pointer">About us</li>
            <li class = "inline-block text-white font-semibold text-shadow-md list-none p-[10px] cursor-pointer">Services</li>
            <li class = "inline-block text-white font-semibold text-shadow-md list-none p-[10px] cursor-pointer">Info pack</li>
            <li class = "inline-block text-blue font-semibold text-shadow-md list-none p-[10px] bg-white rounded-lg float-right cursor-pointer">contact us</li>

        </ul>
        </nav>
    </div>
  )
}
