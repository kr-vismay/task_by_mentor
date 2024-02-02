import React, { useEffect, useState } from "react";
import { IoExitOutline } from "react-icons/io5";
import Buttonfornav from "./Buttonfornav";
function Displaynavdata({ open }) {
  const items = [
    { id: "1", data: "BTC" },
    { id: "1", data: "ETHER" },
    { id: "1", data: "XLR" },
    { id: "1", data: "COIN" },
    { id: "2", data: "NEO" },
    { id: "2", data: "ETHER" },
    { id: "2", data: "BTC" },
    { id: "2", data: "RUNE" },
    { id: "3", data: "ETHER" },
    { id: "3", data: "NEO" },
    { id: "3", data: "XLR" },
    { id: "3", data: "WBTC" },
  ];

  const onlyid = items.map((val) => val.id);
  const unique = [...new Set(onlyid)];
  const result = unique.flatMap((uniqueId) => {
    const matchingItems = items.filter((item) => item.id === uniqueId);
    const uniqueVals = [...new Set(matchingItems.map((item) => item.data))];
    return uniqueVals;
  });
  console.log(result);
  const uniqueResult = [...new Set(result)];

  const [btnvalue, setbtnvalue] = useState([]);

  // const [btnadd, removebtnval] = useState(null);
  function itemname(event) {
    if(btnvalue.includes(event.target.value)){
      setbtnvalue(btnvalue.filter(value=>value!==event.target.value));
    }
    else{
      setbtnvalue([...btnvalue,event.target.value])
    }
   
  }
  
  function reset() {
    setbtnvalue([]);
    removebtnval(null);
    //notdisplay(false);
  }
  // function add(event) {
  //   removebtnval(event.target.value);
  // }
  // function remove() {
  //   removebtnval(null);
  // }
  const finalarray = btnvalue.map((uniqueId) => {
    const matchingdata = items.filter((item) => item.id == uniqueId);
    const uniquedata = [...new Set(matchingdata.map((item) => item.data))];
    return { id: uniqueId, data: uniquedata };
  });

  // useEffect(() => {
  //   console.log(finalarray);
  // }, [btnvalue]);
  const allVals = [].concat(...finalarray.map((item) => item.data));
  // useEffect(() => {
  //   console.log([...new Set(allVals)]);
  // }, [btnvalue]);
  const [wallet, setwallet] = useState([
    { data: "BTC", isDisable: true },
    { data: "ETHER", isDisable: true },
    { data: "XLR", isDisable: true },
    { data: "COIN", isDisable: true },
    { data: "NEO", isDisable: true },
    { data: "RUNE", isDisable: true },
    { data: "WBTC", isDisable: true },
  ]);

  const updatedWallet = wallet.map((item) => ({
    ...item,
    isDisable: !allVals.includes(item.data),
  }));
  useEffect(() => {
    setwallet(updatedWallet);
    console.log("------------------------------------------");
  }, [btnvalue]);

  return (
    <>
      <div className="text-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-900 z-50 border border-solid border-blue-500 rounded-xl w-1/2 ">
        <div className="flex justify-center items-center p-4">
          <div className="flex-grow">Connect Wallets</div>
          <IoExitOutline onClick={open} className="order-last" />
        </div>

        <div className="flex">
          <div className="flex flex-col items-center w-[30%] border border-solid border-blue-500 rounded-xl">
            <div className="m-3">Select Chain</div>
            <button onClick={reset}>set/reset</button>
            <div className="grid grid-cols-2">
              <Buttonfornav itemname={itemname} item={unique} />
            </div>
            <h1>{btnvalue}</h1>
          </div>
          <div className="w-[70%] border border-solid border-blue-500 rounded-xl ">
            <div className="flex m-3">
              <div className="flex-grow">Select Wallet</div>
              <button>reset</button>
            </div>
            <div>
              <div>Software Wallets</div>
              <div className="grid grid-cols-3">
                {wallet.map((data) => (
                  <button
                    disabled={data.isDisable}
                    className={data.isDisable ? "bg-gray-500" : "bg-lime-400"}
                  >
                    {data.data}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Displaynavdata;
