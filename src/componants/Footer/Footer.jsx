import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-700 ">
        <div className="px-10 text-center sm:grid sm:grid-cols-2 lg:grid-cols-3 lg:pt-16 border-gray-800">
          <div className="sm:w-full textcen lg:w-full py-5">
            <p className="font-extrabold text-3xl mb-5 text-center text-white">
              ABOUT FREELANCER
            </p>
            <p className="text-white text-sm">2215 John Daniel Drive</p>
            <p className="text-white text-sm">Clark, MO 65243</p>
          </div>

          <div className="sm:w-full lg:w-full py-5">
            <p className="font-extrabold text-3xl mb-5 text-white">
              AROUND THE WEB
            </p>
            <div className="flex justify-center space-x-4">
              <i className="fab fa-facebook text-white border rounded-full p-2"></i>
              <i className="fab fa-twitter text-white border rounded-full p-2"></i>
              <i className="fab fa-linkedin-in text-white border rounded-full p-2"></i>
              <i className="fas fa-globe text-white border rounded-full p-2"></i>
            </div>
          </div>

          <div className="sm:w-full lg:w-full py-5">
            <p className="font-extrabold text-3xl mb-5 text-white">
              ABOUT FREELANCER
            </p>
            <p className="text-white text-sm">
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>

        <p className="text-xl text-center py-10 bg-gray-800 text-gray-100">
          Copyright © Rami Website 2024
        </p>
      </footer>
    </>
  );
}
