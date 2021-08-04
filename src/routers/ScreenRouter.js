import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { HeaderBackButton, createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { Text, Button, Icon, Avatar } from 'react-native-elements';
import { useNavigation, useTheme } from '@react-navigation/native';

// Store
import { connect } from 'react-redux';

// Router
import TabRouter from './TabRouter';

// Screens
import ChatScreen from '../screens/ChatScreen';
import ChatsScreen from '../screens/ChatsScreen';

import { ChatsIcon } from '../assets/icons/ChatsIcon';

// Components
import Profile from '../components/Profile';
import InboxRouter from './InboxRouter';

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
                        shadowColor: 'transparent'
                    },
                    headerTitle: false,
                    headerRight: () => (
                        <View style={styles.headerContainer}>
                            <Button
                                onPress={() => navigation.navigate('Chats')}
                                buttonStyle={styles.searchButtonStyle}
                                icon={() => {
                                    return <ChatsIcon />
                                }} 
                            />
                            <Profile 
                                profile={user.profile}
                                onPress={() => navigation.navigate('Account')}
                                onLongPress={() => navigation.navigate('Rally')}
                            />
                        </View>
                    ),
                })}
            />
            <Stack.Screen 
                name="Chats" 
                component={ChatsScreen} 
                options={() => ({ 
                    headerTintColor: 'white',
                    headerTitle: null,
                    headerStyle: {
                        backgroundColor: colors.background, 
                        height: 100, 
                        shadowColor: 'transparent',
                    },
                    headerLeftContainerStyle: {
                        paddingLeft: 8,
                    },
                    headerLeft: () => (
                        <View style={styles.chatHeaderContainer}>
                            <HeaderBackButton 
                                labelVisible={false}
                                tintColor={'white'}
                                onPress={() => navigation.goBack()}
                            />
                            <Text 
                                style={[styles.titleStyle, { color: colors.text}]}>
                                Chats
                            </Text>
                        </View>
                    ),
                    headerRight: () => (
                            <Button
                                onPress={() => navigation.navigate('Create')}
                                buttonStyle={[styles.searchButtonStyle, { marginRight: 8}]}
                                icon={() => (
                                    <Icon 
                                        name="edit" 
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
                name="Chat" 
                component={ChatScreen} 
                options={({route}) => ({ 
                    headerTintColor: 'white',
                    headerTitle: null,
                    headerStyle: {
                        backgroundColor: colors.background, 
                        height: 100, 
                        shadowColor: 'transparent'
                    },
                    headerLeftContainerStyle: {
                        paddingLeft: 8,
                    },
                    headerLeft: () => (
                        <View style={styles.chatHeaderContainer}>
                            <HeaderBackButton 
                                labelVisible={false}
                                tintColor={'white'}
                                onPress={() => navigation.goBack()}
                            />
                            <Avatar
                                rounded
                                source={{ uri: route.params.profile }}
                                size={36}
                                containerStyle={{borderColor: colors.overlay}}
                            />
                            <View>
                                <Text 
                                    style={[styles.nameStyle, { color: colors.text}]}>
                                    {route.params.name}
                                </Text>
                                <Text 
                                    style={[styles.statusStyle, { color: route.params.rally === interest ? accent : colors.grey}]}>
                                    Inactive
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
        fontSize: 17,
        //fontSize: 21
    },
    titleStyle: {
        textAlign: 'left',
        paddingTop: 6,
        fontWeight: 'bold',
        //marginBottom: 10,
        alignSelf: 'stretch',
        fontSize: 28,
        zIndex: 1000
    },
    statusStyle: {
        fontSize: 15
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