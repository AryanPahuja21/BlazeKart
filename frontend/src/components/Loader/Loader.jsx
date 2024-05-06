import React from "react";
import Spinner from "./assets/spinner.gif";

const Loader = () => {
  return (
    <img src={Spinner} className="w-20 h-20 mx-auto mt-[42vh]" alt="Loading" />
  );
};

export default Loader;
