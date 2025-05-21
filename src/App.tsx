import "./App.css";

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import { Button } from "@/components/ui/button";

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
            
            <div style={{position: "relative", alignItems:"center", top: "15px", left: "10px"}}>
              <h2>Bozhilkata React UseState HOOK :</h2>
                  <p>I am {activated ? "on" : "off"}.</p>
                  <Button type="button" onClick={() => setActivated(!activated)}>
                    {activated ? "Deactivate me!" : "Activate me!"}
                  </Button>
            </div>

          <div style={{ display: "flex", alignItems: "center", position: "relative", top: "200px", left: "189px" }}>
              <TheJj />
            </div>

            <div style={{display: "flex", alignItems: "center", position: "relative", top: "-20px" }}>
            <Martin />
            </div>

            <div style={{ alignItems: "center", position: "relative", left: "186px" }}>
              <ThemeSwitch />
            </div>

            

            <div className="bottom-left-container">
              <Link to="/forms">
                <Button
                  style={{ position: 'fixed', bottom: '90px', left: '32px' }}
                  variant="outline"
                  className="bg-blue-600 text-white hover:bg-blue-700"
                >
                  Go to Niki Forms
                </Button>
              </Link>

              <Link
                to="contact-form-page"
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-150 font-medium rounded-xl transition-all duration-200 hover:bg-gray-200"
                style={{ color: '#918f8f', position: 'fixed', bottom: '40px'}}
              >
                <MailIcon className="w-5 h-5" />
                The Jj Contact Form
              </Link>


                <div style={{ position: "fixed", bottom: "20px", left: "816px" }}>
              <button onClick={() => setCount(count + 1)}>
                count is {count}
              </button>
              <TextBox count1={count} />
            </div>
            </div>

            <div className="relative-container">
              <Link to="/users-page">
                <Button>Users Page</Button>
                <h2 style={{ fontSize: "2rem", marginTop: "10px" }}>This is the Users Page:</h2>
              </Link>
            </div>
            


            <div className="bottom-right-stack" 
            style={{ bottom: '60px',  }}>
                {[PetarForm, VladoForm,TheJjForm, MartinForm, HrisaForm, SaturnForm, EgorkaForm, PreslyForm,Vladilena_Form,TheJjForm].map((Form, idx) => (
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
