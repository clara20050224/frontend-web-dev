import type { User } from "../type";

export const getUsers = async (): Promise<User[]> => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // console.log('Fetched users successfully ', response.json());    
        return response.json();
    } catch (error) {
        throw new Error(`Failed to fetch users: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

export const handleCreateUser = async (user: Omit<User,"id">): Promise<User> => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        });
        if (!response.ok) {
            throw new Error('Failed to create user');
        }
        return response.json();
    } catch (error) {
        throw new Error(`Failed to create user: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

export const handleUpdateUser = async (user: Partial<User>): Promise<User> => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        });
        if (!response.ok) {
            throw new Error('Failed to update user');
        }
        return response.json();
    } catch (error) {
        throw new Error(`Failed to update user: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

export const handleDeleteUser = async (id: number): Promise<void> => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Failed to delete user');
        }
    } catch (error) {
        throw new Error(`Failed to delete user: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}