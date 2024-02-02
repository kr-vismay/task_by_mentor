import React from 'react'
import Displaynavdata from './Displaynavdata'
function Displaynavmodel({open}) {
  return (
    <>
    <div className="absolute inset-0 bg-black opacity-80" onClick={open}></div>
    <Displaynavdata open = {open}/>
    </>
  )
}

export default Displaynavmodel
