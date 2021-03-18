import React, { useState} from 'react';
import { StyleSheet, SectionList, View, TouchableOpacity } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { useNavigation, useTheme } from '@react-navigation/native';

// Components
import SocialCard from '../components/SocialCard';
import RallyButton from '../components/RallyButton';

const SocialScreen = () => {
    const [ filter, setFilter ] = useState("Active");
    const { colors } = useTheme();
    const navigation = useNavigation();

    const USER_DATA = {
        rally: "Nightlife",
        visibility: "All Friends",
        prompt: "None"
    };

    const SOCIAL_CIRCLE = [
        {
            title: "Social Circle",
            data: [
                {
                    name: "Natalie",
                    prompt: "Anyone else thinking Outcast tn?",
                    rally: "Nightlife",
                    profile: "",
                    coords: {
                        latitude: -47,
                        longitude: 23
                    }
                },
                {
                    name: "Shoshanna",
                    prompt: "Feeling a chill night",
                    rally: "Hangout",
                    profile: "",
                    coords: {
                        latitude: -47,
                        longitude: 23
                    }
                },
                {
                    name: "Andre",
                    prompt: "Hit me up if anything is going on tn",
                    rally: "Hangout",
                    profile: "",
                    coords: {
                        latitude: -47,
                        longitude: 23
                    }
                },
                {
                    name: "Shawn",
                    prompt: "Anyone else thinking Outcast tn?",
                    rally: "Nightlife",
                    profile: "",
                    coords: {
                        latitude: -47,
                        longitude: 23
                    }
                },
                {
                    name: "Shawn",
                    prompt: "Anyone else thinking Outcast tn?",
                    rally: "Nightlife",
                    profile: "",
                    coords: {
                        latitude: -47,
                        longitude: 23
                    }
                }
            ]
        }
    ];

    return (
        <View style={[styles.container, {backgroundColor: colors.background}]}>
            <Text 
                h2 style={[styles.titleStyle, {color: colors.text}]}>
                Rallying
            </Text>
            <RallyButton 
                text="Current Interest"
                secondaryText={USER_DATA.rally}
                action={() => navigation.navigate('Rally')}
            />
            <RallyButton 
                text="Discoverable"
                secondaryText={USER_DATA.visibility}
                action={() => navigation.navigate('Rally', { screen: 'Preferences', params: { rally: USER_DATA.rally}})}
            />
            <RallyButton 
                text="Prompt"
                secondaryText={USER_DATA.prompt}
                action={() => navigation.navigate('Rally', { screen: 'Preferences', params: { rally: USER_DATA.rally}})}
            />
            <SectionList  
                sections={SOCIAL_CIRCLE}
                keyExtractor={(item, index) => item + index}
                extraData={filter}
                renderSectionHeader={({ section: { title }}) => {
                    return (
                        <View style={styles.filterContainerStyle}>
                            <View style={styles.filterLabelStyle}>
                                <Text 
                                    style={[styles.subtitleStyle, {color: colors.text}]}>
                                    {title} 
                                </Text>
                                <Text 
                                    style={[styles.filterStyle, {color: colors.card}]}>
                                    ({filter})
                                </Text>
                            </View>
                            <Icon 
                                name="sort"
                                type="materialicons"
                                size={24}
                                color="#B6B6B6"
                                paddingLeft={8}
                            />
                        </View>
                    )
                }}
                renderItem={({ item }) => {
                    return (
                        <SocialCard 
                            {...item} 
                            onPress={() => navigation.navigate('Tab', { name: item.name })} 
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
        paddingTop: 120,
    },
    filterContainerStyle: {
        marginTop: 25,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    filterLabelStyle: {
        flexDirection: 'row',
        alignItems: 'flex-start',
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
        alignSelf: 'stretch',
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
    },
    filterStyle: {
        textAlign: 'left',
        alignSelf: 'stretch',
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        paddingLeft: 4
    },
});

export default SocialScreen;