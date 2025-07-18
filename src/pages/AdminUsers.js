import React, { useState } from 'react';

const AdminUsers = () => {
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({ id: null, name: '' });
    const [isEditing, setIsEditing] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            setUsers(users.map(user => (user.id === formData.id ? formData : user)));
        } else {
            setUsers([...users, { ...formData, id: Date.now() }]);
        }
        setFormData({ id: null, name: '' });
        setIsEditing(false);
    };

    const handleEdit = (user) => {
        setFormData(user);
        setIsEditing(true);
    };

    const handleDelete = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <div>
            <h1>Admin User Management</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="User Name"
                    required
                />
                <button type="submit">{isEditing ? 'Update User' : 'Add User'}</button>
            </form>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name}
                        <button onClick={() => handleEdit(user)}>Edit</button>
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminUsers;