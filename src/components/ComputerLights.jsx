/*
"use client";
import React from 'react';

const LightSpot = ({ top, left, width, height, duration }) => (
  <div
    className={`absolute bg-accent/80 shadow-[0_0_20px_rgba(255,255,200,0.8)]`}
    style={{
      top: `${top}%`,
      left: `${left}%`,
      width: `${width}px`,
      height: `${height}px`,
      animation: `flash-light ${duration}s ease-in-out infinite`,
    }}
  ></div>
);

const LightBackground = () => {
  const lights = [
    { top: 23, left: 23.1, width: 450, height: 169, duration: 4 },  // Rectangle
    { top: 60, left: 70, width: 60, height: 40, duration: 5 },  // Rectangle
    { top: 30, left: 10, width: 40, height: 40, duration: 6 },  // Square
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden bg-[url('/path-to-your-image.jpg')] bg-cover bg-center">
      {lights.map((light, index) => (
        <LightSpot
          key={index}
          top={light.top}
          left={light.left}
          width={light.width}
          height={light.height}
          duration={light.duration}
        />
      ))}
    </div>
  );
};

export default LightBackground;
*/