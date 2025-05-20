import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

interface Props {
  value: string;
  onChange: (val: string) => void;
  onRefresh?: () => void;
}

const UserSearchBar: React.FC<Props> = ({ value, onChange, onRefresh }) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        width: '100%',
        marginBottom: '1rem',
        maxWidth: '100%',
      }}
    >
      <Button
        onClick={() => navigate(-1)}
        style={{
          minWidth: '2.5rem',//40px
          width: '3.3rem',
          height: '3.3rem',
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          borderRadius: '0.5rem',
          cursor: 'pointer',
        }}
      >
        <img
          src="https://www.svgrepo.com/show/67631/back-arrow.svg"
          style={{ height: '1.25rem', width: '1.25rem' }}
        />
      </Button>
      <Input
        type="text"
        placeholder="Search for user"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          fontSize: '1.3rem',
          borderRadius: '0.5rem',
          height: '3.3rem',
          boxSizing: 'border-box',
          color: 'black',
          backgroundColor: 'white',
          flex: 1,
        }}
      />
      <Button
        onClick={onRefresh}
        style={{
          minWidth: '2.5rem',
          width: '3.3rem',
          height: '3.3rem',
          padding: 0,
          backgroundColor: 'white',
          color: '#000',
          cursor: 'pointer',
          fontSize: '1.25rem',
          borderRadius: '0.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
       <img src="https://cdn.iconscout.com/icon/free/png-256/free-refresh-icon-download-in-svg-png-gif-file-formats--reload-sync-loading-user-interface-pack-icons-1502252.png" 
       style={{ height: '1.5rem', width: '1.5rem' }}
        />
      </Button>
    </div>
  );
};

export default UserSearchBar;
