import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Swap from "./components/Swap";
import DisplayDropdown from "./components/DisplayDropdown";
import DisplayModal from "./components/DisplayModal";
function App() {
  const crypto = ["RUNE","BTC","WETH","TUSD","STAKE","YFI","BAT","MANA","REP","KP3R","UNI","WBTC","HEX","CREAM"];
  var [coin,setcoin] = useState(crypto) 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [btnval , setBtnval]= useState(null);
  const [removedButton, setRemovedButton] = useState(null);
  const [clickedcoin,setclickedcoin]=useState([]);
  const [navbtn,setnavbtn]=useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
    console.log("🚀 ~ handleDropdownClick ~ isDropdownOpen:", isDropdownOpen)
    console.log("click");
  };
function btnvalset(event){
  setBtnval(event.target.value);
  if (removedButton == event.target.value) {
    setRemovedButton(null);
  } else {
    const updatedCoin = coin.filter(item => item !== event.target.value);
    if(removedButton){
      updatedCoin.push(removedButton);
    }
    setcoin(updatedCoin);
    setRemovedButton(event.target.value)
  }
}
 
console.log(clickedcoin);
  // const settrue = () => {
  //   setIsDropdownOpen(prev=>!prev);
  // };
function openmenu(){
  console.log("///////////////////////////////////");
  setnavbtn(!navbtn);
  console.log(navbtn);
}
  console.log(btnval);
  return (
    <>
      <div className="bg-slate-950 h-screen relative">
        <div className="h-full">
          <Navbar openmenu={openmenu} navbtn={navbtn}/>
          <div className="flex  h-[90%] justify-center items-center">
            <Swap handleDropdownClick={handleDropdownClick} isDropdownOpe={isDropdownOpen} btnvalset={btnvalset} btnval={btnval} coin={coin} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
