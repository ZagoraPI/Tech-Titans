import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  }
}

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch users');
        setLoading(false);
      });
  }, []); 

  if (loading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} style={{ marginBottom: '1rem' }}>
          <strong>{user.name}</strong> ({user.username})<br />
          Email: {user.email}<br />
          Phone: {user.phone}<br />
          Address: {user.address.street}, {user.address.suite}, {user.address.city} - {user.address.zipcode}
        </li>
      ))}
    </ul>
  );
};

export default UsersPage;
