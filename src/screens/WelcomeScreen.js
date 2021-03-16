import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
    const navigation = useNavigation();
    
    return (
        <SafeAreaView>
            <Text>Welcome</Text>
            <Button 
                title="Continue"
                onPress={() => navigation.navigate('Auth')}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default WelcomeScreen;