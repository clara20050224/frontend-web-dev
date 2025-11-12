import React from "react";
import "./App.css";

const users = [
  {
    id: 1,
    name: "Emma Peters",
    username: "bluepanda785",
    email: "emma.peters@example.com",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Malik Addy",
    username: "greenfrog487",
    email: "malik.addy@example.com",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Sophia Li",
    username: "yellowlion123",
    email: "sophia.li@example.com",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 4,
    name: "Lucas Wang",
    username: "redkoala09",
    email: "lucas.wang@example.com",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const App: React.FC = () => {
  return (
    <div className="container">
      <h1 className="title">Manajemen Pengguna</h1>

      <div className="button-container">
        <button className="btn random">+ Add Random User</button>
        <button className="btn manual">+ Add Manual User</button>
      </div>

      <div className="user-grid">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <img src={user.image} alt={user.name} className="user-avatar" />
            <h2>{user.name}</h2>
            <p className="username">@{user.username}</p>
            <p className="email">{user.email}</p>

            <div className="actions">
              <button className="btn-update">Update</button>
              <button className="btn-delete">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
