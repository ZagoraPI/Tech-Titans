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

export function MartinForm() {
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [weight, setWeight] = useState("")

  const [errors, setErrors] = useState<{
    name?: string
    username?: string
    email?: string
    password?: string
    weight?: string
  }>({})

  const [open, setOpen] = useState(false)

  const handleSubmit = () => {
    const newErrors: typeof errors = {}

    if (!name.trim()) newErrors.name = "Required field"
    if (!username.trim()) newErrors.username = "Required field"
    if (!email.trim()) {
      newErrors.email = "Required field"
    } else if (!email.endsWith("@gmail.com")) {
      newErrors.email = "Must have @gmail.com"
    }
    if (!password.trim()) newErrors.password = "Required field"
    if (!weight.trim()) {
      newErrors.weight = "Required field"
    } else if (isNaN(Number(weight))) {
      newErrors.weight = "Must be a number"
    } else if (Number(weight) < 1 || Number(weight) > 650) {
      newErrors.weight = "Must be between 1 and 650 kg"
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      console.log("Form Data:", { name, username, email, password, weight })
      handleCancel()
    }
  }

  const handleCancel = () => {
    setName("")
    setUsername("")
    setEmail("")
    setPassword("")
    setWeight("")
    setErrors({})
    setOpen(false)
  }

  const isFormValid = () =>
    name.trim() &&
    username.trim() &&
    email.trim().endsWith("@gmail.com") &&
    password.trim() &&
    weight.trim() &&
    !isNaN(Number(weight)) &&
    Number(weight) >= 1 &&
    Number(weight) <= 650

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">Martin</Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-center" data-testid="sheet-content">
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
              value={name}
              onChange={(e) => {
                const val = e.target.value
                setName(val)
                setErrors((prev) => ({
                  ...prev,
                  name: val.trim() ? undefined : "Required field",
                }))
              }}
              data-testid="name-input"
            />
            {errors.name && <p className="text-sm text-red-500" data-testid="name-error">{errors.name}</p>}
          </div>

          {/* Username */}
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="@username"
              value={username}
              onChange={(e) => {
                const val = e.target.value
                setUsername(val)
                setErrors((prev) => ({
                  ...prev,
                  username: val.trim() ? undefined : "Required field",
                }))
              }}
              data-testid="username-input"
            />
            {errors.username && <p className="text-sm text-red-500" data-testid="username-error">{errors.username}</p>}
          </div>

          {/* Email */}
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@gmail.com"
              value={email}
              onChange={(e) => {
                const val = e.target.value
                setEmail(val)
                setErrors((prev) => {
                  if (!val.trim()) {
                    return { ...prev, email: "Required field" }
                  } else if (!val.endsWith("@gmail.com")) {
                    return { ...prev, email: "Must have @gmail.com" }
                  } else {
                    return { ...prev, email: undefined }
                  }
                })
              }}
              data-testid="email-input"
            />
            {errors.email && <p className="text-sm text-red-500" data-testid="email-error">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => {
                const val = e.target.value
                setPassword(val)
                setErrors((prev) => ({
                  ...prev,
                  password: val.trim() ? undefined : "Required field",
                }))
              }}
              data-testid="password-input"
            />
            {errors.password && <p className="text-sm text-red-500" data-testid="password-error">{errors.password}</p>}
          </div>

          {/* Weight */}
          <div className="grid gap-2">
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input
              id="weight"
              type="text"
              placeholder="e.g. 70"
              min={1}
              max={650}
              value={weight}
              onChange={(e) => {
                const val = e.target.value.trim()
                setWeight(val)
                const num = Number(val)
                setErrors((prev) => {
                  if (val === "") return { ...prev, weight: "Required field" }
                  if (isNaN(num)) return { ...prev, weight: "Must be a number" }
                  if (num < 1 || num > 650) return { ...prev, weight: "Must be between 1 and 650 kg" }
                  return { ...prev, weight: undefined }
                })
              }}
              data-testid="weight-input"
            />
            {errors.weight && <p className="text-sm text-red-500" data-testid="weight-error">{errors.weight}</p>}
          </div>
        </div>

        <SheetFooter className="flex justify-end gap-4 px-2">
          <SheetClose asChild>
            <Button variant="outline" onClick={handleCancel} data-testid="cancel-button">
              Cancel
            </Button>
          </SheetClose>
          <Button
            type="button"
            onClick={handleSubmit}
            disabled={!isFormValid()}
            data-testid="confirm-button"
          >
            Confirm
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
