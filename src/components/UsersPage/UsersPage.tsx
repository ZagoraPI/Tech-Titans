import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from '@/models/model';
import UsersList from './UsersList';
import UserDetails from './UserDetails';
import UserSearchBar from './UserSearchBar';

const UsersPage: React.FC = () => {
  const fullWidthStyle = {
    width: '100vw',
    marginLeft: 'calc(-50vw + 50%)',
  };
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(res.data);
    } catch {
      setError('Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchUsers(); }, []);

  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(filter.toLowerCase()) ||
    u.id.toString() === filter
  );

  if (loading) return <p className="p-4 text-gray-600">Loading…</p>;
  if (error)   return <p className="p-4 text-red-600">{error}</p>;

  return (
    <div className="flex flex-row items-start p-0 m-0 w-full max-w-none" style={fullWidthStyle}>
      <div className="flex flex-col" style={{ paddingLeft: '0' }}>
        <UserSearchBar value={filter} onChange={setFilter} />
        <div className="w-fit p-0 m-0">
          <UsersList users={filteredUsers} onUserClick={setSelectedUser} />
        </div>
      </div>

      {selectedUser && (
        <UserDetails user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
};

export default UsersPage;