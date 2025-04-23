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
    kg: "",
  }

  
  const [formData, setFormData] = useState(initialFormState);
  const [open, setOpen] = useState(false)
  const { name, email, dateOfBirth, city, kg } = formData;
  const [emailError, setEmailError] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [kgError, SetKgError ] = useState("");
  const kgRegex = kg.trim() !== "" && kg >= "0" && kg <= "333" ;
  

  const isFormValid= () => {
    return (
      name.trim() !== "" &&
      email.trim() !== "" &&
      dateOfBirth.trim() !== "" &&
      city.trim() !== "" &&
      kgRegex &&
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

    if (id === "kg") {
      if(!kgRegex){
        SetKgError("You need more realistic body weight maaan!");
      } else{
        SetKgError("");
      }
    }

  };
  

  const handleSubmit = () => {
    if (!isFormValid()) {
      if (!emailRegex.test(formData.email)) {
        setEmailError("Please use a valid email ending in @gmail.com, @yahoo.com, @email.com, @abv.bg or anything else");
      } else if (!kgRegex) {
        SetKgError("You need more effort maaan")
      }
      return ;
    }
    console.log("Form Data:", formData);
    setFormData(initialFormState);
    setOpen(false);
  };

  const handleCancel = () => {
    setFormData(initialFormState);
    setOpen(false);
    setEmailError("");
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">Petar</Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-center">
        <SheetHeader className="pt-4  mt-[-160px] "> 
          <SheetTitle>Sign up</SheetTitle>
          <SheetDescription>Fill out the form !!!</SheetDescription>
        </SheetHeader>

        <div className="grid gap-6 px-2 w-full max-w-md mx-auto py-6">

        <div className="flex flex-col space-y-2 pl-1">
            <Label htmlFor="name" >Name</Label>
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
              <p className="text-sm text-red-500 mt-1">{emailError}</p>
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
            <Label htmlFor="kg">Kg</Label>
            <Input
              id="kg"
              type="number"
              placeholder="80"
              value={formData.kg}
              onChange={handleChange}
              className={kgError ? "border-red-500" : ""}
            />
            {kgError && (
              <p className="text-sm text-red-500 mt-1">{kgError}</p>
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
            <Button className="w-full" onClick={handleSubmit}>
              Confirm
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  ) 
}
