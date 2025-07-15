import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Reedem = ({ users }) => {
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_API_URL;
  const [userid, setuserid] = useState("");
  const [points, setpoints] = useState(0);

  const handleChange = (e) => {
    setuserid(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!userid) return alert("Please select a user");

    try {
      const response = await axios.get(`${BASE_URL}/api/claim/${userid}`);
      setpoints(response.data.points);
    } catch (error) {
      console.error("Error claiming points:", error);
      alert("Error claiming points");
    }
  };

  return (
    <div className="h-[664px] flex flex-col items-center justify-center bg-blue-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-semibold text-blue-800 mb-6">
          Claim Your Points
        </h1>

        <form onSubmit={submitHandler} className="space-y-4">
          <select
            name="user"
            onChange={handleChange}
            value={userid}
            className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 hover:ring-blue-400"
          >
            <option value="">-- Select a User --</option>
            {users.map((user) => (
              <option value={user._id} key={user._id}>
                {user.name}
              </option>
            ))}
          </select>

          <div className="flex justify-between gap-4">
            <button
              type="button"
              onClick={() => navigate("/add/user")}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition"
            >
              Add User
            </button>

            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
            >
              Claim Points
            </button>
          </div>
        </form>

        {points !== 0 && (
          <div className="mt-6 bg-green-100 text-green-700 p-4 rounded-md font-medium">
            🎉 Congratulations! You gained{" "}
            <span className="font-bold">{points}</span> points!
          </div>
        )}
      </div>
    </div>
  );
};

export default Reedem;
