import { render, screen, fireEvent } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import '@testing-library/jest-dom'
import { PreslyForm } from "src/components/Presly_Components/Presly-Form"


const openForm = () => {
  render(<PreslyForm />)
  const triggerButton = screen.getByRole("button", { name: /Presly/i })
  fireEvent.click(triggerButton)
}

describe("PreslyForm", () => {
  test("renders all input fields", () => {
    openForm()

    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Date of Birth/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/City/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/How much do you Weight\?/i)).toBeInTheDocument()
  })

  test("shows email validation error", async () => {
    openForm()

    const emailInput = screen.getByLabelText(/Email/i)
    await userEvent.type(emailInput, "invalidemail")

    const submit = screen.getByRole("button", { name: /Ya Sure/i })
    await userEvent.click(submit)

    expect(
      screen.getByText(/Email must be .*@gmail\.com.*@yahoo\.com.*@email\.com.*@abv\.bg.*/i)
    ).toBeInTheDocument();
    
    expect(await screen.findByText(/Email must be .*@gmail\.com.*@yahoo\.com.*@email\.com.*@abv\.bg.*/i)).toBeInTheDocument();
  })

  test("shows weight validation error if invalid", async () => {
    openForm()

    const weightInput = screen.getByLabelText(/How much do you Weight/i)
    await userEvent.type(weightInput, "-10")

    const submit = screen.getByRole("button", { name: /Ya Sure/i })
    await userEvent.click(submit)

    expect(screen.getByText(/Must be between 1 and 420 kg/i)).toBeInTheDocument()
  })

  test("form submits correctly when all fields are valid", async () => {
    openForm()

    await userEvent.type(screen.getByLabelText(/Name/i), "What's Your Name?")
    await userEvent.type(screen.getByLabelText(/Email/i), "your@email.com")
    await userEvent.type(screen.getByLabelText(/Date of Birth/i), "09/09/2008")
    await userEvent.type(screen.getByLabelText(/City/i), "Your City")
    await userEvent.type(screen.getByLabelText(/How much do you Weight/i), "83kg")

    const submit = screen.getByRole("button", { name: /Ya Sure/i })
    await userEvent.click(submit)

    
    const logSpy = jest.spyOn(console, "log");
   expect(logSpy).toHaveBeenCalledWith(
    "Form Data:",
    expect.objectContaining({
      name: "What's Your Name?",
      email: "your@email.com",
      dateOfBirth: "09/09/2008",
      city: "Your City",
      weight: "83kg",
    })
  );
  logSpy.mockRestore();
  })
})
