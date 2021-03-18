import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { Button, Icon } from 'react-native-elements';
import { useNavigation, useTheme } from '@react-navigation/native';

// Router
import TabRouter from './TabRouter';

// Modals
import ProfileModal from '../modals/ProfileModal';
import SearchModal from '../modals/SearchModal';
import RallyModal from '../modals/RallyModal';

// Components
import Profile from '../components/Profile';

const Stack = createStackNavigator();

const MainRouter = () => {
    const navigation = useNavigation();
    const { colors } = useTheme();

    return (
        <Stack.Navigator 
            initialRouteName="Tab"
            mode='modal'
            screenOptions={() => {
                return {
                    gestureEnabled: true,
                    cardOverlayEnabled: true,
                    ...TransitionPresets.ModalPresentationIOS
                }
            }}
        >
            <Stack.Screen 
                name="Tab" 
                component={TabRouter}
                options={() => ({ 
                    headerShown: true,
                    headerTransparent: true,
                    headerTitle: false,
                    headerRight: () => (
                        <View style={styles.headerContainer}>
                            <Button
                                onPress={() => navigation.navigate('Search')}
                                buttonStyle={styles.searchButtonStyle}
                                icon={() => (
                                    <Icon 
                                        name="search" 
                                        type="feather"
                                        color={colors.text}
                                        size={24} 
                                    />
                                )} 
                            />
                            <Profile 
                                onPress={() => navigation.navigate('Profile')}
                            />
                        </View>
                    ),
                })}
            />
            <Stack.Screen 
                name="Rally" 
                component={RallyModal} 
                options={() => ({ 
                    headerShown: false,
                })}
            />
            <Stack.Screen 
                name="Profile" 
                component={ProfileModal} 
                options={() => ({ 
                    headerShown: false,
                })}
            />
            <Stack.Screen 
                name="Search" 
                component={SearchModal} 
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

export default MainRouter;

/*
                            <Button
                                onPress={() => navigation.navigate('Profile')}
                                buttonStyle={styles.searchButtonStyle}
                                icon={() => (
                                    <Icon 
                                        name="user" 
                                        type="feather"
                                        color={colors.text}
                                        size={24} 
                                    />
                                )} 
                            />

*/