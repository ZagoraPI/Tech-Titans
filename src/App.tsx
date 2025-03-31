<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from './components/DropdownMenue'
import { Alert, AlertTitle, AlertDescription } from "./components/ui/alert"
import { Checkbox } from "./components/ui/checkbox"



function App() {
  const [count, setCount] = useState(0)
  const [showAlert, setShowAlert] = useState(true)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>ZaraPI</h1>

      {showAlert && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-sm">
          <Alert>
            <AlertTitle>Notification</AlertTitle>
            <AlertDescription>The button has been pressed {count} times</AlertDescription>
          </Alert>
        </div>
      )}

      <div className="button-container">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button>Open Dropdown</button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
            <DropdownMenuItem>Item 2</DropdownMenuItem>
            <DropdownMenuItem>Item 3</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <div className="App">
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none"
        >
          Accept terms and conditions
        </label>
      </div>
    </div>

      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
=======
import './App.css';
import { useState } from 'react';
import { Alert, AlertTitle, AlertDescription } from "./components/ui/alert";
import { Avatar, AvatarImage } from "./components/VladilenaTest";
import { ThemeSwitch } from "./components/Niki_Components/ThemeSwitch.tsx";
import TextBox from "./components/TextBox.tsx";
import TheJj from "./components/TheJj.tsx";
import AlexGifShower from "./components/Alex_Components/AlexGifShower.tsx";
import AlexPfpIcon from "./components/Alex_Components/AlexPfpIcon.tsx";
import { Bozhilkata } from "./components/BozhilkataComp.tsx"
import { Button } from "@/components/ui/button"

function App() {
  
  const [count, setCount] = useState(0);
  const [activated, setActivated] = useState(false);

  return (
  <>
            <div>                
              <AlexGifShower />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
            <AlexPfpIcon />
            <Bozhilkata/>

              <div style={{marginBottom: "50px", marginLeft: "40px"}}>
            <h2> Bozhilkata React UseState HOOK :</h2>
            <p>I am {activated ? "on"  : "off"}.</p>
            <Button type="button" onClick = { () => setActivated(activated ? false : true)}>
              {activated ? "Deactivate me!" : "Activate me!"}</Button>
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
            
            <div className="fixed top-4 left-0 w-full max-w-sm">
            <Avatar>
              <AvatarImage src="https://files.oaiusercontent.com/file-UisNwbknrK2KrChFkh4yeD?se=2025-03-24T18%3A45%3A57Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Da6b89eec-1753-439d-a668-72afbd00e0d3.webp&sig=fyQSamTsow1CzY1JNig7tgiyRKy3CGgx9owIp3tZbbA%3D"  />
            </Avatar>
            </div>
  
            <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>
              <TextBox count1={count} style={{ color: 'white', backgroundColor: 'blue' }} />
            </div>
>>>>>>> 68b44700a5a68c8f89edde6935cc48b03d6cc68c
    </>
  );
}

export default App;
