import React from 'react';
import { User } from '@/models/model';
import { Button } from '../ui/button';
import UsersList from './UsersList';

interface UserDetailsProps {
  user: User;
  onClose: () => void;
}

const td = { padding: '0.5rem', fontSize: '1rem', borderBottom: '1px solid #ddd' };

const UserDetails: React.FC<UserDetailsProps> = ({ user, onClose }) => (
  <div
    style={{
      top: '50%',
      left: '60%',
      transform: 'translate(0, -50%)',
      height: 'auto',
      width: '400px',
      background: '#0000',
      boxShadow: '-4px 0 10px rgba(247, 10, 10, 0.2)',
      padding: '2rem',
      zIndex: 1,
      animation: 'slideRight 0.3s ease forwards',
    }}
  >
    <h2 style={{ marginBottom: '1rem' }}>{user.name}</h2>
<table style={{ width: '100%', marginBottom: '1.5rem' }}>
  <tbody>
    <tr>
      <td style={{ ...td, color: 'black' }}>Name:</td> {/* black */}
      <td style={td}>{user.name}</td>
    </tr>
    <tr>
      <td style={{ ...td, color: 'white' }}>ID:</td> {/* white */}
      <td style={td}>{user.id}</td>
    </tr>
    <tr>
      <td style={{ ...td, color: 'white' }}>Email:</td> {/* white */}
      <td style={td}>{user.email}</td>
    </tr>
    <tr>
      <td style={{ ...td, color: 'white' }}>Phone:</td> {/* white */}
      <td style={td}>{user.phone}</td>
    </tr>
    <tr>
      <td style={{ ...td, color: 'white' }}>Address:</td> {/* white */}
      <td style={td}>{user.address?.street}, {user.address?.city}</td>
    </tr>
  </tbody>
</table>

    <Button onClick={onClose} style={{ background: '#007BFF', color: '#fff', padding: '0.5rem 1rem' }}>
      Close
    </Button>
    <style>{`
      @keyframes slideRight {
        0% {
          transform: translate(-50%, -50%);
          opacity: 0;
        }
        100% {
          transform: translate(0, -50%);
          opacity: 1;
        }
      }
    `}</style>
  </div>
);

export default UserDetails;