import React, { useState } from "react";
import axios from "axios";

const AddUser = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/add/user", {
        name,
      });
      setMessage(response.data.message);
      setName(""); // Clear input after submit
    } catch (error) {
      setMessage("Failed to add user. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[664px] bg-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          <label htmlFor="name" className="text-gray-700 font-semibold">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter User's Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Add User
          </button>
        </form>
        {message && (
          <h1 className="mt-4 text-center text-green-600 font-medium">
            {message}
          </h1>
        )}
      </div>
    </div>
  );
};

export default AddUser;
