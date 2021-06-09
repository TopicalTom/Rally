import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { useNavigation, useTheme } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

// Components
import AuthButton from '../components/AuthButton';

// Assets
import Logo from '../assets/Logo';

const WelcomeScreen = ({accent, accentBorder}) => {
    const navigation = useNavigation();
    const { colors } = useTheme();
    
    return (
        <SafeAreaView
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
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 32,
        paddingVertical: 16,
        backgroundColor: 'rgba(253,45,85,1)'
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

export default WelcomeScreen;

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