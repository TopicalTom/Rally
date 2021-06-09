import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { HeaderBackButton, createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { Text, Button, Icon } from 'react-native-elements';
import { useNavigation, useTheme } from '@react-navigation/native';

// Store
import { connect } from 'react-redux';

// Router
import TabRouter from './TabRouter';

// Screens
import ChatScreen from '../screens/ChatScreen';
import MapScreen from '../screens/MapScreen';

// Components
import Profile from '../components/Profile';

const Stack = createStackNavigator();

const ScreenRouter = ({ user, interest, accent}) => {
    const navigation = useNavigation();
    const { colors } = useTheme();

    return (
        <Stack.Navigator 
            initialRouteName="Tab"
            mode='screen'>
            <Stack.Screen 
                name="Tab" 
                component={TabRouter}
                options={() => ({ 
                    headerShown: true,
                    headerTransparent: true,
                    headerStyle: {                      
                        height: 100,
                        //backgroundColor: colors.background,
                        shadowColor: 'transparent'
                    },
                    headerTitle: false,
                    headerRight: () => (
                        <View style={styles.headerContainer}>
                            <Button
                                onPress={() => navigation.navigate('Search')}
                                buttonStyle={styles.searchButtonStyle}
                                icon={() => (
                                    <Icon 
                                        name="edit" 
                                        type="feather"
                                        color={colors.text}
                                        size={24} 
                                    />
                                )} 
                            />
                            <Profile 
                                profile={user.profile}
                                onPress={() => navigation.navigate('Account')}
                                onLongPress={() => navigation.navigate('Mode')}
                            />
                        </View>
                    ),
                })}
            />
            <Stack.Screen 
                name="Chat" 
                component={ChatScreen} 
                options={({route}) => ({ 
                    headerTintColor: 'white',
                    headerTitle: null,
                    headerStyle: {backgroundColor: colors.background},
                    headerLeft: () => (
                        <View style={styles.chatHeaderContainer}>
                            <HeaderBackButton 
                                labelVisible={false}
                                tintColor={'white'}
                                onPress={() => navigation.goBack()}
                            />
                            <Profile 
                                profile={route.params.profile}
                                onPress={() => navigation.navigate('Profile')}
                            />
                            <View>
                                <Text 
                                    h4 style={[styles.nameStyle, { color: colors.text}]}>
                                    {route.params.name}
                                </Text>
                                <Text 
                                    h5 style={[styles.statusStyle, { color: route.params.rally === interest ? accent : colors.grey}]}>
                                    Rallying • {route.params.rally}
                                </Text>
                            </View>
                        </View>
                    ),
                    headerRight: () => (
                            <Button
                                onPress={() => navigation.navigate('Search')}
                                buttonStyle={styles.searchButtonStyle}
                                icon={() => (
                                    <Icon 
                                        name="more-vertical" 
                                        type="feather"
                                        color={colors.text}
                                        size={24} 
                                    />
                                )} 
                            />
                    ),
                    headerBackTitleVisible: false,
                    gestureEnabled: true,
                    cardOverlayEnabled: true,
                })}
            />
            <Stack.Screen 
                name="Map" 
                component={MapScreen} 
                options={({route}) => ({ 
                    headerTintColor: 'white',
                    headerTitle: null,
                    headerTransparent: true,
                    headerLeft: () => (
                        <View style={styles.mapHeaderContainer}>
                            <HeaderBackButton 
                                labelVisible={false}
                                tintColor={'white'}
                                onPress={() => navigation.goBack()}
                            />
                        </View>
                    ),
                    headerRight: () => (
                        <View style={styles.headerContainer}>
                            <Profile 
                                profile={user.profile}
                                onPress={() => navigation.navigate('Profile')}
                                onLongPress={() => navigation.navigate('Mode')}
                            />
                        </View>
                    ),
                    headerBackTitleVisible: false,
                    gestureEnabled: false,
                    cardOverlayEnabled: true,
                })}
            />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    chatHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 16
    },
    nameStyle: {
        fontWeight: 'bold',
        //fontSize: 21
    },
    statusStyle: {
        //fontSize: 14,
    },
    searchButtonStyle: {
        backgroundColor: 'rgba(0,0,0,0)'
    }
});

const mapStateToProps = ({ rally, authentication }) => {
    return { 
        user: authentication.user,
        interest: rally.interest,
        accent: rally.accent
    };
}

export default connect(mapStateToProps)(ScreenRouter);