import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';

import { HomeIcon } from '../assets/icons/HomeIcon';
import { SearchIcon } from '../assets/icons/SearchIcon';
import { NearbyIcon } from '../assets/icons/NearbyIcon';

// Routers
import PlacesRouter from '../routers/PlacesRouter';

// Screens
import SocialScreen from '../screens/SocialScreen';
import SearchScreen from '../screens/SearchScreen';

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
                    borderTopColor: colors.overlay
                }
              }}>
            <Tab.Screen 
                name="Social" 
                component={SocialScreen} 
                options={() => ({ 
                    tabBarIcon: ({ focused }) => {
                        return <HomeIcon focused={focused} />;
                    },
                })}
            />
            <Tab.Screen 
                name="Search" 
                component={SearchScreen} 
                options={() => ({ 
                    tabBarIcon: ({ focused }) => {
                        return <SearchIcon focused={focused} />;
                    },
                })}
            />
            <Tab.Screen 
                name="Places" 
                component={PlacesRouter} 
                options={() => ({ 
                    tabBarIcon: ({ focused }) => {
                        return <NearbyIcon focused={focused} />;
                    },
                })}
            />
        </Tab.Navigator>
    );
};

export default TabRouter;

/*
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