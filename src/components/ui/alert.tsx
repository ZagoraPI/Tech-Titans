import * as React from "react"

const Alert: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = "", children, ...props }) => {
  return (
    <div
      role="alert"
      className={`bg-blue-200 text-black rounded-lg px-4 py-3 shadow-md ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

const AlertTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ className = "", ...props }) => {
  return (
    <h5 className={`font-bold ${className}`} {...props} />
  )
}

const AlertDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({ className = "", ...props }) => {
  return (
    <p className={`text-sm ${className}`} {...props} />
  )
}

export { Alert, AlertTitle, AlertDescription }
