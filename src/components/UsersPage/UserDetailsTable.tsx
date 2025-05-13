import React from 'react';
import { User } from '@/models/model';
import { Button } from '../ui/button';

interface UserDetailsProps {
  user: User;
  onClose: () => void;
}

const td = { padding: '0.5rem', fontSize: '1rem', borderBottom: '1px solid #ddd' };

const UserDetails: React.FC<UserDetailsProps> = ({ user, onClose }) => (
  <div
    style={{
      position: 'fixed',
      top: '50%',
      left: '60%',
      transform: 'translate(0, -50%)',
      height: 'auto',
      width: '400px',
      background: '#fff',
      boxShadow: '-4px 0 10px rgba(0,0,0,0.1)',
      padding: '2rem',
      zIndex: 1,
      animation: 'slideRight 0.3s ease forwards',
    }}
  >
    <h2 style={{ marginBottom: '1rem' }}>{user.name}</h2>
    <table style={{ width: '100%', marginBottom: '1.5rem' }}>
      <tbody>
        <tr><td style={td}>Name:</td><td style={td}>{user.name}</td></tr>
        <tr><td style={td}>ID:</td><td style={td}>{user.id}</td></tr>
        <tr><td style={td}>Email:</td><td style={td}>{user.email}</td></tr>
        <tr><td style={td}>Phone:</td><td style={td}>{user.phone}</td></tr>
        <tr>
          <td style={td}>Address:</td>
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