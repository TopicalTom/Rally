import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

// Components
import Map from '../components/Map';

const LocationModal = () => {
    const { colors } = useTheme();

    return (
        <SafeAreaView style={styles.modalStyle}>
            <Text 
                h3 style={[styles.titleStyle, {color: colors.text}]}>
                Join a rally
            </Text>
            <Text 
                style={styles.subtitleStyle}>
                Let your friends know what you are interested in doing. You can switch this at any time.
            </Text>
            <Map />
            <Button title="Sign out of rally" onPress={() => auth().signOut()}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    modalStyle: {
        marginHorizontal: 16
    },
    titleStyle: {
        textAlign: 'left',
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'stretch',
    },
    subtitleStyle: {
        textAlign: 'left',
        color: "#717273",
        alignSelf: 'stretch',
        marginBottom: 8,
        lineHeight: 21,
        fontWeight: '500'
    },
});

export default LocationModal;