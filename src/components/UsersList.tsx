import React from 'react';
import { User } from '@/models/model';
import { Table } from './ui/table';
import { Button } from './ui/button';

interface UsersListProps {
  users: User[];
  onRefresh: () => void;
}

const UsersList: React.FC<UsersListProps> = ({ users, onRefresh}) => {
  return (

    <div>
    <Button
        onClick={onRefresh}
        style={{
          marginBottom: '1rem',
          marginTop: '1rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: 'white',
          color: '#000000',
          border: '1px solid rgb(0, 0, 0)',
          cursor: 'pointer',
          fontSize: '1rem',
          borderRadius: '4px',
          marginLeft: '-101px',
        }}
      >
        Refresh
    </Button>
        
      <Table style={{ width: '90%', maxWidth: '1200px', margin: '0 auto', borderCollapse: 'collapse', marginTop: '1rem' }}>
        <thead>
          <tr>
            <th
              style={{
                border: '2px solid #ddd', 
                padding: '25px', 
                fontSize: '1.5rem', 
                textAlign: 'left',
                backgroundColor: '#f4f4f4', 
                color: 'black',
              }}
            >
              Name
            </th>
            <th
              style={{
                border: '2px solid #ddd',
                padding: '25px', 
                fontSize: '1.5rem', 
                textAlign: 'right',
                backgroundColor: '#f4f4f4', 
                width: '30%', 
                color: 'black',
              }}
            >
              ID
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td
                style={{
                  border: '2px solid #ddd', 
                  padding: '25px', 
                  textAlign: 'left',
                  fontSize: '1.2rem', 
                }}
              >
                {user.name}
              </td>
              <td
                style={{
                  border: '2px solid #ddd',
                  padding: '25px', 
                  textAlign: 'right',
                  fontSize: '1.2rem', 
                }}
              >
                {user.id}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UsersList;
