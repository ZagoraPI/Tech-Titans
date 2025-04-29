import { fireEvent, render, screen } from "@testing-library/react";
import { PetarForm } from "../components/Petar(Bozhilkata) Components/PetarForm";

/*
describe(PetarForm, () => {

    it("with valid inputs", () =>{
    
    })

    describe("with ìnvalid email", () =>{

        it.todo("renders the email validation error")

    })

    describe("with invalid bodyweight", () =>{

        it.todo("renders the bodyweight validation error")
    })

}) */



    
describe("Testing the PetarForm for wrong inputs", () => {

    // Test for invalid email
    describe("When the email is not valid", () => {
      it("shows an error message", () => {
        // Show the form by clicking the "The Best" button
        render(<PetarForm />);
        fireEvent.click(screen.getByRole("button", { name: /Petar/i }));
  
        // Type an incorrect email into the email input
        const emailInput = screen.getByLabelText(/email/i);
        fireEvent.change(emailInput, { target: { value: "notanemail" } });
  
        // Move out of the input (like clicking away)
        fireEvent.blur(emailInput);
  
        // Expect to see an error message about the email
        expect(screen.getByText(/please enter a valid email/i)).toBeInTheDocument();
      });
    });
  
    // Test for invalid weight
    describe("When the bodyweight is not a number", () => {
      it("shows an error message", () => {
        // Show the form by clicking the "The Best" button
        render(<PetarForm />);
        fireEvent.click(screen.getByRole("button", { name: /Petar/i }));
  
        // Type something invalid (like letters) into the weight input
        const weightInput = screen.getByLabelText(/bodyweight/i);
        fireEvent.change(weightInput, { target: { value: "abc" } });
  
        // Move out of the input
        fireEvent.blur(weightInput);
  
        // Expect to see an error message about the weight
        expect(screen.getByText(/please enter a valid number/i)).toBeInTheDocument();
      });
    });
  
  });