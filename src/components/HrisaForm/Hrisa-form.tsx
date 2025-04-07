
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


export function HrisaForm() {
  interface FormData {
    name: string
    email: string
    yearOfBirth: string
    city: string
  }

  const initialFormState: FormData = {
    name: "",
    email: "",
    yearOfBirth: "",
    city: "",
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
        <Button variant="outline">Hrisa</Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-center">
        <SheetHeader className="pt-4  mt-[-230px] "> 
          <SheetTitle>Sign up</SheetTitle>
          <SheetDescription>Fill out the form.</SheetDescription>
        </SheetHeader>

        <div className="grid gap-6 px-2 w-full max-w-md mx-auto py-6 ">
          {[
            { id: "name", label: "Name", type: "text", placeholder: "Your full name" },
            { id: "email", label: "Email", type: "email", placeholder: "you@example.com" },
            { id: "yearOfBirth", label: "Year of Birth", type: "text", placeholder: "1990" }
          ].map(({ id, label, type, placeholder }) => (
            <div key={id} className="grid gap-2">
              <Label htmlFor={id}>{label}</Label>
              <Input
                id={id}
                type={type}
                value={formData[id as keyof FormData]}
                onChange={handleChange}
                placeholder={placeholder}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 px-2 pb-4 w-full max-w-md mx-auto ">
          <SheetClose asChild>
            <Button variant="outline" className="w-full" onClick={handleCancel}>
              Cancel
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button className="w-full" onClick={handleSubmit}>
              Confirm
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  ) 
}