import React from "react";
import Spinner from "./assets/spinner.gif";

const Loader = () => {
  return (
    <div className="bg-white h-screen flex justify-center items-center">
      <img src={Spinner} className="w-42 h-42" alt="Loading" />
    </div>
  );
};

export default Loader;
