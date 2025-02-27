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
    <div
      id="map"
      className="z-10 relative filter hue-rotate-[120deg] grayscale-[50%]"
      style={{ width: '100%', height: '55vh' }}
    >
      <div
        className="absolute inset-0 top-0 left-0 h-full w-full bg-black opacity-10 z-20 pointer-events-none"
      ></div>
    </div>
  );
};

export default MapComponent;
