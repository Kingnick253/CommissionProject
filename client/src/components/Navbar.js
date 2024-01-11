import React from "react";

const Navbar = () => {
  return (
    <div className="bg-zinc-500 text-white h-20 fixed w-full flex items-center px-4">
      {/* Logo */}
      <div className="flex-shrink-0">
        {/* Add your logo component or image here */}
        <img src="your-logo.png" alt="Logo" className="h-12 w-12" />
      </div>

      {/* Title */}
      <div className="flex-grow text-center font-bold text-lg">
        Credit Geeks
      </div>

      {/* Navigation links or additional content */}
      <div className='flex-grow'>
        {/* Add your navigation links or other content here */}
      </div>
    </div>
  );
};

export default Navbar;
