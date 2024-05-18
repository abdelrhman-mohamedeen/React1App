import React from "react";

export default function About() {
  return (
    <>
      <div className="text-center bg-teal-500 text-white px-10  sm:px-20 md:px-32 lg:px-80 py-36">
        <h2 className="pt-6 font-serif font-bold text-4xl sm:text-5xl lg:text-6xl">
          ABOUT COMPONENT
        </h2>
        <div className="flex flex-wrap justify-center items-center">
          <div className="flex mt-6 sm:mt-10 relative flex-nowrap">
            <div className="line bg-white left-6 top-1/2 absolute"></div>
            <i className="fas fa-star"></i>
            <div className="line bg-white right-6 top-1/2 absolute"></div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-10 mt-6">
          <div className="w-full sm:w-1/2 text-center rounded-lg px-6 py-4">
            <p className="text-white">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="w-full sm:w-1/2 text-center  rounded-lg px-6 py-4 mt-6 sm:mt-0">
            <p className="text-white">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
