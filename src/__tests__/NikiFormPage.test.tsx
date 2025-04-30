import React from 'react';
import { render, screen,fireEvent} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NikiFormPage from '@/components/Niki_Components/Form/FormPage/FormPage'; 

const renderWithRouter = () => {
  return render(
  <BrowserRouter>
    <NikiFormPage />
  </BrowserRouter>
);
}

describe('NikiFormPage', () => {
  describe('Rendering', () => {
    it("renders form elements correctly", () => {
      renderWithRouter();
      
      // Check for main elements
      expect(screen.getByText('Form')).toBeInTheDocument();
      expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/KG/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Send/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Send/i })).toBeInTheDocument();
    });

    test('renders navigation buttons', () => {
        renderWithRouter();
      
      expect(screen.getByRole('button', { name: /Back to Form Selection/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Home/i })).toBeInTheDocument();
    });
  });
  describe("Stage 2: Input Handling", () => {
    it("allows input in email field", () => {
      renderWithRouter();
      
      const emailInput = screen.getByLabelText(/Email address/i);
      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      expect(emailInput).toHaveValue('test@example.com');
    });
    
    it("allows input in message field", () => {
      renderWithRouter();
      
      const messageInput = screen.getByLabelText(/Message/i);
      fireEvent.change(messageInput, { target: { value: 'Test message' } });
      expect(messageInput).toHaveValue('Test message');
    });
    
    it("allows input in KG field", () => {
      renderWithRouter();
      
      const kgInput = screen.getByLabelText(/KG/i);
      fireEvent.change(kgInput, { target: { value: '75' } });
      expect(kgInput).toHaveValue(75);
    });
  });
});