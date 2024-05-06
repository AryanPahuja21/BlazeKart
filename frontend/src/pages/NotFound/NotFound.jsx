import React from "react";
import { Link } from "react-router-dom";
import Error from "./assets/error.png";
import Logo from "/logo.png";
import Button from "../../components/ui/Button";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black/90">
      <img src={Logo} alt="BlazeKart" className="w-36 mb-14" />
      <h1 className="text-4xl text-white font-bold">404 | Not Found</h1>
      <p className="text-gray-300 mt-4">
        Oops! The page you are looking for does not exist.
      </p>
      <img src={Error} alt="Error" />
      <Link to="/">
        <Button value="Go to Homepage" />
      </Link>
    </div>
  );
};

export default NotFound;
