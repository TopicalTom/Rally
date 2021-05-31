import React, { useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';

// Themes
import { DarkTheme, LightTheme } from '../themes';

// Store
import { connect } from 'react-redux';
import { checkForAccount, loginFailed, loginSuccess } from '../actions';

// Router
import MainRouter from './MainRouter';
import AuthRouter from './AuthRouter';

// Screen
import WelcomeScreen from '../screens/WelcomeScreen';
import SplashScreen from '../screens/SplashScreen';

const Root = createStackNavigator();

const RootRouter = ({ loginFailed, loginSuccess}) => {
    const scheme = useColorScheme();

    const [ initializing, setInitializing ] = useState(true);
    const [ currentUser, setCurrentUser ] = useState(null);

    //console.log(currentUser)
  
    // Handle user state changes
    const onAuthStateChanged = async userDetails => {

        if (userDetails) {
            checkForAccount(userDetails);
            loginSuccess(userDetails.uid)
        }

        setCurrentUser(userDetails)
        if (initializing) setInitializing(false);
    };
  
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);
  
    if (initializing) return <SplashScreen />;

    return (
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}>
            <Root.Navigator
                mode='modal'
                screenOptions={() => {
                    return {
                        gestureEnabled: true,
                        cardOverlayEnabled: true,
                        ...TransitionPresets.ModalPresentationIOS
                    }
                }}
            >
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

const mapStateToProps = ({ authentication }) => {
    return { 
        user: authentication.user
    };
}

export default connect(mapStateToProps, { checkForAccount, loginFailed, loginSuccess })(RootRouter);