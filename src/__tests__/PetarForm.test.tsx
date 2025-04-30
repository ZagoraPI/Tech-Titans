import { fireEvent, render, screen } from "@testing-library/react";
import { PetarForm } from "../components/Petar(Bozhilkata) Components/PetarForm";
   

describe ("PetarForm", () => {
 
        it.todo("renders the weight validation error")
      
      it("shows error for invalid email", () => {
        render(<PetarForm />);
        fireEvent.click(screen.getByText(/Petar/i));
        fireEvent.change(screen.getByLabelText(/email/i), {target: { value: "abc" },});

        expect(screen.getByText(/Please enter a valid email address/i)).toBeInTheDocument();
      }); 
})
