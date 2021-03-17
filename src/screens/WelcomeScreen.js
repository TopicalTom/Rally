import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

// Components
import ActionButton from '../components/ActionButton';

// Assets
import Logo from '../assets/Logo';

const WelcomeScreen = () => {
    const navigation = useNavigation();
    
    return (
        <LinearGradient 
            colors={['#FD2D55', '#ED506F']} 
            style={styles.screen}>
            <Logo />
            <ActionButton 
                text="Get Started"
                color="#fff"
                action={() => navigation.navigate('Auth')}
            />
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default WelcomeScreen;