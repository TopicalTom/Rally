import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { Button, Icon } from 'react-native-elements';
import { useNavigation, useTheme } from '@react-navigation/native';

// Screens
import SocialScreen from '../screens/SocialScreen';
import ConnectScreen from '../screens/ConnectScreen';

// Components
import Profile from '../components/Profile';

const Stack = createStackNavigator();

const RallyRouter = ({}) => {
    const navigation = useNavigation();
    const { colors } = useTheme();

    return (
        <Stack.Navigator 
            initialRouteName="Social"
            mode='screen'>
            <Stack.Screen 
                name="Social" 
                component={SocialScreen} 
                options={() => ({ 
                    headerShown: false,
                })}
            />
            <Stack.Screen 
                name="Connect" 
                component={ConnectScreen} 
                options={() => ({ 
                    headerTintColor: 'white',
                    headerTitle: null,
                    headerTransparent: true,
                    headerBackTitleVisible: false,
                    gestureEnabled: true,
                    cardOverlayEnabled: true,
                })}
            />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row'
    },
    searchButtonStyle: {
        backgroundColor: 'rgba(0,0,0,0)'
    }
});

export default RallyRouter;