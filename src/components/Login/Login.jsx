import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="bg-gray-300 w-[400px] px-8 py-8">
      <h1 className="text-3xl text-center mb-4 ">Sign in</h1>

      <div className="flex flex-col items-center  gap-5">
        <div className="flex flex-col w-full gap-1">
          <label className="text-xl" htmlFor="emailIn">
            Email
          </label>
          <input
            onChange={inputHandler}
            id="emailIn"
            value={userData.email}
            name="email"
            className="outline-none px-2 py-2 border-none rounded-md w-full"
            type="email"
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <label className="text-xl" htmlFor="passwordIn">
            Password
          </label>
          <input
            onChange={inputHandler}
            value={userData.password}
            id="passwordIn"
            name="password"
            className="outline-none px-2 py-2 border-none rounded-md w-full"
            type="password"
          />
        </div>
      </div>
      <button className="px-6 py-2 rounded-md text-xl mt-6 w-full  bg-[#f7ca00]">
        Sign in
      </button>

      <p>
        By signing in you are agreeing to our conditions of use and our privacy
        notice
      </p>
      <Link to={"/signup"}>
        <button className="px-6 py-2 rounded-md text-xl mt-10 mb-4 w-full bg-[#f7e490] ">
          I am a New Customer
        </button>
      </Link>
    </div>
  );
};

export default Login;
