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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function HrisaForm() {
  interface FormData {
    name: string
    email: string
    yearOfBirth: number
    city: string
  }

  const initialFormState: FormData = {
    name: "",
    email: "",
    yearOfBirth: 0,
    city: "",
  }

  const [formData, setFormData] = useState(initialFormState)
  const [open, setOpen] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData({
      ...formData,
      [id]: id === "yearOfBirth" ? Number(value) : value,
    })
  }

  const handleSelectCity = (value: string) => {
    setFormData({ ...formData, city: value })
  }

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = () => {
    if (!isValidEmail(formData.email)) {
      alert("Please enter a valid email.")
      return
    }

    if (
      formData.yearOfBirth < 1900 ||
      formData.yearOfBirth > new Date().getFullYear()
    ) {
      alert("Please enter a valid year of birth.")
      return
    }

    if (!formData.city) {
      alert("Please select a city.")
      return
    }

    console.log("Form Data:", formData)
    setFormData(initialFormState)
    setOpen(false)
  }

  const handleCancel = () => {
    setFormData(initialFormState)
    setOpen(false)
  }

  const cities = [
    "Sofia",
    "Plovdiv",
    "Varna",
    "Burgas",
    "Ruse",
    "Stara Zagora",
    "Pleven",
    "Sliven",
    "Dobrich",
    "Shumen",
    "Pernik",
    "Haskovo",
    "Yambol",
    "Blagoevgrad",
    "Veliko Tarnovo",
    "Vratsa",
    "Kardzhali",
    "Kyustendil",
    "Montana",
    "Gabrovo",
    "Asenovgrad",
    "Vidin",
    "Kazanlak",
    "Targovishte",
    "Pazardzhik",
    "Svishtov",
    "Smolyan",
    "Sandanski",
    "Lovech",
    "Silistra",
    "Dupnitsa",
    "Razgrad",
    "Gorna Oryahovitsa",
    "Dimitrovgrad",
    "Karlovo",
    "Velingrad",
    "Nova Zagora",
    "Gotse Delchev",
    "Botevgrad",
    "Aytos",
    "Pomorie",
    "Nessebar",
    "Balchik",
    "Kavarna",
    "Troyan",
    "Lom",
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">Hrisa</Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-center">
        <SheetHeader className="pt-4 mt-[-230px]">
          <SheetTitle>Sign up</SheetTitle>
          <SheetDescription>Fill out the form.</SheetDescription>
        </SheetHeader>

        <div className="grid gap-6 px-2 w-full max-w-md mx-auto py-6">
          {/* Name */}
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
            />
          </div>

          {/* Email */}
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </div>

          {/* Year of Birth */}
          <div className="grid gap-2">
            <Label htmlFor="yearOfBirth">Year of Birth</Label>
            <Input
              id="yearOfBirth"
              type="number"
              min={1900}
              max={new Date().getFullYear()}
              value={formData.yearOfBirth || ""}
              onChange={handleChange}
              placeholder="1990"
            />
          </div>

          {/* City */}
          <div className="grid gap-2">
            <Label htmlFor="city">City</Label>
            <Select value={formData.city} onValueChange={handleSelectCity}>
              <SelectTrigger>
                <SelectValue placeholder="Select a city" />
              </SelectTrigger>
              <SelectContent className="max-h-64 overflow-y-auto">
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 px-2 pb-4 w-full max-w-md mx-auto">
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