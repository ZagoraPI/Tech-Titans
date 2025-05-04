import { IlkoForm } from "./ilko";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("IlkoForm field validations", () => {
  beforeEach(() => {
    render(<IlkoForm />);
    
    try {
      const ilkoButton = screen.getByRole("button", { name: /ilko/i });
      fireEvent.click(ilkoButton);
    } catch (error) {
      const buttons = screen.getAllByRole("button");
      if (buttons.length > 0) {
        fireEvent.click(buttons[0]);
      }
    }
  });

  test("shows error for invalid email", async () => {
    try {
      const emailInput = screen.getByLabelText(/email/i);
      fireEvent.change(emailInput, { target: { value: "bademail" } });
      
      const confirmButton = screen.getByRole("button", { name: /confirm/i });
      fireEvent.click(confirmButton);
      
      await waitFor(() => {
        const errorElement = screen.queryByText(/please enter a valid email address/i);
        expect(errorElement).toBeInTheDocument();
      }, { timeout: 3000 });
    } catch (error) {
      throw error;
    }
  });

  test("shows error when weight is non-numeric", async () => {
    try {
      const weightInput = screen.getByLabelText(/weight/i);
      fireEvent.change(weightInput, { target: { value: "abc" } });
      
      const confirmButton = screen.getByRole("button", { name: /confirm/i });
      fireEvent.click(confirmButton);
      
      await waitFor(() => {
        const errorElement = screen.queryByText(/please enter a valid number/i);
        expect(errorElement).toBeInTheDocument();
      }, { timeout: 3000 });
    } catch (error) {
      throw error;
    }
  });
});