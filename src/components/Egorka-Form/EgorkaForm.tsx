import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function EgorkaForm() {
  const initialFormState = {
    name: "",
    username: "",
    email: "",
    password: "",
    dob: "",
    city: "",
  }

  const [formData, setFormData] = useState(initialFormState)
  const [open, setOpen] = useState(false)
  const [errors, setErrors] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    dob: "",
    city: "",
  })

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData({ ...formData, [id]: value })

    setErrors(prevErrors => {
      const newErrors = { ...prevErrors }

      if (value.trim() === "") {
        newErrors[id as keyof typeof newErrors] = "Required field"
      } else if (id === "email" && !emailRegex.test(value)) {
        newErrors.email = "Invalid email address"
      } else {
        newErrors[id as keyof typeof newErrors] = ""
      }

      return newErrors
    })
  }

  const isFormValid =
    Object.values(formData).every(val => val.trim() !== "") &&
    emailRegex.test(formData.email)

  const handleSubmit = () => {
    const newErrors = { ...errors }
    let hasError = false

    for (const key in formData) {
      if (formData[key as keyof typeof formData].trim() === "") {
        newErrors[key as keyof typeof newErrors] = "Required field"
        hasError = true
      }
    }

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address"
      hasError = true
    }

    setErrors(newErrors)

    if (hasError) return

    console.log("Form Data:", formData)
    setFormData(initialFormState)
    setErrors(initialFormState)
    setOpen(false)
  }

  const handleCancel = () => {
    setFormData(initialFormState)
    setErrors(initialFormState)
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">Taralej</Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-center">
        <SheetHeader>
          <SheetTitle>Sign up</SheetTitle>
          <SheetDescription>Fill out the form to create an account.</SheetDescription>
        </SheetHeader>

        <div className="grid gap-6 py-6 px-2 w-full max-w-md mx-auto">

          {/* Name */}
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Username */}
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="@username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
          </div>

          {/* Email */}
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          {/* Date of Birth */}
          <div className="grid gap-2">
            <Label htmlFor="dob">Date of Birth</Label>
            <Input
              id="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
            />
            {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
          </div>

          {/* City */}
          <div className="grid gap-2">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              type="text"
              placeholder="Your city"
              value={formData.city}
              onChange={handleChange}
            />
            {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
          </div>

        </div>

        <SheetFooter className="flex justify-end gap-4 px-2">
          <SheetClose asChild>
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button type="submit" onClick={handleSubmit} disabled={!isFormValid}>
              Confirm
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}