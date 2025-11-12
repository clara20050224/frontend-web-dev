import React from "react";
import UserCard from "./UserCard";

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  picture: string;
}

interface Props {
  users: User[];
  onDelete: (id: string) => void;
  onUpdate: (id: string) => void;
}

const UserList: React.FC<Props> = ({ users, onDelete, onUpdate }) => {
  if (users.length === 0)
    return (
      <p className="text-gray-400 text-center text-lg">
        Belum ada pengguna 😅
      </p>
    );

  return (
    <div className="flex flex-col gap-6">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default UserList;
