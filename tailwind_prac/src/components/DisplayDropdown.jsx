import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { IoExitOutline } from "react-icons/io5";
const DisplayDropdown = ({ settrue,btnvalset,coin }) => {
  const [inputdata , setInputdata]= useState('');
  const [matchitem , setMatchitem]= useState([]);
  
//   useEffect(()=>{
// console.log("🚀 ~ useEffect ~ btnval:", btnval)
//   },[btnval])
  
  function updateitem(event){
    const value = event.target.value;
      setInputdata(value);
      const filteredItems = coin.filter(item =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setMatchitem(filteredItems);
  }
  
  
  return (
    <div className="text-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-900 z-50 border border-solid border-blue-500 rounded-xl w-1/3 ">
      <div className="pl-4 pr-4" >
        <div className="flex mt-2" >
          <div className="flex-grow" >SELECT A TOKEN</div>
          <button onClick={settrue} className="order-last" ><IoExitOutline/></button>
        </div>
        <input type="text" placeholder="Search token name...." className=" w-96 bg-transparent border border-solid border-blue-500 rounded-xl mt-4 mb-2" value={inputdata} onChange={updateitem}></input>
        <div className="flex gap-2  justify-center w-96 border border-solid border-blue-500 rounded-xl mb-5" >
        <button className="hover:bg-slate-400 rounded-lg p-1" >ALL</button>
        <button className="hover:bg-slate-400 rounded-lg p-1" >NATIVE</button>
        <button className="hover:bg-slate-400 rounded-lg p-1" >SYNTH</button>
        <button className="hover:bg-slate-400 rounded-lg p-1" >ETH</button>
        <button className="hover:bg-slate-400 rounded-lg p-1" >AVAX</button>
        <button className="hover:bg-slate-400 rounded-lg p-1" >BNB</button>
        <button className="hover:bg-slate-400 rounded-lg p-1" >BSC</button>
        </div>
        <hr className=" mt-2 mb-2"></hr>
       <div className=" h-48 overflow-auto flex flex-col items-start" >
         {matchitem.length > 0 ?(matchitem.map((item)=>(<button onClick={() => {btnvalset, settrue}} value={item}>{item}</button>))):(coin.map((val)=>(<button onClick={btnvalset} value={val}>{val}</button>)))}
       </div> 
       <hr className=" mt-2 mb-2"></hr>
       <button className=" flex justify-center items-center gap-2 mt-8 mx-auto">
       <FiEdit/>
       <p>modify</p>
       </button>
      </div>
    </div>
  );
};

export default DisplayDropdown;
