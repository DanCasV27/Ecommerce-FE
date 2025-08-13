import React, { useState } from 'react';
import AdminProducts from './AdminProducts';
import AdminUsers from './AdminUsers';
import { Routes, Route, Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const AdminDashboard = () => {
    const [isAdmin] = useState(true); // Replace with actual authentication logic
 
    if (!isAdmin) {
        return <div>You do not have permission to access this page.</div>;
    }
     
    return (
        <div style={{ display: 'flex' }}>
            <nav style={{ width: '200px', padding: '20px', borderRight: '1px solid #ccc' }}>
                <Nav defaultActiveKey="/admin/users" className="flex-column">
                    <Nav.Link as={Link} to="/admin/users">Users</Nav.Link>
                    <Nav.Link as={Link} to="/admin/products">Products</Nav.Link>
                </Nav>
            </nav>
            <div style={{ padding: '20px', flex: 1 }}>
                <Routes>
                    <Route path="/admin/users" element={<AdminUsers />} />
                    <Route path="/admin/products" element={<AdminProducts />} />
                    <Route path="/" element={<h3>Welcome to the Admin Dashboard</h3>} />
                </Routes>
            </div>
        </div>
    );
};

export default AdminDashboard;
