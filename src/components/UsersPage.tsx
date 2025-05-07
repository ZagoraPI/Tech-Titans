import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from '@/models/model';
import UsersList from './UsersList';
import { Input } from './ui/input';
import UserDetails from './UserDetails';

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const fetchUsers = () => {
    setLoading(true);
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
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <Input
        type="text"
        placeholder="Filter users by name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{
          marginBottom: '1rem',
          padding: '0.75rem',
          fontSize: '1rem',
          width: '100%',
          maxWidth: '400px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />

      <UsersList
        users={filteredUsers}
         onRefresh={fetchUsers}
           onUserClick={(user: User) => setSelectedUser(user)}
      />

        {selectedUser && (
         <UserDetails
          user={selectedUser} // Only pass selectedUser when it's not null
           onClose={() => setSelectedUser(null)}
         />
        )}
    </div>
  );
};

export default UsersPage;
