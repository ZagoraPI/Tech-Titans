import { Avatar, AvatarImage } from "@/components/ui/avatar.tsx"
import catpfp from '@/assets/carpfp.jpg'

const AlexPfpIcon = () => {
return(
  <div style={{display: "flex", scale: 4 }}>
  <Avatar>
    <AvatarImage src={catpfp} />
  </Avatar>
  </div>
  )
}

export default AlexPfpIcon;