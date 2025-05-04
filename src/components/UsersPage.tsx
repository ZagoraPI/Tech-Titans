import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from '@/models/model'; 

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch users');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>{error}</p>;

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Filter users by name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
      />

      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id} style={{ marginBottom: '1rem' }}>
            <strong>{user.name}</strong> ({user.username})<br />
            Email: {user.email}<br />
            Phone: {user.phone}<br />
            Address: {user.address.street}, {user.address.suite}, {user.address.city} - {user.address.zipcode}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
