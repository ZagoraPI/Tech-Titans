import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { HrisaForm } from '../components/HrisaForm/Hrisa-form'

describe('HrisaForm', () => {
  test('renders the form when Hrisa button is clicked', () => {
    render(<HrisaForm />)
    fireEvent.click(screen.getByRole('button', { name: /hrisa/i }))
    expect(screen.getByText(/Sign up/i)).toBeInTheDocument()
    expect(screen.getByText(/Fill out the form/i)).toBeInTheDocument()
  })

  test('shows validation alerts for empty/invalid input', () => {
    render(<HrisaForm />)
    fireEvent.click(screen.getByRole('button', { name: /hrisa/i }))
    fireEvent.click(screen.getByRole('button', { name: /confirm/i }))

    // Validation alerts are shown as window.alert — mock it
    window.alert = jest.fn()

    fireEvent.click(screen.getByRole('button', { name: /confirm/i }))
    expect(window.alert).toHaveBeenCalledWith('Please enter a valid email.')
  })

  test('resets form when Cancel is clicked', () => {
    render(<HrisaForm />)
    fireEvent.click(screen.getByRole('button', { name: /hrisa/i }))

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Jane' } })
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'jane@example.com' } })
    fireEvent.change(screen.getByLabelText(/year of birth/i), { target: { value: '1995' } })
    fireEvent.change(screen.getByLabelText(/weight/i), { target: { value: '60' } })
    fireEvent.change(screen.getByLabelText(/height/i), { target: { value: '165' } })

    fireEvent.click(screen.getByRole('button', { name: /cancel/i }))
    fireEvent.click(screen.getByRole('button', { name: /hrisa/i }))

    expect(screen.getByLabelText(/name/i)).toHaveValue('')
    expect(screen.getByLabelText(/email/i)).toHaveValue('')
    expect(screen.getByLabelText(/year of birth/i)).toHaveValue(null)
    expect(screen.getByLabelText(/weight/i)).toHaveValue(null)
    expect(screen.getByLabelText(/height/i)).toHaveValue(null)
  })

  test('submits valid data and resets form', () => {
    render(<HrisaForm />)
    fireEvent.click(screen.getByRole('button', { name: /hrisa/i }))

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Ivan' } })
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'ivan@example.com' } })
    fireEvent.change(screen.getByLabelText(/year of birth/i), { target: { value: '1990' } })
    fireEvent.change(screen.getByLabelText(/weight/i), { target: { value: '80' } })
    fireEvent.change(screen.getByLabelText(/height/i), { target: { value: '180' } })

    // Cities are in the Select component, so we use fireEvent or userEvent for Select
    const cityTrigger = screen.getByText(/select a city/i)
    fireEvent.mouseDown(cityTrigger)
    fireEvent.click(screen.getByText(/sofia/i))

    // mock alert
    window.alert = jest.fn()
    fireEvent.click(screen.getByRole('button', { name: /confirm/i }))

    expect(window.alert).not.toHaveBeenCalled()
  })
})
