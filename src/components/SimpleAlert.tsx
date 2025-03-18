import * as React from "react";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import "./SimpleAlert.css"; // Import CSS for styling

interface SimpleAlertProps {
  message: string;
  count: number;
}

export default function SimpleAlert({ message, count }: SimpleAlertProps) {
  return (
    <Alert className="alert" icon={<CheckIcon fontSize="inherit" />} severity="success">
      {message} (Clicked {count} times)
    </Alert>
  );
}


