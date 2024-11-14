import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

// Øster Uttrupvej 1 coordinates: 57.04823,9.96798
// Rørdalsvej 10 coordinates: 57.05190,9.96315
// Struervej 70 coordinates: 57.03772,9.98151

export const LocationCheck = () => {
    const [message, setMessage] = useState("");

    const locations = [
        { latitude: 57.04823, longitude: 9.96798, name: "Øster Uttrupvej 1" },
        { latitude: 57.05190, longitude: 9.96315, name: "Rørdalsvej 10" },
        { latitude: 57.03772, longitude: 9.98151, name: "Struervej 70" },
    ];
    const radius = 300; // sætter radius på meters (300 meters)

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
                setMessage(`LOCATION OK? (${location.name}):`, true);
                locationFound = true;
                break;
            }
        }

        if (!locationFound) {
            setMessage("LOCATION OK?", false);
        }
    };

    const error = () => {
        setMessage("Unable to retrieve location.");
    };

    // request user's location
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            setMessage("Geolocation is not supported by this browser.");
        }
    }, []);

    return <>
    <Outlet />
    <Typography variant="body2" color="error">
     {message}
    </Typography>
    </>
    
};
