import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function IlkoForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dateOfBirth: "",
    city: "",
    weight: "",
  });

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [weightError, setWeightError] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));

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
    } else if (weightValue < 30) {
      setWeightError("Weight must be at least 30 kg");
    } else if (weightValue > 330) {
      setWeightError("Weight cannot exceed 300 kg");
    } else {
      setWeightError("");
    }
  };

  const handleFormSubmit = () => {
    validateEmail(formData.email);
    validateWeight(formData.weight);
    
    if (emailError || weightError || !formData.email || !formData.weight) {
      return;
    }

    console.log("Submitted Data:", formData);

    setFormData({
      name: "",
      email: "",
      dateOfBirth: "",
      city: "",
      weight: "",
    });
    setIsFormOpen(false);
  };

  const handleFormCancel = () => {
    setFormData({
      name: "",
      email: "",
      dateOfBirth: "",
      city: "",
      weight: "",
    });
    setEmailError("");
    setWeightError("");
    setIsFormOpen(false);
  };

  return (
    <div className="relative">
      <Sheet open={isFormOpen} onOpenChange={setIsFormOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" className="absolute top-0 right-4 text-sm px-2 py-1">
            Ilko
          </Button>
        </SheetTrigger>

        <SheetContent>
          <SheetHeader className="pt-4">
            <SheetTitle>Sign Up</SheetTitle>
            <SheetDescription>Please fill out the form below.</SheetDescription>
          </SheetHeader>

          <div className="grid gap-4 px-4 py-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleInputChange}
              />
              {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input
                id="dateOfBirth"
                type="date"
                placeholder="dd/mm/gggg"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="weight">Weight (kg)</Label>
              <Input
                id="weight"
                type="number"
                placeholder="Your weight in kg"
                min="30"
                max="330"
                value={formData.weight}
                onChange={handleInputChange}
              />
              {weightError && <p className="text-red-500 text-sm mt-1">{weightError}</p>}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                type="text"
                placeholder="Your city"
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 px-4 pb-6">
            <Button variant="outline" onClick={handleFormCancel}>
              Cancel
            </Button>
            <Button onClick={handleFormSubmit}>Confirm</Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
