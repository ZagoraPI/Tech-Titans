"use client"
import * as React from "react";


import { useState } from "react"
import { Button } from "../../components/ui/button"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../../components/ui/dialog"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"

export function Form() {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    birthDate: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleCancel = () => {
    console.clear()
    setFormData({ name: "", age: "", birthDate: "" })
    setOpen(false)
  }

  const handleSubmit = () => {
    console.clear()
    console.log("Submitted data:", formData)
    setOpen(false)
    setFormData({ name: "", age: "", birthDate: "" }) 
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Lubcho</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Форма</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Име</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Въведи име"
            />
          </div>

          <div>
            <Label htmlFor="age">Години</Label>
            <Input
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Въведи години"
              type="number"
            />
          </div>

          <div>
            <Label htmlFor="birthDate">Дата на раждане</Label>
            <Input
              id="birthDate"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              placeholder="YYYY-MM-DD"
              type="date"
            />
          </div>
        </div>

        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
