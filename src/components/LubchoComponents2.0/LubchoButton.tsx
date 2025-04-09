import React from 'react';
import { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";

export function ButtonDemo() {

  const [clickCount, setClickCount] = useState(0);
  const [exploded, setExploded] = useState(false);
  const [visible, setVisible] = useState(true);
  const [timer, setTimer] = useState(5);

 
  const sizes = [
    "w-32 h-12", 
    "w-36 h-14", 
    "w-40 h-16", 
    "w-44 h-18", 
    "w-48 h-20", 
    "w-52 h-22", 
    "w-56 h-24", 
    "w-60 h-26", 
    "w-64 h-28", 
    "w-68 h-30", 
    "w-72 h-32", 
  ];


  const handleClick = () => {
    if (clickCount < 10) {
      setClickCount(clickCount + 1); 
    } else {
      setExploded(true); 
    }
  };


  useEffect(() => {
    if (exploded) {
     
      setVisible(false);

      const timerInterval = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            clearInterval(timerInterval); 
            return 0;
          }
          return prev - 1;
        });
      }, 1000); 

      setTimeout(() => {
        setVisible(true); 
        setExploded(false); 
        setClickCount(0); 
        setTimer(5); 
      }, 5000); 
    }
  }, [exploded]);

  return (
    <div className="relative">
      <Button
        className={`${sizes[clickCount]} transition-all duration-200 ${
          exploded ? "scale-150 opacity-0" : "" 
        }`}
        onClick={handleClick} 
        style={{ display: visible ? "inline-block" : "none" }} 
      >
         Click me
      </Button>

      {exploded && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-4xl font-bold text-black">
          {timer}
        </div>
      )}
    </div>
  );
}
// всички коментари бяха премахнати :)