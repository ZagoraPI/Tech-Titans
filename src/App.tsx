import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from './components/DropdownMenue';
import { Alert, AlertTitle, AlertDescription } from "./components/ui/alert";
import TextBox from "./components/TextBox";

<<<<<<< Updated upstream
=======
import { ThemeSwitch } from "./components/Niki_Components/ThemeSwitch.tsx";
import TextBox from "./components/TextBox.tsx";
import TheJj from "./components/TheJj.tsx";
import AlexGifShower from "./components/Alex_Components/AlexGifShower.tsx";
import AlexPfpIcon from "./components/Alex_Components/AlexPfpIcon.tsx";
import { Bozhilkata } from "./components/BozhilkataComp.tsx";
import Martin from './components/MartinComp.tsx';
import { MartinForm } from './components/Martin-Form/MartinForm.tsx';
import { PetarForm } from './components/Petar(Bozhilkata)-Form/PetarForm.tsx';
import {PreslyForm} from "@/components/Presly_Components/Presly-Form.tsx"
import { TheJjForm } from './components/The_Jj-Form/TheJjForm.tsx';
import { AlexForm } from './components/Alex_Components/AlexForm.tsx';
import  NikiForm  from './components/Niki_Components/Form/NikiForm.tsx';
import { Vladilena_Form } from './components/Vladilena_Form/Vladilena_Form.tsx'
import { HrisaForm } from "./components/HrisaForm/Hrisa-form.tsx";
import { SaturnForm } from "@/components/SaturnForm/SaturnForm.tsx";
import { EgorkaForm } from "@/components/Egorka-Form/EgorkaForm.tsx";
import FormSelectionPage from './components/Niki_Components/Pages/FormSelectPage.tsx';
import NikiFormPage from './components/Niki_Components/Form/FormPage/FormPage.tsx';
import ContactFormPage from "./components/The_Jj-Form/ContactFormPage";
import { MailIcon } from "lucide-react";

<Route path="/contact" element={<ContactFormPage />} />
>>>>>>> Stashed changes
function App() {
  const [count, setCount] = useState(0);

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

      {count > 0 && (
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

        <TextBox count1={count} style={{ color: 'white', backgroundColor: 'blue' }} />

      </div>
<<<<<<< Updated upstream

      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
=======
      
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Vladilena_Form />
    </div>
  
      <div className="bottom-left-container">
      
      <Link to="/forms">
                <Button style={{ position: 'fixed', bottom: '80px', left: '32px' }} variant="outline" className="bg-blue-600 text-white hover:bg-blue-700">
                  Go to Niki Forms
                </Button>
              </Link>

        <AlexForm />
    </div>
>>>>>>> Stashed changes
    </>
  );
}

export default App;
