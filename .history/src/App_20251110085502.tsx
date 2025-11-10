import { useState, useEffect } from 'react';
import './App.css'; // Kita akan membuat file ini di langkah berikutnya



// 1. Tentukan "bentuk" data pengguna sesuai API
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

function App() {
  // 2. Siapkan state untuk menyimpan daftar pengguna, status loading, dan error
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 3. Link API yang Anda minta
  const API_URL = 'https://jsonplaceholder.typicode.com/users';

  // 4. Gunakan useEffect untuk mengambil data dari API saat komponen pertama kali dimuat
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Gagal mengambil data dari server');
        }
        const data: User[] = await response.json();
        setUsers(data); // Simpan data ke state
      } catch (err) {
        setError((err as Error).message); // Simpan pesan error jika gagal
      } finally {
        setLoading(false); // Hentikan status loading
      }
    };

    fetchUsers();
  }, []); // Array kosong berarti "jalankan satu kali saja"

  // 5. Fungsi untuk menghapus pengguna (secara lokal di state)
  const handleDeleteUser = (id: number) => {
    // Buat array baru yang berisi semua pengguna KECUALI yang ID-nya sama
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
    
    // Catatan: Di aplikasi nyata, Anda juga akan mengirim request DELETE ke API
    // fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  };

  // 6. Fungsi placeholder untuk Add/Update
  const handleAddUser = () => {
    alert('Fungsi "Add User" belum diimplementasikan.');
  };

  const handleUpdateUser = (id: number) => {
    alert(`Fungsi "Update User" untuk ID ${id} belum diimplementasikan.`);
  };


  // --- Tampilan (Render) ---

  // Tampilkan pesan Loading
  if (loading) {
    return <div className="container"><p>Loading data pengguna...</p></div>;
  }

  // Tampilkan pesan Error
  if (error) {
    return <div className="container"><p>Error: {error}</p></div>;
  }

  // Tampilkan data jika berhasil
  return (
    <div className="container">
      <h1>Manajemen Pengguna</h1>
      <button className="add-user-btn" onClick={handleAddUser}>
        Add User
      </button>

      {/* 7. Gunakan .map() untuk membuat "kartu" untuk setiap pengguna */}
      <div className="user-list">
        {users.map(user => (
          <div className="user-card" key={user.id}>
            <h2>{user.name}</h2>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            
            <div className="button-container">
              <button 
                className="update-btn" 
                onClick={() => handleUpdateUser(user.id)}
              >
                Update User
              </button>
              <button 
                className="delete-btn" 
                onClick={() => handleDeleteUser(user.id)}
              >
                Delete User
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;