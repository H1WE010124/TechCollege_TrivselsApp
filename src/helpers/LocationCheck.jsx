import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

// Øster Uttrupvej 1 coordinates: 57.04803988970455, 9.967484255107353
// Rørdalsvej 10 coordinates: 57.05154405572509, 9.964011560095193
// Struervej 70 coordinates: 57.03787121681349, 9.982158276731335

export const LocationCheck = () => {
    const locations = [
        { latitude: 57.04803988970455, longitude: 9.967484255107353, name: "Øster Uttrupvej 1" },
        { latitude: 57.05154405572509, longitude: 9.964011560095193, name: "Rørdalsvej 10" },
        { latitude: 57.03787121681349, longitude: 9.982158276731335, name: "Struervej 70" },
    ];
    const radius = 500; // sætter radius på meters (500 meters)

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

    // tjek brugers location
    const success = (position) => {
        const { latitude, longitude } = position.coords;
        let locationFound = false;

        for (const location of locations) {
            const distance = calculateDistance(latitude, longitude, location.latitude, location.longitude);
            if (distance <= radius) {
                console.log(`LOCATION OK? (${location.name}):`, true);
                locationFound = true;
                break;
            }
        }

        if (!locationFound) {
            console.log("LOCATION OK?", false);
        }
    };

    const error = () => {
        console.log("Unable to retrieve location.");
    };

    // request user's location
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }, []);

    return <Outlet />;
};
