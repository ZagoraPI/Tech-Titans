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

    expect(screen.getByText(/Please use a valid email/i)).toBeInTheDocument()
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

    await userEvent.type(screen.getByLabelText(/Name/i), "Preslav Ivanov")
    await userEvent.type(screen.getByLabelText(/Email/i), "you@gmail.com")
    await userEvent.type(screen.getByLabelText(/Date of Birth/i), "2000-09-09")
    await userEvent.type(screen.getByLabelText(/City/i), "Galabovo")
    await userEvent.type(screen.getByLabelText(/How much do you Weight/i), "83")

    const submit = screen.getByRole("button", { name: /Ya Sure/i })
    await userEvent.click(submit)

    
    const logSpy = jest.spyOn(console, "log")
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("Form Data:"),
      expect.objectContaining({
        name: "Preslav",
        email: "you@gmail.com",
        city: "Galabovo",
        weight: "83",
      })
    )
    logSpy.mockRestore()
  })
})
