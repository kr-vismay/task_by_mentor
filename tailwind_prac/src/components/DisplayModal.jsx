import React, { useEffect } from "react";
import DisplayDropdown from "./DisplayDropdown";

const DisplayModal = ({ setOpen,btnvalset,coin }) => {
  useEffect(() => {
    console.log("-------------------------------------------");
  }, []);
  return (
    <>
      <div className="absolute inset-0 bg-black opacity-80" onClick={setOpen}></div>
      <DisplayDropdown settrue={setOpen} btnvalset={btnvalset} coin={coin}/>
      );
    </>
  );
};

export default DisplayModal;
