import React from 'react';
import { User } from '@/models/model';
import { Button } from '../ui/button';

interface UserDetailsProps {
  user: User;
  onClose: () => void;
}

// old td style, unchanged
const tdBase: React.CSSProperties = {
  padding: '0.5rem',
  fontSize: '1rem',
  borderBottom: '1px solid #ddd',
};

const UserDetails: React.FC<UserDetailsProps> = ({ user, onClose }) => (
  <div
    style={{
      background: '#fff',                       // new: white
      padding: '2rem',                          // old used 2rem
      width: '600px',                           // keep old width
      border: '1px solid #ccc',                 // light border
      marginLeft: '20px',                       // new spacing from left
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',    // subtle shadow
      zIndex: 1,
      position: 'relative',
      animation: 'slideIn 0.3s ease-out',       // new animation
    }}
  >
    {/* old header text */}
    <h2 style={{ marginBottom: '20px' }}>
      {user.id} — {user.name} — {user.id}
    </h2>

    <table style={{ width: '100%' }}>
      <tbody>
        {/* Address */}
        <tr>
          <td
            style={{
              ...tdBase,
              color: 'black',
              textAlign: 'left',
              width: '120px',
              verticalAlign: 'top',
            }}
          >
            Address:
          </td>
          <td
            style={{
              ...tdBase,
              paddingLeft: '0.1rem',
              textAlign: 'left',
            }}
          >
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

        {/* Geo */}
        <tr>
          <td
            style={{
              ...tdBase,
              color: 'black',
              textAlign: 'left',
              width: '120px',
              verticalAlign: 'top',
            }}
          >
            Geo:
          </td>
          <td
            style={{
              ...tdBase,
              paddingLeft: '0.1rem',
              textAlign: 'left',
            }}
          >
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

        {/* Phone */}
        <tr>
          <td
            style={{
              ...tdBase,
              color: 'black',
              textAlign: 'left',
              width: '120px',
              verticalAlign: 'top',
            }}
          >
            Phone:
          </td>
          <td
            style={{
              ...tdBase,
              paddingLeft: '0.1rem',
              textAlign: 'left',
            }}
          >
            <strong>Phone:</strong>
            <span style={{ marginLeft: '7px' }}>{user.phone}</span>
          </td>
        </tr>

        {/* Website */}
        <tr>
          <td
            style={{
              ...tdBase,
              color: 'black',
              textAlign: 'left',
              width: '120px',
              verticalAlign: 'top',
            }}
          >
            Website:
          </td>
          <td
            style={{
              ...tdBase,
              paddingLeft: '0.1rem',
              textAlign: 'left',
            }}
          >
            <strong>Website:</strong>
            <span style={{ marginLeft: '7px' }}>{user.website}</span>
          </td>
        </tr>

        {/* Company */}
        <tr>
          <td
            style={{
              ...tdBase,
              color: 'black',
              textAlign: 'left',
              width: '120px',
              verticalAlign: 'top',
            }}
          >
            Company:
          </td>
          <td
            style={{
              ...tdBase,
              paddingLeft: '0.1rem',
              textAlign: 'left',
            }}
          >
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

    <Button
      onClick={onClose}
      style={{ background: '#007BFF', color: '#fff', padding: '0.5rem 1rem', marginTop: '1rem' }}
    >
      Close
    </Button>

    <style>{`
      @keyframes slideIn {
        from {
          transform: translateX(-20px);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
    `}</style>
  </div>
);

export default UserDetails;
