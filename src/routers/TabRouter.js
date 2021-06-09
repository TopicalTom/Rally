import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

// Routers
import PlacesRouter from '../routers/PlacesRouter';
import InboxRouter from '../routers/InboxRouter';

// Screens
import SocialScreen from '../screens/SocialScreen';
import SearchScreen from '../screens/SearchScreen';
import MessagesScreen from '../screens/MessagesScreen';

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
                            name="users" 
                            type="feather"
                            color={colors.text}
                            size={30} 
                        />
                    ),
                })}
            />
            <Tab.Screen 
                name="Inbox" 
                component={InboxRouter} 
                options={() => ({ 
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

/*
            <Tab.Screen 
                name="Search" 
                component={SearchScreen} 
                options={() => ({ 
                    tabBarIcon: () => (
                        <Icon 
                            name="search" 
                            type="feather"
                            color={colors.text} 
                            size={30}
                        />
                    ),
                })}
            />
            <Tab.Screen 
                name="Places" 
                component={PlacesRouter} 
                options={() => ({ 
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

*/