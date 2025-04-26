import "./App.css";
import { useState } from 'react';

// UI Components
import { Alert, AlertTitle, AlertDescription } from "./components/ui/alert";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "./components/VladilenaTest";

import { Checkbox } from "./components/Checkbox.tsx";
import { Popover, PopoverContent, PopoverTrigger } from "./components/Popover.tsx";

// Custom Components
import { ThemeSwitch } from "./components/Niki_Components/ThemeSwitch.tsx";
import TextBox from "./components/TextBox.tsx";
import TheJj from "./components/TheJj.tsx";
import AlexGifShower from "./components/Alex_Components/AlexGifShower.tsx";
import AlexPfpIcon from "./components/Alex_Components/AlexPfpIcon.tsx";
import { Bozhilkata } from "./components/BozhilkataComp.tsx";
import Martin from './components/MartinComp.tsx';
import { MartinForm } from './components/Martin-Form/MartinForm.tsx';
import { PetarForm } from './components/Petar(Bozhilkata)-Form/PetarForm.tsx';

import { HrisaForm } from "./components/HrisaForm/Hrisa-form.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


function App() {
  const [count, setCount] = useState(0);
  const [activated, setActivated] = useState(false);

  return (
    <>
      <div className="fixed top-16 left-16">
      <AlexPfpIcon />
        <Avatar>
          <AvatarImage src="https://files.oaiusercontent.com/file-UisNwbknrK2KrChFkh4yeD?..." />
        </Avatar>
      </div>

      <div style={{ position: 'fixed', bottom: '80px', right: '20px' }}>
        <PetarForm />
      </div>
      <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
        <MartinForm />
      </div>

      <div style={{ position: 'fixed', bottom: '120px', right: '40px' }}>
        <HrisaForm />
      </div>

      <Martin />
      <AlexGifShower />

      <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>

      
      <Checkbox />

      
      <Popover>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>


      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Bozhilkata />

        <div style={{ marginBottom: "50px", marginLeft: "40px" }}>
          <h2>Bozhilkata React UseState HOOK :</h2>
          <p>I am {activated ? "on" : "off"}.</p>
          <Button onClick={() => setActivated(!activated)}>
            {activated ? "Deactivate me!" : "Activate me!"}
          </Button>
        </div>
      </div>

      <div className="justify-center flex flex-row">
        <ThemeSwitch />
        <TheJj />
      </div>

      {count > 0 && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-sm">
          <Alert>
            <AlertTitle>Notification</AlertTitle>
            <AlertDescription>The button has been pressed {count} times</AlertDescription>
          </Alert>
        </div>
      )}

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <TextBox count1={count} style={{ color: 'white', backgroundColor: 'blue' }} />
      </div>
    </>
  );
}

export default App;
