import React, { ChangeEvent } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import './FormField.css';

interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  rows?: number;
}

function FormField({ 
  id, 
  name, 
  label, 
  type = "text", 
  value, 
  onChange, 
  rows = 3 
}: FormFieldProps) {
  return (
    <div className="form-field">
      <Label htmlFor={id} className="form-label">
        {label}
      </Label>
      
      {type === "textarea" ? (
        <Textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className="form-textarea"
          rows={rows}
        />
      ) : (
        <Input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          className="form-input"
        />
      )}
    </div>
  );
}

export default FormField;