import React, { useState } from 'react';
import { StyleSheet, View, SectionList } from 'react-native';
import { Text } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

// Components
import RallyCard from '../components/RallyCard';

const InterestScreen = () => {
    const [ selected, setSelected ] = useState(null);
    const { colors } = useTheme();
    const navigation = useNavigation();

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

    //#49E470 

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
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        paddingTop: 80,
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

export default InterestScreen;