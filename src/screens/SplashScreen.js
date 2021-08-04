import React, { useState, useEffect, useRef } from 'react';
import { Animated, StyleSheet, View, Text, Easing } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Assets
import Logo from '../assets/Logo';

// Store
import { connect } from 'react-redux';

const SplashScreen = ({ accent, currentUser, interest }) => {
    const { colors } = useTheme();
    //const [ gradient, setGradient ] = useState(['#FD2D55', '#ED506F']);

    //const gradientColor = status !== "Browsing" ? accent : colors.background;

    const scaleValue = useRef(new Animated.Value(0)).current;
    const opacityValue = useRef(new Animated.Value(0)).current;

    const handleScale = () => {
        Animated.spring(scaleValue, {
            toValue: 12,
            //mass: 1,
            friction: 30,
            useNativeDriver: true
            //precision: 0.01
        }).start()
    };

    const handleShow = () => {
        Animated.timing(opacityValue, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
        }).start()
    };

    useEffect(() => {
        setTimeout(() => {
            handleScale();
            handleShow();
        }, 2000);
    }, []);
    
    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.logoStyle}>
                <Logo />
            </View>
            <Animated.View 
                style={[styles.rallyPopupStyle, {
                    backgroundColor: currentUser ? accent : 'rgba(253,45,85,1)', 
                    transform: [{ scale: scaleValue }]
                }]}/>
            <Animated.Text 
                style={[styles.interestStyle, {
                    color: '#FFF', 
                    opacity: opacityValue 
                }]}>
                {currentUser ? interest : ""}
            </Animated.Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 40,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: '#0B0B0D'
    },
    logoStyle: {
        position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        bottom: 200,
        left: 0,
        right: 0,
        zIndex: 100
    },
    interestStyle: {
        position: 'absolute',
        flex: 1,
        fontSize: 17,
        letterSpacing: 1,
        //textTransform: 'uppercase',
        justifyContent: 'center',
        alignItems: 'center',
        //top: 0,
        textAlign: 'center',
        fontWeight: 'bold',
        bottom: 24,
        left: 0,
        right: 0,
        zIndex: 100
    },
    rallyPopupStyle: {
        //position: 'absolute',
        zIndex: 90,
        width: 80,
        height: 80,
        borderRadius: 40
    }
});

const mapStateToProps = ({ rally }) => {
    return { 
        accent: rally.accent,
        interest: rally.interest,  
    };
}

export default connect(mapStateToProps)(SplashScreen);