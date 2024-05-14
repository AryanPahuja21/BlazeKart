import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emptyFieldWarning, setEmptyFieldWarning] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmptyFieldWarning(false);
    setLoginError("");
    if (!email || !password) {
      setEmptyFieldWarning(true);
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/v1/users/login`,
        {
          email,
          password,
        }
      );
      console.log(response.data);
      navigate("/");
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setLoginError("Incorrect user credentials");
      } else {
        console.error(err);
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center mt-48">
        <div className="">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
            <h2 className="text-2xl font-bold mb-6">User Login</h2>
            {emptyFieldWarning && (
              <p className="text-red-500 mb-4">Please fill in all fields</p>
            )}
            {loginError && <p className="text-red-500 mb-4">{loginError}</p>}
            <form action="POST">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-2 focus:border-orange-500 focus:ring-0"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-2 focus:border-orange-500 focus:ring-0"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between mt-5">
                <button
                  className="bg-orange-700 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Login
                </button>
              </div>
              <div className="mt-2">
                <span>Already have an account? </span>
                <span
                  className="text-blue-500 hover:text-blue-700 cursor-pointer font-bold"
                  onClick={() => navigate("/signup")}
                >
                  Register
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
