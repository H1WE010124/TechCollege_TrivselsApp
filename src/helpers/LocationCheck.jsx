import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

// Øster Uttrupvej 1 coordinates: 57.04803988970455, 9.967484255107353

export const LocationCheck = () => {
    const targetLatitude = 57.04803988970455;
    const targetLongitude = 9.967484255107353;
    const radius = 500; // Radius in meters (500 meters)

    // calculate the distance between two geographic points
    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371e3; // Radius of Earth in meters
        const φ1 = (lat1 * Math.PI) / 180;
        const φ2 = (lat2 * Math.PI) / 180;
        const Δφ = ((lat2 - lat1) * Math.PI) / 180;
        const Δλ = ((lon2 - lon1) * Math.PI) / 180;
        const a =
            Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c; // Distance in meters
    };

    // tjek brugers lokation
    const success = (position) => {
        const { latitude, longitude } = position.coords;
        const distance = calculateDistance(latitude, longitude, targetLatitude, targetLongitude);
        if (distance <= radius) {
            console.log("LOCATION OK?", true);
        } else {
            console.log("LOCATION OK?", false);
        }
    };

    const error = () => {
        console.log("Unable to retrieve location.");
    };

    // Request the user's location
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }, []);

    return <Outlet />;
};
