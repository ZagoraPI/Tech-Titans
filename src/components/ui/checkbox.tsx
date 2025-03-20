import React from "react";

function Checkbox({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="checkbox"
      className="h-4 w-4 border-2 border-black rounded-md"
      {...props}
    />
  );
}

export { Checkbox };
