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
      position: 'absolute',
      top: '50%',
      left: '0%',
      transform: 'translate(0, -50%)',
      height: 'auto',
      width: '600px',
      background: '#0000',
      boxShadow: '-4px 0 10px rgba(247, 10, 10, 0.2)',
      padding: '2rem',
      zIndex: 1,
      animation: 'slideRight 0.3s ease forwards',
    }}
  >
    <h2 style={{ marginBottom: '20px' }}> {user.id}---{user.name}---{user.id}</h2>
<table style={{ width: '100%'}}>
  <tbody>
    <tr>
      <td style={{ ...td, color: 'white', textAlign: 'left', width: '120px', verticalAlign: 'top' }}>Address:</td>
      <td style={{ ...td, paddingLeft: '0.1rem', textAlign: 'left' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
          <div>
            <strong>Street:</strong>
            <span style={{ marginLeft: '7px' }}>{user.address?.street}</span>
          </div>
          <div>
            <strong>City:</strong>
            <span style={{ marginLeft: '7px' }}>{user.address?.city}</span>
          </div>
          <div>
            <strong>Zipcode:</strong>
            <span style={{ marginLeft: '7px' }}>{user.address?.zipcode}</span>
          </div>
          <div>
            <strong>Suite:</strong>
            <span style={{ marginLeft: '7px' }}>{user.address?.suite}</span>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <td style={{ ...td, color: 'white', textAlign: 'left', width: '120px', verticalAlign: 'top' }}>Geo:</td>
      <td style={{ ...td, paddingLeft: '0.1rem', textAlign: 'left' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
          <div>
            <strong>Lat:</strong>
            <span style={{ marginLeft: '7px' }}>{user.address?.geo?.lat}</span>
          </div>
          <div>
            <strong>Lng:</strong>
            <span style={{ marginLeft: '7px' }}>{user.address?.geo?.lng}</span>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <td style={{ ...td, color: 'white', textAlign: 'left', width: '120px', verticalAlign: 'top' }}>Phone:</td>
      <td style={{ ...td, paddingLeft: '0.1rem', textAlign: 'left' }}>
        <strong>Phone:</strong>
        <span style={{ marginLeft: '7px' }}>{user.phone}</span>
      </td>
    </tr>
    <tr>
      <td style={{ ...td, color: 'white', textAlign: 'left', width: '120px', verticalAlign: 'top' }}>Website:</td>
      <td style={{ ...td, paddingLeft: '0.1rem', textAlign: 'left' }}>
        <strong>Website:</strong>
        <span style={{ marginLeft: '7px' }}>{user.website}</span>
      </td>
    </tr>
    <tr>
      <td style={{ ...td, color: 'white', textAlign: 'left', width: '120px', verticalAlign: 'top' }}>Company:</td>
      <td style={{ ...td, paddingLeft: '0.1rem', textAlign: 'left' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
          <div>
            <strong>Name:</strong>
            <span style={{ marginLeft: '7px' }}>{user.company?.name}</span>
          </div>
          <div>
            <strong>CatchPhrase:</strong>
            <span style={{ marginLeft: '7px' }}>{user.company?.catchPhrase}</span>
          </div>
          <div>
            <strong>BS:</strong>
            <span style={{ marginLeft: '7px' }}>{user.company?.bs}</span>
          </div>
        </div>
      </td>
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