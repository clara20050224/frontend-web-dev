import { useState } from "react"
type User = {
    name: string;
    age: number;
};

const UserProfile = () => {
    const [user, setUser] = useState<User>({ 
        name: 'John Doe', 
        age: 30 
    });
    const updatedUser = () => {
        setUser({
            ...user, // Spread the existing user properties -> ambil semua properti user yang ada
            age: user.age + 1, // Increment age by 1 -> update umur user dengan menambah 1
        });
    }

    const updatedUserName = () => {
        setUser({
            ...user, // Spread the existing user properties -> ambil semua properti user yang ada
            name: 'Jane Doe', // Change name to 'Jane Doe' -> ganti nama user dengan Jane Doe
        });
    }
  return (
    <>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <button onClick={updatedUser}>Increase Age</button>
        <button onClick={updatedUserName}>Change Username</button>
    </>
  )
}

export default UserProfile