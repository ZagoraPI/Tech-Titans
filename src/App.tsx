import "./App.css";
import { useState } from 'react';

import { Alert, AlertTitle, AlertDescription } from "./components/ui/alert";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "./components/VladilenaTest";
import { Checkbox } from "./components/Checkbox.tsx";
import { Popover, PopoverContent, PopoverTrigger } from "./components/Popover.tsx";

import { ThemeSwitch } from "./components/Niki_Components/ThemeSwitch.tsx";
import TextBox from "./components/TextBox.tsx";
import TheJj from "./components/TheJj.tsx";
import AlexGifShower from "./components/Alex_Components/AlexGifShower.tsx";
import AlexPfpIcon from "./components/Alex_Components/AlexPfpIcon.tsx";
import { Bozhilkata } from "./components/BozhilkataComp.tsx";
import Martin from './components/MartinComp.tsx';
import { MartinForm } from './components/Martin-Form/MartinForm.tsx';
import { PetarForm } from './components/Petar(Bozhilkata)-Form/PetarForm.tsx';
import { TheJjForm } from './components/The_Jj-Form/TheJjForm.tsx';
import  NikiForm  from './components/Niki_Components/Form/NikiForm.tsx';
import { ButtonDemo } from "./components/LubchoComponents2.0/LubchoButton.tsx";

import { HrisaForm } from "./components/HrisaForm/Hrisa-form.tsx";
import { SaturnForm } from "@/components/SaturnForm/SaturnForm.tsx";
import { LubchoForm } from "./components/LubchoComponents2.0/LubchoButtonSumbit.tsx";


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

      <ButtonDemo/>


      <div style={{ position: 'fixed', bottom: '80px', right: '20px' }}>
        <PetarForm />
      </div>
      <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
        <MartinForm />
      </div>
      <div style={{ position: 'fixed', bottom: '120px', right: '40px' }}>
        <HrisaForm />
      </div>
        <div style={{ position: 'fixed', bottom: '160px', right: '40px' }}>
            <SaturnForm />
        </div>
        
        <LubchoForm/>

       {
    <div className="p-4">
      <TheJjForm />
    </div>

    
}

      <Martin />
      <AlexGifShower />

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

      <div className="app-container">
      <div className="bottom-left-container">
        <NikiForm />
      </div>
    </div>
    </>
  );
}

export default App;
