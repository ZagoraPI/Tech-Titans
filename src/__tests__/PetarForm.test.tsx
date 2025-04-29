import { fireEvent, render, screen } from "@testing-library/react";
import { PetarForm } from "../components/Petar(Bozhilkata) Components/PetarForm";
   

describe ("PetarForm", () => {
    /* 
    it("shows error for invalid bodyweight", async() => {
        render(<PetarForm />);
        fireEvent.click(screen.getByText(/Petar/i));
        fireEvent.change(screen.getByLabelText(/weight/i), {target: { value: "-33" }, });

        expect(screen.getByText(/Please enter a valid number/i)).toBeInTheDocument();
      }); */

      it("shows error for invalid email", () => {
        render(<PetarForm />);
        fireEvent.click(screen.getByText(/Petar/i));
        fireEvent.change(screen.getByLabelText(/email/i), {target: { value: "abc" },});

        expect(screen.getByText(/Please enter a valid email address/i)).toBeInTheDocument();
      }); 
})
