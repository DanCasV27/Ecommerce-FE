import React, { useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    setError(''); // clear errors before login attempt
    // Example: call your API and set error if login fails
  };

  return (
    <Card style={{ maxWidth: 400, margin: "0 auto" }}>
      <Card.Body>
        <Card.Title>Login</Card.Title>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="loginEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="loginPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}