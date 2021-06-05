import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '@react-navigation/native';

// Assets
import Logo from '../assets/Logo';

// Store
import { connect } from 'react-redux';

const SplashScreen = ({ accent, status }) => {
    const { colors } = useTheme();
    //const [ gradient, setGradient ] = useState(['#FD2D55', '#ED506F']);

    const gradientColor = status !== "Browsing" ? accent : colors.background
    
    return (
        <LinearGradient 
            colors={[gradientColor, gradientColor]} 
            style={styles.screen}>
            <View style={styles.logoStyle}>
                <Logo />
                <Text style={{color: accent}}>{accent}</Text>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 40,
    },
    logoStyle: {
        position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
});

const mapStateToProps = ({ rally }) => {
    return { 
        accent: rally.accent,
        accentBorder: rally.accentBorder,    
    };
}

export default connect(mapStateToProps)(SplashScreen);