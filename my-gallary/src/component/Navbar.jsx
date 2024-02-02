import React, { useState } from "react";
import logo from "../images/logoipsum-226.svg";
import { RxHamburgerMenu } from "react-icons/rx";
function Navbar() {
  const [shownav, setshownav] = useState(false);
  return (
    <nav className={shownav ? " h-40 pt-4" : "flex  items-center pt-4  h-16 "}>
      <div
        className={
          shownav
            ? "h-10 flex flex-grow items-center w-[100%] justify-between"
            : " lg:flex-grow md:flex-grow  flex-grow flex w-[100%]  items-center justify-between"
        }
      >
        <img src={logo} className={shownav ? "h-10  " : " h-10  "}></img>
        <div className="md:hidden lg:hidden block mr-4 order-last">
          <RxHamburgerMenu
            onClick={() => {
              setshownav(!shownav);
            }}
          />
        </div>
      </div>
      <div className={shownav ? "order-last flex " : "order-last flex lg:mr-4 md:mr-4"}>
        <ul
          className={
            shownav
              ? " bg-zinc-300 flex flex-col justify-center items-center w-[100%]"
              : "md:flex md:gap-5 lg:flex lg:gap-5 hidden"
          }
        >
          <li>
            <a href="#" className=" text-black">
              HOME
            </a>
          </li>
          <li>
            <a href="#" className=" text-black">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#" className=" text-black">
              SERVICE
            </a>
          </li>
          <li>
            <a href="#" className=" text-black">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
