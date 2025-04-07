import React, { useState, ChangeEvent } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import FormField from './FormField';
import './Form.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

function ContactForm() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (): void => {
    console.log('Form Data:', formData);
    setIsOpen(false);
  };

  const handleCancel = (): void => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    console.clear();
    setIsOpen(false);
  };

  return (
    <div className="form-container">
      <Button onClick={() => setIsOpen(true)}>
        Niki
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Contact Form</DialogTitle>
            <DialogDescription>
              Fill out the form below to submit your information.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <FormField
              id="name"
              name="name"
              label="Name"
              value={formData.name}
              onChange={handleChange}
            />
            
            <FormField
              id="email"
              name="email"
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            
            <FormField
              id="message"
              name="message"
              label="Message"
              type="textarea"
              value={formData.message}
              onChange={handleChange}
              rows={4}
            />
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ContactForm;