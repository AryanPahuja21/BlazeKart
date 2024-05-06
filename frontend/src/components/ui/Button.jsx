import React from "react";

const Button = ({ value }) => {
  return (
    <p className="bg-gradient-to-br from-yellow-300 to-yellow-700 hover:from-yellow-700 hover:to-yellow-300 text-white font-bold py-2 px-4 rounded no-underline">
      {value}
    </p>
  );
};

export default Button;
