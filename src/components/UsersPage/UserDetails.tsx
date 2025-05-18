import React from 'react';
import { User } from '@/models/model';
import { Button } from '../ui/button';

interface UserDetailsProps {
  user: User;
  onClose: () => void;
}

const tdStyle = {
  padding: '4px',
  textAlign: 'left' as const,
  verticalAlign: 'top' as const,
};

const UserDetails: React.FC<UserDetailsProps> = ({ user, onClose }) => (
  <div style={{
    background: '#fff',
    padding: '1rem',
    width: '400px',
    border: '1px solid #ccc',
    marginLeft: '20px',
    opacity: 1,
    animation: 'slideIn 0.3s ease-out',
  }}>
    <h3>{user.name}</h3>
    <table>
      <tbody>
        <tr>
          <td style={tdStyle}>Street:</td>
          <td style={tdStyle}>{user.address?.street}</td>
        </tr>
        <tr>
          <td style={tdStyle}>City:</td>
          <td style={tdStyle}>{user.address?.city}</td>
        </tr>
        <tr>
          <td style={tdStyle}>Zip:</td>
          <td style={tdStyle}>{user.address?.zipcode}</td>
        </tr>
        <tr>
          <td style={tdStyle}>Suite:</td>
          <td style={tdStyle}>{user.address?.suite}</td>
        </tr>
        <tr>
          <td style={tdStyle}>Lat:</td>
          <td style={tdStyle}>{user.geo?.lat}</td>
        </tr>
        <tr>
          <td style={tdStyle}>Lng:</td>
          <td style={tdStyle}>{user.geo?.lng}</td>
        </tr>
        <tr>
          <td style={tdStyle}>Phone:</td>
          <td style={tdStyle}>{user.phone}</td>
        </tr>
        <tr>
          <td style={tdStyle}>Website:</td>
          <td style={tdStyle}>{user.website}</td>
        </tr>
        <tr>
          <td style={tdStyle}>Company:</td>
          <td style={tdStyle}>{user.company?.name}</td>
        </tr>
      </tbody>
    </table>
    <Button onClick={onClose} style={{ marginTop: '1rem' }}>
      Close
    </Button>
  </div>
);

export default UserDetails;