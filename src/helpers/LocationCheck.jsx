import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

// Øster Uttrupvej 1 coordinates: 57.04823,9.96798
// Rørdalsvej 10 coordinates: 57.05190,9.96315
// Struervej 70 coordinates: 57.03772,9.98151

export const LocationCheck = ({ onLocationCheck }) => {
  const locations = [
    { latitude: 57.04823, longitude: 9.96798, name: "Øster Uttrupvej 1" },
    { latitude: 57.0519, longitude: 9.96315, name: "Rørdalsvej 10" },
    { latitude: 57.03772, longitude: 9.98151, name: "Struervej 70" },
  ];
  const radius = 300; // radius in meters
  // calculate the distance between two geographic points
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371e3; // Earth radius in meters
    const φ1 = (lat1 * Math.PI) / 180;
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };
  // tjek brugers location
  const success = (position) => {
    const { latitude, longitude } = position.coords;
    const locationFound = locations.some((location) => {
      const distance = calculateDistance(
        latitude,
        longitude,
        location.latitude,
        location.longitude
      );
      return distance <= radius;
    });

    onLocationCheck(locationFound);
  };

  const error = () => {
    console.log("Unable to retrieve location.");
    onLocationCheck(false);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation is not supported by this browser.");
      onLocationCheck(false);
    }
  }, [onLocationCheck]);

  return null;
};
