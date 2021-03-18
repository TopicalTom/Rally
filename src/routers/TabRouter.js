import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon, Button } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

// Screens
import SocialScreen from '../screens/SocialScreen';
import PlacesScreen from '../screens/PlacesScreen';
import ChatsScreen from '../screens/ChatsScreen';

const Tab = createBottomTabNavigator();

const TabRouter = () => {
    const { colors } = useTheme();
    return (
        <Tab.Navigator 
            initialRouteName="Social"
            tabBarOptions={{
                showLabel: false,
                style: {
                    backgroundColor: colors.background,
                    borderTopColor: colors.border
                }
              }}>
            <Tab.Screen 
                name="Social" 
                component={SocialScreen} 
                options={() => ({ 
                    tabBarIcon: () => (
                        <Icon 
                            name="home" 
                            type="feather"
                            color={colors.text}
                            size={30} 
                        />
                    ),
                })}
            />
            <Tab.Screen 
                name="Places" 
                component={PlacesScreen} 
                options={() => ({ 
                    tabBarLabel: '',
                    tabBarIcon: () => (
                        <Icon 
                            name="map-pin" 
                            type="feather"
                            color={colors.text} 
                            size={30}
                        />
                    ),
                })}
            />
            <Tab.Screen 
                name="Chats" 
                component={ChatsScreen} 
                options={() => ({ 
                    tabBarLabel: '',
                    tabBarIcon: () => (
                        <Icon 
                            name="message-circle" 
                            type="feather"
                            color={colors.text}
                            size={30} 
                        />
                    ),
                })}
            />
        </Tab.Navigator>
    );
};

export default TabRouter;