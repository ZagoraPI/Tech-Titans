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

export function PreslyForm() {
  const initialFormState = {
    name: "",
    email: "",
    yearOfBirth: "",
    city: "",
  };


  const [formData, setFormData] = useState(initialFormState);
  const [open, setOpen] = useState(false);
  const [emailError, setEmailError] = useState("");
  const emailRegex = /^[^@\s]+@(gmail\.com|yahoo\.com|email\.com)$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    if (id === "email") {
      if (value && !emailRegex.test(value)) {
        setEmailError("Email must be @gmail.com, @yahoo.com, or @email.com");
      } else {
        setEmailError("");
      }
    }
  };

  const handleSubmit = () => {
    if (!emailRegex.test(formData.email)) {
      setEmailError("Please use a valid email ending in @gmail.com, @yahoo.com, or @email.com");
      return;
    }

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
          
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="What's Your Name?"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              className={emailError ? "border-red-500" : ""}
            />
            {emailError && (
              <p className="text-sm text-red-500 mt-1">{emailError}</p>
            )}
          </div>

          
          <div>
            <Label htmlFor="yearOfBirth">Year of Birth</Label>
            <Input
              id="yearOfBirth"
              type="date"
              placeholder="2000"
              value={formData.yearOfBirth}
              onChange={handleChange}
            />
          </div>

          
          <div>
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              type="text"
              placeholder="Your City"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
        </div>

        <SheetFooter className="flex justify-end gap-4 px-2">
          <SheetClose asChild>
            <Button variant="outline" onClick={handleCancel}>
              Ain't It
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button type="submit" onClick={handleSubmit}>
              Ya Sure?
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
 }
}
