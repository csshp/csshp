import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export const Map = () => {
    const container = {
        width: "100%",
        height: "400px",
    };

    const position = {
        lat: 43.054758461058306,
        lng: 141.33781368899332,
    };

    const [googleMapAPIKey, setGoogleMapAPIKey] = useState(null);

    useEffect(() => {
        const callNetlifyFunctionGetGoogleMapAPIKey = async () => {
            try {
                const endpoint = "/.netlify/functions/getGoogleMapAPI";
                const response = await fetch(endpoint);

                if (response.ok) {
                    const data = await response.json();
                    setGoogleMapAPIKey(data.googleMapAPIKey);
                } else {
                    console.error("エラー:", response.status);
                }
            } catch (error) {
                console.error("エラー:", error);
            }
        };

        callNetlifyFunctionGetGoogleMapAPIKey();
    }, []);

    return (
        <div>
            {googleMapAPIKey ? (
                <LoadScript id="script-loader" googleMapsApiKey={googleMapAPIKey}>
                    <GoogleMap mapContainerStyle={container} center={position} zoom={15}>
                        <Marker position={position} icon={"https://maps.google.com/mapfiles/kml/paddle/purple-blank.png"} />
                    </GoogleMap>
                </LoadScript>
            ) : (
                <p>Google Maps APIキーを取得中...</p>
            )}
        </div>
    );
};
