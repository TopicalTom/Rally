import * as React from 'react';
import { StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation, useTheme } from '@react-navigation/native';

// Screens
import ProfileScreen from '../screens/ProfileScreen';
import FriendsScreen from '../screens/FriendsScreen';
import SquadsScreen from '../screens/SquadsScreen';
import SquadScreen from '../screens/SquadScreen';
import EditScreen from '../screens/EditScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createStackNavigator();

const AccountRouter = ({}) => {
    const navigation = useNavigation();
    const { colors } = useTheme();

    return (
        <Stack.Navigator 
            initialRouteName="Profile"
            mode='screen'
            screenOptions={() => {
                return {
                    headerShown: true,
                    headerStyle: {
                        height: 60,
                        backgroundColor: colors.background,
                        shadowColor: 'transparent',
                    },
                    headerTitleStyle: {
                        height: 60,
                        color: '#FFF'
                    },
                    headerLeftContainerStyle: {
                        top: -42,
                        paddingLeft: 8,
                        height: 60,
                    }
                }
            }}>
            <Stack.Screen 
                name="Profile" 
                component={ProfileScreen} 
                options={() => ({ 
                    headerShown: false,
                })}
            />
            <Stack.Screen 
                name="Friends" 
                component={FriendsScreen} 
                options={() => ({ 
                    headerBackTitleVisible: false,
                    headerTitle: () => (
                        <SearchBar 
                            placeholder="Search friends"
                            platform="ios"
                            containerStyle={{width: 375, backgroundColor: colors.background, marginHorizontal: 0, paddingHorizontal: 0}}
                            inputContainerStyle={[{backgroundColor: colors.card}]}
                        />
                    ),
                    headerTintColor: '#FFF',
                    headerTitleStyle: {
                        //height: 60,
                        color: '#FFF',
                        backgroundColor: colors.background,
                    },
                    headerStyle: {
                        height: 125,
                        backgroundColor: colors.background,
                        shadowColor: 'transparent',
                    },
                })}
            />
            <Stack.Screen 
                name="Squads" 
                component={SquadsScreen} 
                options={() => ({ 
                    headerBackTitleVisible: false,
                    headerTitle: "Squads",
                    headerTintColor: '#FFF',
                })}
            />
            <Stack.Screen 
                name="Squad" 
                component={SquadScreen} 
                options={({ route }) => ({ 
                    headerBackTitleVisible: false,
                    headerTitle: `${route.params.interest} Squad`,
                    headerTintColor: route.params.accent,
                })}
            />
            <Stack.Screen 
                name="Edit" 
                component={EditScreen} 
                options={() => ({ 
                    headerBackTitleVisible: false,
                    headerTitle: "Edit profile",
                    headerTintColor: '#FFF',
                })}
            />
            <Stack.Screen 
                name="Notifications" 
                component={NotificationsScreen} 
                options={() => ({ 
                    headerBackTitleVisible: false,
                    headerTitle: "Notifications",
                    headerTintColor: '#FFF',
                })}
            />
            <Stack.Screen 
                name="Settings" 
                component={SettingsScreen} 
                options={() => ({ 
                    headerBackTitleVisible: false,
                    headerTitle: "Settings",
                    headerTintColor: '#FFF',
                })}
            />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({});

export default AccountRouter;