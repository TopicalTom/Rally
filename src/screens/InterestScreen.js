import React, { useState, useEffect, useRef } from 'react';
import { Animated, StyleSheet, SectionList, View } from 'react-native';
import { Text, Button, } from 'react-native-elements';
import { useNavigation, useTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Store
import { connect } from 'react-redux';
import { stopRallying, clearCustomList } from '../actions';

// Data
import { rallyTypes } from '../data/rallyTypes';

// Components
import RallyCard from '../components/RallyCard';
import NavBar from '../components/NavBar';

const InterestScreen = ({ interest, prompt, status, user, squads, socialCircle, stopRallying, clearCustomList }) => {
    const { colors } = useTheme();
    const navigation = useNavigation();
    const offset = useRef(new Animated.Value(0)).current;
    const scrollDistance = status === "Rallying" ? 280 : 215;

    const animatedHeight = offset.interpolate({
        inputRange: [ 0, scrollDistance],
        outputRange: [ 0 + 135, -scrollDistance + 135],
        extrapolate: 'clamp'
    });

    const handleSelection = (item) => {
        clearCustomList();
        navigation.navigate('Audience', { 
            interest: item.title, 
            accent: item.accent,
            accentBorder: item.accentBorder,
            accentTint: item.accentTint,
            squad: item.squad
        });
    };

    const handleRally = () => {
        stopRallying();
        setTimeout(() => {
            navigation.navigate('Tab');
        }, 500);
    };

    const RALLY_TYPES = [
        {
            headerTitle: "General",
            data: rallyTypes(squads, socialCircle).filter(item => item.title === 'Hangout')
        },
        {
            headerTitle: "Focused",
            data: rallyTypes(squads, socialCircle).filter(item => item.title !== 'Hangout').sort((a, b) => a.activity.length < b.activity.length ? 1 : -1)
        }
    ];
    
    
    return (
        <SafeAreaView style={{flex: 1}} edges={'left', 'right'}>
            <NavBar title={'Select rally'} offset={offset} initial threshold={80} />
            <Animated.SectionList
                sections={RALLY_TYPES}
                style={{paddingHorizontal: 16}}
                keyExtractor={(item, index) => item + index}
                extraData={interest}
                scrollEnabled={true}
                ListHeaderComponent={() => {
                    return (
                        <>
                            <Text 
                                style={[styles.titleStyle, {color: colors.text}]}>
                                Select rally
                            </Text>
                            <Text 
                                style={[styles.subtitleStyle, {color: colors.text}]}>
                                Let your friends know what you are interested in doing. You can switch this at any time.
                            </Text>
                        </>
                    )
                }}
                renderSectionHeader={({ section: { headerTitle } }) => (
                    <Text style={[styles.sectionStyle, {color: colors.grey}]}>{headerTitle}</Text>
                )}
                stickySectionHeadersEnabled={false}
                renderItem={({item}) => {
                    return (
                        <RallyCard 
                            {...item} 
                            onPress={() => handleSelection({...item})} 
                        />
                    )
                }}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: offset } } }],
                    { useNativeDriver: true }
                )}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        //justifyContent: 'flex-start',
        paddingHorizontal: 16,
        //paddingTop: 80,
        //paddingTop: 80,
    },
    sectionStyle: {
        marginTop: 32,
        marginBottom: 16,
        //color: "#B6B6B6",
        fontSize: 15,
        //fontWeight: 'bold',
    },
    titleStyle: {
        paddingTop: 40,
        textAlign: 'left',
        fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 34,
        alignSelf: 'stretch',
    },
    subtitleStyle: {
        textAlign: 'left',
        //color: "#717273",
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

const mapStateToProps = ({ rally, authentication, squads, social }) => {
    return { 
        interest: rally.interest,
        status: rally.status,
        prompt: rally.prompt,
        user: authentication.user,
        squads: squads.squadList,
        socialCircle: social.socialCircle
    };
}

export default connect(mapStateToProps, { stopRallying, clearCustomList })(InterestScreen);

/*

import React, { useState } from 'react';
import { StyleSheet, ScrollView, FlatList } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { useTheme, useNavigation } from '@react-navigation/native';

// Components
import RallyCard from '../components/RallyCard';

// Store
import { connect } from 'react-redux';
import { stopRallying } from '../actions';

const InterestScreen = ({ interest, prompt, status, user, squads, stopRallying }) => {
    const { colors } = useTheme();
    const navigation = useNavigation();

    const handleRally = () => {
        stopRallying();
        setTimeout(() => {
            navigation.navigate('Tab');
        }, 500);
    };

    const RALLY_TYPES = [
        {
            title: "Hangout",
            caption: "Go with the flow and join friends with their plans.",
            accent: "rgba(253,45,85,1)",
            accentBorder: "rgba(253,45,85,.5)",
            accentTint: "rgba(253,45,85,.1)",
            squad: squads.hangout
        },
        {
            title: "Nightlife",
            caption: "Experience night-time events and activities with friends.",
            accent: "rgba(139,111,246,1)",
            accentBorder: "rgba(139,111,246,.5)",
            accentTint: "rgba(139,111,246,.1)",
            squad: squads.nightlife
        },
        {
            title: "Drinks",
            caption: "Grab a glass (or two) with friend at a local bar.",
            accent: "rgba(239,135,69,1)",
            accentBorder: "rgba(239,135,69,.5)",
            accentTint: "rgba(239,135,69,.1)",
            squad: squads.drinks
        },
        {
            title: "Food",
            caption: "Get something to eat with friends at a local restaurant.",
            accent: "rgba(252,183,40, 1)",
            accentBorder: "rgba(252,183,40, .5)",
            accentTint: "rgba(252,183,40, .1)",
            squad: squads.food
        },
        {
            title: "Fitness",
            caption: "Get fit with friends by engaging in healthy activities.",
            accent: "rgba(32,215,96,1)",
            accentBorder: "rgba(32,215,96,.5)",
            accentTint: "rgba(32,215,96,.1)",
            squad: squads.fitness
        },
        {
            title: "Entertainment",
            caption: "Experience day-time event & activities with friends.",
            accent: "rgba(68,173,255,1)",
            accentBorder: "rgba(68,173,255,.5)",
            accentTint: "rgba(68,173,255,.1)",
            squad: squads.entertainment
        }
    ];

    const highlightedRally = interest ? interest : 'Hangout';

    return (
        <ScrollView style={[styles.container, {backgroundColor: colors.background}]}>
            <Text 
                style={[styles.titleStyle, {color: colors.text}]}>
                {interest ? 'My rally' : 'Select rally'}
            </Text>
            <Text 
                style={styles.subtitleStyle}>
                Let your friends know what you are interested in doing. You can switch this at any time.
            </Text>
            <Text 
                style={[styles.sectionStyle, {color: colors.text}]}>
                {interest ? 'Selected' : 'General'}
            </Text>
            <FlatList
                data={RALLY_TYPES.filter((mode) => mode.title === highlightedRally)}
                keyExtractor={(item, index) => item + index}
                extraData={interest}
                scrollEnabled={false}
                renderItem={({item}) => {
                    return (
                        <>
                            <RallyCard 
                                {...item} 
                                onPress={() => navigation.navigate('Audience', { 
                                    interest: item.title, 
                                    accent: item.accent,
                                    accentBorder: item.accentBorder,
                                    accentTint: item.accentTint,
                                    squad: item.squad,
                                    prompt: status === "Rallying" ? prompt : ""
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
                {interest ? 'Other options' : 'Focused'}
            </Text>
            <FlatList
                data={RALLY_TYPES.filter((mode) => mode.title !== highlightedRally)}
                keyExtractor={(item, index) => item + index}
                extraData={interest}
                scrollEnabled={false}
                renderItem={({item}) => {
                    return (
                        <RallyCard 
                            {...item} 
                            onPress={() => navigation.navigate('Audience', { 
                                interest: item.title, 
                                accent: item.accent,
                                accentBorder: item.accentBorder,
                                accentTint: item.accentTint,
                                squad: item.squad
                            })} 
                        />
                    )
                }}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        //justifyContent: 'flex-start',
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        //paddingTop: 80,
        //paddingTop: 80,
    },
    sectionStyle: {
        marginTop: 32,
        marginBottom: 16,
        color: "#B6B6B6",
        fontSize: 17,
        fontWeight: 'bold',
    },
    titleStyle: {
        paddingTop: 40,
        textAlign: 'left',
        fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 34,
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

const mapStateToProps = ({ rally, authentication, squads }) => {
    return { 
        interest: rally.interest,
        status: rally.status,
        prompt: rally.prompt,
        user: authentication.user,
        squads: squads
    };
}

export default connect(mapStateToProps, { stopRallying })(InterestScreen);

*/

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

