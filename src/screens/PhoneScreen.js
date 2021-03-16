import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

const PhoneScreen = () => {
    return (
        <SafeAreaView style={styles.screen}>
            <Text>Phone</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff'
    }
});

export default PhoneScreen;