import { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useSelector } from "react-redux";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    fullname: "",
    avatar: null,
    dob: "",
    gender: "",
    password: "",
  });
  const { loading, error } = useSelector((state) => state.user);
  let user = localStorage.getItem("user");

  const handleChange = (e) => {
    if (e.target.name === "avatar") {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.files[0],
      }));
    } else {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("fullname", formData.fullname);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("username", formData.username);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("avatar", formData.avatar[0]);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/v1/users/register`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Signup successful:", response.data);
    } catch (error) {
      console.error("Signup failed:", error.response.data);
    }
  };

  return (
    <>
      {user ? (
        <Navigate to="/" />
      ) : (
        <>
          <Navbar />
          <div className="w-[80vw] mx-auto mt-8 bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">User Registration</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <section className="mb-4">
                  <div className="mb-4">
                    <label
                      htmlFor="username"
                      className="block font-semibold mb-1"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      placeholder="Enter a unique username"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline focus:border-2 focus:border-orange-500 focus:ring-0"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block font-semibold mb-1 "
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline focus:border-2 focus:border-orange-500 focus:ring-0"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="fullname"
                      className="block font-semibold mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      value={formData.fullname}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline focus:border-2 focus:border-orange-500 focus:ring-0"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="dob" className="block font-semibold mb-1">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      id="dob"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      placeholder="Enter your date of birth"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline focus:border-2 focus:border-orange-500 focus:ring-0"
                      required
                    />
                  </div>
                </section>
                <section className="mb-4">
                  <div className="mb-4">
                    <label
                      htmlFor="gender"
                      className="block font-semibold mb-1 focus:ring-0"
                    >
                      Gender
                    </label>
                    <select
                      type="radio"
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md h-10 focus:outline-none focus:shadow-outline focus:border-2 focus:border-orange-500 focus:ring-0 text-black"
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer-not-to-say">
                        Prefer not to say
                      </option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="avatar"
                      className="block font-semibold mb-1"
                    >
                      Avatar(will be displayed on user profile)
                    </label>

                    <input
                      type="file"
                      id="avatar"
                      name="avatar"
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md"
                      accept="image/*"
                      required
                      multiple={false}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="block font-semibold mb-1"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline focus:border-2 focus:border-orange-500 focus:ring-0"
                      required
                    />
                  </div>
                </section>
              </div>
              <div className="flex items-center justify-between mt-5">
                <button
                  className="bg-orange-700 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  onClick={handleSubmit}
                >
                  {loading ? "Loading..." : "Register"}
                </button>
              </div>
              <div className="mt-2">
                <span>Don't have an account? </span>
                <span
                  className="text-blue-500 hover:text-blue-700 cursor-pointer font-bold"
                  onClick={() => navigate("/login")}
                >
                  Login
                </span>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Signup;
