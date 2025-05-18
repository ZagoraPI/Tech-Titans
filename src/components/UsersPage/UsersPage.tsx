import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from '@/models/model';
import UsersList from './UsersList';
import UserDetails from './UserDetailsTable';
import UserSearchBar from './UserSearchBar';

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState('');
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
      });};

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(filter.toLowerCase()) ||
    user.id.toString() === filter
  );
  

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>{error}</p>;

  return (
     <div className="users-page">
      <div className="search-bar">
        <UserSearchBar value={filter} onChange={setFilter} />
      </div>  

      <div className="user-list">
        <UsersList users={filteredUsers} onUserClick={setSelectedUser} />
      </div>

      <div className="user-table">
        {selectedUser && (
          <UserDetails user={selectedUser} onClose={() => setSelectedUser(null)} />
        )}
      </div>
    </div>
  );};

export default UsersPage;
