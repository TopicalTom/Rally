import React from 'react';
import { StyleSheet } from 'react-native';
import MapboxGL from "@react-native-mapbox-gl/maps";

MapboxGL.setAccessToken("pk.eyJ1Ijoic2hhbWFsMWFtYSIsImEiOiJja21ibHUyN2MyMzQ1Mm9xbDhpZTFtazJkIn0._G4tdcfVUBt0YNpGAt2kug");

const RallyScreen = () => {
    return (
        <>
            <MapboxGL.MapView 
                styleURL="mapbox://styles/shamal1ama/ck6eo9e4j2ejk1inxvfh9p4au"
                style={styles.map} 
                compassEnabled={false}
            />
        </>
    );
};

const styles = StyleSheet.create({
    map: {
        flex: 1
    }
});

export default RallyScreen;