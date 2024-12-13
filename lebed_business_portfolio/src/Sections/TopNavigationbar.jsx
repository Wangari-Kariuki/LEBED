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
    <div class ="h-[200px]">
        {/* shadow-md flex justify-space-between w-26 */}
        <nav className = {`container ${sticky? 'bg-#212EA0': 'bg-transpaent' } shadow-md flex'`}>
        <ul>
            <li class = "inline-block text-white font-semibold text-shadow-md list-none p-[10px]">About us</li>
            <li class = "inline-block text-white font-semibold text-shadow-md list-none p-[10px]">Services</li>
            <li class = "inline-block text-white font-semibold text-shadow-md list-none p-[10px]">Info pack</li>
            <li class = "inline-block text-blue font-semibold text-shadow-md list-none p-[10px] bg-white rounded-lg float-right">contact us</li>

        </ul>
        </nav>

    </div>
  )
}
