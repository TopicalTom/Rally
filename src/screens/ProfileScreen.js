import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import { Text, Button, Image, Divider, Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import { useNavigation, useTheme } from '@react-navigation/native';

// Store
import { connect } from 'react-redux';

// Components
import AccountListing from '../components/AccountListing';
import ActionButton from '../components/ActionButton';

const ProfileScreen = ({user, status, interest, accent}) => {
    const { colors } = useTheme();
    const navigation = useNavigation();

    const ACCOUNT_LISTINGS = [
        {
            title: "Edit profile",
            icon: "edit-3",
            redirect: "Edit"
        },
        {
            title: "Notifications",
            icon: "bell",
            redirect: "Notifications"
        },
        {
            title: "Settings",
            icon: "settings",
            redirect: "Settings"
        },
        {
            title: "Help & Support",
            icon: "life-buoy",
            redirect: ""
        },
        {
            title: "FAQ",
            icon: "help-circle",
            redirect: ""
        },
        {
            title: "About us",
            icon: "info",
            redirect: ""
        },
    ];

    return (
        <ScrollView style={{flex: 1}}>
            <SafeAreaView mode="padding" style={{paddingBottom: 36}} edges={['right', 'bottom', 'left']}>
                <View style={{alignItems: 'center', paddingBottom: 24}}>
                    <Image 
                        source={{ uri: user.profile}}
                        style={styles.profileStyle}
                    />
                    <Text h4 style={{color: colors.text, fontWeight: '500', marginTop: 8}}>{user.displayName.split(' ')[0]}</Text>
                    <Text 
                        h5 style={{color: status == "Browsing" ? colors.grey : accent, fontWeight: '500'}}>
                        {status == "Browsing" ? "Inactive" : `${status} • ${interest}`}
                    </Text>
                </View>
                <View
                    style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between', paddingHorizontal: 16}}>
                    <TouchableOpacity 
                        style={[styles.halfButttonStyle, {borderColor: colors.card, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 16}]}
                        onPress={() => navigation.navigate('Account', { screen: 'Friends' })}>
                        <View style={{height: 26, alignItems: 'center', justifyContent: 'center'}}>
                            <Icon
                                name="users"
                                type="feather"
                                size={24}
                                color="#FFF"
                            />
                        </View>
                        <Text 
                            style={[styles.titleStyle, { color: colors.text, paddingTop: 4}]}>
                            Friends
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.halfButttonStyle, {borderColor: colors.card, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 16}]}
                        onPress={() => navigation.navigate('Account', { screen: 'Squads' })}>
                        <View style={{height: 28, alignItems: 'center', justifyContent: 'center'}}>
                            <Icon
                                name="zap"
                                type="feather"
                                size={24}
                                color="#FFF"
                            />
                        </View>
                        <Text 
                            style={[styles.titleStyle, { color: colors.text}]}>
                            Squads
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{paddingHorizontal: 16}}>
                    <View style={[styles.swipeCardStyle, {backgroundColor: interest ? accent : '#FD2D55', justifyContent: 'flex-end'}]}>
                        <Text 
                            h4 style={[styles.titleStyle, { color: '#FFF', paddingBottom: 4}]}>
                            Add friends
                        </Text>
                        <Text h5 style={[styles.ctaStyle, { color: '#FFF', opacity: 0.8}]}>
                            Grow your social circle by adding friends
                        </Text>
                    </View>
                </View>
                {ACCOUNT_LISTINGS.map((item, index) => {
                    return (
                        <AccountListing 
                            key={index}
                            title={item.title}
                            icon={item.icon}
                            redirect={() => navigation.navigate('Account', { screen: item.redirect })}
                        />
                    )
                })}
                <View style={{marginTop: 24, width: '40%', paddingHorizontal: 16}}>
                    <Button 
                        title="Sign out" 
                        buttonStyle={[ {backgroundColor: colors.background, color: colors.text, borderColor: colors.card, borderWidth: 1, borderRadius: 8, height: 48}]}
                        onPress={() => auth().signOut()}
                    />
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    swipeCardStyle: {
        height: 180,
        borderRadius: 8,
        width: '100%',
        marginBottom: 16,
        paddingHorizontal: 16,
        paddingVertical: 24
    },
    titleStyle: {
        fontSize: 17,
        fontWeight: '500'
    },
    halfButttonStyle: {
        height: 70,
        borderRadius: 8,
        borderWidth: 1,
        width: '48%',
        marginBottom: 16
    },
    profileStyle: {
        borderRadius: 240,
        width: 120,
        height: 120,
    },
});

/*

                <View style={[styles.swipeCardStyle, {backgroundColor: '#FD2D55'}]}>
                    <Text 
                        h4 style={[styles.titleStyle, { color: '#FFF'}]}>
                        Add friends
                    </Text>
                    <Text h5>
                        Invite friends to begin making plans!
                    </Text>
                    <Icon
                            name="user-plus"
                            type="feather"
                            size={24}
                            color="#FFF"
                            iconStyle={{ paddingRight: 12}}
                        />
                </View>
                <View style={[styles.swipeCardStyle, {backgroundColor: accent}]}>
                    <Text>Add friends</Text>
                </View>
            <Button title="Sign out of rally" onPress={() => auth().signOut()}/>
                        <View style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                <View style={[styles.halfButttonStyle, {borderColor: colors.card}]}>
                    <Icon />
                    <View>
                        <Text style={{color: colors.text, fontSize: 17, fontfontWeight: 'bold'}}>Friends</Text>
                        <Text h5>23</Text>
                    </View>
                </View>
                <View style={[styles.halfButttonStyle, {borderColor: colors.card}]} >
                    <Icon />
                    <View>
                        <Text>Squads</Text>
                        <Text>23</Text>
                    </View>
                </View>
            </View>
*/

const mapStateToProps = ({ rally, authentication }) => {
    return { 
        status: rally.status,
        interest: rally.interest,  
        accent: rally.accent,
        accentBorder: rally.accentBorder,
        accentTint: rally.accentTint  ,
        user: authentication.user,
    };
}

export default connect(mapStateToProps)(ProfileScreen);