import React, { useState} from 'react';
import { StyleSheet, SectionList, View, TouchableOpacity } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { useNavigation, useTheme } from '@react-navigation/native';

// Components
import SocialCard from '../components/SocialCard';
import RallyButton from '../components/RallyButton';

// Store
import { connect } from 'react-redux';

const SocialScreen = ({ status, interest, accent }) => {
    const [ filter, setFilter ] = useState("Active");
    const { colors } = useTheme();
    const navigation = useNavigation();

    const SOCIAL_CIRCLE = [
        {
            title: "Social Circle",
            data: [
                {
                    name: "Natalie",
                    prompt: "Anyone else thinking Outcast tn?",
                    rally: "Nightlife",
                    profile: "https://images.unsplash.com/photo-1558507652-2d9626c4e67a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
                    coords: {
                        latitude: -47,
                        longitude: 23
                    }
                },
                {
                    name: "Shawn",
                    prompt: "Long week, I need to go out...",
                    rally: "Nightlife",
                    profile: "https://images.unsplash.com/photo-1601582589907-f92af5ed9db8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
                    coords: {
                        latitude: -47,
                        longitude: 23
                    }
                },
                {
                    name: "Calista",
                    prompt: "Feeling a chill night",
                    rally: "Hangout",
                    profile: "https://images.unsplash.com/photo-1614514161228-9f1543003961?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
                    coords: {
                        latitude: -47,
                        longitude: 23
                    }
                },
                {
                    name: "Andre",
                    prompt: "Hit me up if anything is going on tn",
                    rally: "Hangout",
                    profile: "https://images.unsplash.com/photo-1484517186945-df8151a1a871?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=687&q=80",
                    coords: {
                        latitude: -47,
                        longitude: 23
                    }
                },
                {
                    name: "Shawn",
                    prompt: "Anyone else thinking Outcast tn?",
                    rally: "Nightlife",
                    profile: "https://images.unsplash.com/photo-1527047614336-194da60dacd9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
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
                {status}
            </Text>
            <RallyButton 
                text="Current Interest"
                secondaryText={interest || "None"}
                action={() => navigation.navigate('Rally')}
            />
            <RallyButton 
                text="Discoverable"
                secondaryText="All friends"
                action={() => navigation.navigate('Rally', { screen: 'Preferences', params: { interest, accent }})}
            />
            <RallyButton 
                text="Prompt"
                secondaryText="None"
                action={() => navigation.navigate('Rally', { screen: 'Preferences', params: { interest, accent }})}
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
                                    style={[styles.filterStyle, {color: '#6D6D6D'}]}>
                                    ({filter})
                                </Text>
                            </View>
                            <Icon 
                                name="sort"
                                type="materialicons"
                                size={24}
                                color="#6D6D6D"
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

const mapStateToProps = ({ rally }) => {
    return { 
        status: rally.status,
        interest: rally.interest,  
        accent: rally.accent
    };
}

export default connect(mapStateToProps)(SocialScreen);