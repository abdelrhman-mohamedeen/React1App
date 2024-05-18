import React, { useState } from "react";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="text-center">
        <h2 className="pt-6 font-serif font-bold text-6xl">
          PORTFOLIO COMPONENT
        </h2>
        <div className="flex flex-wrap justify-center items-center">
          <div className="flex mt-10 relative flex-nowrap">
            <div className="line left-6 top-1/2 absolute"></div>
            <i className="fas fa-star"></i>
            <div className="line right-6 top-1/2 absolute"></div>
          </div>
        </div>
        <div className="container mb-5 gap-5 md:gap-10 py-4 flex-wrap flex align-middle justify-center">
          <div className="w-11/12 md:w-1/2 lg:w-1/4 card relative rounded-lg">
            <img
              className="w-full rounded-lg cursor-pointer"
              src="https://routeegy.github.io/startFramework/assets/images/poert1.png"
              alt="cake"
            />
            <span
              onClick={() =>
                openModal(
                  "https://routeegy.github.io/startFramework/assets/images/poert1.png"
                )
              }
              className="absolute inset-0 rounded-lg hidden justify-center items-center bg-black bg-opacity-50 hover:bg-opacity-0 transition duration-300"
            >
              <i className="fas fa-plus text-white text-9xl "></i>
            </span>
          </div>
          <div className="w-11/12 md:w-1/2 lg:w-1/4 card relative rounded-lg">
            <img
              className="w-full rounded-lg cursor-pointer"
              src="https://routeegy.github.io/startFramework/assets/images/port2.png"
              alt="cake"
            />
            <span
              onClick={() =>
                openModal(
                  "https://routeegy.github.io/startFramework/assets/images/port2.png"
                )
              }
              className="absolute inset-0 rounded-lg hidden justify-center items-center bg-black bg-opacity-50 hover:bg-opacity-0 transition duration-300"
            >
              <i className="fas fa-plus text-white text-9xl "></i>
            </span>
          </div>
          <div className="w-11/12 md:w-1/2 lg:w-1/4 card relative rounded-lg">
            <img
              className="w-full rounded-lg cursor-pointer"
              src="https://routeegy.github.io/startFramework/assets/images/port3.png"
              alt="cake"
            />
            <span
              onClick={() =>
                openModal(
                  "https://routeegy.github.io/startFramework/assets/images/port3.png"
                )
              }
              className="absolute inset-0 rounded-lg hidden justify-center items-center bg-black bg-opacity-50 hover:bg-opacity-0 transition duration-300"
            >
              <i className="fas fa-plus text-white text-9xl "></i>
            </span>
          </div>
          <div className="w-11/12 md:w-1/2 lg:w-1/4 card relative rounded-lg">
            <img
              className="w-full rounded-lg cursor-pointer"
              src="https://routeegy.github.io/startFramework/assets/images/port2.png"
              alt="cake"
            />
            <span
              onClick={() =>
                openModal(
                  "https://routeegy.github.io/startFramework/assets/images/port2.png"
                )
              }
              className="absolute inset-0 rounded-lg hidden justify-center items-center bg-black bg-opacity-50 hover:bg-opacity-0 transition duration-300"
            >
              <i className="fas fa-plus text-white text-9xl "></i>
            </span>
          </div>
          <div className="w-11/12 md:w-1/2 lg:w-1/4 card relative rounded-lg">
            <img
              className="w-full rounded-lg cursor-pointer"
              src="https://routeegy.github.io/startFramework/assets/images/port3.png"
              alt="cake"
            />
            <span
              onClick={() =>
                openModal(
                  "https://routeegy.github.io/startFramework/assets/images/port3.png"
                )
              }
              className="absolute inset-0 rounded-lg hidden justify-center items-center bg-black bg-opacity-50 hover:bg-opacity-0 transition duration-300"
            >
              <i className="fas fa-plus text-white text-9xl "></i>
            </span>
          </div>
          <div className="w-11/12 md:w-1/2 lg:w-1/4 card relative rounded-lg">
            <img
              className="w-full rounded-lg cursor-pointer"
              src="https://routeegy.github.io/startFramework/assets/images/poert1.png"
              alt="cake"
            />
            <span
              onClick={() =>
                openModal(
                  "https://routeegy.github.io/startFramework/assets/images/poert1.png"
                )
              }
              className="absolute inset-0 rounded-lg hidden justify-center items-center bg-black bg-opacity-50 hover:bg-opacity-0 transition duration-300"
            >
              <i className="fas fa-plus text-white text-9xl "></i>
            </span>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-full w-4/5 md:w-2/3 lg:w-1/2"
          />
        </div>
      )}
    </>
  );
}
