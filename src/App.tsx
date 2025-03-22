import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Alert, AlertTitle, AlertDescription } from "./components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "./components/VladilenaTest";
import TextBox from "./components/TextBox";

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
    
      <div className="card">

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <TextBox count1={count} style={{ color: 'white', backgroundColor: 'blue' }} />

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
