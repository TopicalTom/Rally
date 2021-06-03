import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

// Router
import SignupRouter from './SignupRouter';

// Screens
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

const AuthRouter = () => {
    const navigation = useNavigation();
    const { colors } = useTheme();

    return (
        <Stack.Navigator 
            initialRouteName="Signup"
            screenOptions={() => {
                return {
                    headerTitle: null,
                    headerStyle: {
                        height: 50,
                        backgroundColor: colors.background,
                        shadowColor: 'transparent'
                    },
                    headerBackTitleVisible: false,
                    headerLeft: () => (
                        <Button
                            title="Cancel"
                            color="#717273"
                            onPress={() => navigation.goBack('Welcome')}
                        />
                    )
                }
            }}>
            <Stack.Screen 
                name="Signup" 
                component={SignupRouter} 
                options={() => ({ 
                    headerShown: true,
                    headerLeft: null,
                })}
            />
            <Stack.Screen 
                name="Login" 
                component={LoginScreen} 
                options={() => ({ 
                    headerShown: true,
                    headerLeft: null,
                })}
            />
        </Stack.Navigator>
    );
};

export default AuthRouter;