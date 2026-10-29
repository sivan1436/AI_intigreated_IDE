import React, { useEffect, useState } from 'react';
import { FiMoon } from "react-icons/fi";



function NavBar() {
       const [isDark,setIsDark] = useState(true)

     useEffect(()=>{
      if(typeof window == undefined ) return;
     const theme = window.localStorage.getItem("theme")
     const dark = theme?theme === "dark":true
    document.documentElement.classList.toggle("dark",dark)
    },[])
  return (
    <div className='w-full h-16 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl border-b border-slate-70 dark:border-white/[0.07] flex items-center px-6 gap-6 font-sans transition-colors duration-300'>
      <div className='flex items-center gap-2.5 shrink-0'>
   <span className='text-slate-900 dark:text-white font-bold text-[17px] tracking-tight'>
    AI-Intigrated-IDE
   </span>
      </div>
      <div className='flex itesm-center gap-2 shrink-0'>
      <button>
      <FiMoon />
      </button>
      </div>
    </div>
  )
}

export default NavBar
