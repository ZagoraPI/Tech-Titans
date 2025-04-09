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

const formFields = [
  { id: "name", label: "Name", type: "text", placeholder: "Your full name" },
  { id: "email", label: "Email", type: "email", placeholder: "you@example.com" },
  { id: "yearOfBirth", label: "Year of Birth", type: "text", placeholder: "1990" },
  { id: "city", label: "City", type: "text", placeholder: "Your city" },
];

export function PreslyForm() {
  const initialFormState = {
    name: "",
    username: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [open, setOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    setFormData(initialFormState);
    setOpen(false);
  };

  const handleCancel = () => {
    setFormData(initialFormState);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">Presly</Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-center">
        <SheetHeader>
          <SheetTitle>Sign up</SheetTitle>
          <SheetDescription>Fill out the form to create an account.</SheetDescription>
        </SheetHeader>

        <div className="grid gap-6 py-6 px-2 w-full max-w-md mx-auto">
          {formFields.map((field) => (
            <div key={field.id}>
              <Label htmlFor={field.id}>{field.label}</Label>
              <Input
                id={field.id}
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.id as keyof typeof formData] || ""}
                onChange={handleChange}
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
  );
}