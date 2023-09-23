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

    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(map) {
        setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);

    return isLoaded ? (
        <GoogleMap mapContainerStyle={containerStyle} center={position} zoom={16} onLoad={onLoad} onUnmount={onUnmount}>
            <Marker position={position} icon={"https://maps.google.com/mapfiles/kml/paddle/purple-blank.png"} />
        </GoogleMap>
    ) : (
        <></>
    );
}

export default React.memo(newGoogleMap);
