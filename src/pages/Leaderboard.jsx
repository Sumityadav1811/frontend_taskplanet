import React from "react";
import { FaCoins } from "react-icons/fa";

const Leaderboard = ({ users }) => {
  const sortedUsers = [...users].sort((a, b) => b.points - a.points);

  return (
    <div className="bg-blue-100 h-[664px] py-8 px-4">
      <h1 className="font-bold text-4xl text-center text-gray-800 mb-8">
        LeaderBoard
      </h1>

      {/* Top 3 Rank Holders */}
      <div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
        {/* for Rank 2 */}
        <div className="bg-yellow-300 w-full md:w-1/3 h-52 rounded-xl shadow-lg p-4 flex flex-col justify-center items-center">
          <h1 className="text-xl font-semibold text-gray-700">🥈 2</h1>
          <h1 className="text-2xl font-bold">{sortedUsers[1]?.name}</h1>
          <div className="flex items-center gap-2 text-lg font-medium text-yellow-700">
            <span>{sortedUsers[1]?.points}</span>
            <FaCoins />
          </div>
        </div>

        {/* for Rank 1 */}
        <div className="bg-yellow-400 w-full md:w-1/3 h-60 rounded-xl shadow-xl p-6 flex flex-col justify-center items-center scale-105">
          <h1 className="text-2xl font-bold text-gray-800">🥇 1</h1>
          <h1 className="text-3xl font-extrabold">{sortedUsers[0]?.name}</h1>
          <div className="flex items-center gap-2 text-xl font-semibold text-yellow-800">
            <span>{sortedUsers[0]?.points}</span>
            <FaCoins />
          </div>
        </div>

        {/* For  Rank 3 */}
        <div className="bg-yellow-200 w-full md:w-1/3 h-52 rounded-xl shadow-lg p-4 flex flex-col justify-center items-center">
          <h1 className="text-xl font-semibold text-gray-700">🥉 3</h1>
          <h1 className="text-2xl font-bold">{sortedUsers[2]?.name}</h1>
          <div className="flex items-center gap-2 text-lg font-medium text-yellow-700">
            <span>{sortedUsers[2]?.points}</span>
            <FaCoins />
          </div>
        </div>
      </div>

      {/* Remaining Users */}
      <div className="bg-white rounded-lg shadow-md px-6 py-4">
        {sortedUsers.slice(3).map((user, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-3 border-b last:border-none"
          >
            <h1 className="text-lg font-semibold w-1/6">{index + 4}</h1>
            <h1 className="text-lg font-medium w-2/3">{user.name}</h1>
            <div className="flex items-center gap-2 text-yellow-600 font-medium w-1/6 justify-end">
              <span>{user.points}</span>
              <FaCoins />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
