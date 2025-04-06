import React from 'react';

interface CheckboxInputProps {
  id?: string;
}

export const CheckboxI: React.FC<CheckboxInputProps> = ({ id }) => {
  return (
    <input type="checkbox" id={id} aria-label="Checkbox" />
  );
};

import './checkbox.css';
import { CheckboxI as Checkbox } from "./Checkbox";

export function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  )
}
