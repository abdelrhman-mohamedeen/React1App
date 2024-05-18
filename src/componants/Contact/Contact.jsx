import React, { useState } from "react";

export default function Contact() {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userRepass, setUserRepass] = useState("");
  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    const newErrors = {};
    const usernameRegex = /^[a-zA-Z]{3,15}$/;
    if (!usernameRegex.test(userName)) {
      newErrors.userName = "Username must be 3-15 letters only.";
    }
    if (userAge <= 0) {
      newErrors.userAge = "Age must be a positive number.";
    }
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(userPass)) {
      newErrors.userPass =
        "Password must be at least 8 characters long and contain at least one letter and one number.";
    }
    if (userPass !== userRepass) {
      newErrors.userRepass = "Passwords do not match.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateInputs()) {
      console.log(
        "Form submitted! User Name:",
        userName,
        "User Age:",
        userAge,
        "User Password:",
        userPass,
        "User Re-password:",
        userRepass
      );
    }
  };

  return (
    <div className="text-center">
      <h2 className="pt-6 font-serif font-bold text-6xl">CONATCT SECTION</h2>
      <div className="flex flex-wrap justify-center items-center">
        <div className="flex mt-10 relative flex-nowrap">
          <div className="line left-6 top-1/2 absolute"></div>
          <i className="fas fa-star"></i>
          <div className="line right-6 top-1/2 absolute"></div>
        </div>
      </div>

      <div className="mx-auto  bg-slate-300-500 py-16 px-5 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit} className="w-3/4 mx-auto space-y-4">
          <div>
            <input
              type="text"
              className="placeholder:text-gray-400 placeholder:font-bold rounded-lg bg-transparent p-4 pe-12 text-lg w-full shadow-md focus:outline-none focus:ring-0 focus:border-transparent"
              placeholder="User Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            {errors.userName && (
              <p className="text-red-500">{errors.userName}</p>
            )}
          </div>

          <div>
            <input
              type="number"
              className="placeholder:text-gray-400 placeholder:font-bold rounded-lg bg-transparent p-4 pe-12 text-lg w-full shadow-md focus:outline-none focus:ring-0 focus:border-transparent"
              placeholder="User Age"
              value={userAge}
              onChange={(e) => setUserAge(e.target.value)}
            />
            {errors.userAge && <p className="text-red-500">{errors.userAge}</p>}
          </div>

          <div>
            <input
              type="password"
              className="placeholder:text-gray-400 placeholder:font-bold rounded-lg bg-transparent p-4 pe-12 text-lg w-full shadow-md focus:outline-none focus:ring-0 focus:border-transparent"
              placeholder="Password"
              value={userPass}
              onChange={(e) => setUserPass(e.target.value)}
            />
            {errors.userPass && (
              <p className="text-red-500">{errors.userPass}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              className="placeholder:text-gray-400 placeholder:font-bold rounded-lg bg-transparent p-4 pe-12 text-lg w-full shadow-md focus:outline-none focus:ring-0 focus:border-transparent"
              placeholder="Repeat Password"
              value={userRepass}
              onChange={(e) => setUserRepass(e.target.value)}
            />
            {errors.userRepass && (
              <p className="text-red-500">{errors.userRepass}</p>
            )}
          </div>

          <button
            type="submit"
            className="rounded-lg block bg-teal-500 py-3 px-5 text-sm font-medium text-white hover:bg-slate-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
