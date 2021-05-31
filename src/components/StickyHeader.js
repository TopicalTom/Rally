import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

const StickyHeader = ({ offset, scrollDistance, height, children }) => {
    const { colors } = useTheme();

    const animatedHeight = offset.interpolate({
        inputRange: [ 0, scrollDistance ],
        outputRange: [ scrollDistance, 0],
        extrapolate: 'clamp'
    });

    return (
        <Animated.View style={{
            position: 'absolute',
            top: animatedHeight,
            left: 0,
            right: 0,
            zIndex: 3,
            height: height ? height : 150,
            justifyContent: 'flex-end',
            marginHorizontal: 16,
            backgroundColor: colors.background
        }}>
            {children}
        </Animated.View>
    );
};

const styles = StyleSheet.create({

});

export default StickyHeader;