import React from "react";
import { Link } from "react-router-dom";

function Errors() {
  return (
    <div className="  w-full bg-blue-600 h-screen">
      <div className="absolute inset-0 -z-10 bg-black/70 "></div>
      <div className="flex items-center justify-center h-full">
        <div className="text-3xl md:text-6xl font-bold text-white flex-wrap  text-center">
          <div>404 Error!</div>
          <div className="text-sm mb-6">
            The Page you are looking for doesnt seem to exist. Please go back
          </div>
            <Link to="/" className="rounded p-2 px-4 bg-black text-sm cursor-pointer text-white">Login</Link>
          </div>
      </div>
    </div>
  );
}

export default Errors;
