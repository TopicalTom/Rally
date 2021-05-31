import firestore from '@react-native-firebase/firestore';
import React, { useState, useEffect, useRef } from 'react';
import { Animated, StyleSheet, FlatList, View } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { useNavigation, useTheme } from '@react-navigation/native';

// Template
import Screen from '../templates/Screen';

// Components
import ContentFilter from '../components/ContentFilter';
import AnimatedHeader from '../components/AnimatedHeader';
import StickyHeader from '../components/StickyHeader';
import SocialCard from '../components/SocialCard';
import RallyButton from '../components/RallyButton';

// Store
import { connect } from 'react-redux';
import { fetchSocialCircle } from '../actions';

const SocialScreen = ({ status, interest, accent, user }) => {
    const { colors } = useTheme();
    const navigation = useNavigation();
    const offset = useRef(new Animated.Value(0)).current;
    const [ socialCircle, setSocialCircle ] = useState([]);

    //const filteredSocialCircle = socialCircle

    useEffect(() => {
        const socialCircleRef = firestore().collection("social");
        const unsubscribe = socialCircleRef
            .where("status", "==", 'Rallying')
            .where("discoverable", "array-contains", 'iOEaqDpLSbelERq4rZdjVyWq8PV2')
            .onSnapshot((querySnapshot) => {
                const data = querySnapshot.docs.map(doc => ({
                    name: doc._data.name,
                    profile: doc._data.profile,
                    prompt: doc._data.prompt,
                    rally: doc._data.rally
                }));
                setSocialCircle(data);
            })

        return () => unsubscribe;
    }, []);

    useEffect(async () => {
        const socialCircleRef = firestore().collection("social");
        await socialCircleRef
            .where("status", "==", 'Rallying')
            .where("discoverable", "array-contains", 'iOEaqDpLSbelERq4rZdjVyWq8PV2')
            .get()
            .then((querySnapshot) => {
                const data = querySnapshot.docs.map(doc => ({
                    name: doc._data.name,
                    profile: doc._data.profile,
                    prompt: doc._data.prompt,
                    rally: doc._data.rally
                }));
                setSocialCircle(data);
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
    }, []);

    const SOCIAL_CIRCLE = [
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
        },
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
    ];

    console.log(socialCircle);

    return (
        <Screen 
            title={status}
            offset={offset}
            >
            <AnimatedHeader animatedValue={offset} headerHeight={360}>
                <Text 
                    h2 style={[styles.titleStyle, {color: colors.text}]}>
                    {status}
                </Text>
                <RallyButton 
                    text="My Interest"
                    secondaryText={interest || "None"}
                    action={() => navigation.navigate('Mode')}
                />
                <RallyButton 
                    text="Discoverable"
                    secondaryText="All friends"
                    action={() => navigation.navigate('Mode', { screen: 'Preferences', params: { interest, accent }})}
                />
                <RallyButton 
                    text="Prompt"
                    secondaryText="None"
                    action={() => navigation.navigate('Mode', { screen: 'Preferences', params: { interest, accent }})}
                />
            </AnimatedHeader>
            <StickyHeader 
                offset={offset} 
                scrollDistance={280}>
                <ContentFilter 
                    label="Social Circle" 
                />
            </StickyHeader>
            <FlatList
                data={status === "Browsing" ? socialCircle : socialCircle.sort(item => item.rally === interest).reverse()}
                keyExtractor={(item, index) => item + index}
                contentContainerStyle={{paddingTop: 430}}
                scrollEnabled={true}
                scrollEventThrottle={16}
                style={{ paddingHorizontal: 16 }}
                renderItem={({item}) => {
                    return (
                        <SocialCard 
                            {...item} 
                            onPress={() => navigation.navigate('Screen', { screen: 'Connect', params: { name: item.name, profile: item.profile, rally: item.rally } })} 
                        />
                    )
                }}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: offset } } }],
                    { useNativeDriver: false }
                )}
            />
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: "#fff",
        position: 'relative'
    },
    headerContainerStyle: {
        textAlign: 'left',
        paddingTop: 55,
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'stretch',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        marginHorizontal: 16,
        height: 100,
        zIndex: 900
    },
    headerTitleStyle: {
        textAlign: 'left',
        paddingTop: 55,
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'stretch',
        position: 'absolute',
        top: 0,
        left: 0,
        fontSize: 16,
        zIndex: 1000
    },
    titleStyle: {
        textAlign: 'left',
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'stretch',
    },
    buttonStyle: {
        height: 52,
        borderRadius: 10,
        textAlign: 'center',
        justifyContent: 'space-around',
        borderWidth: 1,
        marginVertical: 20
    },
    floatingButtonStyle: {
        position: "absolute",
        bottom: 10,
        zIndex: 90,
        height: 36,
        right: 0,
        left: 0,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    mapButtonStyle: {
        width: 100,
        height: 36,
        textAlign: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mapTitleStyle: {
        paddingLeft: 6,
        paddingRight: 10,
        color: "#6D6D6D",
        //color: "#FFF",
        fontWeight: '500'
    },
    subtitleStyle: {
        textAlign: 'left',
        color: "#717273",
        alignSelf: 'stretch',
        marginBottom: 8,
        lineHeight: 21,
        fontWeight: '500'
    },
    sectionStyle: {
        textAlign: 'left',
        color: "#717273",
        alignSelf: 'stretch',
        marginBottom: 8,
        lineHeight: 21,
        fontSize: 16,
        fontWeight: 'bold',
        //marginTop: 35
    },
});

