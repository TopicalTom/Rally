import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useTheme } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

// Components
import AuthButton from '../components/AuthButton';

// Assets
import Logo from '../assets/Logo';

// Store
import { connect } from 'react-redux';

const WelcomeScreen = ({accent, accentBorder}) => {
    const navigation = useNavigation();
    const { colors } = useTheme();
    
    return (
        <LinearGradient 
            colors={[accent || '#FD2D55', accentBorder || '#ED506F']} 
            style={styles.screen}>
            <View style={styles.logoStyle}>
                <Logo />
            </View>
            <View style={styles.authContainerStyle}>
                <AuthButton 
                    text="Get started"
                    textColor={{color: '#000'}}
                    buttonColor={{
                        backgroundColor: '#FFF', 
                        borderColor: '#FFF'
                    }}
                    iconColor="#B6B6B6"
                    action={() => navigation.navigate('Auth')}
                />
                <AuthButton 
                    text="Log in to existing account"
                    textColor={{color: colors.text}}
                    buttonColor={{
                        backgroundColor: 'transparent', 
                        borderColor: 'transparent'
                    }}
                    iconColor="#FFF"
                    action={() => navigation.navigate('Auth', {screen: 'Login'})}
                />
            </View>
            <View style={styles.legalStyle}>
                <TouchableOpacity 
                    style={styles.termsStyle}>
                    <Text 
                        style={styles.altLinkStyle}>
                        Terms of Service
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.privacyStyle}>
                    <Text 
                        style={styles.altLinkStyle}>
                        Privacy Policy
                    </Text>
                </TouchableOpacity>
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
    authContainerStyle: {
        marginBottom: 30
    },
    logoStyle: {
        position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        bottom: 200,
        left: 0,
        right: 0
    },
    signinStyle: {
        paddingVertical: 10
    },
    termsStyle: {
        marginRight: 10
    },
    signinLabelStyle: {
        color: '#FFF'
    },
    buttonStyle: {
        alignSelf: 'stretch'
    },
    legalStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    altLinkStyle: {
        color: "rgba(255,255,255,.4)",
        textDecorationLine: 'underline',
    }
});

const mapStateToProps = ({ rally }) => {
    return { 
        accent: rally.accent,
        accentBorder: rally.accentBorder,    
    };
}

export default connect(mapStateToProps)(WelcomeScreen);

/*

                <ActionButton 
                    text="Get Started"
                    color="#fff"
                    action={() => navigation.navigate('Auth')}
                />
                <TouchableOpacity style={styles.signinStyle}>
                    <Text style={styles.signinLabelStyle}>Have an account? Sign in</Text>
                </TouchableOpacity>

*/