import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Divider, Icon } from 'react-native-elements';
import { useNavigation, useTheme } from '@react-navigation/native';

// Components
import ActionButton from '../components/ActionButton';
import DiscoveryList from '../components/DiscoveryList';
import Input from '../components/Input';

// Store
import { connect } from 'react-redux';
import { broadcastRally, generateAudienceKeys, startRallying } from '../actions';

const PreferencesScreen = ({ route, friendsList, startRallying, generateAudienceKeys }) => {
    const { accent, interest, prompt, squad } = route.params;
    const { colors } = useTheme();
    const promptInput = useRef();
    const navigation = useNavigation();

    const [ preferences, setPreferences ] = useState({
        interest,
        prompt: '',
        type: 'All friends',
        keys: []
    });

    const handlePromptInput = (newValue) => {
        setPreferences({...preferences, prompt: newValue});
    };

    const handlePromptClear = () => {
        promptInput.current.clear();
        setPreferences({...preferences, prompt: ""});
        promptInput.current.focus();
    };

    const updatePreferences = (type, audience) => {
        console.log(type)
        console.log(audience)
        setPreferences({...preferences, type: type, keys: audience});
    };

    const handleGeneralSelection = (type, audience) => {
        generateAudienceKeys(type, audience, updatePreferences)
    };

    const handleCustomSelection = (type, audience) => {
        navigation.navigate('Rally', { 
            screen: 'Audience', 
            params: { 
                interest, 
                accent, 
                prompt, 
                type, 
                audience
            }
        })
    };

    const handleRally = () => {
        const { prompt, type, keys} = preferences;
        startRallying(interest, prompt, type, keys);
        setTimeout(() => {
            navigation.navigate('Tab');
        }, 500);
    };

    useEffect(() => {
        handleGeneralSelection('All friends', friendsList);
    }, []);

    return (
        <ScrollView style={[styles.container, {backgroundColor: colors.background}]}>
            <View style={{marginBottom: 64, paddingHorizontal: 16}}>
                <Text 
                    h4 style={[styles.titleStyle, {color: colors.text}]}>
                    Prompt
                </Text>
                <Text 
                    style={[styles.captionStyle, {color: colors.altText}]}>
                    Give your friends a better idea of what you are looking to do.
                </Text>
                <Input 
                    ref={promptInput}
                    placeholder="Type here..."
                    accent={accent}
                    onChange={value => handlePromptInput(value)}
                    value={preferences.prompt}
                    onClear={() => handlePromptClear()}
                />
            </View>
            <View style={{marginBottom: 64}}>
                <Text 
                    h4 style={[styles.titleStyle, {color: colors.text, paddingHorizontal: 16}]}>
                    Discoverable
                </Text>
                <DiscoveryList 
                    interest={interest}
                    accent={accent} 
                    friendsList={friendsList} 
                    squad={squad}
                    customList={preferences.keys}
                    value={preferences.type}
                    generalCallback={handleGeneralSelection} 
                    customCallback={handleCustomSelection} 
                />
            </View>
            <View style={{marginBottom: 120, paddingHorizontal: 16}}>
                <ActionButton 
                    text={`Start rallying`}
                    color={accent}
                    disabled={preferences.prompt === "" ? true : false}
                    action={handleRally}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //paddingHorizontal: 16,
        paddingTop: 36,
    },
    sectionStyle: {
        marginVertical: 20,
        color: "#B6B6B6",
        fontWeight: '500'
    },
    titleStyle: {
        textAlign: 'left',
        fontWeight: 'bold',
        marginBottom: 16,
        alignSelf: 'stretch',
        color: '#fff',
        fontSize: 16,
    },
    captionStyle: {
        alignSelf: 'stretch',
        marginBottom: 24,
        lineHeight: 21,
        width: '90%',
        fontSize: 15
    },
});

const mapStateToProps = ({ rally, authentication, friends }) => {
    return { 
        user: authentication.user,
        interest: rally.interest,
        accent: rally.accent,
        accentBorder: rally.accentBorder,
        accentTint: rally.accentTint,
        friendsList: friends.currentFriends,
    };
;}

