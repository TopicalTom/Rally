import auth from '@react-native-firebase/auth';
import { 
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from './types';
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';

// Firebase Apple Auth Handler

// Firebase Google Auth Handler
export const googleSignIn = async () => {
    try {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
    } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            console.log('User cancelled action');
        } else if (error.code === statusCodes.IN_PROGRESS) {
            Alert.alert('Process in progress');
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            Alert.alert('Play services are not available');
        } else {
            Alert.alert('Something else went wrong... ', error.toString());
        };
    };

};

// Firebase Email Auth Handler
export const emailSignUp = async (email, password) => {
    try {
        return await auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
        }
        console.error(error);
    };

};

// Firebase Phone Auth Handler
export const phoneSignUp = async (phoneNumber) => {
    try {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        return confirmation;
    } catch (error) {
        console.error(error);
    };
};

export const confirmOTP = async (code) => {
    try {
        return await confirm.confirm(code);
    } catch (error) {
        console.log('Invalid code.');
    }
};

// Global Auth Sign In Handler
export const signIn = async (email, password) => {
    try {
        await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
        Alert.alert('Something else went wrong... ', error.toString());
    };
};

// Global Auth Sign Out Handler
export const signOut = () => {
    auth().signOut()
};

// Creates New User Account
export const createAccount = async () => {
    try {
        // await 
    } catch (error) {
        //
    };

};