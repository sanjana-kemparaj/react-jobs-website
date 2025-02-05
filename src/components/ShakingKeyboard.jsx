import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ShakingKeyboard = () => {
  // Create a ref array for all the letter boxes
  const letterBoxesRef = useRef([]);

  // Reset the ref array on every render to avoid leftover refs
  useEffect(() => {
    // GSAP animation for shaking all letter boxes
    letterBoxesRef.current.forEach((box) => {
      if (box) {
        gsap.to(box, {
          x: "+=5", // Move 5px to the right
          yoyo: true, // Go back and forth
          repeat: -1, // Infinite loop
          duration: 0.5, // Speed of the shake
          ease: "power1.inOut", // Easing function
        });
      }
    });
  }, []); // Only run after the initial render

  // Split the phrase into individual letters
  const phrase = "waiting for the next re-render";
  const words = phrase.split(" ");

  // Split each word into letters
  const lettersArray = words.map((word) => word.split(""));

  return (
    <div className="flex flex-col gap-4 justify-center p-4 rounded-lg">
      {lettersArray.map((eachArray, index) => (
        // Wrapping each word with a block container to ensure each word is on a new line
        <div key={index} className="flex gap-2">
          {eachArray.map((letter, letterIndex) => (
            <div
              key={letterIndex}
              ref={(el) =>
                (letterBoxesRef.current[index * 100 + letterIndex] = el)
              } // Ensure unique ref for each letter box
              className="flex items-center justify-center w-12 h-12 bg-gray-800 text-white rounded-lg cursor-pointer select-none shadow-sm hover:bg-gray-700 transition-colors"
            >
              {letter === " " ? "\u00A0" : letter}{" "}
              {/* Replace spaces with non-breaking spaces */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ShakingKeyboard;
