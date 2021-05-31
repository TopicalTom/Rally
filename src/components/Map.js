import React, { useState, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import MapboxGL from "@react-native-mapbox-gl/maps";
import Geolocation from '@react-native-community/geolocation';
import { useColorScheme } from 'react-native';

MapboxGL.setAccessToken("pk.eyJ1Ijoic2hhbWFsMWFtYSIsImEiOiJja21ibHUyN2MyMzQ1Mm9xbDhpZTFtazJkIn0._G4tdcfVUBt0YNpGAt2kug");

const Map = () => {
    const [ position, setPosition ] = useState({});
    const [error, setError] = useState("");
    const scheme = useColorScheme();

    const findCoordinates = () => {
        Geolocation.getCurrentPosition(
            pos => {
                setError("");
                setPosition({
                    latitude: pos.coords.latitude,
                    longitude: pos.coords.longitude
                });
            },
            e => setError(e.message)
        );
    };

    useEffect(() => {
        //MapboxGL.setTelemetryEnabled(false);
        findCoordinates();
    }, []);

    return (
        <>
            <MapboxGL.MapView 
                styleURL={scheme === 'dark' ? "mapbox://styles/shamal1ama/cklu0brjx0wzs17qnzotw00dq" : "mapbox://styles/shamal1ama/ck6eo9e4j2ejk1inxvfh9p4au"}
                style={styles.map} 
                compassEnabled={false}>
                <MapboxGL.UserLocation
                    visible={true}
                    renderMode={"normal"}
                    animated={true}
                />
                <MapboxGL.Camera 
                    followUserLocation={true}
                    animationMode={"flyTo"}
                    animationDuration={6000}
                    zoomLevel={16}
                />
            </MapboxGL.MapView>
        </>
    );
};

const styles = StyleSheet.create({
    map: {
        flex: 1,
        //height: 240,
        alignSelf: 'stretch'
    }
});

export default Map;