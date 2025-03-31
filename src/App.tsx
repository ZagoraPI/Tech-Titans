import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Alert, AlertTitle, AlertDescription } from "./components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "./components/VladilenaTest";
import TextBox from "./components/TextBox";
import TheJj from './components/TheJj';
import { Avatar2, AvatarImage2, AvatarFallback2 } from "./components/preslyComp";



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
      
      <Avatar>
  <AvatarImage src="https://cdn.discordapp.com/attachments/1295438251188031558/1352925497629081702/Screenshot_5.png?ex=67dfc98e&is=67de780e&hm=92a9804b6a4852814f9d276baa08850ae39422961a4a558879dd50e61a698de6&" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
    <TheJj />
      <div className="card">

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <TextBox count1={count} style={{ color: 'white', backgroundColor: 'blue' }} />

      </div>

      <Avatar2>
  <AvatarImage2 src="https://www.google.com/search?client=firefox-b-d&sca_esv=f65d9110a0398786&sxsrf=AHTn8zp6hIa_clSkv2JPWcVyQFs0Ajq3QA:1743420725843&q=Obi-Wan+Kenobi&udm=2&fbs=ABzOT_CCa5PZmZETgXiAcfM3dJo0qt65_0p2uIRtMEksxKqvYQOPyupSd6aUmm8d72bP0-HVliid4BAIrgHQcQeqmQ9hzkuxNIwG79JBhV3st0vZaIdlUAAcPsuia7OQWv8WanlNQSRB02EOBDxz7Ai7bX_HZ7zLRqHINSFqBaKuWNuFFfCMvYXB_JWDl85xapUb3iBHdXgk8r33Crg8-SA7seEflx54dkLK0NSA5Jjnw1IHmdmWVnMnTHaMYSyYClw3--NzdjaB&sa=X&ved=2ahUKEwjM8rqonLSMAxWLSvEDHe9cOD8QtKgLegQIERAB&biw=1920&bih=919&dpr=1#vhid=5f6CYKG2e268RM&vssid=mosaic" />
  <AvatarFallback2>:3</AvatarFallback2>
</Avatar2>
    </>
  );
}

export default App;
