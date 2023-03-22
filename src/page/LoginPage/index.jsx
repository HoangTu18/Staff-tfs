import React from "react";
import { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// toast.configure();

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const data = {
      username: username,
      password: password,
    };

    try {
      const response = await axios.post(
        "https://tfsapiv1-env.eba-aagv3rp5.ap-southeast-1.elasticbeanstalk.com/api/staffs/login/",
        data
      );
      if (response.status === 200) {
        localStorage.setItem("account", JSON.stringify(response.data));
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <div className="logo-container">
        <img src="../../assets/icon/zalo.png" alt="Logo" className="logo" />
      </div>
      <form className="form" onSubmit={handleLogin}>
        <label htmlFor="username" className="label">
          Username
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="input"
        />
        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="input"
        />
        <button type="submit" className="button">
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
