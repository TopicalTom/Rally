import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

// Screens
import RallyScreen from '../screens/RallyScreen';
import PlacesScreen from '../screens/PlacesScreen';
import ChatScreen from '../screens/ChatScreen';

const Tab = createBottomTabNavigator();

const MainRouter = () => {
    return (
        <Tab.Navigator 
            initialRouteName="Rally"
            tabBarOptions={{
                activeTintColor: 'black',
              }}>
            <Tab.Screen 
                name="Rally" 
                component={RallyScreen} 
                options={() => ({ 
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarIcon: () => (
                        <Icon 
                            name="map" 
                            type="feather"
                            color='black' 
                            size={30} 
                        />
                    ),
                })}
            />
            <Tab.Screen 
                name="Places" 
                component={PlacesScreen} 
                options={() => ({ 
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarIcon: () => (
                        <Icon 
                            name="search" 
                            type="feather"
                            color='black' 
                            size={30}
                        />
                    ),
                })}
            />
            <Tab.Screen 
                name="Chat" 
                component={ChatScreen} 
                options={() => ({ 
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarIcon: () => (
                        <Icon 
                            name="heart" 
                            type="feather"
                            color='black' 
                            size={30} 
                        />
                    ),
                })}
            />
        </Tab.Navigator>
    );
};

export default MainRouter;