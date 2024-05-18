import React from "react";

export default function NotFound() {
  return (
    <div>
      <>
        <div className="text-center bg-red-500 text-white py-48 ">
          <div className="flex flex-wrap justify-center items-center">
            <div className="flex mt-10 relative flex-nowrap">
              <div className="line bg-white left-6 top-1/2 absolute"></div>
              <i className="fas fa-star"></i>
              <div className="line bg-white right-6 top-1/2 absolute"></div>
            </div>
          </div>
          <h2 className="pt-6 font-serif font-bold text-6xl">
            Bage Not Found
            <br />
            <br />
            {" Error 404"}
          </h2>
          <div className="flex flex-wrap justify-center items-center">
            <div className="flex mt-10 relative flex-nowrap">
              <div className="line bg-white left-6 top-1/2 absolute"></div>
              <i className="fas fa-star"></i>
              <div className="line bg-white right-6 top-1/2 absolute"></div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
