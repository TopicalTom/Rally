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
                            onPress={() => navigation.navigate('Preferences', { rally: item.title, color: item.color })} 
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