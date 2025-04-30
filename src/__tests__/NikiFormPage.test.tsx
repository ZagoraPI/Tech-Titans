import React from 'react';
import { render, screen,fireEvent} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NikiFormPage from '@/components/Niki_Components/Form/FormPage/FormPage'; 


const mockConsoleLog = jest.fn();
console.log = mockConsoleLog;

const renderWithRouter = () => {
  return render(
  <BrowserRouter>
    <NikiFormPage />
  </BrowserRouter>
);
}

describe('NikiFormPage', () => {
    beforeEach(() => {
        // Clear mocks before each test
        mockConsoleLog.mockClear();
      });

    describe('Rendering', () => {
    it("renders form elements correctly", () => {
      renderWithRouter();
      
      // Check for main elements
      expect(screen.getByText('Form')).toBeInTheDocument();
      expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/KG/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Send/i })).toBeInTheDocument();
    });

    it('renders navigation buttons', () => {
        renderWithRouter();
      
      expect(screen.getByRole('button', { name: /Back to Form Selection/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Home/i })).toBeInTheDocument();
    });
  });
  describe("Input Handling", () => {
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

  describe("Validation", () => {
    it("shows validation errors for required fields", () => {
      renderWithRouter();
      
      // Get the submit button and click it without filling the required fields
      const submitButton = screen.getByRole('button', { name: /Send/i });
      fireEvent.click(submitButton);
      
      // Check that the form wasn't submitted
      expect(mockConsoleLog).not.toHaveBeenCalled();
      
      // Check that required attribute is present on inputs
      expect(screen.getByLabelText(/Email address/i)).toHaveAttribute('required');
      expect(screen.getByLabelText(/Message/i)).toHaveAttribute('required');
      expect(screen.getByLabelText(/KG/i)).toHaveAttribute('required');
    });

    it("validates min and max values for KG field", () => {
      renderWithRouter();
      
      const kgInput = screen.getByLabelText(/KG/i);
      
      // Check for min and max attributes
      expect(kgInput).toHaveAttribute('min', '5');
      expect(kgInput).toHaveAttribute('max', '500');
    });
    
    it.todo("renders the weight validation error");
  });
});