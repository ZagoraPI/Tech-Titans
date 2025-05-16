import React from 'react';
import { User } from '@/models/model';
import { Table } from '../ui/table';
import { Button } from '../ui/button';

interface UsersListProps {
  users: User[];
  onUserClick: (user: User) => void;
   onRefresh: () => void;
}

const UsersList: React.FC<UsersListProps> = ({ users, onUserClick }) => {
  return (
    <div>
      <Table style={{maxWidth: '2000px', margin: '2rem auto', color: 'black', backgroundColor: 'rgba(255, 255, 255, 0.88)'}}>
        <thead>
          <tr>
            <th style={{ padding: '1rem', fontSize: '1.5rem', textAlign: 'left',color:'black', backgroundColor: 'rgba(255, 255, 255, 0.88)' }}>
              Name
            </th>
            <th style={{ padding: '1rem', fontSize: '1.5rem', textAlign: 'right', backgroundColor: 'rgba(255, 255, 255, 0.88)' }}>
              ID
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} onClick={() => onUserClick(user)} style={{ border: '2px solid, rgba(41, 41, 41, 0.2)',  cursor: 'pointer' }}>
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
