import React, { useEffect } from "react";
import Confetti from "react-confetti";

const TagConfetti = ({ onFinish }) => {
  useEffect(() => {
    if (onFinish) {
      setTimeout(() => {
        onFinish();
      }, 2000); // Adjust the delay as needed
    }
  }, [onFinish]);

  return (
    <Confetti
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
      }}
      recycle={false} // Ensures confetti pieces do not reappear after reaching the bottom
      onConfettiComplete={onFinish} // Calls onFinish when confetti animation completes
      numberOfPieces={1000} // Number of confetti pieces to render
      duration={5000} // Duration in milliseconds after which confetti animation stops
    />
  );
};

export default TagConfetti;

