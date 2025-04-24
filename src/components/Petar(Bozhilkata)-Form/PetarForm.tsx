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

export function PetarForm() {

  const initialFormState = {
    name: "",
    email: "",
    dateOfBirth: "",
    city: "",
    weight: "",
  }

  const [formData, setFormData] = useState(initialFormState);
  const [isFormOpen, setIsFormOpen] = useState(false)
  const { name, email, dateOfBirth, city, weight } = formData;
  const [emailError, setEmailError] = useState("");
  const [weightError, setWeightError ] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    if (id === "email") {
      validateEmail(value);
    }
    if (id === "weight") {
      validateWeight(value);
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      emailError;
    } else {
      setEmailError("");
    }
  };

  const validateWeight = (weight: string) => {
    const weightValue = parseFloat(weight);
    if (isNaN(weightValue)) {
      setWeightError("Please enter a valid number");
    } else if (weightValue < 3) {
      setWeightError("Weight must be at least 3 kg");
    } else if (weightValue > 333) {
      setWeightError("Weight cannot exceed 333 kg");
    } else {
      setWeightError("");
    }
  };

  
  const handleSubmit = () => {
    validateEmail(formData.email);
    validateWeight(formData.weight);

    console.log("Submitted Form Data:", formData);
    setFormData(initialFormState);
    setIsFormOpen(false);
  };

  const handleCancel = () => {
    setFormData(initialFormState);
    setEmailError("");
    setWeightError("");
    setIsFormOpen(false);
  }

  return (
    <div className="relative">
      <Sheet open={isFormOpen} onOpenChange={setIsFormOpen}>
        <SheetTrigger asChild>
          <Button variant="outline">Petar</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="pt-4"> 
            <SheetTitle>Sign up</SheetTitle>
            <SheetDescription>Pls fill out the form below !!!</SheetDescription>
          </SheetHeader>

          <div className="grid gap-6 px-2 w-full max-w-md mx-auto py-6 ">

          <div className="flex flex-col space-y-2 pl-1 ">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col space-y-2 pl-1">
              <Label  htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                className={emailError ? "border-red-500" : ""}
              />
              {emailError && (
                <p className="text-sm text-red-500 mb-1">{emailError}</p>
              )}
            </div>

            <div className="flex flex-col space-y-2 pl-1">
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input
                id="dateOfBirth"
                type="date"
                placeholder="01/01/2008"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col space-y-2 pl-1">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                type="text"
                placeholder="Your City"
                value={formData.city}
                onChange={handleChange}
              />
            </div>


            <div className="flex flex-col space-y-2 pl-1">
              <Label htmlFor="weight">BodyWeight (kg)</Label>
              <Input
                id="weight"
                type="number"
                placeholder="80"
                value={formData.weight}
                onChange={handleChange}
                min = "3"
                max = "333"
                className={weightError ? "border-red-500" : ""}
              />
              {weightError && (
                <p className="text-sm text-red-500 mt-1">{weightError}</p>
              )}
            </div>

          </div>

          <div className="grid grid-cols-2 gap-4 px-2 pb-4 w-full max-w-md mx-auto ">
            <SheetClose asChild>
              <Button variant="outline" className="w-full" onClick={handleCancel}>
                Cancel
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button className="w-full" onClick={handleSubmit}
              disabled={!name || !email || !dateOfBirth || !city || !weight}
              >
                Confirm
              </Button>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div> 
  ) 
}
