import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, SectionList, Switch } from 'react-native';
import { Text, Input, Divider } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

// Components
import ActionButton from '../components/ActionButton';
import AudienceIndicator from '../components/AudienceIndicator';

// Store
import { connect } from 'react-redux';
import { broadcastRally, startRallying } from '../actions';

const PreferencesScreen = ({ route, user, friendsList, startRallying }) => {
    const { accent, accentBorder, accentTint, interest, squad } = route.params;
    const { colors } = useTheme();
    const navigation = useNavigation();
    const [ selections, setSelections ] = useState({
        prompt: "",
        discoverable: friendsList
    }); 

    const handleRally = () => {
        const { uid, profile, displayName } = user;
        startRallying(interest, accent, accentBorder, accentTint);
        broadcastRally(profile, displayName, interest)
        navigation.navigate('Tab');
    };

    return (
        <ScrollView style={[styles.container, {backgroundColor: colors.background}]}>
            <View style={{marginBottom: 48}}>
                <Text 
                    h4 style={[styles.titleStyle, {color: colors.text}]}>
                    Prompt
                </Text>
                <Divider style={{ backgroundColor: colors.card }} />
                <Text 
                    style={[styles.captionStyle, {color: colors.text, opacity: 0.8, paddingTop: 16}]}>
                    Give your friends a better idea of what you are looking to do.
                </Text>
                <Input 
                    containerStyle={{paddingHorizontal: 0, height: 120, backgroundColor: colors.card, borderRadius: 8}}
                    inputContainerStyle={{paddingHorizontal: 16, paddingVertical: 8, borderBottomWidth: 0}}
                    multiline={true}
                    placeholder="Type here..."
                    placeholderTextColor="#6D6D6D"
                    inputStyle={{color: colors.text}}
                    selectionColor={accent}
                />
            </View>
            <View style={{marginBottom: 48}}>
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
                            style={[styles.subStyle, {color: colors.text, opacity: 0.5}]}>
                            Anyone within your social circle will be able to see this.
                        </Text>
                        <AudienceIndicator audience={friendsList} />
                    </View>
                    <View style={{borderColor: accent, backgroundColor: colors.background, borderWidth: 0.5, height: 24, width: 24, borderRadius: 80, justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{backgroundColor: accent, borderWidth: 1, height: 16, width: 16, borderRadius: 80}} />
                    </View>
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
                                    style={[styles.subStyle, {color: colors.text, opacity: 0.5}]}>
                                    Only those in your {interest} squad will be able to see this.
                                </Text>
                                <AudienceIndicator audience={squad} />
                            </View>
                            <View style={{borderColor: colors.card, backgroundColor: colors.background, borderWidth: 0.5, height: 24, width: 24, borderRadius: 80}}/>
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
                            style={[styles.subStyle, {color: colors.text, opacity: 0.5}]}>
                            Limit your reach to only those you select (below).
                        </Text>
                    </View>
                    <View style={{borderColor: colors.card, backgroundColor: colors.background, borderWidth: 0.5, height: 24, width: 24, borderRadius: 80}}/>
                </View>
            </View>
            <View style={{marginBottom: 48}}>
                <Text 
                    h4 style={[styles.titleStyle, {color: colors.text}]}>
                    Audience
                </Text>
                <Divider style={{ backgroundColor: colors.card }} />
                <Text 
                    style={[styles.captionStyle, {color: colors.text, opacity: 0.8, paddingTop: 16}]}>
                    Select who you would like to see your rally. This can be changed at any time.
                </Text>
                <Text 
                    style={[styles.subStyle, {color: accent}]}>
                    + Add friends
                </Text>
            </View>
            <View style={{marginBottom: 120}}>
                <ActionButton 
                    text={`Start rallying`}
                    color={accent}
                    action={handleRally}
                />
            </View>
        </ScrollView>
    );
};

/*
            <View style={[styles.floatingActionStyle, {borderTopColor: colors.border}]}>
                <ActionButton 
                    text={`Start rallying`}
                    color={accent}
                    action={handleRally}
                />
            </View>

*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'flex-start',
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        paddingTop: 36,
        //position: 'relative'
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
        //color: "#717273",
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