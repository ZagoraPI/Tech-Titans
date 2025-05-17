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

           <h1 style={{ position: "relative", top: "-170px" }}><b>Welcome to ZagoraPI</b></h1>

            <div className="bottom-right-stack">
              <Link
                to="contact-form-page"
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-150 font-medium rounded-xl transition-all duration-200 hover:bg-gray-200"
                style={{ color: '#918f8f' }}
              >
                <MailIcon className="w-5 h-5" />
                The Jj Contact Form
              </Link>
            </div>

          <div style={{ display: "flex", alignItems: "center", position: "relative", top: "-160px", left: "540px" }}>
              <TheJj />
            </div>

            <div style={{display: "flex", alignItems: "center", position: "relative", top: "-195px" }}>
            <Martin />
            </div>

          <div style={{position:"relative", top: "-215px", left: "-305px"}}>
            <Popover>
              <PopoverTrigger>Open</PopoverTrigger>
              <PopoverContent>Place content for the popover here.</PopoverContent>
            </Popover>
           </div>

            <div style={{ display: "flex", alignItems: "center", position: "relative", top: "-315px", left: "535px" }}>
              <ThemeSwitch />
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

            <div style={{position: "relative", alignItems:"center", top: "-355px", left: "-420px"}}>
              <h2>Bozhilkata React UseState HOOK :</h2>
              <p>I am {activated ? "on" : "off"}.</p>
              <Button type="button" onClick={() => setActivated(!activated)}>
                {activated ? "Deactivate me!" : "Activate me!"}
              </Button>
            </div>

            <div style={{ position: "relative", top: "-350px", left: "-300px" }}>
            <Checkbox />
            </div>

            <div style={{ alignItems:"center", position: "relative", top: "-475px", left: "690px" }}>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible????</AccordionTrigger>
                <AccordionContent>Maybe idk :3</AccordionContent>
              </AccordionItem>
            </Accordion>
            </div>

            <div style={{ position: "relative", bottom: "-160px"}}>
              <button onClick={() => setCount(count + 1)}>
                count is {count}
              </button>
              <TextBox count1={count} />
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
            
            <div style={{ position: "relative", top: "180px", left: "790px" }}>
              <Vladilena_Form />
            </div>

            <div className="bottom-right-stack" 
            style={{ bottom: '60px',  }}>
                {[PetarForm, VladoForm,TheJjForm, MartinForm, HrisaForm, SaturnForm, EgorkaForm, PreslyForm,].map((Form, idx) => (
              <div key={idx} className="form-button-wrapper">
                <Form />
              </div>
              ))}
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
