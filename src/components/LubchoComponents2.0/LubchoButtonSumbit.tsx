import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
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
    if (!formData.name || !formData.username || !formData.email || !formData.password) {
      setFormError("All fields are required!")
      return
    }

    setLoading(true)
    setFormError("")

    setTimeout(() => {
      console.log("Form Submitted:", formData)
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default">Lubcho</Button>
      </DialogTrigger>

      <DialogContent className="max-w-lg p-6 rounded-xl shadow-xl bg-zinc-900 text-white border border-zinc-700">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <DialogHeader>
            <DialogTitle className="text-2xl">Create your account</DialogTitle>
            <DialogDescription className="text-zinc-400">
              Sign up to explore more!
            </DialogDescription>
          </DialogHeader>

          {formError && (
            <div className="text-red-500 text-center text-sm mt-2">{formError}</div>
          )}

          <div className="grid gap-5 mt-4">
            {fields.map(({ id, label, type, placeholder, icon }) => (
              <div key={id} className="grid gap-2">
                <Label htmlFor={id} className="text-sm text-white">
                  {label}
                </Label>
                <div className="flex items-center gap-2 rounded-lg border border-zinc-700 px-3 py-2 bg-zinc-800">
                  {icon}
                  <Input
                    id={id}
                    type={type}
                    value={formData[id as keyof FormData]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="bg-transparent border-none text-white focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
              </div>
            ))}
          </div>

          <DialogFooter className="mt-6 flex justify-end gap-3">
            <Button variant="ghost" onClick={handleCancel}>
              Cancel
            </Button>
            <Button onClick={handleSubmit} disabled={loading}>
              {loading ? "Submitting..." : "Confirm"}
            </Button>
          </DialogFooter>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}
