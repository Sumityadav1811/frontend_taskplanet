import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  const [popup, setpopup] = useState(false);
  const comp = (
    <>
      <div className="hover:text-gray-700">
        <NavLink to="/">Home </NavLink>
      </div>
      <div className="hover:text-gray-700">
        <NavLink to="/leaderboard">LeaderBoard</NavLink>
      </div>
      <div className="hover:text-gray-700">
        <NavLink to="/history">History</NavLink>
      </div>
      <div className="hover:text-gray-700">
        <NavLink to="/add/user">Add User</NavLink>
      </div>
    </>
  );
  return (
    <>
      <div className="flex justify-between px-10 py-5 bg-white">
        <div className="text-2xl font-semibold">Task Planet</div>
        <div
          className=" border p-2 border-black md:hidden"
          onClick={() => {
            setpopup(!popup);
          }}
        >
          <IoMenuSharp />
        </div>
        <div className=" hidden md:flex gap-8 text-2xl font-semibold ">
          {comp}
        </div>
      </div>
      {popup == true && (
        <div className="flex flex-col border p-2 md:hidden">{comp}</div>
      )}
    </>
  );
};

export default Navbar;
