// src/Alert.tsx

import React, { useEffect, useState } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const alertVariants = cva(
  "fixed bottom-5 left-1/2 transform -translate-x-1/2 w-96 rounded-lg border px-4 py-3 text-sm bg-blue-500 text-white",
  {
    variants: {
      variant: {
        default: "bg-blue-500 text-white",
        destructive: "bg-red-500 text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface AlertProps extends VariantProps<typeof alertVariants> {
  message: string
}

const Alert: React.FC<AlertProps> = ({ message, variant = "default" }) => {
  const [showAlert, setShowAlert] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false)
    }, 3000) // Alert will disappear after 3 seconds
    return () => clearTimeout(timer)
  }, [])

  return showAlert ? (
    <div className={alertVariants({ variant })}>
      <p>{message}</p>
    </div>
  ) : null
}

export default Alert
