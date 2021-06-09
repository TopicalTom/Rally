import React, { useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RNBootSplash from "react-native-bootsplash";
import auth from '@react-native-firebase/auth';

// Themes
import { DarkTheme, LightTheme } from '../themes';

// Store
import { connect } from 'react-redux';
import { 
    checkForAccount, 
    loginFailed, 
    loginSuccess,
    retrieveCurrentRally,
    retrieveSocialCircle, 
    retrieveFriendsList, 
    retrieveSquads  
} from '../actions';

// Router
import MainRouter from './MainRouter';
import OnboardingRouter from './OnboardingRouter';

// Screen
import SplashScreen from '../screens/SplashScreen';

const Root = createBottomTabNavigator();

const RootRouter = ({ interest, loginSuccess, retrieveSocialCircle, retrieveFriendsList, retrieveCurrentRally, retrieveSquads }) => {
    const scheme = useColorScheme();
    const [ initializing, setInitializing ] = useState(true);
    const [ currentUser, setCurrentUser ] = useState(null);
  
    // Handle user state changes
    const onAuthStateChanged = async userDetails => {
        if (userDetails) {
            await checkForAccount(userDetails);
            loginSuccess(userDetails.uid)
        }
        setCurrentUser(userDetails);
        await Promise.all([
            retrieveCurrentRally(),
            retrieveSocialCircle(interest),
            retrieveFriendsList(),
            retrieveSquads()
        ]);
        //setTimeout(() => { RNBootSplash.hide({ fade: true })}, 15000);
        //if (initializing) setInitializing(false);
        if (initializing) setTimeout(() => { setInitializing(false) }, 8000);
    };
  
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);
  
    if (initializing) return <SplashScreen currentUser={currentUser} />;

    return (
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme} onReady={() => RNBootSplash.hide({ fade: true })}>
            <Root.Navigator
                tabBarOptions={{
                    showLabel: false,
                }}
            >
                {!currentUser ? 
                (
                    <Root.Screen 
                        name="Onboarding" 
                        component={OnboardingRouter} 
                        options={() => ({ 
                            headerShown: false,
                            tabBarVisible: false
                        })}
                    />
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

const mapStateToProps = ({ rally, authentication }) => {
    return { 
        user: authentication.user,
        interest: rally.interest
    };
}

export default connect(mapStateToProps, { 
    checkForAccount, 
    loginFailed, 
    loginSuccess,
    retrieveSocialCircle, 
    retrieveFriendsList, 
    retrieveSquads, 
    retrieveCurrentRally 
})(RootRouter);

/*
import React, { useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import RNBootSplash from "react-native-bootsplash";
import auth from '@react-native-firebase/auth';

// Themes
import { DarkTheme, LightTheme } from '../themes';

// Store
import { connect } from 'react-redux';
import { 
    checkForAccount, 
    loginFailed, 
    loginSuccess,
    retrieveCurrentRally,
    retrieveSocialCircle, 
    retrieveFriendsList, 
    retrieveSquads  
} from '../actions';

// Router
import MainRouter from './MainRouter';
import AuthRouter from './AuthRouter';

// Screen
import WelcomeScreen from '../screens/WelcomeScreen';
import SplashScreen from '../screens/SplashScreen';

const Root = createStackNavigator();

const RootRouter = ({ interest, loginSuccess, retrieveSocialCircle, retrieveFriendsList, retrieveCurrentRally, retrieveSquads }) => {
    const scheme = useColorScheme();
    const [ initializing, setInitializing ] = useState(true);
    const [ currentUser, setCurrentUser ] = useState(null);
  
    // Handle user state changes
    const onAuthStateChanged = async userDetails => {
        if (userDetails) {
            await checkForAccount(userDetails);
            loginSuccess(userDetails.uid)
        }
        setCurrentUser(userDetails);
        await Promise.all([
            retrieveCurrentRally(),
            retrieveSocialCircle(interest),
            retrieveFriendsList(),
            retrieveSquads()
        ]);
        //setTimeout(() => { RNBootSplash.hide({ fade: true })}, 15000);
        //if (initializing) setInitializing(false);
        if (initializing) setTimeout(() => { setInitializing(false) }, 8000);
    };
  
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);
  
    if (initializing) return <SplashScreen currentUser={currentUser} />;

    return (
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme} onReady={() => RNBootSplash.hide({ fade: true })}>
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
                {!currentUser ? 
                (
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

const mapStateToProps = ({ rally, authentication }) => {
    return { 
        user: authentication.user,
        interest: rally.interest
    };
}

export default connect(mapStateToProps, { 
    checkForAccount, 
    loginFailed, 
    loginSuccess,
    retrieveSocialCircle, 
    retrieveFriendsList, 
    retrieveSquads, 
    retrieveCurrentRally 
})(RootRouter);

*/