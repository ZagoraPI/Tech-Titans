import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NikiFormPage from '@/components/Niki_Components/Form/FormPage/FormPage'; 

// Create a wrapper component with Router
const FormPageWithRouter = () => (
  <BrowserRouter>
    <NikiFormPage />
  </BrowserRouter>
);

describe('NikiFormPage Component', () => {
  // STAGE 1: RENDERING TESTS
  describe('Stage 1: Rendering', () => {
    test('renders form elements correctly', () => {
      render(<FormPageWithRouter />);
      
      // Check for main elements
      expect(screen.getByText('Form')).toBeInTheDocument();
      expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/KG/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Send/i })).toBeInTheDocument();
    });

    test('renders navigation buttons', () => {
      render(<FormPageWithRouter />);
      
      // Check for navigation buttons
      expect(screen.getByRole('button', { name: /Back to Form Selection/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Home/i })).toBeInTheDocument();
    });
  });
});