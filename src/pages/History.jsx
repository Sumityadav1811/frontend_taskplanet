import React, { useState, useEffect } from "react";
import axios from "axios";

const History = () => {
  const BASE_URL = import.meta.env.VITE_API_URL;
  const [historyData, sethistoryData] = useState([]);
  const [loading, setloading] = useState(true);

  const fetchhistory = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/history`);
      sethistoryData(response.data.data.reverse());
      setloading(false);
    } catch (error) {
      console.log("an error occurred in fetching the history", error);
      setloading(false);
    }
  };

  useEffect(() => {
    fetchhistory();
    const interval = setInterval(() => {
      fetchhistory();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col bg-blue-100 ">
      <h1 className="font-extrabold text-3xl m-10">All Points History</h1>
      {loading ? (
        <h1>Loading History....</h1>
      ) : historyData.length === 0 ? (
        <h1>No history Available</h1>
      ) : (
        historyData.map((entry) => (
          <div
            key={entry._id}
            className=" sm:w-auto flex justify-around gap-16 items-center bg-white rounded-lg shadow-slate-500 shadow-md mx-10 my-5 border p-6  text-green-600 font-medium md:w-1/2"
          >
            <div className="font-semibold">{entry.userId?.name} </div>
            <div>
              <h1>+{entry.pointsClaimed} Points</h1>
              <h1>{new Date(entry.claimedAt).toLocaleString()}</h1>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default History;
