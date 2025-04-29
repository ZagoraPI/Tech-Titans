import { toast } from "sonner"
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
import { Lock, AtSign } from "lucide-react"

export function AlexForm() {
  const initialFormState = {
    username: "",
    password: "",
  }

  const [formData, setFormData] = useState(initialFormState)
  const [open, setOpen] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = () => {
    console.log("Form Data:", formData)
    toast.success(
      <div>
        <h4>You submitted the following values:</h4>
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(formData, null, 2)}</code>
        </pre>
      </div>
    )
    setFormData(initialFormState)
    setOpen(false)
  }

  const handleCancel = () => {
    setFormData(initialFormState)
    setOpen(false)
  }

  const fields = [
    { id: "username", label: "Username", type: "text", placeholder: "@username", icon: <AtSign size={16} /> },
    { id: "password", label: "Password", type: "password", placeholder: "••••••••", icon: <Lock size={16} /> },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">Open Form</Button>
      </SheetTrigger>

      <SheetContent className="flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-md mx-auto rounded-xl shadow-md p-4 bg-black">
          <SheetHeader className="text-center mb-4">
            <SheetTitle className="text-2xl font-bold text-white">Login</SheetTitle>
            <SheetDescription>Enter your credentials to continue.</SheetDescription>
          </SheetHeader>

          <div className="grid gap-5">
            {fields.map(({ id, label, type, placeholder, icon }) => (
              <div key={id} className="grid gap-2">
                <Label htmlFor={id}>{label}</Label>
                <div className="flex items-center gap-2 rounded-lg border px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                  {icon}
                  <Input
                    id={id}
                    type={type}
                    value={formData[id as keyof typeof formData]}
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