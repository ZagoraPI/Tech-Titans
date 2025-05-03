import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { HrisaForm } from '../components/HrisaForm/Hrisa-form.tsx';

describe('HrisaForm simple tests', () => {
  beforeEach(() => {
    render(<HrisaForm />);
  });

  async function openForm() {
    const button = screen.getByRole('button', { name: /Hrisa/i });
    fireEvent.click(button);
    await waitFor(() => screen.getByText(/sign up/i));
  }

  test('all inputs show up', async () => {
    await openForm();
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/year of birth/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/weight/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/height/i)).toBeInTheDocument();
  });

  test('shows alert if email is wrong', async () => {
    await openForm();
    window.alert = jest.fn();

    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'wrongemail' } });
    fireEvent.click(screen.getByRole('button', { name: /confirm/i }));

    expect(window.alert).toHaveBeenCalledWith('Please enter a valid email.');
  });

  test('submits data when valid', async () => {
    await openForm();
    console.log = jest.fn();

    // Fill out the form with valid data
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Jane' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'jane@example.com' } });
    fireEvent.change(screen.getByLabelText(/year of birth/i), { target: { value: '1995' } });
    fireEvent.change(screen.getByLabelText(/weight/i), { target: { value: '65' } });
    fireEvent.change(screen.getByLabelText(/height/i), { target: { value: '165' } });

    
    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /confirm/i }));

    // Validate the submitted data
    await waitFor(() => {
      expect(console.log).toHaveBeenCalledWith(
        expect.objectContaining({
          name: 'Jane',
          email: 'jane@example.com',
          yearOfBirth: 1995,
          weight: 65,
          height: 165,
        })
      );
    });
  });
});
