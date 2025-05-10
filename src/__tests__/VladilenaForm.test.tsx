
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import '@testing-library/jest-dom'
import { Vladilena_Form } from "../components/Vladilena_Form/Vladilena_Form.tsx";

describe("Vladilena_Form", () => {
  it("renders trigger button", () => {
    render(<Vladilena_Form />)
    expect(screen.getByRole("button", { name: /The Jj/i })).toBeInTheDocument()
  })

  it("opens the form when trigger is clicked", async () => {
    render(<Vladilena_Form />)
    fireEvent.click(screen.getByRole("button", { name: /The Jj/i }))
    expect(await screen.findByText(/Create your account/i)).toBeInTheDocument()
  })

  it("fills in the form fields", async () => {
    render(<Vladilena_Form />)
    fireEvent.click(screen.getByRole("button", { name: /The Jj/i }))

    fireEvent.change(screen.getByPlaceholderText("Your full name"), {
      target: { value: "Lena" },
    })
    fireEvent.change(screen.getByPlaceholderText("@username"), {
      target: { value: "lena86" },
    })
    fireEvent.change(screen.getByPlaceholderText("you@example.com"), {
      target: { value: "lena@example.com" },
    })
    fireEvent.change(screen.getByPlaceholderText("••••••••"), {
      target: { value: "securepass" },
    })

    expect(screen.getByDisplayValue("Lena")).toBeInTheDocument()
    expect(screen.getByDisplayValue("lena86")).toBeInTheDocument()
    expect(screen.getByDisplayValue("lena@example.com")).toBeInTheDocument()
    expect(screen.getByDisplayValue("securepass")).toBeInTheDocument()
  })

  it("resets the form on cancel", async () => {
    render(<Vladilena_Form />)
    fireEvent.click(screen.getByRole("button", { name: /The Jj/i }))

    fireEvent.change(screen.getByPlaceholderText("Your full name"), {
      target: { value: "Lena" },
    })

    fireEvent.click(screen.getByRole("button", { name: /Cancel/i }))
    fireEvent.click(screen.getByRole("button", { name: /The Jj/i }))

    expect(screen.getByPlaceholderText("Your full name")).toHaveValue("")
  })

  it("logs form data and resets on confirm", async () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation()

    render(<Vladilena_Form />)
    fireEvent.click(screen.getByRole("button", { name: /The Jj/i }))

    fireEvent.change(screen.getByPlaceholderText("Your full name"), {
      target: { value: "Lena" },
    })
    fireEvent.change(screen.getByPlaceholderText("@username"), {
      target: { value: "lena86" },
    })
    fireEvent.change(screen.getByPlaceholderText("you@example.com"), {
      target: { value: "lena@example.com" },
    })
    fireEvent.change(screen.getByPlaceholderText("••••••••"), {
      target: { value: "securepass" },
    })

    fireEvent.click(screen.getByRole("button", { name: /Confirm/i }))

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith("Form Data:", {
        name: "Lena",
        username: "lena86",
        email: "lena@example.com",
        password: "securepass",
      })
    })

    consoleSpy.mockRestore()
  })
})
