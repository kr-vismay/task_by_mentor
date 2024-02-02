import React, { useEffect, useState } from 'react'

function Buttonfornav({itemname ,item}) {
   
   
  return (
   <> 
     {item.map((btn)=>(<button value={btn} onClick={itemname}  className="bg-red-300  m-3 w-6" >{btn}</button>))}
   </>
  )
}

export default Buttonfornav
