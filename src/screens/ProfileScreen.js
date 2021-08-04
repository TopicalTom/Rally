import React, { useState, useRef } from 'react';
import { Animated, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import { Text, Button, Image, Divider, Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import { useNavigation, useTheme } from '@react-navigation/native';

// Store
import { connect } from 'react-redux';

// Components
import AccountListing from '../components/AccountListing';
import NavBar from '../components/NavBar';

const ProfileScreen = ({user, status, interest, accent}) => {
    const { colors } = useTheme();
    const navigation = useNavigation();
    const offset = useRef(new Animated.Value(0)).current;

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
        <SafeAreaView style={{flex: 1}} edges={'left', 'right'}>
            <NavBar title={'Account'} offset={offset} initial threshold={80} />
            <ScrollView>
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
                        style={[styles.halfButttonStyle, {backgroundColor: colors.overlay, borderColor: colors.card, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 16}]}
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
                        style={[styles.halfButttonStyle, {backgroundColor: colors.overlay, borderColor: colors.card, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 16}]}
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
                    <View style={[styles.promoCardStyle, {backgroundColor: interest ? accent : '#FD2D55', justifyContent: 'flex-end'}]}>
                        <Text 
                            h4 style={[styles.titleStyle, { color: '#FFF', paddingBottom: 4}]}>
                            Add friends
                        </Text>
                        <Text h5 style={[styles.ctaStyle, { color: '#FFF', opacity: 0.8}]}>
                            Find your friends and grow your social circle
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
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    promoCardStyle: {
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