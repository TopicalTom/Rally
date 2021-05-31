import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

// Components
import RallyCard from '../components/RallyCard';

// Store
import { connect } from 'react-redux';
import { endRally, stopRallying } from '../actions';

const InterestScreen = ({ interest, user, stopRallying }) => {
    const { colors } = useTheme();
    const navigation = useNavigation();

    const handleRally = () => {
        const { uid, profile, displayName } = user;
        stopRallying();
        endRally(profile, displayName);
        navigation.navigate('Tab');
    };

    const RALLY_TYPES = [
        {
            title: "Hangout",
            caption: "Go with the flow and join friends with their plans.",
            accent: "rgba(253,45,85,1)",
            accentBorder: "rgba(253,45,85,.5)",
            accentTint: "rgba(253,45,85,.1)",
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
        },
        {
            title: "Nightlife",
            caption: "Experience night-time events and activities with friends.",
            accent: "rgba(139,111,246,1)",
            accentBorder: "rgba(139,111,246,.5)",
            accentTint: "rgba(139,111,246,.1)",
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
            accent: "rgba(239,135,69,1)",
            accentBorder: "rgba(239,135,69,.5)",
            accentTint: "rgba(239,135,69,.1)",
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
            title: "Food",
            caption: "Get something to eat with friends at a local restaurant.",
            accent: "rgba(252,183,40, 1)",
            accentBorder: "rgba(252,183,40, .5)",
            accentTint: "rgba(252,183,40, .1)",
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
            title: "Fitness",
            caption: "Get fit with friends by engaging in healthy activities.",
            accent: "rgba(32,215,96,1)",
            accentBorder: "rgba(32,215,96,.5)",
            accentTint: "rgba(32,215,96,.1)",
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
            title: "Entertainment",
            caption: "Experience day-time event & activities with friends.",
            accent: "rgba(68,173,255,1)",
            accentBorder: "rgba(68,173,255,.5)",
            accentTint: "rgba(68,173,255,.1)",
            activity: [
                {
                    name: "Harry"
                },
                {
                    name: "Jim"
                },
            ]
        }
    ];

    const highlightedRally = interest ? interest : 'Hangout';

    return (
        <View style={[styles.container, {backgroundColor: colors.background}]}>
            <Text 
                h3 style={[styles.titleStyle, {color: colors.text}]}>
                {interest ? 'Manage rally' : 'Join a rally'}
            </Text>
            <Text 
                style={styles.subtitleStyle}>
                Let your friends know what you are interested in doing. You can switch this at any time.
            </Text>
            <Text 
                style={[styles.sectionStyle, {color: colors.text}]}>
                {interest ? 'Current' : 'General'}
            </Text>
            <FlatList
                data={RALLY_TYPES.filter((mode) => mode.title === highlightedRally)}
                keyExtractor={(item, index) => item + index}
                extraData={interest}
                scrollEnabled={false}
                contentContainerStyle={{display: 'flex', flexDirection: 'column'}}
                renderItem={({item}) => {
                    return (
                        <>
                            <RallyCard 
                                {...item} 
                                onPress={() => navigation.navigate('Preferences', { 
                                    interest: item.title, 
                                    accent: item.accent,
                                    accentBorder: item.accentBorder,
                                    accentTint: item.accentTint
                                })} 
                            />
                            {interest && 
                                <Button 
                                    title="Cancel rally"
                                    onPress={handleRally}
                                    titleStyle={{ color: colors.text}}
                                    buttonStyle={[styles.buttonStyle, { borderColor: colors.border, backgroundColor: colors.background}]}
                                />
                            }
                        </>
                    )
                }}
            />
            <Text 
                style={[styles.sectionStyle, {color: colors.text}]}>
                {interest ? 'Other' : 'Focused'}
            </Text>
            <FlatList
                data={RALLY_TYPES.filter((mode) => mode.title !== highlightedRally)}
                keyExtractor={(item, index) => item + index}
                extraData={interest}
                scrollEnabled={false}
                //contentContainerStyle={{paddingTop: 350}}
                renderItem={({item}) => {
                    return (
                        <RallyCard 
                            {...item} 
                            onPress={() => navigation.navigate('Preferences', { 
                                interest: item.title, 
                                accent: item.accent,
                                accentBorder: item.accentBorder,
                                accentTint: item.accentTint
                            })} 
                        />
                    )
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        paddingTop: 80,
    },
    sectionStyle: {
        marginTop: 32,
        marginBottom: 16,
        color: "#B6B6B6",
        fontSize: 16,
        fontWeight: 'bold',
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
    buttonStyle: {
        height: 52,
        borderRadius: 10,
        textAlign: 'center',
        justifyContent: 'space-around',
        borderWidth: 1,
        //marginVertical: 10
    },
});

const mapStateToProps = ({ rally, authentication }) => {
    return { 
        interest: rally.interest,
        user: authentication.user
    };
}

export default connect(mapStateToProps, { stopRallying })(InterestScreen);

/*
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
                            onPress={() => navigation.navigate('Preferences', { 
                                interest: item.title, 
                                accent: item.accent,
                                accentBorder: item.accentBorder,
                                accentTint: item.accentTint
                            })} 
                        />
                    )
                }}
            />

                const RALLY_TYPES = [
        {
            title: "General",
            data: [
                {
                    title: "Hangout",
                    caption: "Go with the flow and join friends with their plans.",
                    accent: "rgba(253,45,85,1)",
                    accentBorder: "rgba(253,45,85,.5)",
                    accentTint: "rgba(253,45,85,.1)",
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
                    accent: "rgba(139,111,246,1)",
                    accentBorder: "rgba(139,111,246,.5)",
                    accentTint: "rgba(139,111,246,.1)",
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
                    accent: "rgba(239,135,69,1)",
                    accentBorder: "rgba(239,135,69,.5)",
                    accentTint: "rgba(239,135,69,.1)",
                    activity: []
                },
                {
                    title: "Food",
                    caption: "Get something to eat with friends at a local restaurant.",
                    accent: "rgba(252,183,40, 1)",
                    accentBorder: "rgba(252,183,40, .5)",
                    accentTint: "rgba(252,183,40, .1)",
                    activity: []
                },
                {
                    title: "Fitness",
                    caption: "",
                    accent: "rgba(32,215,96,1)",
                    accentBorder: "rgba(32,215,96,.5)",
                    accentTint: "rgba(32,215,96,.1)",
                    activity: []
                },
                {
                    title: "Entertainment",
                    caption: "",
                    accent: "rgba(68,173,255,1)",
                    accentBorder: "rgba(68,173,255,.5)",
                    accentTint: "rgba(68,173,255,.1)",
                    activity: []
                }
            ]
        }
    ];
*/