export default connect(mapStateToProps, { startRallying, broadcastRally, generateAudienceKeys })(PreferencesScreen);


/*

            {preferences.type === "Custom" &&
                <View style={{marginBottom: 64, paddingHorizontal: 16}}>
                    <Text 
                        h4 style={[styles.titleStyle, {color: colors.text}]}>
                        Audience
                    </Text>
                    <Text 
                        style={[styles.captionStyle, {color: colors.altText}]}>
                        Select who you would like to see your rally. This can be changed at any time.
                    </Text>
                </View>
            }
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, ScrollView, SectionList, Switch, TouchableOpacity } from 'react-native';
import { Text, Input, Divider, Icon } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

// Components
import ActionButton from '../components/ActionButton';
import AudienceIndicator from '../components/AudienceIndicator';
import RadioButton from '../components/RadioButton';

// Store
import { connect } from 'react-redux';
import { broadcastRally, startRallying } from '../actions';

const PreferencesScreen = ({ route, friendsList, startRallying }) => {
    const { accent, interest, squad } = route.params;
    const { colors } = useTheme();
    const promptInput = useRef();
    const navigation = useNavigation();
    const [ preferences, setPreferences ] = useState({
        interest,
        prompt: '',
        discoverable: 'All friends',
        customList: []
    });

    const handlePromptInput = (newValue) => {
        setPreferences({...preferences, prompt: newValue});
    };

    const handlePromptClear = () => {
        promptInput.current.clear();
        setPreferences({...preferences, prompt: ""});
        promptInput.current.focus();
    };

    const handleDiscoverySelection = (selection) => {
        setPreferences({...preferences, discoverable: selection});
    };

    const handleRally = () => {
        startRallying(interest, preferences.prompt);
        navigation.navigate('Tab');
    };

    return (
        <ScrollView style={[styles.container, {backgroundColor: colors.background}]}>
            <View style={{marginBottom: 56}}>
                <Text 
                    h4 style={[styles.titleStyle, {color: colors.text}]}>
                    Prompt
                </Text>
                <Text 
                    style={[styles.captionStyle, {color: colors.text, opacity: 0.8}]}>
                    Give your friends a better idea of what you are looking to do.
                </Text>
                <Input 
                    ref={promptInput}
                    containerStyle={{paddingHorizontal: 0, height: 48}}
                    inputContainerStyle={{backgroundColor: colors.background, borderBottomColor: colors.card , borderBottomWidth: 0.5}}
                    placeholder="Type here..."
                    placeholderTextColor={colors.grey}
                    inputStyle={{color: colors.text}}
                    selectionColor={accent}
                    onChangeText={value => handlePromptInput(value)}
                    rightIcon={() => {
                        return (
                            preferences.prompt !== "" &&
                            <TouchableOpacity 
                                style={styles.closeButtonStyle}
                                onPress={() => handlePromptClear()}>
                                <Icon
                                    name="x"
                                    type="feather"
                                    size={13}
                                    color={colors.background}
                                />
                            </TouchableOpacity>
                        )      
                    }}
                />
            </View>
            <View style={{marginBottom: preferences.discoverable === "Custom" ? 56 : 64}}>
                <Text 
                    h4 style={[styles.titleStyle, {color: colors.text}]}>
                    Discoverable
                </Text>
                <Divider style={{ backgroundColor: colors.card }} />
                <View style={{paddingVertical: 16, display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center'}}>
                    <View style={{width: '92%'}}>
                        <Text 
                            style={{color: colors.text, fontWeight: '400', fontSize: 16, marginBottom: 8}}>
                            All friends (default)
                        </Text>
                        <Text 
                            style={[styles.subStyle, {color: colors.secondaryText}]}>
                            Anyone within your social circle will be able to see this.
                        </Text>
                        <AudienceIndicator audience={friendsList} />
                    </View>
                    <RadioButton selected={true} accent={accent} />
                </View>
                <Divider style={{ backgroundColor: colors.card }} />
                {squad.length > 0 &&
                    <>
                        <View style={{paddingVertical: 16, display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center'}}>
                            <View style={{width: '92%'}}>
                                <Text 
                                    style={{color: colors.text, fontWeight: '400', fontSize: 16, marginBottom: 8}}>
                                    Squad
                                </Text>
                                <Text 
                                    style={[styles.subStyle, {color: colors.secondaryText}]}>
                                    Only those in your {interest} squad will be able to see this.
                                </Text>
                                <AudienceIndicator audience={squad} />
                            </View>
                            <RadioButton selected={false} accent={accent} />
                        </View>
                        <Divider style={{ backgroundColor: colors.card }} />
                    </>
                }
                <View style={{paddingVertical: 16, display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center'}}>
                    <View style={{width: '92%'}}>
                        <Text 
                            style={{color: colors.text, fontWeight: '400', fontSize: 16, marginBottom: 8}}>
                            Custom
                        </Text>
                        <Text 
                            style={[styles.subStyle, {color: colors.secondaryText}]}>
                            Limit your reach to only those you select (below).
                        </Text>
                    </View>
                    <RadioButton selected={false} accent={accent} />
                </View>
                <Divider style={{ backgroundColor: colors.card }} />
                <Text 
                    style={{color: colors.text, fontWeight: '400', fontSize: 16, marginBottom: 8}}>
                    Select friends
                </Text>
            </View>
            {preferences.customList.length !== 0 && preferences.type === "Custom" &&
                <View style={{marginBottom: 64}}>
                    <Text 
                        h4 style={[styles.titleStyle, {color: colors.text}]}>
                        Audience
                    </Text>
                    <Text 
                        style={[styles.captionStyle, {color: colors.text, opacity: 0.8}]}>
                        Select who you would like to see your rally. This can be changed at any time.
                    </Text>
                </View>
            }
            <View style={{marginBottom: 120}}>
                <ActionButton 
                    text={`Start rallying`}
                    color={accent}
                    disabled={preferences.prompt === "" ? true : false}
                    action={handleRally}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'flex-start',
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        paddingTop: 36,
        //position: 'relative'
    },
    closeButtonStyle: {
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        width: 21,
        height: 21,
        backgroundColor: '#FFF', 
        padding: 4, 
        opacity: 0.3
    },
    sectionStyle: {
        marginVertical: 20,
        color: "#B6B6B6",
        fontWeight: '500'
    },
    titleStyle: {
        textAlign: 'left',
        fontWeight: 'bold',
        marginBottom: 16,
        alignSelf: 'stretch',
        color: '#fff',
        fontSize: 16,
    },
    floatingActionStyle: {
        position: 'absolute',
        alignSelf: 'flex-end',
        bottom: 0,
        left: 0,
        right: 0,
        height: 140,
        padding: 16,
    },
    captionStyle: {
        alignSelf: 'stretch',
        marginBottom: 24,
        lineHeight: 21,
        width: '90%'
    },
    subStyle: {
        textAlign: 'left',
        color: "#717273",
        alignSelf: 'stretch',
        lineHeight: 21,
        width: '75%'
        //addingLeft: 12
        //fontWeight: '500'
    },
    subtitleStyle: {
        textAlign: 'left',
        color: "#717273",
        alignSelf: 'stretch',
        marginBottom: 24,
        lineHeight: 21,
        width: '85%'
        //addingLeft: 12
        //fontWeight: '500'
    },
});

const mapStateToProps = ({ rally, authentication, friends }) => {
    return { 
        user: authentication.user,
        interest: rally.interest,
        accent: rally.accent,
        accentBorder: rally.accentBorder,
        accentTint: rally.accentTint,
        friendsList: friends.currentFriends,
    };
;}

export default connect(mapStateToProps, { startRallying, broadcastRally })(PreferencesScreen);

*/