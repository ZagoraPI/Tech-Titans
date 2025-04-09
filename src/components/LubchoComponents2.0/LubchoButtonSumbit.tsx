import { useState } from "react"
import { Button } from "../../components/ui/button"
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
import { Mail, Lock, User, AtSign } from "lucide-react"

interface FormData {
  name: string
  username: string
  email: string
  password: string
}

export function LubchoForm() {
  const initialFormState: FormData = {
    name: "",
    username: "",
    email: "",
    password: "",
  }

  const [formData, setFormData] = useState<FormData>(initialFormState)
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formError, setFormError] = useState<string>("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async () => {
    // Basic form validation
    if (!formData.name || !formData.username || !formData.email || !formData.password) {
      setFormError("All fields are required!")
      return
    }

    setLoading(true)
    setFormError("")

    // Simulate an API call to submit form data
    setTimeout(() => {
      console.log("Form Data:", formData)
      setFormData(initialFormState)
      setOpen(false)
      setLoading(false)
    }, 1000)
  }

  const handleCancel = () => {
    setFormData(initialFormState)
    setOpen(false)
    setFormError("")
  }

  const fields = [
    { id: "name", label: "Name", type: "text", placeholder: "Your full name", icon: <User size={16} /> },
    { id: "username", label: "Username", type: "text", placeholder: "@username", icon: <AtSign size={16} /> },
    { id: "email", label: "Email", type: "email", placeholder: "you@example.com", icon: <Mail size={16} /> },
    { id: "password", label: "Password", type: "password", placeholder: "••••••••", icon: <Lock size={16} /> },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">Lubcho</Button>
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

          {/* Display form error */}
          {formError && <div className="text-red-500 text-center mb-4">{formError}</div>}

          <div className="grid gap-5">
            {fields.map(({ id, label, type, placeholder, icon }) => (
              <div key={id} className="grid gap-2">
                <Label htmlFor={id}>{label}</Label>
                <div className="flex items-center gap-2 rounded-lg border px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                  {icon}
                  <Input
                    id={id}
                    type={type}
                    value={formData[id as keyof FormData]} 
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
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
              <Button
                onClick={handleSubmit}
                disabled={loading} // Disable the button while loading
              >
                {loading ? "Submitting..." : "Confirm"}
              </Button>
            </SheetClose>
          </SheetFooter>
        </motion.div>
      </SheetContent>
    </Sheet>
  )
}
