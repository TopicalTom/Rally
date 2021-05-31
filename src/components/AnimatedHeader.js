import React from 'react';
import { Animated, StyleSheet, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const AnimatedHeader = ({ animatedValue, headerHeight, children }) => {
    const insets = useSafeAreaInsets();

    //const adjustedRange = 120 - headerHeight;

    const animatedHeight = animatedValue.interpolate({
        inputRange: [ 0, 300],
        outputRange: [ 120, -180],
        extrapolate: 'clamp'
    });

    return (
        <Animated.View style={{
            position: 'absolute',
            top: animatedHeight,
            left: 0,
            right: 0,
            zIndex: 10,
            paddingHorizontal: 16,
        }}>
            {children}
        </Animated.View>
    );
};

const styles = StyleSheet.create({});

export default AnimatedHeader;