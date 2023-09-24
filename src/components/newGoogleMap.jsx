import React from "react";
import { GoogleMap, useJsApiLoader,Marker } from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "400px",
};

const position = {
    lat: 43.054758461058306,
    lng: 141.33781368899332,
};

function newGoogleMap() {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyBOOFl7VgudDn4OsqQ_u-ClLNRj7xMXDpo",
        language: "ja",
    });

    return isLoaded ? (
        <GoogleMap mapContainerStyle={containerStyle} center={position} zoom={16}>
            <Marker position={position} icon={"https://maps.google.com/mapfiles/kml/paddle/purple-blank.png"} />
        </GoogleMap>
    ) : (
        <></>
    );
}

export default React.memo(newGoogleMap);
