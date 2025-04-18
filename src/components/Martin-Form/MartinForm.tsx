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

  const [errors, setErrors] = useState<{
    name?: string
    username?: string
    email?: string
    password?: string
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

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      console.log("Form Data:", { name, username, email, password })
      setName("")
      setUsername("")
      setEmail("")
      setPassword("")
      setErrors({})
      setOpen(false)
    }
  }

  const handleCancel = () => {
    setName("")
    setUsername("")
    setEmail("")
    setPassword("")
    setErrors({})
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">Martin</Button>
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
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                if (!e.target.value.trim()) {
                  setErrors((prev) => ({ ...prev, name: "Required field" }))
                } else {
                  setErrors((prev) => ({ ...prev, name: undefined }))
                }
              }}
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
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
                setUsername(e.target.value)
                if (!e.target.value.trim()) {
                  setErrors((prev) => ({ ...prev, username: "Required field" }))
                } else {
                  setErrors((prev) => ({ ...prev, username: undefined }))
                }
              }}
            />
            {errors.username && <p className="text-sm text-red-500">{errors.username}</p>}
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
                setEmail(e.target.value)
                if (!e.target.value.trim()) {
                  setErrors((prev) => ({ ...prev, email: "Required field" }))
                } else if (errors.email === "Required field") {
                  setErrors((prev) => ({ ...prev, email: undefined }))
                }
              }}
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
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
                setPassword(e.target.value)
                if (!e.target.value.trim()) {
                  setErrors((prev) => ({ ...prev, password: "Required field" }))
                } else {
                  setErrors((prev) => ({ ...prev, password: undefined }))
                }
              }}
            />
            {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
          </div>
        </div>

        <SheetFooter className="flex justify-end gap-4 px-2">
          <SheetClose asChild>
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button
              type="submit"
              onClick={handleSubmit}
              disabled={!name || !username || !email || !password}
            >
              Confirm
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}