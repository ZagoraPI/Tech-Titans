import React from 'react';
import { User } from '@/models/model';
import { Table } from '../ui/table';
import { Button } from '../ui/button';

interface UsersListProps {
  users: User[];
  onRefresh: () => void;
  onUserClick: (user: User) => void;
}

const UsersList: React.FC<UsersListProps> = ({ users, onRefresh, onUserClick }) => {
  return (
    <div>
      <Button
        onClick={onRefresh}
        style={{
          margin: '1rem 0',
          padding: '0.75rem 1.5rem',
          backgroundColor: 'grey',
          color: '#000',
          border: '1px solid black',
          cursor: 'pointer',
          fontSize: '1rem',
          borderRadius: '4px',
        }}
      >
        Refresh
      </Button>

      <Table style={{maxWidth: '2000px', margin: '2rem auto' }}>
        <thead>
          <tr>
            <th style={{ padding: '1rem', fontSize: '1.5rem', textAlign: 'left', backgroundColor: '#f4f4f4' }}>
              Name
            </th>
            <th style={{ padding: '1rem', fontSize: '1.5rem', textAlign: 'right', backgroundColor: '#f4f4f4' }}>
              ID
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} onClick={() => onUserClick(user)} style={{ border: '2px solid #ddd',  cursor: 'pointer' }}>
              <td style={{ padding: '1.5rem', fontSize: '1.2rem', textAlign: 'left' }}>{user.name}</td>
              <td style={{ padding: '1.5rem', fontSize: '1.2rem', textAlign: 'right' }}>ID: {user.id}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UsersList;
