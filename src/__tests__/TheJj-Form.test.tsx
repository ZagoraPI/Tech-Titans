import { render, screen, fireEvent } from '@testing-library/react';
import ContactFormPage from '../components/The_Jj-Form/ContactFormPage';

describe('ContactFormPage', () => {
  beforeEach(() => {
    window.alert = jest.fn();
  });

  test('renders all form fields', () => {
    render(<ContactFormPage />);
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Weight \(KG\)/i)).toBeInTheDocument();
  });

  test('shows validation errors on invalid input', () => {
    render(<ContactFormPage />);
    fireEvent.click(screen.getByText(/submit/i));

    expect(screen.getByText(/Name must be at least 2 characters/i)).toBeInTheDocument();
    expect(screen.getByText(/Please enter a valid email address/i)).toBeInTheDocument();
    expect(screen.getByText(/Message must be at least 10 characters long/i)).toBeInTheDocument();
  });

  test('submits form successfully with valid input', () => {
    render(<ContactFormPage />);

    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'This is a valid message.' } });
    fireEvent.change(screen.getByLabelText(/Weight \(KG\)/i), { target: { value: '70' } });

    fireEvent.click(screen.getByText(/submit/i));

    expect(window.alert).toHaveBeenCalledWith('Form submitted successfully!');
  });

  test('prevents form submission with short message', () => {
    render(<ContactFormPage />);
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Hi' } });
    fireEvent.change(screen.getByLabelText(/Weight \(KG\)/i), { target: { value: '70' } });

    fireEvent.click(screen.getByText(/submit/i));
    expect(screen.getByText(/Message must be at least 10 characters/i)).toBeInTheDocument();
    expect(window.alert).not.toHaveBeenCalled();
  });
});
