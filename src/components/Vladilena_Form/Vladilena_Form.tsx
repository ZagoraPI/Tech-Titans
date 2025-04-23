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

export function VladilenaForm() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
<<<<<<< Updated upstream
  })

  const [isOpen, setIsOpen] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
=======
    weight: "",
>>>>>>> Stashed changes
  }

  const resetForm = () => setFormData({
    name: "",
    username: "",
    email: "",
    password: "",
  })

  const handleSubmit = () => {
    console.log("Submitted:", formData)
    resetForm()
    setIsOpen(false)
  }

  const handleCancel = () => {
    resetForm()
    setIsOpen(false)
  }

  const fields = [
    { id: "name", label: "Full Name", type: "text", placeholder: "Your full name", icon: <User size={16} /> },
    { id: "username", label: "Username", type: "text", placeholder: "@username", icon: <AtSign size={16} /> },
    { id: "email", label: "Email", type: "email", placeholder: "you@example.com", icon: <Mail size={16} /> },
    { id: "password", label: "Password", type: "password", placeholder: "••••••••", icon: <Lock size={16} /> },
    { id: "weight", label: "Weight (kg)", type: "number", placeholder: "Enter weight in kg", icon: <Weight size={16} />, min: 30, max: 500 },
  ]

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
<<<<<<< Updated upstream
        <Button variant="outline">Sign Up</Button>
=======
        <Button variant="outline">Vladilena</Button>
>>>>>>> Stashed changes
      </SheetTrigger>

      <SheetContent className="flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="w-full max-w-md rounded-xl shadow-md p-6 bg-black"
        >
          <SheetHeader className="text-center mb-4">
            <SheetTitle className="text-2xl font-bold text-white">Create Account</SheetTitle>
            <SheetDescription className="text-gray-300">Join and explore more features</SheetDescription>
          </SheetHeader>

          <div className="grid gap-5">
            {fields.map(({ id, label, type, placeholder, icon, min, max }) => (
              <div key={id} className="grid gap-2">
                <Label htmlFor={id}>{label}</Label>
                <div className="flex items-center gap-2 rounded-lg border px-3 py-2 transition-all focus-within:ring-2 focus-within:ring-blue-500 hover:border-blue-400">
                  {icon}
                  <Input
                    id={id}
                    type={type}
                    value={(formData as any)[id]}
                    onChange={handleInputChange}
                    placeholder={placeholder}
<<<<<<< Updated upstream
                    className="flex-1 border-none outline-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                    aria-label={label}
=======
                    className="border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    min={min}
                    max={max}
>>>>>>> Stashed changes
                  />
                </div>
              </div>
            ))}
          </div>



          <SheetFooter className="flex justify-end gap-4 mt-6">
            <SheetClose asChild>
              <Button variant="outline" onClick={handleCancel}>Cancel</Button>
            </SheetClose>
            <SheetClose asChild>
              <Button onClick={handleSubmit}>Confirm</Button>
            </SheetClose>
          </SheetFooter>
        </motion.div>
      </SheetContent>
    </Sheet>
  )
}
