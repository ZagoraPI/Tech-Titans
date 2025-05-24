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
import { motion } from "framer-motion"
import { Mail, Lock, User, AtSign, Weight } from "lucide-react"


export function Vladilena_Form() {
  const initialFormState = {
    name: "",
    username: "",
    email: "",
    password: "",
    weight: "",
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

  const fields = [
    { id: "name", label: "Name", type: "text", placeholder: "Your full name", icon: <User size={16} /> },
    { id: "username", label: "Username", type: "text", placeholder: "@username", icon: <AtSign size={16} /> },
    { id: "email", label: "Email", type: "email", placeholder: "you@example.com", icon: <Mail size={16} /> },
    { id: "password", label: "Password", type: "password", placeholder: "••••••••", icon: <Lock size={16} /> },
    { id: "weight", label: "Weight", type: "number", placeholder: "Your weight in kg", icon: <Weight size={16} /> ,min: 30, max: 400 },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">Vladilena</Button>
      </SheetTrigger>

      <SheetContent className="flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-md mx-auto rounded-xl shadow-md p-4 bg-Black"
        >
          <SheetHeader className="text-center mb-4">
          <SheetTitle className="text-2xl font-bold text-white">Create your account</SheetTitle>
          <SheetDescription>Sign up to explore more!</SheetDescription>
          </SheetHeader>

          <div className="grid gap-5">
            {fields.map(({ id, label, type, placeholder, icon, min, max }) => (
              <div key={id} className="grid gap-2">
                <Label htmlFor={id}>{label}</Label>
                <div className="flex items-center gap-2 rounded-lg border px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                  {icon}
                  <Input
                    id={id}
                    type={type}
                    value={(formData as any)[id]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    min={min}
                    max={max}
                   
                  />
                </div>
              </div>
            ))}
          </div>

          <SheetFooter className="flex justify-end gap-4 mt-6">
            <SheetClose asChild>
              <Button variant="outline" onClick={handleCancel}>
                Cancel
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button onClick={handleSubmit}>
                Confirm
              </Button>
            </SheetClose>
          </SheetFooter>
        </motion.div>
      </SheetContent>
    </Sheet>
  )
}