const mapStateToProps = ({ rally, authentication }) => {
    return { 
        status: rally.status,
        interest: rally.interest,  
        accent: rally.accent,
        accentBorder: rally.accentBorder,
        accentTint: rally.accentTint  ,
        user: authentication.user
    };
}

export default connect(mapStateToProps, { fetchSocialCircle })(SocialScreen);

/*
import React, { useState, useRef } from 'react';
import { Animated, StyleSheet, FlatList, View } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { useNavigation, useTheme } from '@react-navigation/native';

// Template
import Screen from '../templates/Screen';

// Components
import ContentFilter from '../components/ContentFilter';
import AnimatedHeader from '../components/AnimatedHeader';
import StickyHeader from '../components/StickyHeader';
import SocialCard from '../components/SocialCard';
import RallyButton from '../components/RallyButton';

// Store
import { connect } from 'react-redux';

const SocialScreen = ({ status, interest, accent }) => {
    const { colors } = useTheme();
    const navigation = useNavigation();
    const offset = useRef(new Animated.Value(0)).current;

    const SOCIAL_CIRCLE = [
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
        },
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
    ];

    return (
        <Screen 
            title={status}
            offset={offset}
            >
            <AnimatedHeader animatedValue={offset} headerHeight={360}>
                <Text 
                    h2 style={[styles.titleStyle, {color: colors.text}]}>
                    {status}
                </Text>
                <RallyButton 
                    text="My Interest"
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
            </AnimatedHeader>
            <StickyHeader 
                offset={offset} 
                scrollDistance={280}>
                <ContentFilter 
                    label="Social Circle" 
                />
            </StickyHeader>
            <FlatList
                data={SOCIAL_CIRCLE}
                keyExtractor={(item, index) => item + index}
                contentContainerStyle={{paddingTop: 430}}
                scrollEnabled={true}
                scrollEventThrottle={16}
                style={{ paddingHorizontal: 16 }}
                renderItem={({item}) => {
                    return (
                        <SocialCard 
                            {...item} 
                            onPress={() => navigation.navigate('Tab', { name: item.name })} 
                        />
                    )
                }}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: offset } } }],
                    { useNativeDriver: false }
                )}
            />
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: "#fff",
        position: 'relative'
    },
    headerContainerStyle: {
        textAlign: 'left',
        paddingTop: 55,
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'stretch',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        marginHorizontal: 16,
        height: 100,
        zIndex: 900
    },
    headerTitleStyle: {
        textAlign: 'left',
        paddingTop: 55,
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'stretch',
        position: 'absolute',
        top: 0,
        left: 0,
        fontSize: 16,
        zIndex: 1000
    },
    titleStyle: {
        textAlign: 'left',
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'stretch',
    },
    buttonStyle: {
        height: 52,
        borderRadius: 10,
        textAlign: 'center',
        justifyContent: 'space-around',
        borderWidth: 1,
        marginVertical: 20
    },
    floatingButtonStyle: {
        position: "absolute",
        bottom: 10,
        zIndex: 90,
        height: 36,
        right: 0,
        left: 0,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    mapButtonStyle: {
        width: 100,
        height: 36,
        textAlign: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mapTitleStyle: {
        paddingLeft: 6,
        paddingRight: 10,
        color: "#6D6D6D",
        //color: "#FFF",
        fontWeight: '500'
    },
    subtitleStyle: {
        textAlign: 'left',
        color: "#717273",
        alignSelf: 'stretch',
        marginBottom: 8,
        lineHeight: 21,
        fontWeight: '500'
    },
    sectionStyle: {
        textAlign: 'left',
        color: "#717273",
        alignSelf: 'stretch',
        marginBottom: 8,
        lineHeight: 21,
        fontSize: 16,
        fontWeight: 'bold',
        //marginTop: 35
    },
});

const mapStateToProps = ({ rally }) => {
    return { 
        status: rally.status,
        interest: rally.interest,  
        accent: rally.accent,
        accentBorder: rally.accentBorder,
        accentTint: rally.accentTint     
    };
}

export default connect(mapStateToProps)(SocialScreen);

*/

