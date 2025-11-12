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
  <div className="main-container">
    <h1>Manajemen Pengguna</h1>

    <div className="flex gap-4">
      <button onClick={addRandomUser} className="action-btn btn-add">
        + Add Random User
      </button>
      <button onClick={() => setShowModal(true)} className="action-btn btn-manual">
        + Add Manual User
      </button>
    </div>

    <div className="user-grid mt-8">
      <UserList users={users} onDelete={deleteUser} onUpdate={updateUser} />
    </div>

    {showModal && (
      <div className="modal-bg">
        <div className="modal">
          <h2 className="text-xl font-bold mb-4 text-center text-pink-400">
            Tambah Pengguna
          </h2>
          <input type="text" placeholder="Nama Lengkap" value={newUser.name}
                 onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
          <input type="text" placeholder="Username" value={newUser.username}
                 onChange={(e) => setNewUser({ ...newUser, username: e.target.value })} />
          <input type="email" placeholder="Email" value={newUser.email}
                 onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
          <input type="text" placeholder="URL Foto (opsional)" value={newUser.picture}
                 onChange={(e) => setNewUser({ ...newUser, picture: e.target.value })} />

          <div className="flex justify-end gap-3 mt-4">
            <button onClick={() => setShowModal(false)} className="cancel">Batal</button>
            <button onClick={addManualUser} className="save">Simpan</button>
          </div>
        </div>
      </div>
    )}
  </div>
);
};

export default App;
