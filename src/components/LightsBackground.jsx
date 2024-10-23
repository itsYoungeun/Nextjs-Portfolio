"use client";
import React, { useEffect, useState } from "react";

const createLight = () => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDuration: `${Math.random() * 5 + 5}s`,
});

const LightsBackground = () => {
  const [lights, setLights] = useState([]);

  useEffect(() => {
    const addLightPeriodically = () => {
      const newLight = createLight();
      setLights((currentLights) => [
        ...currentLights.slice(-7),
        newLight,
      ]);
    };

    const interval = setInterval(addLightPeriodically, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {lights.map((light) => {
        return (
          <div
            key={light.id}
            className="absolute roudned-full w-[10px] h-[10px] bg-light-radial"
            style={{
              top: light.top,
              left: light.left,
              animation: `move ${light.animationDuration} infinite alternate`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default LightsBackground;