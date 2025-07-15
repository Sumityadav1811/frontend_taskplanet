import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between px-10 py-5 bg-white">
      <div className="text-2xl font-semibold">Task Planet</div>
      <div className="text-2xl font-semibold  flex gap-10">
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
      </div>
    </div>
  );
};

export default Navbar;
