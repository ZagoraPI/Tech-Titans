import "./App.css";

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import { Alert, AlertTitle, AlertDescription } from "./components/ui/alert";
import { Button } from "@/components/ui/button";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/Accordion.tsx";

import { Checkbox } from "./components/Checkbox.tsx";
import { Popover, PopoverContent, PopoverTrigger } from "./components/Popover.tsx";
import { Vladilena_Form } from "./components/Vladilena_Form/Vladilena_Form.tsx";
import { ThemeSwitch } from "./components/Niki_Components/ThemeSwitch.tsx";
import TextBox from "./components/TextBox.tsx";
import TheJj from "./components/TheJj.tsx";

import Martin from './components/MartinComp.tsx';

import { MartinForm } from './components/Martin-Form/MartinForm.tsx';
import { PetarForm } from './components/Petar(Bozhilkata) Components/PetarForm.tsx';
import { PreslyForm } from "@/components/Presly_Components/Presly-Form.tsx";
import { TheJjForm } from './components/The_Jj-Form/TheJjForm.tsx';
import NikiForm from './components/Niki_Components/Form/NikiForm.tsx';

import { HrisaForm } from "./components/HrisaForm/Hrisa-form.tsx";
import { SaturnForm } from "@/components/SaturnForm/SaturnForm.tsx";
import { EgorkaForm } from "@/components/Egorka-Form/EgorkaForm.tsx";

import FormSelectionPage from './components/Niki_Components/Pages/FormSelectPage.tsx';
import NikiFormPage from './components/Niki_Components/Form/FormPage/FormPage.tsx';
import ContactFormPage from "./components/The_Jj-Form/ContactFormPage";
import UsersPage from "./components/UsersPage/UsersPage.tsx";

import { VladoForm } from "./components/Vlado_Form/vlado_form.tsx";

import { MailIcon } from "lucide-react";

function App() {
  const [count, setCount] = useState(0);
  const [activated, setActivated] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <h1> <b> Welcome to ZagoraPI </b> </h1>
      
 
            <div className="p-4">
              <TheJjForm />
              <Link
                to="contact-form-page"
                className="inline-flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 font-medium rounded-xl hover:bg-blue-100 transition-all duration-200"
              >
                <MailIcon className="w-5 h-5" />
                The Jj Contact Form
              </Link>
            </div>

            <Martin />
            <Popover>
              <PopoverTrigger>Open</PopoverTrigger>
              <PopoverContent>Place content for the popover here.</PopoverContent>
            </Popover>

            <div className="justify-center flex flex-row">
              <ThemeSwitch />
              <TheJj />
            </div>

            {count > 0 && (
              <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-sm">
                <Alert>
                  <AlertTitle>Notification</AlertTitle>
                  <AlertDescription>
                    The button has been pressed {count} times
                  </AlertDescription>
                </Alert>
              </div>
            )}

            <div style={{ marginBottom: "50px", marginLeft: "40px" }}>
              <h2>Bozhilkata React UseState HOOK :</h2>
              <p>I am {activated ? "on" : "off"}.</p>
              <Button type="button" onClick={() => setActivated(!activated)}>
                {activated ? "Deactivate me!" : "Activate me!"}
              </Button>
            </div>
            <Checkbox />

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible????</AccordionTrigger>
                <AccordionContent>Maybe idk :3</AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="card">
              <button onClick={() => setCount(count + 1)}>
                count is {count}
              </button>
              <TextBox count1={count} style={{ color: 'white', backgroundColor: 'blue' }} />
            </div>

            <div className="bottom-left-container">
              <Link to="/forms">
                <Button
                  style={{ position: 'fixed', bottom: '80px', left: '32px' }}
                  variant="outline"
                  className="bg-blue-600 text-white hover:bg-blue-700"
                >
                  Go to Niki Forms
                </Button>
              </Link>
            </div>

            <div className="bottom-left-container">
              <Link to="/users-page">
                <Button>Users Page</Button>
              </Link>
            </div>
            
            <div style={{ position: 'fixed', bottom: '240px', right: '20px' }}>
              <PetarForm />
            </div>
            <div style={{ position: 'fixed', bottom: '200px', right: '20px' }}>
              <VladoForm />
            </div>
            <div style={{ position: 'fixed', bottom: '160px', right: '20px' }}>
              <MartinForm />
            </div>
            <div style={{ position: 'fixed', bottom: '120px', right: '20px' }}>
              <HrisaForm />
            </div>
            <div style={{ position: 'fixed', bottom: '80px', right: '20px' }}>
              <SaturnForm />
            </div>
            <div style={{ position: 'fixed', bottom: '40px', right: '20px' }}>
              <EgorkaForm />
            </div>
            <div style={{ position: 'fixed', bottom: '0px', right: '20px' }}>
              <PreslyForm />
            </div>
          </>
        }
      />

      <Route path="/forms" element={<FormSelectionPage />} />
      <Route path="/niki-form-page" element={<NikiFormPage />} />
      <Route path="/niki-form" element={<NikiForm />} />
      <Route path="contact-form-page" element={<ContactFormPage />} />
      <Route path="users-page" element={<UsersPage />} />
    </Routes>
  );
}

export default App;
