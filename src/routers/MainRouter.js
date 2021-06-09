import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { Button, Icon } from 'react-native-elements';
import { useNavigation, useTheme } from '@react-navigation/native';

// Router
import ScreenRouter from './ScreenRouter';
import AccountRouter from './AccountRouter';
import RallyRouter from './RallyRouter';

// Modals
import CreateModal from '../modals/CreateModal';
import LocationModal from '../modals/LocationModal';
import SearchModal from '../modals/SearchModal';

// Components
import Profile from '../components/Profile';

const Stack = createStackNavigator();

const MainRouter = () => {
    const navigation = useNavigation();
    const { colors } = useTheme();

    return (
        <Stack.Navigator 
            initialRouteName="Screen"
            mode='modal'
            screenOptions={() => {
                return {
                    //gestureEnabled: true,
                    cardOverlayEnabled: true,
                    //...TransitionPresets.ModalPresentationIOS
                }
            }}
        >
            <Stack.Screen 
                name="Screen" 
                component={ScreenRouter}
                options={() => ({ 
                    headerShown: false,
                })}
            />
            <Stack.Screen 
                name="Rally" 
                component={RallyRouter} 
                options={() => ({ 
                    headerShown: false,
                    ...TransitionPresets.ModalPresentationIOS
                })}
            />
            <Stack.Screen 
                name="Account" 
                component={AccountRouter} 
                options={() => ({ 
                    headerShown: false,
                    ...TransitionPresets.ModalPresentationIOS
                })}
            />
            <Stack.Screen 
                name="Create" 
                component={CreateModal} 
                options={() => ({ 
                    headerShown: false,
                    ...TransitionPresets.ModalPresentationIOS
                })}
            />
            <Stack.Screen 
                name="Find" 
                component={SearchModal} 
                options={() => ({ 
                    headerShown: false,
                    gestureEnabled: false,
                })}
            />
            <Stack.Screen 
                name="Location" 
                component={LocationModal} 
                options={() => ({ 
                    headerShown: false,
                    ...TransitionPresets.ModalPresentationIOS
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
                    headerTitle: null,
                    headerLeft: null,
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
                    },

*/

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