import { IlkoForm } from "./ilko";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("IlkoForm field validations", () => {
  beforeEach(() => {
   
    console.log("Rendering IlkoForm component");
    render(<IlkoForm />);
    
   
    console.log("Available buttons:", 
      document.querySelectorAll('button')
        .forEach(button => console.log(button.textContent))
    );
    
  
    try {
      const ilkoButton = screen.getByRole("button", { name: /ilko/i });
      console.log("Found Ilko button:", ilkoButton.textContent);
      fireEvent.click(ilkoButton);
      console.log("Clicked Ilko button");
    } catch (error) {
      console.error("Error finding/clicking Ilko button:", error);
      
      const buttons = screen.getAllByRole("button");
      console.log("All buttons:", buttons.map(b => b.textContent));
      if (buttons.length > 0) {
        console.log("Clicking first button as fallback");
        fireEvent.click(buttons[0]);
      }
    }
  });

  
  test("shows error for invalid email", async () => {
    try {
     
      console.log("Looking for email input");
      const emailInput = screen.getByLabelText(/email/i);
      console.log("Found email input:", emailInput);
      
     
      fireEvent.change(emailInput, { target: { value: "bademail" } });
      console.log("Changed email to 'bademail'");
      
      
      const confirmButton = screen.getByRole("button", { name: /confirm/i });
      console.log("Found confirm button:", confirmButton.textContent);
      fireEvent.click(confirmButton);
      console.log("Clicked confirm button");
      
      
      await waitFor(() => {
        const errorElement = screen.queryByText(/please enter a valid email address/i);
        console.log("Error element found:", errorElement);
        expect(errorElement).toBeInTheDocument();
      }, { timeout: 3000 });
    } catch (error) {
      console.error("Test error:", error);
      throw error;
    }
  });

  
  test("shows error when weight is non-numeric", async () => {
    try {
      
      console.log("Looking for weight input");
      const weightInput = screen.getByLabelText(/weight/i);
      console.log("Found weight input:", weightInput);
      
      
      fireEvent.change(weightInput, { target: { value: "abc" } });
      console.log("Changed weight to 'abc'");
      
    
      const confirmButton = screen.getByRole("button", { name: /confirm/i });
      console.log("Found confirm button:", confirmButton.textContent);
      fireEvent.click(confirmButton);
      console.log("Clicked confirm button");
      
      
      await waitFor(() => {
        const errorElement = screen.queryByText(/please enter a valid number/i);
        console.log("Error element found:", errorElement);
        expect(errorElement).toBeInTheDocument();
      }, { timeout: 3000 });
    } catch (error) {
      console.error("Test error:", error);
      throw error;
    }
  });
});