import { useState } from 'react';
import './App.css';
import { Alert, AlertTitle, AlertDescription } from "./components/ui/alert";
import { Avatar, AvatarImage } from "./components/VladilenaTest";
import TextBox from "./components/TextBox";
import { ThemeSwitch } from "./components/Niki_Components/ThemeSwitch.tsx";
import TheJj from "./components/TheJj.tsx";
import { Calendar } from './components/Bozhilkata_components/Calendar.tsx';
import BozhilkataApp from './components/Bozhilkata_components/UseState.tsx';
import React from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [date, setDate] = React.useState<Date | undefined>(new Date()) //Bozhilkata datePicker

  return (
  <>    

        <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Calendar mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border shadow">
        </Calendar>
        <div style={{marginTop : "100px", marginLeft: '40px'}}><BozhilkataApp></BozhilkataApp></div>


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
    </>
  );
}

export default App;
