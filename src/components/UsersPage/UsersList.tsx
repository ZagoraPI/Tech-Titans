import React from 'react';
import { User } from '@/models/model';
import { Table } from '../ui/table';
import { Button } from '../ui/button';

interface UsersListProps {
  users: User[];
  onUserClick: (user: User, idx: number) => void;
  rowRefs: React.MutableRefObject<(HTMLTableRowElement | null)[]>;
  nameRefs: React.MutableRefObject<(HTMLTableCellElement | null)[]>;
}

const UsersList: React.FC<UsersListProps> = ({ users, onUserClick, rowRefs, nameRefs }) => (
  <div className="overflow-x-auto">
    <Table
      className="table-auto text-sm w-fit m-0"
      style={{
        borderRadius: '0.5rem',
        overflow: 'hidden',
      }}
    >
      <thead className="bg-gray-100">
        <tr>
          <th className="p-4 text-left text-base font-semibold text-black">ID</th>
          <th className="p-4 text-left text-base font-semibold text-black">Name</th>
          <th className="p-4 text-left text-base font-semibold text-black">Username</th>
          <th className="p-4 text-left text-base font-semibold text-black">Email</th>
          <th className="p-4 text-left text-base font-semibold text-black">City</th>
          <th className="p-4 text-left text-base font-semibold text-black">Company</th>
          <th className="p-4 text-left text-base font-semibold text-black">Details</th>
        </tr>
      </thead>
      <tbody className="bg-gray-100">
        {users.map((user, idx,) => (
          <tr
            key={user.id}
            ref={el => { rowRefs.current[idx] = el; }}
          >
            <td className="p-2 text-black text-left">{user.id}</td>
            <td
              className="p-2 text-black text-left"
              ref={el => { nameRefs.current[idx] = el; }}
            >
              {user.name}
            </td>
            <td className="p-2 text-black text-left">{user.username}</td>
            <td className="p-2 text-black text-left">{user.email}</td>
            <td className="p-2 text-black text-left">{user.address?.city || '-'}</td>
            <td className="p-2 text-black text-left">{user.company?.name || '-'}</td>
            <td className="p-2 text-black text-left">
              <Button onClick={() => onUserClick(user, idx)}>Details</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);

export default UsersList;