/*
import React, { useState, useEffect, useRef } from 'react';
import { Animated, StyleSheet, ScrollView, SectionList, FlatList, TouchableOpacity, View } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { useNavigation, useTheme } from '@react-navigation/native';

// Components
import SocialCard from '../components/SocialCard';
import RallyButton from '../components/RallyButton';
import AnimatedHeader from '../components/AnimatedHeader';
import AnimatedList from '../components/AnimatedList';
import AnimatedTitle from '../components/AnimatedTitle';

// Store
import { connect } from 'react-redux';

const SocialScreen = ({ status, interest, accent }) => {
    const [ filter, setFilter ] = useState("Active");
    const { colors } = useTheme();
    const navigation = useNavigation();
    const offset = useRef(new Animated.Value(0)).current;

    const animatedMargin = offset.interpolate({
        inputRange: [ 0, 360 ],
        outputRange: [ 360, 0 ],
        extrapolate: 'clamp'
    });

    const SOCIAL_CIRCLE = [
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
        },
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
    ];

    return (
        <View style={[styles.container, {backgroundColor: colors.background}]}>
            <AnimatedTitle animatedValue={offset}>
                <Text 
                    h3 style={[styles.headerTitleStyle, {color: colors.text}]}>
                    {status}
                </Text>
            </AnimatedTitle>
            <AnimatedHeader animatedValue={offset} headerHeight={360}>
                <Text 
                    h2 style={[styles.titleStyle, {color: colors.text}]}>
                    {status}
                </Text>
                <RallyButton 
                    text="My Interest"
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
            </AnimatedHeader>
            <AnimatedList animatedValue={offset} scrollDistance={280}>
                <View style={styles.filterContainerStyle}>
                    <View style={styles.filterLabelStyle}>
                        <Text 
                            style={[styles.sectionStyle, {color: colors.text}]}>
                            Social Circle
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
            </AnimatedList>
            <FlatList
                data={SOCIAL_CIRCLE}
                keyExtractor={(item, index) => item + index}
                contentContainerStyle={{paddingTop: 430}}
                scrollEnabled={true}
                scrollEventThrottle={16}
                style={{ paddingHorizontal: 16 }}
                renderItem={({item}) => {
                    return (
                        <SocialCard 
                            {...item} 
                            onPress={() => navigation.navigate('Tab', { name: item.name })} 
                        />
                    )
                }}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: offset } } }],
                    { useNativeDriver: false }
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: "#fff",
        position: 'relative'
    },
    headerContainerStyle: {
        textAlign: 'left',
        paddingTop: 55,
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'stretch',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        marginHorizontal: 16,
        height: 100,
        zIndex: 900
    },
    headerTitleStyle: {
        textAlign: 'left',
        paddingTop: 55,
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'stretch',
        position: 'absolute',
        top: 0,
        left: 0,
        fontSize: 16,
        zIndex: 1000
    },
    titleStyle: {
        textAlign: 'left',
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'stretch',
    },
    buttonStyle: {
        height: 52,
        borderRadius: 10,
        textAlign: 'center',
        justifyContent: 'space-around',
        borderWidth: 1,
        marginVertical: 20
    },
    floatingButtonStyle: {
        position: "absolute",
        bottom: 10,
        zIndex: 90,
        height: 36,
        right: 0,
        left: 0,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    mapButtonStyle: {
        width: 100,
        height: 36,
        textAlign: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mapTitleStyle: {
        paddingLeft: 6,
        paddingRight: 10,
        color: "#6D6D6D",
        //color: "#FFF",
        fontWeight: '500'
    },
    subtitleStyle: {
        textAlign: 'left',
        color: "#717273",
        alignSelf: 'stretch',
        marginBottom: 8,
        lineHeight: 21,
        fontWeight: '500'
    },
    sectionStyle: {
        textAlign: 'left',
        color: "#717273",
        alignSelf: 'stretch',
        marginBottom: 8,
        lineHeight: 21,
        fontSize: 16,
        fontWeight: 'bold',
        //marginTop: 35
    },
    mapStyle: {
        height: 180,
        borderRadius: 10,
        overflow: 'hidden'
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
    filterStyle: {
        textAlign: 'left',
        alignSelf: 'stretch',
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        paddingLeft: 4
    },
});

const mapStateToProps = ({ rally }) => {
    return { 
        status: rally.status,
        interest: rally.interest,  
        accent: rally.accent,
        accentBorder: rally.accentBorder,
        accentTint: rally.accentTint     
    };
}

export default connect(mapStateToProps)(SocialScreen);

*/

/*
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

*/