import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { Button, Icon } from 'react-native-elements';
import { useNavigation, useTheme } from '@react-navigation/native';

// Screens
import PlacesScreen from '../screens/PlacesScreen';
import MapScreen from '../screens/MapScreen';

// Components
import Profile from '../components/Profile';

const Stack = createStackNavigator();

const PlacesRouter = () => {
    const navigation = useNavigation();
    const { colors } = useTheme();

    return (
        <Stack.Navigator 
            initialRouteName="Places"
            mode='screen'>
            <Stack.Screen 
                name="Places" 
                component={PlacesScreen} 
                options={() => ({ 
                    headerShown: false,
                })}
            />
            <Stack.Screen 
                name="Map" 
                component={MapScreen} 
                options={() => ({ 
                    headerShown: false,
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

export default PlacesRouter;