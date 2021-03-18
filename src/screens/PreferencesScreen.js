import React, { useState } from 'react';
import { StyleSheet, View, SectionList } from 'react-native';
import { Text } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

// Import
import ActionButton from '../components/ActionButton';

const PreferencesScreen = ({ route }) => {
    const { color } = route.params;
    const { colors } = useTheme();

    return (
        <View style={[styles.container, {backgroundColor: colors.background}]}>
            <Text 
                h3 style={[styles.titleStyle, {color: colors.text}]}>
                Preferences
            </Text>
            <Text 
                style={styles.subtitleStyle}>
                Make changes to how and who you is able to discover your rally.
            </Text>
            <ActionButton 
                text="Continue"
                color={color}
                action={() => {}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        paddingTop: 80,
    },
    sectionStyle: {
        marginVertical: 20,
        color: "#B6B6B6",
        fontWeight: '500'
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

export default PreferencesScreen;