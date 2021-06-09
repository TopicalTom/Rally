import React, { useState, useEffect } from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

// Router
import AuthRouter from './AuthRouter';

// Screen
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();

const OnboardingRouter = ({ }) => {
    return (
        <Stack.Navigator
            mode='modal'
            initialRouteName="Welcome"
            screenOptions={() => {
                return {
                    gestureEnabled: true,
                    cardOverlayEnabled: true,
                    ...TransitionPresets.ModalPresentationIOS
                }
            }}
        >
            <Stack.Screen 
                name="Welcome" 
                component={WelcomeScreen} 
                options={() => ({ 
                    headerShown: false,
                    tabBarVisible: false
                })}
            />
            <Stack.Screen 
                name="Auth" 
                component={AuthRouter} 
                options={() => ({ 
                    headerShown: false,
                    tabBarVisible: false
                })}
            />
        </Stack.Navigator>
    );
};

export default OnboardingRouter;