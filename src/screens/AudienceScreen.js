import React, { useState, useEffect, useRef } from 'react';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { StyleSheet, View, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useTheme, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Components
import ActionButton from '../components/ActionButton';
import Input from '../components/Input';
import AudienceList from '../components/AudienceList';
import NavBar from '../components/NavBar';

// Store
import { connect } from 'react-redux';
import { broadcastRally, generateFriendKeys, generateSquadKeys, startRallying } from '../actions';

const AudienceScreen = ({ route, friendsList, friendKeys, squadKeys, customKeys, generateFriendKeys, generateSquadKeys, startRallying }) => {
    const promptInput = useRef();
    const { accent, interest, squad, prompt, type } = route.params;
    const { colors } = useTheme();
    const navigation = useNavigation();
    const [ preferences, setPreferences ] = useState({
        interest,
        prompt: '',
        type: 'All friends',
        keys: []
    });

    // Input Functions
    const handlePromptInput = (newValue) => {
        setPreferences({...preferences, prompt: newValue});
    };

    const handlePromptClear = () => {
        promptInput.current.clear();
        setPreferences({...preferences, prompt: ""});
        promptInput.current.focus();
    };

    // Audience Functions
    const updatePreferences = (type, audienceKeys) => {
        setPreferences({...preferences, type: type, keys: audienceKeys});
    };

    const handleAudienceType = (audienceType) => {
        switch(audienceType) {
            case 'All friends':
              return updatePreferences(audienceType, friendKeys);
            case 'Squad':
                return updatePreferences(audienceType, squadKeys);
            case 'Custom':
              return updatePreferences(audienceType, customKeys);
            default:
                return updatePreferences(audienceType, friendKeys);
        }
    };

    const handleRally = () => {
        const { prompt, type, keys} = preferences;
        startRallying(interest, prompt, type, keys);
        setTimeout(() => {
            navigation.navigate('Tab');
        }, 500);
    };

    // Updates Custom list based on changes
    useEffect(() => {
        if (preferences.type === 'Custom') {
            setPreferences({...preferences, keys: customKeys})
        };
    }, [customKeys]);

    useEffect(() => {
        Promise.all([
            generateFriendKeys(friendsList),
            generateSquadKeys(squad.members)
        ]).then(() => {
            handleAudienceType('All friends', friendKeys);
        }).catch(error => {
            console.log(error)
        });
    }, []);

    return (
        <SafeAreaView style={{flex: 1}} mode="padding" edges={'left', 'right', 'bottom'}>
            <NavBar title='Visible to' />
            <View style={{paddingHorizontal: 16, paddingBottom: 8, backgroundColor: colors.background}}>
                <SegmentedControl
                    values={['All friends', 'Squad', 'Custom']}
                    style={{height: 40}}
                    selectedIndex={0}
                    tintColor={accent}
                    activeFontStyle={{color: colors.text}}
                    fontStyle={{color: colors.grey}}
                    backgroundColor={'#000'}
                    onValueChange={(value) => handleAudienceType(value)}
                />
            </View>
            <AudienceList 
                preferences={preferences}
                friendsList={friendsList}
                squad={squad.members}
                accent={accent}
                interest={interest}
                callback
            />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={[styles.screen]}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{paddingHorizontal: 16, paddingTop: 8, backgroundColor: colors.background, borderTopWidth: 0.5, borderTopColor: colors.overlay}}>
                        <View style={{paddingBottom: 16}}>
                            <Input 
                                ref={promptInput}
                                placeholder={`Add your prompt...`}
                                accent={accent}
                                onChange={value => handlePromptInput(value)}
                                value={preferences.prompt}
                                onClear={() => handlePromptClear()}
                            />
                        </View>
                        <ActionButton 
                            text={`Start ${interest} Rally`}
                            color={accent}
                            disabled={preferences.prompt.length === 0 || preferences.keys.length === 0 ? true : false}
                            action={handleRally}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            <View style={{ height: 24 }} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

const mapStateToProps = ({ friends, audience }) => {
    return { 
        friendsList: friends.currentFriends,
        friendKeys: audience.friendKeys,
        squadKeys: audience.squadKeys,
        customKeys: audience.customKeys,
    };
;}

export default connect(mapStateToProps, { startRallying, broadcastRally, generateFriendKeys, generateSquadKeys })(AudienceScreen);