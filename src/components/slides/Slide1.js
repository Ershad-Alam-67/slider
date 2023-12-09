import React, { useContext } from "react"
import LeftArrow from "../assets/icons/leftAr.png"
import RightArrow from "../assets/icons/rightAr.png"
import Line from "../assets/icons/line2.png"
import { MyContext } from "../context/MyContextProvider"
const Slide1 = () => {
  const { images } = useContext(MyContext)
  console.log(images)
  return (
    <div className="bg-custom-color overflow-hidden  h-screen">
      <div className=" lg:w-[17rem] w-screen  absolute top-28 h-[16rem]   lg:top-16 lg:left-1 lg:absolute overflow-hidden">
        <img
          src={images[0]}
          className="  w-screen lg:w-full lg:h-full object-cover   lg:transform scale-[100%]  -translate-x-0  scale-x-[130%]"
          alt="Cropped Image"
        />
      </div>

      <div className=" pb-3 pt-14    px-2">
        <h1 className=" border-b lg:border-none absolute left-4 top-10   lg:absolute lg:top-[6rem]   lg:left-[45%] border-amber-500 font-serif w-36 pb-2 text-3xl ">
          Laskasas
        </h1>
      </div>
      <div className="w-[38rem] h-[23rem] hidden lg:block lg:absolute left-[41rem]  top-40   overflow-hidden ">
        <img className=" transform -translate-y-2    " src={images[1]}></img>
      </div>
      <div className="p-3 absolute  top-[25rem] lg:w-[405px] pt-8 lg:absolute lg:top-[20rem] lg:left-52">
        <p className=" text-gray-800  text-sm   font-sans">
          Laskasas is built on customization, allowing you to choose the exact
          lookthat suits yourresidential and commercial projects. They have a
          dedicated team to assist you throughout the customization process.
          From upholstery to WOods and dimensions, you canbe confident that you
          can meet any client's needs with their diverse range of items and
          styles.
        </p>
      </div>
      <div className=" flex   p-5 px-2">
        <div className=" w-[40%] lg:absolute top-[30rem] left-[28rem]  ">
          <button className=" border text-amber-900 absolute top-[38rem] lg:top-2  font-bold border-amber-900 p-1 px-8 bg-amber-50">
            SHOP FURNITURE
          </button>
        </div>
        <div className=" flex lg:absolute  top-15 left-[58%] justify-end  w-[40%]">
          <h1 className=" hidden lg:block absolute left-24 opacity-60  text-3xl">
            1
          </h1>
          <h1 className=" hidden lg:block absolute left-28 opacity-50 top-2 text-lg">
            /2
          </h1>
          <img
            className=" transform scale-x-[600%] pb-[1px] hidden lg:block absolute top-0 left-[15rem]"
            src={Line}
          ></img>

          <img
            className=" w-8 h-8 absolute top-[38rem]  left-[18rem] lg:left-[27rem] opacity-40 lg:top-2  mr-2 ml-2"
            src={LeftArrow}
          ></img>
          <img
            className=" w-8 h-8 lg:absolute absolute top-[38rem] left-[21rem] lg:top-2 opacity-70 lg:left-[30rem]"
            src={RightArrow}
          ></img>
        </div>
      </div>
    </div>
  )
}

export default Slide1
