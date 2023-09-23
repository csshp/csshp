import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export const Map = () => {
    const container = {
        width: "100%",
        height: "400px",
    };

    const [apiKey, setApiKey] = useState(null);
    const position = {
        lat: 43.054758461058306,
        lng: 141.33781368899332,
    };

    useEffect(() => {
        // Netlify FunctionからAPIキーを取得するための非同期関数を定義します。
        const fetchApiKey = async () => {
            try {
                const response = await fetch("/.netlify/functions/getApiKey");
                const data = await response.json();
                setApiKey(data.apiKey);
            } catch (error) {
                console.error("APIキーの取得に失敗しました。", error);
            }
        };
        const fetchApiKey2 = async () => {
            setTimeout(() => {
                setApiKey("AIzaSyBOOFl7VgudDn4OsqQ_u-ClLNRj7xMXDpo");
                console.log(document.querySelector('script[data-state="ready"]'));
            }, 5000);
            
        };

        fetchApiKey2();
    }, []);

    if (!apiKey) {
        return <div>Loading...</div>; // APIキーが取得されるまで表示します。
    }else{
        return (
            <LoadScript id="script-loader" googleMapsApiKey={apiKey}>
                <GoogleMap mapContainerStyle={container} center={position} zoom={15}>
                    <Marker position={position} icon={"https://maps.google.com/mapfiles/kml/paddle/purple-blank.png"} />
                </GoogleMap>
            </LoadScript>
        );
    }


};
