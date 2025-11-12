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
    <div className="bg-neutral-800 p-6 rounded-2xl shadow-lg flex items-center gap-6">
      <img
        src={user.picture}
        alt={user.name}
        className="w-20 h-20 rounded-full border-2 border-sky-400"
      />
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-sky-400">{user.name}</h2>
        <p>
          <span className="font-semibold">Username:</span> {user.username}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        <div className="flex gap-4 mt-4">
          <button
            onClick={() => onUpdate(user.id)}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-bold"
          >
            Update User
          </button>
          <button
            onClick={() => onDelete(user.id)}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-bold"
          >
            Delete User
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
