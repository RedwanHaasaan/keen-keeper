import React from "react";
import { Link } from "react-router-dom";

const FriendCard = ({ friend }) => {
  return (
    <Link to={`/friendDetails/${friend.id}`}>
      <div className="bg-white flex flex-col items-center gap-4 p-6 max-w-xs shadow-md rounded-lg cursor-pointer transition hover:shadow-lg">
        <div className="w-20 h-20">
          <img
            src={friend.picture}
            alt={friend.name}
            className="object-contain w-full rounded-full"
          />
        </div>
        <div className="flex flex-col text-center items-center gap-2">
          <h1 className="text-xl font-semibold text-gray-700">{friend.name}</h1>
          <span className="font-normal text-xs text-gray-400">
            {friend.days_since_contact}d ago
          </span>
          <div className="flex flex-row flex-wrap gap-2">
            {friend.tags.map((tag, index) => (
              <span
                key={index}
                className="badge badge-soft badge-success text-green font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
          <div>
            {friend.status === "on-track" && (
              <span className="badge bg-green text-white">On Track</span>
            )}

            {friend.status === "overdue" && (
              <span className="badge bg-red-500 text-white">Overdue</span>
            )}

            {friend.status === "almost due" && (
              <span className="badge bg-yellow-500 text-white">Almost Due</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;
