import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SimpleAlert from "./components/SimpleAlert";

function App() {
  const [count, setCount] = useState(0);
  const [showAlert, setShowAlert] = useState(false); // State to control the alert

  const handleClick = () => {
    setCount((count) => count + 1);
    setShowAlert(true);

    // Hide the alert after 3 seconds
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <>
      {showAlert && <SimpleAlert message="The button was clicked" count={count} />}

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>ZaraPI</h1>
      <div className="card">
        <button onClick={handleClick}>count is {count}</button>
        <p>Edit <code>src/App.tsx</code> and save to test HMR</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Display count at the bottom */}
      <div className="count-display">Button has been clicked {count} times.</div>
    </>
  );
}

export default App;
