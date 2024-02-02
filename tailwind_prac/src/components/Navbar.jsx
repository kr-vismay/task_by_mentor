import React, { useState } from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import Displaynavmodel from './Displaynavmodel';
function Navbar({openmenu,navbtn}) {
  const [click,setclick] = useState(navbtn)
  function clicknav(){
    setclick((prev)=>!prev);
    openmenu();
  }
  return (
    <>
    {click && <Displaynavmodel open={clicknav}/>}
    <div className="flex  text-white h-[5%]  items-center">
      <div className="flex-grow pl-7">THORSWAP</div>
      <div className="order-last flex gap-7 pr-10 items-center">
      <button className="border border-solid border-blue-500 rounded-xl w-20 hover:bg-slate-500" onClick={clicknav}>connect</button>
      <IoMdNotificationsOutline/>
      <IoSettingsOutline/>
      </div>
    </div>
    </>
    
  )
}

export default Navbar
