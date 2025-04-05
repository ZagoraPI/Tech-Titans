import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from './components/DropdownMenue'
import { Alert, AlertTitle, AlertDescription } from "./components/ui/alert"

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
      

      ShowAlert && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-sm">
          <Alert>
            <AlertTitle>Notification</AlertTitle>
            <AlertDescription>The button has been pressed {count} times</AlertDescription>
          </Alert>
        </div>
      )
    
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

      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
