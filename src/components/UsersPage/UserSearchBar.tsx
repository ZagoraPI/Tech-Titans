import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { User } from '@/models/model';
import { useNavigate } from 'react-router-dom';

interface Props {
  value: string;
  onChange: (val: string) => void;
}

const UserSearchBar: React.FC<Props> = ({ value, onChange }) => {
  const navigate = useNavigate();
  return (
    <>

    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
    <Button
      onClick={() => navigate(-1)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.75rem 1.5rem',
        backgroundColor: 'white',
        border: '2px solid black',
        borderRadius: '4px',
        cursor: 'pointer',
        height: '60px',
        boxSizing: 'border-box',
      }}
    >
      <img
        src="https://www.svgrepo.com/show/67631/back-arrow.svg"
        
        style={{ height: '24px', width: '24px' }}
      />
    </Button>


      <Input
        type="Search for user"
        placeholder="Search for user"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          fontSize: '1.2rem',
          width: '100%',
          maxWidth: '400px',
          borderRadius: '6px',
          border: '5px solid #000',
          height: '60px', 
          boxSizing: 'border-box',
          color: 'black',
          backgroundColor: 'white',
        }} />
        
        <Button
          onClick={() => window.location.reload()}
          style={{
            width: 'auto',
            padding: '0 1.5rem',
            backgroundColor: 'white',
            color: '#000',
            border: '2px solid black',
            cursor: 'pointer',
            fontSize: '1rem',
            borderRadius: '4px',
            height: '60px',
            boxSizing: 'border-box',
          }}
        >
          Refresh
        </Button>
      </div>  
        </>
  );
};

export default UserSearchBar;
