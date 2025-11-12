import React from "react";

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  picture: string;
}

interface Props {
  user: User;
  onDelete: (id: string) => void;
  onUpdate: (id: string) => void;
}

const UserCard: React.FC<Props> = ({ user, onDelete, onUpdate }) => {
  return (
    <div className="user-card bg-neutral-900 hover:bg-neutral-800 transition-colors duration-300 p-6 rounded-2xl shadow-smooth flex items-center gap-6">
      <img
        src={user.picture}
        alt={user.name}
        className="w-20 h-20 rounded-full border-2 border-sky-400 shadow-lg"
      />
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-sky-400 mb-2">{user.name}</h2>
        <p className="text-gray-300">
          <span className="font-semibold text-white">Username:</span>{" "}
          {user.username}
        </p>
        <p className="text-gray-300">
          <span className="font-semibold text-white">Email:</span> {user.email}
        </p>
        <div className="flex gap-4 mt-4">
          <button
            onClick={() => onUpdate(user.id)}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold shadow-smooth"
          >
            Update
          </button>
          <button
            onClick={() => onDelete(user.id)}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold shadow-smooth"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
