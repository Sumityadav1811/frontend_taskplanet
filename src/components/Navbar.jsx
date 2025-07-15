import React from "react";
import { NavLink } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
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
    <div className="flex justify-between px-10 py-5 bg-white">
      <div className="text-2xl font-semibold">Task Planet</div>
      <div className=" border p-2 border-black md:hidden">
        <IoMenuSharp />
      </div>
      <div className=" hidden md:text-2xl md:font-semibold  md:flex gap-10">
        {comp}
      </div>
    </div>
  );
};

export default Navbar;
