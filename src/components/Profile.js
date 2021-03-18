import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';
import Pulse from 'react-native-pulse';

// Components
//import Pulse from '../components/Pulse';

const Profile = ({ profile, rally, onPress }) => {
    const { colors } = useTheme();

    return (
        <TouchableOpacity
            onPress={onPress}
            style={
                styles.profileContainerStyle}
        >
            <View style={[styles.topLayer, { borderColor: '#8B6FF6' }]}>
                <Image 
                    source={{ uri: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'}}
                    style={styles.profileStyle}
                />
            </View>
            <Pulse 
                style={styles.pulseStyle}
                color='#8B6FF6' 
                numPulses={3} 
                diameter={70} 
                speed={90} 
                duration={1000} 
                pulseStyle={{borderColor: '#8B6FF6'}}
            />
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    topLayer: {
        zIndex: 20,
        borderWidth: 1,
        borderRadius: 40,
    },
    profileStyle: {
        borderRadius: 40,
        width: 36,
        height: 36,
    },
    profileContainerStyle: {
        borderRadius: 40,
        marginRight: 16,
        marginLeft: 8,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pulseStyle: {
        position: 'absolute'
    }
});

export default Profile;