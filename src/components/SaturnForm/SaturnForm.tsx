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

export function SaturnForm() {
  const initialFormState = {
    name: "",
    username: "",
    email: "",
    password: "",
  }

  const [formData, setFormData] = useState(initialFormState)
  const [open, setOpen] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = () => {
    console.log("Form Data:", formData)
    setFormData(initialFormState)
    setOpen(false)
  }

  const handleCancel = () => {
    setFormData(initialFormState)
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">Saturn</Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-center">
        <SheetHeader>
          <SheetTitle>Sign up</SheetTitle>
          <SheetDescription>Fill out the form to create an account.</SheetDescription>
        </SheetHeader>

        <div className="grid gap-6 py-6 px-2 w-full max-w-md mx-auto">
          {[
            { id: "name", label: "Name", type: "text", placeholder: "Your full name" },
            { id: "username", label: "Username", type: "text", placeholder: "@username" },
            { id: "email", label: "Email", type: "email", placeholder: "you@example.com" },
            { id: "password", label: "Password", type: "password", placeholder: "••••••••" },
          ].map(({ id, label, type, placeholder }) => (
            <div key={id} className="grid gap-2">
              <Label htmlFor={id}>{label}</Label>
              <Input
                id={id}
                type={type}
                value={(formData as any)[id]}
                onChange={handleChange}
                placeholder={placeholder}
              />
            </div>
          ))}
        </div>

        <SheetFooter className="flex justify-end gap-4 px-2">
          <SheetClose asChild>
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button type="submit" onClick={handleSubmit}>
              Confirm
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}