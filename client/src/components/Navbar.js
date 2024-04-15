import React from "react";
import Logo from "../assets/creditgeeks-1.png";
const Navbar = () => {
  return (
    <div className="bg-zinc-500 text-white h-20 fixed w-full flex items-center px-4 justify-content-between">
      {/* Logo */}
      <div className="flex-shrink-0">
        {/* Add your logo component or image here */}
        <img src={Logo} alt="Logo" className="h-20 w-20 mb-1 shadow-lg" />
      </div>

      {/* Title */}
      {/* <div className="flex-grow text-center font-bold px-10 text-lg">
        Credit Geeks
      </div> */}

      {/* Navigation links or additional content */}
      {/* <div className="flex-grow">
   
      </div> */}
    </div>
  );
};

export default Navbar;
