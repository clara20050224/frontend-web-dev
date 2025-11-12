import React, { useState } from "react";
import UserList from "./components/UserList";

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  picture: string;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: "1",
      name: "Raul Freeman",
      username: "tinygorilla118",
      email: "raul.freeman@example.com",
      picture: "https://randomuser.me/api/portraits/men/1.jpg",
    },
  ]);

  // 🟢 Add User
  const handleAddUser = () => {
    const name = prompt("Masukkan nama pengguna:");
    const username = prompt("Masukkan username:");
    const email = prompt("Masukkan email:");

    if (!name || !username || !email) return;

    const newUser: User = {
      id: Date.now().toString(),
      name,
      username,
      email,
      picture: `https://randomuser.me/api/portraits/men/${Math.floor(
        Math.random() * 90
      )}.jpg`,
    };

    setUsers([...users, newUser]);
  };

  // 🟡 Update User
  const handleUpdateUser = (id: string) => {
    const updatedUsers = users.map((user) =>
      user.id === id
        ? {
            ...user,
            name: prompt("Ubah nama:", user.name) || user.name,
            email: prompt("Ubah email:", user.email) || user.email,
          }
        : user
    );
    setUsers(updatedUsers);
  };

  // 🔴 Delete User
  const handleDeleteUser = (id: string) => {
    const confirmDelete = confirm("Yakin ingin menghapus user ini?");
    if (confirmDelete) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  return (
    <div className="bg-neutral-900 text-white min-h-screen p-10">
      <h1 className="text-5xl font-bold mb-8">Manajemen Pengguna</h1>
      <button
        onClick={handleAddUser}
        className="border-2 border-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-black transition"
      >
        Add User
      </button>

      <UserList users={users} onDelete={handleDeleteUser} onUpdate={handleUpdateUser} />
    </div>
  );
};

export default App;
