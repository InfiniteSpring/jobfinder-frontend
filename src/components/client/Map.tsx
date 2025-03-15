"use client";

import { useEffect, useState } from 'react';

const MapComponent = () => {
  const [ymapsLoaded, setYmapsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.ymaps) {
      const ymaps = window.ymaps;

      ymaps.ready(() => {
        setYmapsLoaded(true); // Яндекс.Карты загружены
      });
    }
  }, []);

  useEffect(() => {
    if (ymapsLoaded) {
      const ymaps = window.ymaps;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const map = new ymaps.Map("map", {
        center: [53.9, 27.5667],
        zoom: 13,
      });
    }
  }, [ymapsLoaded]);

  return (
    // hue-rotate-[450deg] grayscale-[50%]
    <div
    id="map"
    className="mapClass z-[5] relative filter 
      w-[100%] h-[55vh]"
    >
      <div
        className="absolute inset-0 top-0 left-0 h-full w-full
        bg-mainBackground opacity-[33%] z-20 pointer-events-none"
      ></div>
    </div>
  );
};

export default MapComponent;
