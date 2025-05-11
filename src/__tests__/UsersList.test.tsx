import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UsersList from '@/components/UsersPage/UsersList';
import { User } from '@/models/model';
import '@testing-library/jest-dom';

const mockUsers: User[] = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    phone: '1-770-736-8031 x56442',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
    },
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    phone: '010-692-6593 x09125',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
    },
  },
];

describe('UsersList', () => {
  test('renders user names and IDs', () => {
    render(
      <UsersList
        users={mockUsers}
        onRefresh={jest.fn()}
        onUserClick={jest.fn()}
      />
    );

    expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
    expect(screen.getByText('Ervin Howell')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  test('calls onRefresh when refresh button is clicked', () => {
    const mockRefresh = jest.fn();
    render(
      <UsersList
        users={mockUsers}
        onRefresh={mockRefresh}
        onUserClick={jest.fn()}
      />
    );

    const button = screen.getByRole('button', { name: /refresh/i });
    fireEvent.click(button);

    expect(mockRefresh).toHaveBeenCalledTimes(1);
  });

  test('calls onUserClick when a user row is clicked', () => {
    const mockUserClick = jest.fn();
    render(
      <UsersList
        users={mockUsers}
        onRefresh={jest.fn()}
        onUserClick={mockUserClick}
      />
    );

    const userRow = screen.getByText('Leanne Graham');
    fireEvent.click(userRow);

    expect(mockUserClick).toHaveBeenCalledWith(mockUsers[0]);
  });
});