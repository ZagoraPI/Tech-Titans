import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from '@/models/model';
import UsersList from './UsersList';
import UserDetails from './UserDetails';
import UserSearchBar from './UserSearchBar';
import MapView from './MapView';

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

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
  };

  if (loading) return <p className="p-4 text-gray-600">Loading…</p>;
  if (error) return <p className="p-4 text-red-600">{error}</p>;

  return (
    <div className="flex flex-row items-start p-0 m-0 w-full max-w-none" style={fullWidthStyle}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'stretch',
          width: 'fit-content',
          margin: 0,
          minHeight: 0,
        }}
      >
        <div style={{ marginLeft: '2rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
          <UserSearchBar value={filter} onChange={setFilter} onRefresh={fetchUsers} />
          <UsersList users={filteredUsers} onUserClick={handleUserClick} />
        </div>
        {selectedUser && (
          <div
            style={{
              marginLeft: '0.5rem',
              marginTop: '5rem',
              background: '#fff',
              borderRadius: '0.5rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              minWidth: '18rem',
              maxWidth: '33rem',
              zIndex: 10,
              alignSelf: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              overflow: 'hidden',
            }}
          >
            <UserDetails user={selectedUser} onClose={() => setSelectedUser(null)} />
               <MapView
        users={[selectedUser]} />
          </div>
        )}
      </div>
    </div>
  );
};


export default UsersPage;