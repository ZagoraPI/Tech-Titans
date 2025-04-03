"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  // Step 1: Track the number of clicks, explosion status, visibility, and timer
  const [clickCount, setClickCount] = useState(0);
  const [exploded, setExploded] = useState(false);
  const [visible, setVisible] = useState(true);
  const [timer, setTimer] = useState(5);

  // Step 2: Button sizes - up to 10 sizes
  const sizes = [
    "w-32 h-12", // Normal size
    "w-36 h-14", // Size 1
    "w-40 h-16", // Size 2
    "w-44 h-18", // Size 3
    "w-48 h-20", // Size 4
    "w-52 h-22", // Size 5
    "w-56 h-24", // Size 6
    "w-60 h-26", // Size 7
    "w-64 h-28", // Size 8
    "w-68 h-30", // Size 9
    "w-72 h-32", // Size 10
  ];

  // Step 3: Handle button click to change size
  const handleClick = () => {
    if (clickCount < 10) {
      setClickCount(clickCount + 1); // Increase the click count
    } else {
      setExploded(true); // Trigger explosion effect after 10 clicks
    }
  };

  // Step 4: After explosion, hide the button and start the timer
  useEffect(() => {
    if (exploded) {
      // Hide the button after explosion
      setVisible(false);

      // Start the countdown timer
      const timerInterval = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            clearInterval(timerInterval); // Clear timer when it hits 0
            return 0;
          }
          return prev - 1;
        });
      }, 1000); // 1 second interval

      // After 5 seconds, reset the button
      setTimeout(() => {
        setVisible(true); // Show the button again
        setExploded(false); // Reset the explosion effect
        setClickCount(0); // Reset the size to normal
        setTimer(5); // Reset the timer
      }, 5000); // 5 seconds delay
    }
  }, [exploded]);

  return (
    <div className="relative">
      <Button
        className={`${sizes[clickCount]} transition-all duration-200 ${
          exploded ? "scale-150 opacity-0" : "" // Apply the explosion effect
        }`}
        onClick={handleClick} // Change size on button click, trigger explosion after 10 clicks
        style={{ display: visible ? "inline-block" : "none" }} // Hide the button after explosion
      >
         Click me
      </Button>

      {/* Timer display when button explodes */}
      {exploded && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-4xl font-bold text-black">
          {timer}
        </div>
      )}
    </div>
  );
}
