import "./App.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import { Alert, AlertTitle, AlertDescription } from "./components/ui/alert";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "./components/VladilenaTest";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/Accordion.tsx"

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
import {PreslyForm} from "@/components/Presly_Components/Presly-Form.tsx"
import { TheJjForm } from './components/The_Jj-Form/TheJjForm.tsx';
import { AlexForm } from './components/Alex_Components/AlexForm.tsx';
import  NikiForm  from './components/Niki_Components/Form/NikiForm.tsx';

import { HrisaForm } from "./components/HrisaForm/Hrisa-form.tsx";
import { SaturnForm } from "@/components/SaturnForm/SaturnForm.tsx";
import { EgorkaForm } from "@/components/Egorka-Form/EgorkaForm.tsx";
import FormSelectionPage from './components/Niki_Components/Pages/FormSelectPage.tsx';
import NikiFormPage from './components/Niki_Components/Form/FormPage/FormPage.tsx';
import ContactFormPage from "./components/The_Jj-Form/ContactFormPage";
import { MailIcon } from "lucide-react";
import { IlkoForm } from "./components/ilko-form/ilko.tsx";
<Route path="/contact" element={<ContactFormPage />} />
import { VladoForm } from "./components/Vlado_Form/vlado_form.tsx";

<Route path="/contact" element={<ContactFormPage />} />;
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
    <Routes>
        <Route path="/" element={
    <>
    <div style={{ position: 'fixed', bottom: '300px', right: '20px' }}>
    <IlkoForm />
  </div>
  
      <div className="fixed top-16 left-16">
      <AlexPfpIcon />
        <Avatar>
          <AvatarImage src="https://files.oaiusercontent.com/file-UisNwbknrK2KrChFkh4yeD?..." />
        </Avatar>
      </div>

      <div style={{ position: 'fixed', bottom: '80px', right: '20px' }}>
        <PetarForm />
      </div>

      <div style={{ position: 'fixed', bottom: '360px', right: '20px' }}>
        <VladoForm />
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
        <div style={{ position: 'fixed', bottom: '200px', right: '40px' }}>
            <EgorkaForm />
        </div>
       {
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
}

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

        <div style={{position: 'fixed', top: '150px', right: '600px',}}><PreslyForm></PreslyForm></div>
      
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

              <div style={{marginBottom: "50px", marginLeft: "40px"}}>
            <h2> Bozhilkata React UseState HOOK :</h2>
            <p>I am {activated ? "on"  : "off"}.</p>
            <Button type="button" onClick = { () => setActivated(activated ? false : true)}>
              {activated ? "Deactivate me!" : "Activate me!"}</Button>
            </div>

            
            
            <div className="fixed top-4 left-0 w-full max-w-sm">
            <Avatar>
              <AvatarImage src="https://files.oaiusercontent.com/file-UisNwbknrK2KrChFkh4yeD?se=2025-03-24T18%3A45%3A57Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Da6b89eec-1753-439d-a668-72afbd00e0d3.webp&sig=fyQSamTsow1CzY1JNig7tgiyRKy3CGgx9owIp3tZbbA%3D"  />
            </Avatar>
            </div>

            <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible????</AccordionTrigger>
    <AccordionContent>
      Maybe idk :3
    </AccordionContent>
  </AccordionItem>
</Accordion>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <TextBox count1={count} style={{ color: 'white', backgroundColor: 'blue' }} />
      </div>

  
      <div className="bottom-left-container">
      
      <Link to="/forms">
                <Button style={{ position: 'fixed', bottom: '80px', left: '32px' }} variant="outline" className="bg-blue-600 text-white hover:bg-blue-700">
                  Go to Niki Forms
                </Button>
              </Link>

        <AlexForm />
    </div>
    </>
        } />
    <Route path="/forms" element={<FormSelectionPage />} />
    <Route path="/niki-form-page" element={<NikiFormPage />} />
    <Route path="/niki-form" element={<NikiForm />} />
    <Route path="contact-form-page" element={<ContactFormPage />} />
     </Routes>
  );
}

export default App;
