import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, Icon, Divider } from 'react-native-elements';
import { useNavigation, useTheme } from '@react-navigation/native';

// Store
import { connect } from 'react-redux';
import InterestIndicator from './InterestIndicator';

// Components

const RallyPromo = ({interest, accent, friendsList, prompt}) => {
    const { colors } = useTheme();
    const navigation = useNavigation();

    return (
        <>
        <View >
            <View style={[styles.promoCardStyle, {backgroundColor: interest ? accent : '#FD2D55', justifyContent: 'flex-end'}]}>
                <Text style={{position: 'absolute', fontSize: 40, top: 12, left: 16, color: colors.altText}}>"</Text>
                <Text 
                    style={[styles.titleStyle, { color: '#FFF', paddingBottom: 4}]}>
                    {prompt}
                </Text>
                <Text 
                    style={[ { color: colors.altText, paddingBottom: 4}]}>
                    {interest}
                </Text>
                <Divider style={{ backgroundColor: 'rgba(255,255,255,0.15)', marginTop: 16, marginBottom: 12 }}/>
                <View style={{display: 'flex', flexDirection: 'row', alignSelf: "flex-start", justifyContent: 'center', alignItems: 'center', borderRadius: 4, marginRight: 8}}>
                    <View style={{display: 'flex', flexDirection: 'row', alignSelf: "flex-start", justifyContent: 'center', alignItems: 'center', borderRadius: 4, marginRight: 8, backgroundColor: 'rgba(255,255,255,0.1)', paddingVertical: 2, paddingHorizontal: 4}}>
                        <Icon
                            name="user"
                            type="feather"
                            style={{marginRight: 4}}
                            size={14}
                            color={colors.altText}
                        />
                        <Text style={{color: colors.altText }}>Custom</Text>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row', alignSelf: "flex-start", justifyContent: 'center', alignItems: 'center', borderRadius: 4, marginRight: 8, backgroundColor: 'rgba(255,255,255,0.1)', paddingVertical: 2, paddingHorizontal: 4}}>
                        <Icon
                            name="clock"
                            type="feather"
                            style={{marginRight: 4}}
                            size={14}
                            color={colors.altText}
                        />
                        <Text style={{color: colors.altText }}>2h</Text>
                    </View>
                </View>
            </View>
        </View>
        <View
                    style={{display: 'flex', flexDirection: 'row', alignSelf: 'stretch', justifyContent: 'space-between', paddingHorizontal: 0, paddingTop: 12}}>
                    <TouchableOpacity 
                        style={[styles.halfButttonStyle, {backgroundColor: colors.overlay, borderColor: colors.card, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 16}]}
                        onPress={() => navigation.navigate('Account', { screen: 'Friends' })}>
                        <Text 
                            style={[styles.textStyle, { color: colors.text}]}>
                            Switch
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.halfButttonStyle, {borderColor: colors.card, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 16}]}
                        onPress={() => navigation.navigate('Account', { screen: 'Squads' })}>
                        <Text 
                            style={[styles.textStyle, { color: colors.text}]}>
                            Cancel
                        </Text>
                    </TouchableOpacity>
                </View>
        </>
    );
};

/*
                <InterestIndicator activity={friendsList} selected={true} accent={accent} />
*/

const styles = StyleSheet.create({
    promoCardStyle: {
        height: 210,
        borderRadius: 8,
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 12,
        position: 'relative'
    },
    textStyle: {
        fontSize: 17,
        fontWeight: '500'
    },
    titleStyle: {
        fontSize: 28,
        fontWeight: '500'
    },
    halfButttonStyle: {
        height: 48,
        borderRadius: 8,
        borderWidth: 1,
        width: '48.5%',
        marginBottom: 16
    },
    profileStyle: {
        borderRadius: 240,
        width: 120,
        height: 120,
    },
});

const mapStateToProps = ({ rally, friends }) => {
    return { 
        friendsList: friends.currentFriends,
        status: rally.status,
        interest: rally.interest, 
        prompt: rally.prompt,  
        accent: rally.accent,
    };
}

export default connect(mapStateToProps)(RallyPromo);