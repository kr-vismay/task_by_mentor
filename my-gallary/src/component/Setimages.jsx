import React from "react";
import image1 from "../images/buds_1.jpeg";
import image2 from "../images/buds_2.jpeg";
import image3 from "../images/buds_3.jpeg";
import image4 from "../images/buds_4.jpeg";
import image5 from "../images/watch_1.jpeg";
import image6 from "../images/watch_2.jpeg";
import image7 from "../images/watch_3.jpeg";
import image8 from "../images/watch_4.jpeg";
const img = [
  {
    photo: image1,
    name: "buds_1",
    des: "wireless use electronic devices is good and esy tu usable ahs jajh aus ajsj asjsk ajs ajsuu suya wyd ags stsy",
  },
  {
    photo: image2,
    name: "buds_2",
    des: "wireless use electronic devices is good and esy tu usable",
  },
  {
    photo: image3,
    name: "buds_3",
    des: "wireless use electronic devices is good and esy tu usable",
  },
  {
    photo: image4,
    name: "buds_3",
    des: "wireless use electronic devices is good and esy tu usable",
  },
  {
    photo: image5,
    name: "buds_3",
    des: "wireless use electronic devices is good and esy tu usable",
  },
  {
    photo: image6,
    name: "buds_3",
    des: "wireless use electronic devices is good and esy tu usable",
  },
  {
    photo: image7,
    name: "buds_3",
    des: "wireless use electronic devices is good and esy tu usable",
  },
  {
    photo: image8,
    name: "buds_3",
    des: "wireless use electronic devices is good and esy tu usable",
  },
  {
    photo: image8,
    name: "buds_3",
    des: "wireless use electronic devices is good and esy tu usable",
  },
  {
    photo: image8,
    name: "buds_3",
    des: "wireless use electronic devices is good and esy tu usable",
  },
  {
    photo: image8,
    name: "buds_3",
    des: "wireless use electronic devices is good and esy tu usable",
  },
  {
    photo: image8,
    name: "buds_3",
    des: "wireless use electronic devices is good and esy tu usable",
  },
  {
    photo: image8,
    name: "buds_3",
    des: "wireless use electronic devices is good and esy tu usable",
  },
  {
    photo: image8,
    name: "buds_3",
    des: "wireless use electronic devices is good and esy tu usable",
  },
  {
    photo: image8,
    name: "buds_3",
    des: "wireless use electronic devices is good and esy tu usable",
  },
  {
    photo: image8,
    name: "buds_3",
    des: "wireless use electronic devices is good and esy tu usable",
  },
  {
    photo: image8,
    name: "buds_3",
    des: "wireless use electronic devices is good and esy tu usable ahs jajh aus ajsj asjsk ajs ajsuu suya wyd ags stsy",
  },
  {
    photo: image8,
    name: "buds_3",
    des: "wireless use electronic devices is good and esy tu usable",
  },
];
function Setimages() {
  return (
    <>
      <div className=" text-center flex flex-wrap items-center justify-center   ">
        {img.map((item) => (
          <div className=" w-64 h-80 sm:w-[100%] sm:h-56 bg-slate-700 rounded-xl  shadow-xl m-4  sm:flex transition-transform transform hover:scale-105 border border-black">
            <div className=" h-[70%] w-[100%] sm:w-[50%] sm:h-[100%] rounded-t-xl sm:rounded-tr-none sm:rounded-bl-xl ">
              <img src={item.photo} className="w-[100%] h-[100%] rounded-t-xl sm:rounded-tr-none sm:rounded-bl-xl"></img>
            </div>
            <div className="sm:w-[50%] sm:h-[100%] h-[30%] bg-zinc-300 rounded-b-xl sm:rounded-bl-none sm:rounded-tr-xl  ">
              <h1 className=" pt-3 sm:m-4 font-bold">{item.name}</h1>
              <h1 className="mt-2 sm:text-yellow-600 sm:m-4  h-11  overflow-auto  sm:h-24 sm:overflow-auto ">{item.des}</h1> 
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Setimages;
