// src/App.tsx

import { useState } from 'react'
import Alert from './components/Alert'
import './App.css'
// import './Alert.css'

function App() {
  const [count, setCount] = useState(0)
  const [showAlert, setShowAlert] = useState(false)

  const handleClick = () => {
    setCount(count + 1)
    setShowAlert(true)
  }

  return (
    <>
      <div>
        <h1>ZaraPI</h1>
        <div className="card">
          <button onClick={handleClick}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </div>
      {showAlert && (
        <Alert message={`The button has been pressed. Count: ${count}`} />
      )}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
