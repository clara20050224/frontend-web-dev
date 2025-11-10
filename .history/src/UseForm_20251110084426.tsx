import React, { useEffect, useState } from 'react';
import type { User, UserFormData } from './type';

interface Props {
	user: User | null;
	onSave: (data: UserFormData) => void;
	onClose: () => void;
}

export default function UserForm({ user, onSave, onClose }: Props) {
	const [form, setForm] = useState<UserFormData>({
		name: user?.name ?? '',
		username: user?.username ?? '',
		email: user?.email ?? '',
	});

	useEffect(() => {
		setForm({
			name: user?.name ?? '',
			username: user?.username ?? '',
			email: user?.email ?? '',
		});
	}, [user]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value } as UserFormData);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSave(form);
	};

	return (
		<div className="modal">
			<form className="modal-content" onSubmit={handleSubmit}>
				<h2>{user ? 'Update User' : 'Add User'}</h2>

				<input
					name="name"
					placeholder="Name"
					value={form.name}
					onChange={handleChange}
					required
				/>

				<input
					name="username"
					placeholder="Username"
					value={form.username}
					onChange={handleChange}
					required
				/>

				<input
					name="email"
					placeholder="Email"
					value={form.email}
					onChange={handleChange}
					required
				/>

				<button type="submit">{user ? 'Save Changes' : 'Add User'}</button>

				<button className="close" type="button" onClick={onClose}>
					Cancel
				</button>
			</form>
		</div>
	);
}
