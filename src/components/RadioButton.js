import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

const RadioButton = ({ selected, accent }) => {
    const { colors } = useTheme();
    return (selected 
        ?
        <View style={[styles.radioOuter, {
            borderColor: accent, 
            backgroundColor: colors.background
        }]}>
            <View style={[styles.radioInner, {
                backgroundColor: accent
            }]}/>
        </View>
        :
        <View style={[styles.radioOuter, {
            borderColor: colors.card, 
            backgroundColor: colors.background
        }]} />
    );
};

const styles = StyleSheet.create({
    radioOuter: {
        borderWidth: 0.5, 
        height: 24, 
        width: 24, 
        borderRadius: 80,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    radioInner: {
        borderWidth: 1, 
        height: 16, 
        width: 16, 
        borderRadius: 80
    }
});

export default RadioButton;