import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setUser } from "../../redux/slices/userSlice";
const Login = () => {
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  // const [msg,setMsg]=useState("")
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setEmailError("");
    setPasswordError("");
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  // RegExp(/^[a-zA-Z0-9.+-_%]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(email)
  const login = async (e) => {
    e.preventDefault();
    const { email, password } = userData;
    // validate email with a regex
    const validEmail = RegExp(
      /^[a-zA-Z0-9+-_%]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    ).test(email);

    if (!validEmail) {
      return setEmailError("Please enter valid email!");
    }
    // validate password

    if (!password) {
      return setPasswordError("please enter password");
    }
    if (password.length < 6) {
      return setPasswordError("password must contain atleast 6 characters");
    }

    if (email && password) {
      const res = await fetch("http://localhost:5000/user/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (res.ok) {
        const jsonData = await res.json();
        dispatch(setUser(jsonData.data));
      }
      console.log(user);
    }
  };

  return (
    <form onSubmit={login} className="bg-gray-300 w-[400px] px-8 py-8">
      <h1 className="text-3xl text-center mb-4 ">Sign in</h1>
      {user && (
        <p>
          Hello {user.name} {user._id}
        </p>
      )}
      <div className="flex flex-col items-center  gap-1">
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
          {emailError && (
            <p className="text-red-600 animate-bounce">{emailError}</p>
          )}
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
          {passwordError && (
            <p className="text-red-600 animate-pulse ">{passwordError}</p>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="px-6 py-2 rounded-md text-xl mt-6 w-full  bg-[#f7ca00]"
      >
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
    </form>
  );
};

export default Login;
