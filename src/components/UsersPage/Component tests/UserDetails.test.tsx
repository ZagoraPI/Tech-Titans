import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserDetails from '@/components/UsersPage/UserDetailsTable'; 
import { User } from '@/models/model';

describe('UserDetails', () => {
  const mockUser: User = {
    id: 123,
    name: 'John Doe',
    username: 'johndoe123',
    email: 'john@example.com',
    phone: '123-456-7890',
    address: {
      street: '123 Main St',
      suite: 'Apt 4B',
      city: 'Metropolis',
      zipcode: '12345',
    },
  };

  const mockOnClose = jest.fn();

  beforeEach(() => {
    render(<UserDetails user={mockUser} onClose={mockOnClose} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders user details correctly', () => {
    expect(screen.getByRole('heading', { name: /John Doe/ })).toBeInTheDocument();

    expect(screen.getByText('Name: John Doe')).toBeInTheDocument();
    expect(screen.getByText('ID: 123')).toBeInTheDocument();
    expect(screen.getByText('Email: john@example.com')).toBeInTheDocument();
    expect(screen.getByText('Phone: 123-456-7890')).toBeInTheDocument();
    expect(screen.getByText('Address: 123 Main St, Metropolis')).toBeInTheDocument();
  });

  test('calls onClose when close button is clicked', () => {
    const closeButton = screen.getByRole('button', { name: /Close/i });
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
