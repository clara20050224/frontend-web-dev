import React, { useEffect, useState } from "react";
import UserList from "./components/UserList";

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  picture: string;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUser = async () => {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    const userData = data.results[0];
    return {
      id: userData.login.uuid,
      name: `${userData.name.first} ${userData.name.last}`,
      username: userData.login.username,
      email: userData.email,
      picture: userData.picture.medium,
    };
  };

  const addUser = async () => {
    const newUser = await fetchUser();
    setUsers([...users, newUser]);
  };

  const deleteUser = (id: string) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const updateUser = async (id: string) => {
    const newUser = await fetchUser();
    setUsers(users.map((u) => (u.id === id ? newUser : u)));
  };

  useEffect(() => {
    // Ambil 3 user pertama
    const loadInitialUsers = async () => {
      const initialUsers = [];
      for (let i = 0; i < 3; i++) {
        initialUsers.push(await fetchUser());
      }
      setUsers(initialUsers);
    };
    loadInitialUsers();
  }, []);

  return (
    <div className="bg-black min-h-screen text-white p-8">
      <h1 className="text-5xl font-bold text-sky-400 mb-6">
        Manajemen Pengguna
      </h1>
      <button
        onClick={addUser}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mb-6"
      >
        Add User
      </button>

      <UserList users={users} onDelete={deleteUser} onUpdate={updateUser} />
    </div>
  );
};

export default App;
