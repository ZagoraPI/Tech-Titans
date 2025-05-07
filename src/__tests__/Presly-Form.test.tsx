import { render, screen, fireEvent } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import '@testing-library/jest-dom'
import { PreslyForm } from "src/components/Presly_Components/Presly-Form"


const openForm = () => {
  render(<PreslyForm />)
  fireEvent.click(screen.getByRole("button", { name: /Presly/i }))
}

const getInput = (label: RegExp) => screen.getByLabelText(label)
const getSubmitButton = () => screen.getByRole("button", { name: /Ya Sure/i })

describe("PreslyForm", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test("Renders all input fields", () => {
    openForm()

    expect(getInput(/Name/i)).toBeInTheDocument()
    expect(getInput(/Email/i)).toBeInTheDocument()
    expect(getInput(/Date of Birth/i)).toBeInTheDocument()
    expect(getInput(/City/i)).toBeInTheDocument()
    expect(getInput(/How much do you Weight\?/i)).toBeInTheDocument()
  })

  test("Shows email validation error", async () => {
    openForm()

    await userEvent.type(getInput(/Email/i), "YOLO")
    await userEvent.click(getSubmitButton())

    expect(screen.getByText(/Email must be/i)).toBeInTheDocument()
  })

  test("Shows weight validation error if invalid", async () => {
    openForm()

    await userEvent.type(getInput(/How much do you Weight/i), "-10")
    await userEvent.click(getSubmitButton())

    expect(screen.getByText(/Must be between 1 and 420/i)).toBeInTheDocument()
  })

  test("Form submits correctly when all fields are valid", async () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {})
    openForm()

    await userEvent.type(getInput(/Name/i), "Preslav")
    await userEvent.type(getInput(/Email/i), "your@email.com")
    await userEvent.type(getInput(/Date of Birth/i), "2008-09-09")
    await userEvent.type(getInput(/City/i), "Your City")
    await userEvent.type(getInput(/How much do you Weight/i), "83")

    await userEvent.click(getSubmitButton())

    expect(logSpy).toHaveBeenCalledWith(
      "Form Data:",
      expect.objectContaining({
        name: "Preslav",
        email: "your@email.com",
        dateOfBirth: "2008-09-09",
        city: "Your City",
        weight: "83",
      })
    )

    logSpy.mockRestore()
  })
})
