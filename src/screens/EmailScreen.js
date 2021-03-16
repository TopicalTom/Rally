import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

const EmailScreen = () => {
    return (
        <SafeAreaView style={styles.screen}>
            <Text>Email</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff'
    }
});

export default EmailScreen;