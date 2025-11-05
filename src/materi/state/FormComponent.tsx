
import React, { useState } from 'react'

interface FormData {
    name: string;
    email: string;
    password: string;
}

const FormComponent = () => {

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('Input changed:', e.target.name, e.target.value);
        const { name, value } = e.target;

        // Update state using the spread operator
        setFormData({
            ...formData,
            [name]: value // Dynamically update the field based on the input name
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder='Enter your name'
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder='Enter your email'
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder='Enter your password'
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default FormComponent