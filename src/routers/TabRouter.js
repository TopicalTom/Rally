import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon, Button } from 'react-native-elements';
import { useNavigation, useTheme } from '@react-navigation/native';

// Store
import { connect } from 'react-redux';

// Routers
import RallyRouter from '../routers/RallyRouter';
import PlacesRouter from '../routers/PlacesRouter';

// Screens
//import SocialScreen from '../screens/SocialScreen';
import SearchScreen from '../screens/SearchScreen';
import ChatsScreen from '../screens/ChatsScreen';

const Tab = createBottomTabNavigator();

const TabRouter = () => {
    const navigation = useNavigation();
    const { colors } = useTheme();
    return (
        <Tab.Navigator 
            initialRouteName="Rally"
            tabBarOptions={{
                showLabel: false,
                style: {
                    backgroundColor: colors.background,
                    borderTopColor: colors.border
                }
              }}>
            <Tab.Screen 
                name="Rally" 
                component={RallyRouter} 
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
            <Tab.Screen 
                name="Chats" 
                component={ChatsScreen} 
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