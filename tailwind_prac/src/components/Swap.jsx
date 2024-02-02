import React, { useEffect, useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { BiGasPump } from "react-icons/bi";
import DisplayModal from "./DisplayModal";
function Swap({ handleDropdownClick, isDropdownOpen , btnvalset , btnval,coin}) {
  const [isOpen, setIsOpen] = useState(isDropdownOpen);
  const [myval,setmyval]=useState("");
  const handleOpenModal = () => {
    setIsOpen((prev) => !prev);
    handleDropdownClick();
  };
  function setvalue(event){
  setmyval(event.target.value);
  }
  //   useEffect(() => {
  //     console.log("🚀 ~ useEffect ~ isDropdownOpen:", isDropdownOpen);
  //     setIsOpen((prev) => !prev);
  //   }, [isDropdownOpen]);
  return (
    <>
      {isOpen && <DisplayModal setOpen={handleOpenModal} btnvalset={btnvalset} coin={coin}/>}
      <div class="flex items-center justify-center  flex-col bg-slate-900 rounded-lg">
        <div class="flex text-white h-10 items-center w-[22rem]">
          <div class="flex-grow pl-3">SWAP</div>
          <div class="order-last flex gap-3 pr-3 items-center">
            <BiGasPump />
            <IoSettingsOutline />
          </div>
        </div>
        <div class=" rounded-lg w-full  h-80 overflow-auto">
          <div className="rounded-lg bg-slate-800 mt-4 mr-1 ml-1 mb-1">
            <div class="flex gap-6   h-24 justify-center items-center  flex-wrap">
              <input
                type="text"
                placeholder="0"
                value={myval}
                onChange={setvalue}
                className="h-10 bg-transparent border border-solid text-white"
              ></input>
              <button className="text-white h-10" onClick={handleOpenModal}>
                {!btnval ? "open Option" : btnval}
              </button>
            </div>
            <h1 className="text-white" >{myval}</h1>
          </div>

          <div className="rounded-lg bg-slate-800 mt-4 mr-1 ml-1 mb-1">
          <div class="flex gap-6   h-24 justify-center items-center  flex-wrap">
            <input
              type="text"
              placeholder="0"
              className="h-10 bg-transparent border border-solid"
            ></input>
            <button className="text-white h-10" onClick={handleOpenModal}>
              {!btnval? "open option":btnval}
            </button>
          </div>
          <h1>hello</h1>
        </div>
        
        </div>
      </div>
    </>
  );
}

export default Swap;
