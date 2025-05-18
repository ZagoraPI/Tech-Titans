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

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase()) ||
    user.id.toString() === filter
  );

  if (loading) return <p className="p-4 text-gray-600">Loading users...</p>;
  if (error) return <p className="p-4 text-red-600">{error}</p>;

  return (
    <div className="flex flex-col items-start px-4 py-2 space-y-4">
      <UserSearchBar value={filter} onChange={setFilter} />
      
      <div className="w-full overflow-x-auto">
        <UsersList users={filteredUsers} onUserClick={setSelectedUser} />
      </div>

      {selectedUser && (
        <UserDetails user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
};

export default UsersPage;
