import React from 'react';
import { StyleSheet, View } from 'react-native';
import Pulse from 'react-native-pulse';

const BroadcastingPulse = ({ color, size }) => {
    return (
        <View style={styles.container}>
            <Pulse 
                style={[styles.pulse, { width: size, height: size}]}
                color={color} 
                numPulses={3} 
                diameter={60} 
                speed={40} 
                duration={6000} 
            />
        </View>

    );
};

const styles = StyleSheet.create({
	container: {
        justifyContent: 'center',
        alignItems: 'center'
	}
});

export default BroadcastingPulse;