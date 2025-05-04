import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import UsersPage from '@/components/UsersPage'; // update path as needed
import '@testing-library/jest-dom';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockUsers = [
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
];

describe('UsersPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('displays users after successful fetch', async () => {
    // 🟢 Mock BEFORE rendering
    mockedAxios.get.mockResolvedValueOnce({ data: mockUsers });

    render(<UsersPage />);

    // Await rendering of user data
    await waitFor(() =>
      expect(screen.getByText('Leanne Graham')).toBeInTheDocument()
    );

    expect(
      screen.getByText(/Email: Sincere@april.biz/i)
    ).toBeInTheDocument();
    expect(screen.queryByText(/Loading users.../i)).not.toBeInTheDocument();
  });

  test('shows error message on fetch failure', async () => {
    // 🟢 Mock rejection BEFORE rendering
    mockedAxios.get.mockRejectedValueOnce(new Error('Network error'));

    render(<UsersPage />);

    await waitFor(() =>
      expect(screen.getByText(/Failed to fetch users/i)).toBeInTheDocument()
    );
    expect(screen.queryByText(/Loading users.../i)).not.toBeInTheDocument();
  });
});
