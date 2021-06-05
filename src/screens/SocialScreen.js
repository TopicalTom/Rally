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

const SocialScreen = ({ status, interest, accent, prompt, type, socialCircle, updateSocialCircle }) => {
    const { colors } = useTheme();
    const navigation = useNavigation();
    const offset = useRef(new Animated.Value(0)).current;
    //socialCircle.sort(item => item.rally === interest).reverse()

    // Grabs updated Social Details
    useEffect(() => {
        const unsubscribe = updateSocialCircle();
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
