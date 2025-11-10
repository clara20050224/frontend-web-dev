import { useState, useEffect } from 'react';
import './App.css';
import UserForm from './UseForm';
import type { User, UserFormData } from './type';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // --- STATE BARU UNTUK MODAL ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Menyimpan data user yang akan di-edit. 
  // Jika null, berarti kita sedang "Add User"
  const [userToEdit, setUserToEdit] = useState<User | null>(null);
  // ------------------------------

  const API_URL = 'https://jsonplaceholder.typicode.com/users';

  // Mengambil data awal saat komponen dimuat
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Gagal mengambil data dari server');
        }
        const data: User[] = await response.json();
        setUsers(data.slice(0, 5)); // Kita ambil 5 saja agar tidak terlalu banyak
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // --- FUNGSI UNTUK MEMBUKA MODAL ---
  const handleOpenAddModal = () => {
    setUserToEdit(null); // Kosongkan user, menandakan "mode Add"
    setIsModalOpen(true);
  };

  const handleOpenUpdateModal = (user: User) => {
    setUserToEdit(user); // Isi dengan data user, menandakan "mode Update"
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setUserToEdit(null);
  };
  
  // --- IMPLEMENTASI FUNGSI CRUD ---

  /**
   * 1. DELETE USER
   */
  const handleDeleteUser = async (id: number) => {
    // Konfirmasi sebelum hapus
    if (!window.confirm('Apakah Anda yakin ingin menghapus pengguna ini?')) {
      return;
    }

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Gagal menghapus pengguna.');
      }

      // Jika berhasil di server, update state di aplikasi kita
      setUsers(users.filter(user => user.id !== id));

    } catch (err) {
      alert((err as Error).message);
    }
  };

  /**
   * 2. ADD USER (POST) & 3. UPDATE USER (PUT)
   * Fungsi ini dipanggil oleh UserForm saat di-submit
   */
  const handleSaveUser = async (formData: UserFormData) => {
    try {
      let response;
      let savedUser: User;

      if (userToEdit) {
        // --- UPDATE (PUT) ---
        response = await fetch(`${API_URL}/${userToEdit.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...userToEdit, ...formData }), // Gabungkan id lama dgn data form baru
        });
        
        if (!response.ok) throw new Error('Gagal memperbarui pengguna.');
        
        savedUser = await response.json();
        
        // Update user di dalam state
        setUsers(users.map(u => (u.id === userToEdit.id ? savedUser : u)));

      } else {
        // --- ADD (POST) ---
        response = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (!response.ok) throw new Error('Gagal menambah pengguna.');

        savedUser = await response.json();
        
        // Tambah user baru ke atas daftar
        setUsers([savedUser, ...users]);
      }

      handleCloseModal(); // Tutup modal jika berhasil

    } catch (err) {
      alert((err as Error).message);
    }
  };


  // --- Tampilan (Render) ---
  if (loading) return <div className="container"><p>Loading data pengguna...</p></div>;
  if (error) return <div className="container"><p>Error: {error}</p></div>;

  return (
    <div className="container">
      <h1>Manajemen Pengguna</h1>
      <button className="add-user-btn" onClick={handleOpenAddModal}>
        Add User
      </button>

      <div className="user-list">
        {users.map(user => (
          <div className="user-card" key={user.id}>
            <h2>{user.name}</h2>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            
            <div className="button-container">
              <button 
                className="update-btn" 
                onClick={() => handleOpenUpdateModal(user)} // <-- Panggil fungsi update
              >
                Update User
              </button>
              <button 
                className="delete-btn" 
                onClick={() => handleDeleteUser(user.id)} // <-- Panggil fungsi delete
              >
                Delete User
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* --- TAMPILKAN MODAL JIKA isModalOpen TRUE --- */}
      {isModalOpen && (
        <UserForm
          user={userToEdit}
          onSave={handleSaveUser}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;