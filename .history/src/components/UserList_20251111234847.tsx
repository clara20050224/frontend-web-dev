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
  return (
    <div className="flex flex-col gap-4">
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
