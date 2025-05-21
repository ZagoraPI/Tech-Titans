import React, { useEffect, useRef, useState } from 'react';
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
  const rowRefs = useRef<(HTMLTableRowElement | null)[]>([]);
  const nameRefs = useRef<(HTMLTableCellElement | null)[]>([]);
  const [detailsPanelTop, setDetailsPanelTop] = useState(0);

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

  const handleUserClick = (user: User, idx: number) => {
    setSelectedUser(user);
    setTimeout(() => {
      const nameCell = nameRefs.current[idx];
      if (nameCell) {
        const cellRect = nameCell.getBoundingClientRect();
        const tableRect = nameCell.closest('table')?.getBoundingClientRect();
        if (tableRect) {
          setDetailsPanelTop(cellRect.top - tableRect.top + 100);
        }
      }
    }, 0);
  };

  if (loading) return <p className="p-4 text-gray-600">Loading…</p>;
  if (error)   return <p className="p-4 text-red-600">{error}</p>;

  return (
    <div className="flex flex-row items-start p-0 m-0 w-full max-w-none" style={fullWidthStyle}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          width: 'fit-content',
          margin: 0,
        }}
      >
        <div style={{ marginLeft: '2rem', marginTop: '2rem', marginBottom: '10rem' }}>
          <UserSearchBar value={filter} onChange={setFilter} onRefresh={fetchUsers} />
          <UsersList
            users={filteredUsers}
            onUserClick={handleUserClick}
            rowRefs={rowRefs}
            nameRefs={nameRefs}
          />
        </div>
        {selectedUser && (
          <div
            style={{
              position: 'relative',
              marginLeft: '0.01rem',
              background: '#fff',
              borderRadius: '0.5rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              minWidth: '24rem',
              maxWidth: '32rem',
              zIndex: 10,
              alignSelf: 'flex-start',
              top: 390,
              transition: 'top 0.0s',
            }}
          >
            <UserDetails user={selectedUser} onClose={() => setSelectedUser(null)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersPage;