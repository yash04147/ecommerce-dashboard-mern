import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const check = JSON.parse(localStorage.getItem("User"));
    if (check) {
      navigate("/");
    }
  });

  //send Login data to database
  const senduserdata = async () => {
    if (!email || !password) {
      setError(true);
      return false;
    }

    const result = await axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    });
    console.log(result.data);
    localStorage.setItem("User", JSON.stringify(result.data));
    navigate("/");
  };

  return (
    <div>
      <div className="flex flex-col ml-[40rem] mt-[4rem] ">
        <input
          type="text"
          name="email"
          placeholder="enter your email"
          onChange={(e) => setEmail(e.target.value)}
          className="border-solid border-4 font-semibold border-blue-800 w-[14rem] mt-[6px] h-[2.5rem]"
        />
        {error && !email && (
          <span className="text-red-700 font-extrabold">enter your email</span>
        )}

        <input
          type="text"
          name="password"
          placeholder="enter password"
          onChange={(e) => setPassword(e.target.value)}
          className="border-solid border-4 font-semibold border-blue-800 w-[14rem] mt-[6px] h-[2.5rem]"
        />
        {error && !password && (
          <span className="text-red-700 font-extrabold">enter password</span>
        )}
        <button
          type="submit"
          className="rounded font-semibold  w-[14rem] bg-gray-500 mt-[6px]"
          onClick={senduserdata}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
