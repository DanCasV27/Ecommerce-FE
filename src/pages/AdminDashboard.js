import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AdminProducts from './AdminProducts';
import AdminUsers from './AdminUsers';

const AdminDashboard = () => {
    const [isAdmin] = useState(true); // Replace with actual authentication logic

    if (!isAdmin) {
        return <div>You do not have permission to access this page.</div>;
    }

    return (
        <Router>
            <div style={{ display: 'flex' }}>
                <nav style={{ width: '200px', padding: '20px', borderRight: '1px solid #ccc' }}>
                    <h2>Admin Dashboard</h2>
                    <ul>
                        <li>
                            <Link to="/admin/users">Users</Link>
                        </li>
                        <li>
                            <Link to="/admin/products">Products</Link>
                        </li>
                    </ul>
                </nav>
                <div style={{ padding: '20px', flex: 1 }}>
                    <Switch>
                        <Route path="/admin/users" component={AdminUsers} />
                        <Route path="/admin/products" component={AdminProducts} />
                        <Route path="/" exact>
                            <h3>Welcome to the Admin Dashboard</h3>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default AdminDashboard;