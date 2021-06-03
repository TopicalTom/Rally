import React from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Assets
import Logo from '../assets/Logo';

// Store
import { connect } from 'react-redux';

const SplashScreen = ({accent, accentBorder}) => {
    
    return (
        <LinearGradient 
            colors={['#FD2D55', '#ED506F']} 
            style={styles.screen}>
            <View style={styles.logoStyle}>
                <Logo />
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