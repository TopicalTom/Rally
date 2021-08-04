import * as React from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation, useTheme } from '@react-navigation/native';

// Store
import { connect } from 'react-redux';

// Screens
import InterestScreen from '../screens/InterestScreen';
import PreferencesScreen from '../screens/PreferencesScreen';
import AudienceScreen from '../screens/AudienceScreen';
import ManageScreen from '../screens/ManageScreen';

const Stack = createStackNavigator();

const RallyRouter = ({status}) => {
    const navigation = useNavigation();
    const { colors } = useTheme();
    
    return (
        <Stack.Navigator 
            initialRouteName={status !== "Rallying" ? "Interest" : "Manage"}
            headerMode='screen'
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
                        color: '#FFF',
                        fontSize: 17
                    },
                    headerLeftContainerStyle: {
                        top: -42,
                        paddingLeft: 8,
                        height: 60,
                    }
                }
            }}>
            <Stack.Screen 
                name="Interest" 
                component={InterestScreen} 
                options={() => ({ 
                    headerShown: false,
                })}
            />
            <Stack.Screen 
                name="Manage" 
                component={ManageScreen} 
                options={() => ({ 
                    headerShown: false,
                })}
            />
            <Stack.Screen 
                name="Preferences" 
                component={PreferencesScreen} 
                options={({ route }) => ({ 
                    headerBackTitleVisible: false,
                    headerTitle: route.params.interest,
                    headerTintColor: '#FFF',
                })}
            />
            <Stack.Screen 
                name="Audience" 
                component={AudienceScreen} 
                options={() => ({ 
                    headerShown: false,
                })}
            />
        </Stack.Navigator>
    );
};

const mapStateToProps = ({ rally }) => {
    return { 
        interest: rally.interest,
        status: rally.status,
    };
}

export default connect(mapStateToProps)(RallyRouter);

/*
import React, { useState } from 'react';
import { StyleSheet, View, SectionList } from 'react-native';
import { Text } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

// Components
import RallyCard from '../components/RallyCard';

const RallyModal = () => {
    const [ selected, setSelected ] = useState(null);
    const { colors } = useTheme();

    const RALLY_TYPES = [
        {
            title: "General",
            data: [
                {
                    title: "Hangout",
                    caption: "Go with the flow and join friends with their plans.",
                    color: "#FD2D55",
                    activity: [
                        {
                            name: "Sam"
                        },
                        {
                            name: "Jim"
                        },
                        {
                            name: "Gus"
                        }
                    ]
                }
            ]
        },
        {
            title: "Focused",
            data: [
                {
                    title: "Nightlife",
                    caption: "Experience night-time events and activities with friends.",
                    color: "#C549E4",
                    activity: [
                        {
                            name: "Harry"
                        },
                        {
                            name: "Jim"
                        },
                    ]
                },
                {
                    title: "Drinks",
                    caption: "Grab a glass (or two) with friend at a local bar.",
                    color: "#E48549",
                    activity: []
                },
                {
                    title: "Food",
                    caption: "Get something to eat with friends at a local restaurant.",
                    color: "#E4C049",
                    activity: []
                },
                {
                    title: "Fitness",
                    caption: "",
                    color: "#49E470",
                    activity: []
                },
                {
                    title: "Events",
                    caption: "",
                    color: "#4994E4",
                    activity: []
                }
            ]
        }
    ];

    return (
        <View style={[styles.container, {backgroundColor: colors.background}]}>
            <Text 
                h3 style={[styles.titleStyle, {color: colors.text}]}>
                Join a rally
            </Text>
            <Text 
                style={styles.subtitleStyle}>
                Let your friends know what you are interested in doing. You can switch this at any time.
            </Text>
            <SectionList
                sections={RALLY_TYPES}
                keyExtractor={(item, index) => item + index}
                extraData={selected}
                renderSectionHeader={({ section: { title }}) => {
                    return (
                        <Text 
                            style={styles.sectionStyle}>
                            {title}
                        </Text>
                    )
                }}
                renderItem={({ item }) => {
                    return (
                        <RallyCard 
                            {...item} 
                            onPress={() => navigation.navigate('Preferences', { rally: item.title })} 
                        />
                    )
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        paddingTop: 70,
    },
    sectionStyle: {
        marginVertical: 20,
        color: "#B6B6B6",
        fontWeight: '500'
    },
    titleStyle: {
        textAlign: 'left',
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'stretch',
    },
    subtitleStyle: {
        textAlign: 'left',
        color: "#717273",
        alignSelf: 'stretch',
        marginBottom: 8,
        lineHeight: 21,
        fontWeight: '500'
    },
});

export default RallyModal;
*/