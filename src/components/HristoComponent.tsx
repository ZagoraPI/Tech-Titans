import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function HristoComponent() {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" checked={isChecked} />
        <Label >Mega qko  brat {isChecked}</Label>
      </div>
    </div>
  )
}
