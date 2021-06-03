import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { WEB_CLIENT_ID } from '@env';
import { useNavigation, useTheme } from '@react-navigation/native';

// Store
import { connect } from 'react-redux';
import { googleSignIn } from '../actions';

// Components 
import AuthButton from '../components/AuthButton';

const MethodsScreen = () => {
    const navigation = useNavigation();
    const { colors } = useTheme();
    
    const configureGoogleSign = (clientId) => {
        GoogleSignin.configure({
            webClientId: `${clientId}`,
            offlineAccess: false
        });
    };

    useEffect(() => {
        configureGoogleSign(WEB_CLIENT_ID);
    }, []);
  
    return (
        <View 
            style={[
                styles.container, 
                {backgroundColor: colors.background}
            ]}>
            <Text 
                style={styles.subtitleStyle}>
                Let's get started
            </Text>
            <Text h3 
                style={[
                    styles.titleStyle, 
                    {color: colors.text}
                ]}>
                Select your sign up method
            </Text>
            <AuthButton 
                text="Continue with Apple"
                textColor={{ color: '#FFF'}}
                buttonColor={{ backgroundColor: 'black'}}
                icon="apple1"
                iconType="antdesign"
                iconColor="white"
                action={() => {}}
            />
            <AuthButton 
                text="Continue with Google"
                textColor={{ color: '#FFF'}}
                buttonColor={{ backgroundColor: 'rgba(76,139,245,1)'}}
                icon="google"
                iconType="antdesign"
                iconColor="white"
                action={() => googleSignIn()}
            />
            <AuthButton 
                text="Continue with email"
                textColor={{color: colors.text}}
                buttonColor={{
                    backgroundColor: colors.card, 
                    borderColor: colors.card
                }}
                icon="email"
                iconType="materialcommunity"
                iconColor="#B6B6B6"
                action={() => navigation.navigate('Email')}
            />
            <AuthButton 
                text="Use mobile number"
                textColor={{color: colors.text}}
                buttonColor={{
                    backgroundColor: colors.card, 
                    borderColor: colors.card
                }}
                icon="smartphone"
                iconType="materialicons"
                iconColor="#B6B6B6"
                action={() => navigation.navigate('Phone')}
            />
            <AuthButton 
                text="Log in to existing account"
                textColor={{color: colors.text}}
                buttonColor={{
                    backgroundColor: colors.background, 
                    borderColor: colors.background
                }}
                iconColor="#B6B6B6"
                action={() => navigation.navigate('Login')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    subtitleStyle: {
        textAlign: 'left',
        color: "#B6B6B6",
        alignSelf: 'stretch',
        marginBottom: 8
    },
    titleStyle: {
        textAlign: 'left',
        fontWeight: 'bold',
        marginBottom: 40,
        alignSelf: 'stretch',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 32,
        marginBottom: 60
    },
    defaultTextStyle: {
        fontSize: 14,
        fontWeight: '600',
        paddingLeft: 12,
        color: '#909090'
    },
    platformTextStyle: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
        paddingLeft: 12,
    },
    altTextStyle: {
        color: '#565656',
        fontSize: 14,
        fontWeight: '600',
    },
    appleButtonStyle: {
        backgroundColor: 'rgba(0,0,0,1)',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,1)',
        alignSelf: 'stretch',
        marginBottom: 8,
        height: 48,
        justifyContent: 'flex-start'
    },
    googleButtonStyle: {
        backgroundColor: 'rgba(76,139,245,1)',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'rgba(76,139,245,1)',
        marginBottom: 8,
        alignSelf: 'stretch',
        height: 48,
        justifyContent: 'flex-start'
    },
    defaultButtonStyle: {
        borderRadius: 12,
        borderWidth: 1,
        marginBottom: 8,
        alignSelf: 'stretch',
        height: 48,
        justifyContent: 'flex-start'
    },
    altButtonStyle: {
        borderRadius: 12,
        borderWidth: 1,
        marginBottom: 8,
        alignSelf: 'stretch',
        height: 48,
        justifyContent: 'flex-start',
    },
    status: {
        marginVertical: 20
    },
    loggedinMessage: {
        fontSize: 20,
        color: 'tomato'
    }
});

/*
const mapStateToProps = ({ authentication }) => {
    return { 
        user: authentication.user,  
    };
}
*/

export default connect(null, { googleSignIn })(MethodsScreen);