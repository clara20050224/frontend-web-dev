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
  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    email: "",
    picture: "",
  });

  // Ambil user acak dari API
  const fetchUser = async () => {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    const u = data.results[0];
    return {
      id: u.login.uuid,
      name: `${u.name.first} ${u.name.last}`,
      username: u.login.username,
      email: u.email,
      picture: u.picture.medium,
    };
  };

  // Load user awal
  useEffect(() => {
    const loadInitial = async () => {
      const arr = [];
      for (let i = 0; i < 3; i++) arr.push(await fetchUser());
      setUsers(arr);
    };
    loadInitial();
  }, []);

  // Tambah user acak
  const addRandomUser = async () => {
    const newU = await fetchUser();
    setUsers([...users, newU]);
  };

  // Tambah user manual
  const addManualUser = () => {
    if (!newUser.name || !newUser.username || !newUser.email) return;
    const user: User = {
      id: Date.now().toString(),
      name: newUser.name,
      username: newUser.username,
      email: newUser.email,
      picture:
        newUser.picture ||
        "https://cdn-icons-png.flaticon.com/512/847/847969.png",
    };
    setUsers([...users, user]);
    setNewUser({ name: "", username: "", email: "", picture: "" });
    setShowModal(false);
  };

  // Hapus user
  const deleteUser = (id: string) =>
    setUsers(users.filter((u) => u.id !== id));

  // Update user acak
  const updateUser = async (id: string) => {
    const newU = await fetchUser();
    setUsers(users.map((u) => (u.id === id ? newU : u)));
  };

  return (
    <div className="flex flex-col items-center justify-start p-8">
      <h1 className="text-5xl font-extrabold text-sky-400 mb-6 text-center drop-shadow-md">
        Manajemen Pengguna
      </h1>

      <div className="flex gap-4 mb-10">
        <button
          onClick={addRandomUser}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-xl shadow-smooth"
        >
          + Add Random User
        </button>
        <button
          onClick={() => setShowModal(true)}
          className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-6 rounded-xl shadow-smooth"
        >
          + Add Manual User
        </button>
      </div>

      <div className="w-full max-w-3xl space-y-6">
        <UserList users={users} onDelete={deleteUser} onUpdate={updateUser} />
      </div>

      {/* Modal Form */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="bg-neutral-900 p-8 rounded-2xl shadow-smooth w-96">
            <h2 className="text-2xl font-bold text-sky-400 mb-4">
              Tambah Pengguna
            </h2>

            <input
              type="text"
              placeholder="Nama Lengkap"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              className="w-full mb-3 p-2 rounded bg-neutral-800 border border-gray-700 text-white"
            />
            <input
              type="text"
              placeholder="Username"
              value={newUser.username}
              onChange={(e) =>
                setNewUser({ ...newUser, username: e.target.value })
              }
              className="w-full mb-3 p-2 rounded bg-neutral-800 border border-gray-700 text-white"
            />
            <input
              type="email"
              placeholder="Email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              className="w-full mb-3 p-2 rounded bg-neutral-800 border border-gray-700 text-white"
            />
            <input
              type="text"
              placeholder="URL Foto (opsional)"
              value={newUser.picture}
              onChange={(e) =>
                setNewUser({ ...newUser, picture: e.target.value })
              }
              className="w-full mb-5 p-2 rounded bg-neutral-800 border border-gray-700 text-white"
            />

            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg"
              >
                Batal
              </button>
              <button
                onClick={addManualUser}
                className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-semibold"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
