import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

export const Map = () => {
    const [googleMapAPIKey, setGoogleMapAPIKey] = useState("");

    const container = {
        width: "100%",
        height: "400px",
    };

    const position = {
        lat: 43.054758461058306,
        lng: 141.33781368899332,
    };

    const callNetlifyFunctionGetGoogleMapAPIKey = async () => {
        try {
            const endpoint = "/.netlify/functions/getGoogleMapAPI";
            const response = await fetch(endpoint);

            if (response.ok) {
                const data = await response.json();
                setGoogleMapAPIKey(data);
            } else {
                console.error("エラー:", response.status);
            }
        } catch (error) {
            console.error("エラー:", error);
        }
    };

    useEffect(() => {
        callNetlifyFunctionGetGoogleMapAPIKey();
        setTimeout(() => {
            setGoogleMapAPIKey("AIzaSyBOOFl7VgudDn4OsqQ_u-ClLNRj7xMXDpo");
        }, 10000);
        return () => {};
    }, []);

    {
        googleMapAPIKey !== "" ? (
            <p>ロード中...</p>
        ) : document.querySelector(`script[src^="https://maps.googleapis.com/maps/api/js?key=${googleMapAPIKey}"]`) ? (
            <GoogleMap mapContainerStyle={container} center={position} zoom={15}>
                <MarkerF position={position} icon={"https://maps.google.com/mapfiles/kml/paddle/purple-blank.png"} />
            </GoogleMap>
        ) : (
            <LoadScript id="script-loader" googleMapsApiKey={googleMapAPIKey}>
                <GoogleMap mapContainerStyle={container} center={position} zoom={15}>
                    <MarkerF position={position} icon={"https://maps.google.com/mapfiles/kml/paddle/purple-blank.png"} />
                </GoogleMap>
            </LoadScript>
        );
    }
    // if (googleMapAPIKey !== "") {
    //     return <p>ロード中...</p>;
    // } else {
    //     const existingScript = document.querySelector(`script[src^="https://maps.googleapis.com/maps/api/js?key=${apiKey}"]`);
    //     if (existingScript) {
    //         return (
    //             <GoogleMap mapContainerStyle={container} center={position} zoom={15}>
    //                 <MarkerF position={position} icon={"https://maps.google.com/mapfiles/kml/paddle/purple-blank.png"} />
    //             </GoogleMap>
    //         );
    //     } else {
    //         return (
    //             <LoadScript id="script-loader" googleMapsApiKey={apiKey}>
    //                 <GoogleMap mapContainerStyle={container} center={position} zoom={15}>
    //                     <MarkerF position={position} icon={"https://maps.google.com/mapfiles/kml/paddle/purple-blank.png"} />
    //                 </GoogleMap>
    //             </LoadScript>
    //         );
    //     }
    // }
};
