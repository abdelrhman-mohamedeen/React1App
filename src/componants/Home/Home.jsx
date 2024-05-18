import React from "react";
import MySVG from "../Home/my-svg.svg";
export default function Home() {
  return (
    <>
      <div className="text-center bg-teal-500 text-white ">
        <img src={MySVG} alt="My SVG" className=" pt-5 mx-auto w-1/5" />
        <h2 className="pt-6 font-serif font-bold text-6xl"> START FRAMEWORK</h2>
        <div className="flex flex-wrap justify-center items-center">
          <div className="flex mt-10 relative flex-nowrap">
            <div className="line bg-white left-6 top-1/2 absolute"></div>
            <i className="fas fa-star"></i>
            <div className="line bg-white right-6 top-1/2 absolute"></div>
          </div>
        </div>
        <p className="py-11 text-white">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </>
  );
}
