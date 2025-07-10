import React, { useEffect, useState } from 'react';
import { Table, Button, Container, Alert, Spinner } from 'react-bootstrap';

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError('');
        // Adjust API endpoint as needed for your backend
        const response = await fetch('/api/products');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError('Error fetching products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Container>
      <h1 className="mb-4">Admin Products</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      {loading ? (
        <div className="text-center my-4">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th style={{ minWidth: 120 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center">No products found.</td>
              </tr>
            )}
            {products.map(product => (
              <tr key={product.id || product._id}>
                <td>{product.id || product._id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <Button variant="warning" size="sm" className="me-2">Edit</Button>
                  <Button variant="danger" size="sm">Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default AdminProducts;