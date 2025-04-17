import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"

export function SaturnForm() {
  const [formFields, setFormFields] = useState({
    name: "",
    user: "",
    emailAddress: "",
    passcode: "",
  })

  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [drawerOpen, setDrawerOpen] = useState(false)

  const updateField = (field: string, value: string) => {
    setFormFields((prev) => ({ ...prev, [field]: value }))
    setFormErrors((prev) => ({ ...prev, [field]: "" }))
  }

  const validateAndSubmit = () => {
    const errors: Record<string, string> = {}

    if (!formFields.name.trim()) errors.name = "Please provide your full name."
    if (!formFields.user.trim()) errors.user = "Username cannot be empty."
    if (!formFields.emailAddress.trim()) {
      errors.emailAddress = "Email is required."
    } else if (!formFields.emailAddress.endsWith("@gmail.com")) {
      errors.emailAddress = "Only @gmail.com emails are accepted."
    }
    if (!formFields.passcode.trim()) errors.passcode = "Password is required."

    setFormErrors(errors)

    if (Object.keys(errors).length === 0) {
      console.log("Submitted:", formFields)
      closeForm()
    }
  }

  const closeForm = () => {
    setFormFields({ name: "", user: "", emailAddress: "", passcode: "" })
    setFormErrors({})
    setDrawerOpen(false)
  }

  const renderField = (
      id: keyof typeof formFields,
      label: string,
      type: "text" | "email" | "password",
      placeholder: string
  ) => (
      <div className="grid gap-2">
        <Label htmlFor={id}>{label}</Label>
        <Input
            id={id}
            type={type}
            placeholder={placeholder}
            value={formFields[id]}
            onChange={(e) => updateField(id, e.target.value)}
        />
        {formErrors[id] && <p className="text-sm text-red-500">{formErrors[id]}</p>}
      </div>
  )

  return (
      <Sheet open={drawerOpen} onOpenChange={setDrawerOpen}>
        <SheetTrigger asChild>
          <Button variant="outline">Saturn</Button>
        </SheetTrigger>

        <SheetContent className="flex flex-col items-center">
          <SheetHeader>
            <SheetTitle>New Account</SheetTitle>
            <SheetDescription>Start by entering your details below.</SheetDescription>
          </SheetHeader>

          <div className="w-full max-w-md grid gap-5 py-6">
            {renderField("name", "Full Name", "text", "John Smith")}
            {renderField("user", "Username", "text", "e.g. johnny123")}
            {renderField("emailAddress", "Email", "email", "yourname@gmail.com")}
            {renderField("passcode", "Password", "password", "Choose a secure password")}
          </div>

          <SheetFooter className="flex justify-end gap-4 w-full">
            <SheetClose asChild>
              <Button variant="ghost" onClick={closeForm}>
                Dismiss
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button onClick={validateAndSubmit} disabled={!Object.values(formFields).every(Boolean)}>
                Register
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
  )
}
