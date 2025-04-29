import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function NaskoForm() {
  const initialFormState = {
    name: "",
    email: "",
    yearOfBirth: "",
    city: "",
    kg: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({ kg: "" }); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

  
    setFormData({ ...formData, [id]: value });

 
    if (id === "kg") {
      const weight = parseFloat(value);
      if (weight < 30 || weight > 200) {
        setErrors({ ...errors, kg: "You either don't exist or are obese." });
      } else {
        setErrors({ ...errors, kg: "" });
      }
    }
  };

  const handleSubmit = () => {

    if (errors.kg) {
      alert("Please fix the errors before submitting.");
      return;
    }

    console.log("Form Data:", formData);
    setFormData(initialFormState);
    setOpen(false);
  };

  const handleCancel = () => {
    setFormData(initialFormState);
    setErrors({ kg: "" }); 
    setOpen(false);
  };

  const formFields = [
    { id: "name", label: "Name", type: "text", placeholder: "Your full name" },
    { id: "email", label: "Email", type: "email", placeholder: "you@example.com" },
    { id: "yearOfBirth", label: "Date of Birth", type: "date", placeholder: "1990" },
    { id: "city", label: "City", type: "text", placeholder: "Your city" },
    { id: "kg", label: "Weight (kg)", type: "number", placeholder: "Your weight in kilos" },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">Nasko</Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-center">
        <SheetHeader className="pt-4  mt-[-230px] ">
          <SheetTitle>Sign up</SheetTitle>
          <SheetDescription>Fill out the form.</SheetDescription>
        </SheetHeader>

        <div className="grid gap-6 px-2 w-full max-w-md mx-auto py-6 ">
          {formFields.map(({ id, label, type, placeholder }) => (
            <div key={id} className="grid gap-2">
              <Label htmlFor={id}>{label}</Label>
              <Input
                id={id}
                type={type}
                value={(formData as any)[id]}
                onChange={handleChange}
                placeholder={placeholder}
              />
             
              {id === "kg" && errors.kg && (
                <p className="text-red-500 text-sm">{errors.kg}</p>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 px-2 pb-4 w-full max-w-md mx-auto ">
          <SheetClose asChild>
            <Button variant="outline" className="w-full" onClick={handleCancel}>
              Cancel
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button className="w-full" onClick={handleSubmit}>
              Confirm
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}