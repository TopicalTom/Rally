import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { useTheme } from '@react-navigation/native';

const TouchableView = ({ onPress, style, initialColor, pressedColor, children }) => {
    const { colors } = useTheme();

    console.log(style)

    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => {[style, {
                backgroundColor: pressed
                    ?   initialColor
                    :   pressedColor
            }]}}
        >
           {children}
        </Pressable>
    );
};

const styles = StyleSheet.create({});

export default TouchableView;