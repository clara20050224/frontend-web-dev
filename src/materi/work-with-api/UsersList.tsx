import { useEffect, useState } from 'react'
import type { User } from './type';
import { getUsers, handleCreateUser, handleDeleteUser, handleUpdateUser } from './api/users';

const UsersList = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // arrow function to fetch users
        const fetchUsers = async () => {
            setLoading(true);
            try {
                const data = await getUsers();
                setUsers(data);
                setLoading(false);
            } catch (error) {
                setError(error instanceof Error ? error.message : 'An error occurred');
                setLoading(false);
            }
        }
        fetchUsers();
    }, []);

    const createUser = async () => {
        const newUser: Omit<User, 'id'> = {
            name: 'New User',
            username: 'newuser',
            email: 'user@user.com'
        }
        try {
            const data: User = await handleCreateUser(newUser);
            setUsers([...users, data]);
        } catch (error) {
            setError(error instanceof Error ? error.message : 'An error occurred while creating user');
        }
    }

    const updateUser = async (id: number) => {
        // Partial digunakan untuk membuat type User menjadi optional, sehingga kita bisa mengupdate hanya beberapa properti saja
        // Misalnya kita hanya ingin mengupdate name, username, dan email, tanpa mengupdate id
        const updatedUser: Partial<User> = {
            id: id,
            name: 'Updated User',
            username: 'updateduser',
            email: 'update@user.com'
        }
        try {
            const userData: User = await handleUpdateUser(updatedUser);
            setUsers(users.map(user => user.id === userData.id ? userData : user)); // Update the users state with the updated user
        } catch (error) {
            setError(error instanceof Error ? error.message : 'An error occurred while updating user');
        }
    }

    const deleteUser = async (id: number) => {
        try {
            await handleDeleteUser(id);
            setUsers(users.filter(user => user.id !== id)); // Update the users state by removing the deleted user
        } catch (error) {
            setError(error instanceof Error ? error.message : 'An error occurred while deleting user');
        }
    }

    if (loading) {
		return <h1>Loading</h1>;
	}

	if (error) {
		return <h1>error fetching data . . .</h1>;
	}

    return (
        <div>
            <button onClick={createUser}>Add User</button>
            <ul> 
                {users.map(user => (
                    <li key={user.id}>
                        <h2>{user.name}</h2>
                        <p>Username: {user.username}</p>
                        <p>Email: {user.email}</p>
                        <button onClick={() => updateUser(user.id)}> Update User </button>
                        <button onClick={() => deleteUser(user.id)}>Delete User</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UsersList