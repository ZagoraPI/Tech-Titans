import "./App.css";
import { useState } from 'react';

import { Alert, AlertTitle, AlertDescription } from "./components/ui/alert";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "./components/VladilenaTest";

import { ThemeSwitch } from "./components/Niki_Components/ThemeSwitch.tsx";
import TextBox from "./components/TextBox.tsx";
import TheJj from "./components/TheJj.tsx";
import AlexGifShower from "./components/Alex_Components/AlexGifShower.tsx";
import AlexPfpIcon from "./components/Alex_Components/AlexPfpIcon.tsx";
import { Bozhilkata } from "./components/BozhilkataComp.tsx";
import Martin from './components/MartinComp.tsx';
import { MartinForm } from './components/Martin-Form/MartinForm.tsx';
import { PetarForm } from './components/Petar(Bozhilkata)-Form/PetarForm.tsx';

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

      <Martin />
      <AlexGifShower />

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
