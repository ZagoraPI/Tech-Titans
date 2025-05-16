import React from 'react';
import { User } from '@/models/model';
import { Table } from '../ui/table';
import { Button } from '../ui/button';

interface UsersListProps {
  users: User[];
  onUserClick: (user: User) => void;
}

const UsersList: React.FC<UsersListProps> = ({ users, onUserClick }) => {
  const tableStyle = {
    maxWidth: '2000px',
    margin: '1rem',
    color: 'black',
    backgroundColor: 'rgba(255, 255, 255, 0.88)',
  };

  const headerCellStyle = {
    padding: '1rem',
    fontSize: '1.5rem',
    textAlign: 'center' as const,
    backgroundColor: 'rgba(255, 255, 255, 0.88)',
  };

  const rowCellStyle = {
    padding: '1.5rem',
    fontSize: '1.2rem',
    textAlign: 'right' as const,
  };

  const rowStyle = {
    border: '2px solid rgba(41, 41, 41, 0.2)',
    cursor: 'pointer',
  };

  return (
    <div>
      <Table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerCellStyle}>ID</th>
            <th style={headerCellStyle}>Name</th>
            <th style={headerCellStyle}>Username</th>
            <th style={headerCellStyle}>Email</th>
            <th style={headerCellStyle}>City</th>
            <th style={headerCellStyle}>Company</th>
            <th style={headerCellStyle}>Details</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              onClick={() => onUserClick(user)}
              style={rowStyle}
            >
              <td style={{ ...rowCellStyle, textAlign: 'left' }}>{user.id}</td>
              <td style={rowCellStyle}>{user.name}</td>
              <td style={rowCellStyle}>{user.username}</td>
              <td style={rowCellStyle}>{user.email}</td>
              <td style={rowCellStyle}>{user.address?.city || '-'}</td>
              <td style={rowCellStyle}>{user.company?.name || '-'}</td>
              <td style={rowCellStyle}>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    onUserClick(user);
                  }}
                >
                  details
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>   
    </div>
  );
};

export default UsersList;
