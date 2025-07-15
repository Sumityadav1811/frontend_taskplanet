import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Reedem from "./pages/Reedem";
import axios from "axios";
import Leaderboard from "./pages/Leaderboard";
import History from "./pages/History";
import Navbar from "./components/Navbar";
import AddUser from "./components/AddUser";

const App = () => {
  const BASE_URL = import.meta.env.VITE_API_URL;
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/get/users`);
      setUsers(response.data.data);
    } catch (error) {
      console.error("Error in fetching the data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
    // const interval = setInterval(() => {
    //   fetchUsers();
    // }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="font-serif">
        <Navbar />
        {}
        <Routes>
          <Route
            path="/"
            element={
              loading ? <h1>Loading......</h1> : <Reedem users={users} />
            }
          />
          <Route path="/leaderboard" element={<Leaderboard users={users} />} />
          <Route path="/history" element={<History />} />
          <Route path="/add/user" element={<AddUser />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
