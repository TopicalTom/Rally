import * as React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';
import { useNavigation, useTheme } from '@react-navigation/native';

// Router
import ScreenRouter from './ScreenRouter';
import AccountRouter from './AccountRouter';
import RallyRouter from './RallyRouter';

// Screens
import CreateScreen from '../screens/CreateScreen';

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
                    cardOverlayEnabled: true,
                    cardOverlay: () => {
                        return <Animated.View style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.05)' }} />
                    },
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
                component={CreateScreen} 
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