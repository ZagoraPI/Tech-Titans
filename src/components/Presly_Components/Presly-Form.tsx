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
    dateOfBirth: "",
    city: "",
    kilograms: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [open, setOpen] = useState(false);
  const [emailError, setEmailError] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  const isFormValid = () => {
    const { name, email, dateOfBirth, city, kilograms } = formData;
    return (
      name.trim() !== "" &&
      email.trim() !== "" &&
      dateOfBirth.trim() !== "" &&
      city.trim() !== "" &&
      kilograms.trim() !== "" &&
      emailRegex.test(email)
    );
  };
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    if (id === "email") {
      if (value && !emailRegex.test(value)) {
        setEmailError("Email must be @gmail.com, @yahoo.com, @email.com, @abv.bg or anything else");
      } else {
        setEmailError("");
      }
    }
  };
  
  const handleSubmit = () => {
    if (!isFormValid()) {
      if (!emailRegex.test(formData.email)) {
        setEmailError("Please use a valid email ending in @gmail.com, @yahoo.com, @email.com, @abv.bg or anything else");
      }
      return;
    }
  
    console.log("Form Data:", formData);
    setFormData(initialFormState);
    setOpen(false);
  };

  const handleCancel = () => {
    setFormData(initialFormState);
    setEmailError("");
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
          <SheetDescription>Fill out the form to create an account Pwease :3</SheetDescription>
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
            <Label htmlFor="dateOfBirth">Date of Birth</Label>
            <Input
              id="dateOfBirth"
              type="date"
              placeholder="09/09/2008"
              value={formData.dateOfBirth}
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
        

          <div>
            <Label htmlFor="Kilograms">How much do you Weight?</Label>
            <Input
              id="kilograms"
              type="text"
              placeholder="83kg"
              value={formData.kilograms}
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
    <Button
      type="submit"
      onClick={handleSubmit}
      disabled={!isFormValid()}
    >
      Ya Sure?
    </Button>
  </SheetClose>
</SheetFooter>
      </SheetContent>
    </Sheet>
  );
 }
