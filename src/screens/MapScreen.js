import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, ButtonGroup, Divider } from 'react-native-elements';
import { useNavigation, useTheme } from '@react-navigation/native';

// Components
import Map from '../components/Map';

const MapScreen = () => {
    const { colors } = useTheme();
    const navigation = useNavigation();

    return (
        <View style={[styles.container, {backgroundColor: colors.background}]}>
            <Map />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

export default MapScreen;