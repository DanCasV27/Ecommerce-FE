import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminProducts from './pages/AdminProducts';
import AdminUsers from './pages/AdminUsers';
import AdminDashboard from './pages/AdminDashboard';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (

    <div><Navbar bg="primary" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
            <Nav.Link as={Link} to="/admin/products">Admin Products</Nav.Link>
            <Nav.Link as={Link} to="/admin/users">Admin users</Nav.Link>
            <Nav.Link as={Link} to="/admin/dashboard">Admin Dashboard</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Container>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="admin/dashboard" element={<AdminDashboard />} />
          {/* Add more routes as needed */}
          <Route path="/" element={<h1>Welcome to My Ecommerce App</h1>} />
        </Routes>
      </Container>
    </div>

  );
}

export default App;