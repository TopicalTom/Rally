import React, { useState, useEffect, useRef } from 'react';
import { Animated, StyleSheet, FlatList, View } from 'react-native';
import { Text, Button, } from 'react-native-elements';
import { useNavigation, useTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Store
import { connect } from 'react-redux';
import { updateSocialCircle } from '../actions';

// Template
import Screen from '../templates/Screen';

// Components
import ContentFilter from '../components/ContentFilter';
import RallyButton from '../components/RallyButton';
import SocialListing from '../components/SocialListing';

const SocialScreen = ({ status, interest, accent, prompt, type, squad, socialCircle, updateSocialCircle }) => {
    const { colors } = useTheme();
    const navigation = useNavigation();
    const offset = useRef(new Animated.Value(0)).current;
    const scrollDistance = status === "Rallying" ? 339 : 215;

    const animatedHeight = offset.interpolate({
        inputRange: [ 0, scrollDistance ],
        outputRange: [ 0 + 135, -scrollDistance + 135 ],
        extrapolate: 'clamp'
    });

    const animatedBorder = offset.interpolate({
        inputRange: [ 0, scrollDistance],
        outputRange: [ 0, 1 ],
        extrapolate: 'clamp'
    });

    // Grabs updated Social Details
    useEffect(() => {
        const unsubscribe = updateSocialCircle(interest);
        return () => unsubscribe;
    }, []);
    
    return (
        <Screen offset={offset} title={status}>
            <Animated.View style={{
                position: 'absolute',
                transform: [{translateY: animatedHeight}],
                left: 0,
                right: 0,
                zIndex: 1,
                marginHorizontal: 16,
                backgroundColor: colors.background,
                borderBottomColor: colors.background,
                borderBottomWidth: 0.5
            }}>
                <Text 
                    style={[styles.titleStyle, {color: colors.text}]}>
                    {status}
                </Text>
                <Text 
                    h5 style={[styles.subtitleStyle, {marginBottom: 24}]}>
                    {status !== "Browsing"
                        ?   'Broadcasting your social interests.'
                        :   'What your social circle is interested in.'
                    }
                </Text>
                {status !== "Browsing"
                    ?   <View style={{display: 'flex', flexDirection: 'column', height: 176, justifyContent: 'space-between'}}>
                            <RallyButton 
                                text="Your interest"
                                secondaryText={interest || "None"}
                                action={() => navigation.navigate('Rally', { 
                                    screen: 'Manage', 
                                    params: { 
                                        interest, 
                                        accent, 
                                        prompt, 
                                        type 
                                    }
                                })}
                            />
                            <RallyButton 
                                text="Visible to"
                                secondaryText={type || "All friends"}
                                action={() => navigation.navigate('Rally', { 
                                    screen: 'Audience', 
                                    params: { 
                                        interest, 
                                        accent, 
                                        prompt, 
                                        type, 
                                        squad: squad.filter(item => item.type === interest)[0]
                                    }
                                })}
                            />
                            <RallyButton 
                                text="Prompt"
                                secondaryText={prompt || "None"}
                                action={() => navigation.navigate('Rally', { 
                                    screen: 'Audience', 
                                    params: { 
                                        interest, 
                                        accent, 
                                        prompt, 
                                        type,
                                        squad: squad.filter(item => item.type === interest)[0] 
                                    }
                                })}
                            />
                        </View>
                    :   <>
                            <Button 
                                title="Share your interests"
                                onPress={() => navigation.navigate('Rally', { 
                                    screen: 'Interest'
                                })}
                                titleStyle={{ color: colors.text}}
                                buttonStyle={[styles.buttonStyle, { borderColor: colors.border, backgroundColor: colors.card}]}
                            /> 
                        </>
                }
                <ContentFilter label="Social Circle" />
            </Animated.View>
            <Animated.FlatList
                data={socialCircle}
                keyExtractor={(item, index) => item + index}
                contentContainerStyle={{paddingTop: status === "Rallying" ? 392 : 268, paddingBottom: status === "Rallying" ? 90 : 120}}
                scrollEnabled={true}
                decelerationRate="fast"
                snapToOffsets={status === "Rallying" ? [0, 339] : [0, 215]}
                scrollEventThrottle={16}
                renderItem={({item, index}) => {
                    return (
                        <SocialListing 
                            {...item} 
                            key={index}
                            onPress={() => navigation.navigate('Screen', { screen: 'Chat', params: { name: item.name, profile: item.profile, rally: item.rally } })}
                        />
                    )
                }}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: offset } } }],
                    { useNativeDriver: true },
                    {listener: (event) => console.log(event)}
                )}
            />
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    swipeCardStyle: {
        height: 180,
        borderRadius: 8,
        width: '100%',
        marginBottom: 16,
        paddingHorizontal: 16,
        paddingVertical: 24
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
        fontSize: 34
    },
    buttonStyle: {
        height: 52,
        borderRadius: 10,
        textAlign: 'center',
        justifyContent: 'space-around',
        borderWidth: 1,
        //marginTop: 20
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

const mapStateToProps = ({ rally, authentication, social, squads }) => {
    return { 
        status: rally.status,
        interest: rally.interest, 
        prompt: rally.prompt,  
        type: rally.type,  
        accent: rally.accent,
        accentBorder: rally.accentBorder,
        accentTint: rally.accentTint  ,
        user: authentication.user,
        socialCircle: social.socialCircle,
        squad: squads.squadList
    };
}

export default connect(mapStateToProps, { updateSocialCircle })(SocialScreen);

/*
                            <RallyButton 
                                text="My Interest"
                                secondaryText={interest || "None"}
                                action={() => navigation.navigate('Rally', { 
                                    screen: 'Manage', 
                                    params: { 
                                        interest, 
                                        accent, 
                                        prompt, 
                                        type 
                                    }
                                })}
                            />
                            <RallyButton 
                                text="Prompt"
                                secondaryText={prompt || "None"}
                                action={() => navigation.navigate('Rally', { 
                                    screen: 'Audience', 
                                    params: { 
                                        interest, 
                                        accent, 
                                        prompt, 
                                        type,
                                        squad: squad.filter(item => item.type === interest)[0] 
                                    }
                                })}
                            />
                            <RallyButton 
                                text="Discoverable"
                                secondaryText={type || "All friends"}
                                action={() => navigation.navigate('Rally', { 
                                    screen: 'Audience', 
                                    params: { 
                                        interest, 
                                        accent, 
                                        prompt, 
                                        type, 
                                        squad: squad.filter(item => item.type === interest)[0]
                                    }
                                })}
                            />

*/

/*
import React, { useState, useEffect, useRef } from 'react';
import { Animated, StyleSheet, FlatList, View } from 'react-native';
import { Text, Button, } from 'react-native-elements';
import { useNavigation, useTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Store
import { connect } from 'react-redux';
import { updateSocialCircle } from '../actions';

// Template
import Screen from '../templates/Screen';

// Components
import ContentFilter from '../components/ContentFilter';
import RallyButton from '../components/RallyButton';
import SocialListing from '../components/SocialListing';

const SocialScreen = ({ status, interest, accent, prompt, type, socialCircle, updateSocialCircle }) => {
    const { colors } = useTheme();
    const navigation = useNavigation();
    const offset = useRef(new Animated.Value(0)).current;
    //socialCircle.sort(item => item.rally === interest).reverse()
    const scrollDistance = status === "Rallying" ? 280 : 215;

    const animatedHeight = offset.interpolate({
        inputRange: [ 0, scrollDistance],
        outputRange: [ 0 + 32, -scrollDistance + 32],
        extrapolate: 'clamp'
    });

    // Grabs updated Social Details
    useEffect(() => {
        const unsubscribe = updateSocialCircle(interest);
        return () => unsubscribe;
    }, []);
    
    return (
        <SafeAreaView mode="padding" style={styles.container} edges={['right', 'left']}>
            <Animated.View style={{
                position: 'absolute',
                transform: [{translateY: animatedHeight}],
                left: 0,
                right: 0,
                zIndex: 10,
                paddingHorizontal: 16,
                backgroundColor: colors.background
            }}>
                    <Text 
                        h2 style={[styles.titleStyle, {color: colors.text}]}>
                        {status}
                    </Text>
                    {status !== "Browsing"
                        ?   <>
                                <RallyButton 
                                    text="My Interest"
                                    secondaryText={interest || "None"}
                                    action={() => navigation.navigate('Rally')}
                                />
                                <RallyButton 
                                    text="Prompt"
                                    secondaryText={prompt || "None"}
                                    action={() => navigation.navigate('Rally', { 
                                        screen: 'Preferences', 
                                        params: { 
                                            interest, 
                                            accent, 
                                            prompt, 
                                            type 
                                        }
                                    })}
                                />
                                <RallyButton 
                                    text="Discoverable"
                                    secondaryText={type || "All friends"}
                                    action={() => navigation.navigate('Rally', { 
                                        screen: 'Preferences', 
                                        params: { 
                                            interest, 
                                            accent, 
                                            prompt, 
                                            type 
                                        }})}
                                />
                            </>
                        :   <>
                                <Text 
                                    h5 style={styles.subtitleStyle}>
                                    What your social circle is interested in.
                                </Text>
                                <Button 
                                    title="Join a Rally"
                                    onPress={() => navigation.navigate('Rally')}
                                    titleStyle={{ color: colors.text}}
                                    buttonStyle={[styles.buttonStyle, { borderColor: colors.border, backgroundColor: colors.background}]}
                                /> 
                            </>
                    }
                    <ContentFilter label="Social Circle" />
            </Animated.View>
            <Animated.FlatList
                data={socialCircle}
                keyExtractor={(item, index) => item + index}
                contentContainerStyle={{paddingTop: status === "Rallying" ? 335 : 265, paddingBottom: status === "Rallying" ? 80 : 120}}
                scrollEnabled={true}
                decelerationRate="fast"
                snapToOffsets={status === "Rallying" ? [0, 280] : [0, 215]}
                scrollEventThrottle={16}
                renderItem={({item, index}) => {
                    return (
                        <SocialListing 
                            {...item} 
                            key={index}
                            onPress={() => navigation.navigate('Screen', { screen: 'Chat', params: { name: item.name, profile: item.profile, rally: item.rally } })}
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
        flex: 1,
        position: 'relative'
    },
    swipeCardStyle: {
        height: 180,
        borderRadius: 8,
        width: '100%',
        marginBottom: 16,
        paddingHorizontal: 16,
        paddingVertical: 24
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
        marginTop: 20
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

const mapStateToProps = ({ rally, authentication, social }) => {
    return { 
        status: rally.status,
        interest: rally.interest, 
        prompt: rally.prompt,  
        type: rally.type,  
        accent: rally.accent,
        accentBorder: rally.accentBorder,
        accentTint: rally.accentTint  ,
        user: authentication.user,
        socialCircle: social.socialCircle,
    };
}

export default connect(mapStateToProps, { updateSocialCircle })(SocialScreen);

*/

/*
import React, { useState, useEffect, useRef } from 'react';
import { Animated, StyleSheet, FlatList, View } from 'react-native';
import { Text, Icon, Button, } from 'react-native-elements';
import { useNavigation, useTheme } from '@react-navigation/native';

// Store
import { connect } from 'react-redux';
import { updateSocialCircle } from '../actions';

// Template
import Screen from '../templates/Screen';

// Components
import ContentFilter from '../components/ContentFilter';
import AnimatedHeader from '../components/AnimatedHeader';
import StickyHeader from '../components/StickyHeader';
import SocialCard from '../components/SocialCard';
import RallyButton from '../components/RallyButton';
import SocialListing from '../components/SocialListing';

const SocialScreen = ({ status, interest, accent, prompt, type, socialCircle, updateSocialCircle }) => {
    const { colors } = useTheme();
    const navigation = useNavigation();
    const offset = useRef(new Animated.Value(0)).current;
    //socialCircle.sort(item => item.rally === interest).reverse()

    // Grabs updated Social Details
    useEffect(() => {
        const unsubscribe = updateSocialCircle(interest);
        return () => unsubscribe;
    }, []);
    
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
                {status !== "Browsing"
                    ?   <>
                            <RallyButton 
                                text="My Interest"
                                secondaryText={interest || "None"}
                                action={() => navigation.navigate('Mode')}
                            />
                            <RallyButton 
                                text="Prompt"
                                secondaryText={prompt || "None"}
                                action={() => navigation.navigate('Mode', { 
                                    screen: 'Preferences', 
                                    params: { 
                                        interest, 
                                        accent, 
                                        prompt, 
                                        type 
                                    }
                                })}
                            />
                            <RallyButton 
                                text="Discoverable"
                                secondaryText={type || "All friends"}
                                action={() => navigation.navigate('Mode', { 
                                    screen: 'Preferences', 
                                    params: { 
                                        interest, 
                                        accent, 
                                        prompt, 
                                        type 
                                    }})}
                            />
                        </>
                    :   <>
                            <Text 
                                h5 style={styles.subtitleStyle}>
                                Find out what your social circle is doing
                            </Text>
                            <Button 
                                title="Share my interest"
                                onPress={() => navigation.navigate('Mode')}
                                titleStyle={{ color: colors.text}}
                                buttonStyle={[styles.buttonStyle, { borderColor: colors.border, backgroundColor: colors.background}]}
                            /> 
                        </>
                }
            </AnimatedHeader>
            <StickyHeader 
                offset={offset} 
                scrollDistance={280}>
                <ContentFilter 
                    label="Social Circle" 
                />
            </StickyHeader>
            <FlatList
                data={socialCircle}
                keyExtractor={(item, index) => item + index}
                contentContainerStyle={{paddingTop: 430}}
                scrollEnabled={true}
                scrollEventThrottle={16}
                renderItem={({item, index}) => {
                    return (
                        <SocialListing 
                            {...item} 
                            key={index}
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
    swipeCardStyle: {
        height: 180,
        borderRadius: 8,
        width: '100%',
        marginBottom: 16,
        paddingHorizontal: 16,
        paddingVertical: 24
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

const mapStateToProps = ({ rally, authentication, social }) => {
    return { 
        status: rally.status,
        interest: rally.interest, 
        prompt: rally.prompt,  
        type: rally.type,  
        accent: rally.accent,
        accentBorder: rally.accentBorder,
        accentTint: rally.accentTint  ,
        user: authentication.user,
        socialCircle: social.socialCircle,
    };
}

export default connect(mapStateToProps, { updateSocialCircle })(SocialScreen);

*/
