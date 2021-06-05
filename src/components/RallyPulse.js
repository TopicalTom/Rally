import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Pulse from 'react-native-pulse';

const RallyPulse = ({ interest }) => {
    switch(interest) {
        case "Hangout": {
            return (
                <Pulse 
                    style={styles.pulseStyle}
                    color="rgba(253,45,85,1)"
                    numPulses={3} 
                    diameter={70} 
                    speed={90} 
                    duration={1000} 
                    pulseStyle={{borderColor: "rgba(253,45,85,1)"}}
                />
            )
        }
        case "Drinks": {
            return (
                <Pulse 
                    style={styles.pulseStyle}
                    color="rgba(239,135,69,1)" 
                    numPulses={3} 
                    diameter={70} 
                    speed={90} 
                    duration={1000} 
                    pulseStyle={{borderColor: "rgba(239,135,69,1)"}}
                />
            )
        }
        case "Food": {
            return (
                <Pulse 
                    style={styles.pulseStyle}
                    color="rgba(252,183,40, 1)" 
                    numPulses={3} 
                    diameter={70} 
                    speed={90} 
                    duration={1000} 
                    pulseStyle={{borderColor: "rgba(252,183,40, 1)"}}
                />
            )
        }
        case "Fitness": {
            return (
                <Pulse 
                    style={styles.pulseStyle}
                    color="rgba(32,215,96,1)" 
                    numPulses={3} 
                    diameter={70} 
                    speed={90} 
                    duration={1000} 
                    pulseStyle={{borderColor: "rgba(32,215,96,1)"}}
                />
            )
        }
        case "Entertainment": {
            return (
                <Pulse 
                    style={styles.pulseStyle}
                    color="rgba(68,173,255,1)" 
                    numPulses={3} 
                    diameter={70} 
                    speed={90} 
                    duration={1000} 
                    pulseStyle={{borderColor: "rgba(68,173,255,1)"}}
                />
            )
        }
        case "Nightlife": {
            return (
                <Pulse 
                    style={styles.pulseStyle}
                    color="rgba(139,111,246,1)" 
                    numPulses={3} 
                    diameter={70} 
                    speed={90} 
                    duration={1000} 
                    pulseStyle={{borderColor: "rgba(139,111,246,1)"}}
                />
            )
        }
        default:
            return <></>
    }
};

const styles = StyleSheet.create({
    pulseStyle: {
        position: 'absolute'
    }
});

export default RallyPulse;