import React from 'react';
import { Input } from '../ui/input';

interface Props {
  value: string;
  onChange: (val: string) => void;
}

const UserSearchBar: React.FC<Props> = ({ value, onChange }) => {
  return (
    <Input
      type="Search for user"
      placeholder="Search for user"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        marginBottom: '1rem',
        padding: '1.5rem',
        fontSize: '1.2rem',
        width: '100%',
        maxWidth: '400px',
        borderRadius: '6px',
        border: '5px solid #000',
      }}
    />
  );
};

export default UserSearchBar;
