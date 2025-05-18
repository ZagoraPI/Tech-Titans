import React from 'react';
import { User } from '@/models/model';
import { Table } from '../ui/table';
import { Button } from '../ui/button';

interface UsersListProps {
  users: User[];
  onUserClick: (user: User) => void;
}

const UsersList: React.FC<UsersListProps> = ({ users, onUserClick }) => {
  return (
   
      <div className=" w-280 overflow-x-auto rounded-none shadow-sm bg-white">
        <Table className="w-full table-auto text-sm text-gray-800 w-full">
          <thead className="bg-gray-100 text-gray-700"> 
            <tr>
              <th className="p-4 text-left text-base font-semibold">ID</th>
              <th className="p-4 text-left text-base font-semibold">Name</th>
              <th className="p-4 text-left text-base font-semibold">Username</th>
              <th className="p-4 text-left text-base font-semibold">Email</th>
              <th className="p-4 text-left text-base font-semibold">City</th>
              <th className="p-4 text-left text-base font-semibold">Company</th>
              <th className="p-4 text-left text-base font-semibold">Details</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                onClick={() => onUserClick(user)}
                className="hover:bg-gray-50 transition cursor-pointer border-b"
              >
                <td className="p-4">{user.id}</td>
                <td className="p-4">{user.name}</td>
                <td className="p-4">{user.username}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">{user.address?.city || '-'}</td>
                <td className="p-4">{user.company?.name || '-'}</td>
                <td className="p-4">
                  <Button
                    variant="outline"
                    onClick={(e) => {
                      e.stopPropagation();
                      onUserClick(user);
                    }}
                  >
                    Details
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
  );
};

export default UsersList;
