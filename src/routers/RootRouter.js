import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import auth from '@react-native-firebase/auth';

// Router
import MainRouter from './MainRouter';
import AuthRouter from './AuthRouter';

// Screen
import WelcomeScreen from '../screens/WelcomeScreen';
import SplashScreen from '../screens/SplashScreen';

const Root = createBottomTabNavigator();

const RootRouter = () => {
    const [ initializing, setInitializing ] = useState(true);
    const [ currentUser, setCurrentUser ] = useState(null);
  
    // Handle user state changes
    const onAuthStateChanged = userDetails => {
        setCurrentUser(userDetails);
        if (initializing) setInitializing(false);
    };
  
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);
  
    if (initializing) return <SplashScreen />;

    return (
        <NavigationContainer>
            <Root.Navigator>
                {!currentUser ? (
                    <>
                        <Root.Screen 
                            name="Welcome" 
                            component={WelcomeScreen} 
                            options={() => ({ 
                                headerShown: false,
                                tabBarVisible: false
                            })}
                        />
                        <Root.Screen 
                            name="Auth" 
                            component={AuthRouter} 
                            options={() => ({ 
                                headerShown: false,
                                tabBarVisible: false
                            })}
                        />
                    </>
                ) : (
                    <Root.Screen 
                        name="Main" 
                        component={MainRouter} 
                        options={() => ({ 
                            headerShown: false,
                            tabBarVisible: false
                        })}
                    />
                )}
            </Root.Navigator>
        </NavigationContainer>
    );
};

export default RootRouter;