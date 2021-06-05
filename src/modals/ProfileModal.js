import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import { Text, Button, Image, Divider, Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import { useNavigation, useTheme } from '@react-navigation/native';

// Store
import { connect } from 'react-redux';

// Components
import ActionButton from '../components/ActionButton';

const ProfileModal = ({user, status, interest, accent}) => {
    const { colors } = useTheme();

    return (
        <ScrollView style={{flex: 1, paddingHorizontal: 16}}>
            <View style={{alignItems: 'center', paddingVertical: 24}}>
                <Image 
                    source={{ uri: user.profile}}
                    style={styles.profileStyle}
                />
                <Text h4 style={{color: colors.text, fontfontWeight: '500'}}>{user.displayName.split(' ')[0]}</Text>
                <Text h5 style={{color: accent, fontWeight: '500'}}>{status} • {interest}</Text>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                <View style={[styles.halfButttonStyle, {borderColor: colors.card, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 16}]}>
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
                </View>
                <View style={[styles.halfButttonStyle, {borderColor: colors.card, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 16}]}>
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
                </View>
            </View>
            <View>
                <View style={[styles.swipeCardStyle, {backgroundColor: interest ? accent : '#FD2D55', justifyContent: 'flex-end'}]}>
                    <Text 
                        h4 style={[styles.titleStyle, { color: '#FFF', paddingBottom: 4}]}>
                        Add friends
                    </Text>
                    <Text h5 style={[styles.ctaStyle, { color: '#FFF', opacity: 0.8}]}>
                        Invite friends and grow your social circle!
                    </Text>
                </View>
                <TouchableOpacity 
                    style={{flexDirection: 'row', display: 'flex', height: 52, justifyContent: 'space-between', alignItems: 'center'}} 
                    onPress={() => {}}>
                    <View style={{flexDirection: 'row', display: 'flex', alignItems: 'center', height: 52}}>
                        <Icon
                            name="edit-3"
                            type="feather"
                            size={24}
                            color="#FFF"
                            iconStyle={{ paddingRight: 12}}
                        />
                        <Text 
                            style={[styles.titleStyle, { color: colors.text}]}>
                            Edit profile
                        </Text>
                    </View>
                    <Icon
                        name="chevron-right"
                        type="entypo"
                        size={18}
                        color="#717273"
                    />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{flexDirection: 'row', display: 'flex', height: 52, justifyContent: 'space-between', alignItems: 'center'}} 
                    onPress={() => {}}>
                    <View style={{flexDirection: 'row', display: 'flex', alignItems: 'center', height: 52}}>
                        <Icon
                            name="bell"
                            type="feather"
                            size={24}
                            color="#FFF"
                            iconStyle={{ paddingRight: 12}}
                        />
                        <Text 
                            style={[styles.titleStyle, { color: colors.text}]}>
                            Notifications
                        </Text>
                    </View>
                    <Icon
                        name="chevron-right"
                        type="entypo"
                        size={18}
                        color="#717273"
                    />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{flexDirection: 'row', display: 'flex', height: 52, justifyContent: 'space-between', alignItems: 'center'}} 
                    onPress={() => {}}>
                    <View style={{flexDirection: 'row', display: 'flex', alignItems: 'center', height: 52}}>
                        <Icon
                            name="settings"
                            type="feather"
                            size={24}
                            color="#FFF"
                            iconStyle={{ paddingRight: 12}}
                        />
                        <Text 
                            style={[styles.titleStyle, { color: colors.text}]}>
                            Settings
                        </Text>
                    </View>
                    <Icon
                        name="chevron-right"
                        type="entypo"
                        size={18}
                        color="#717273"
                    />
                </TouchableOpacity>
            </View>
            <Divider style={{ backgroundColor: colors.card, marginVertical: 16 }} />
            <View>
                <TouchableOpacity 
                    style={{flexDirection: 'row', display: 'flex', height: 52, justifyContent: 'space-between', alignItems: 'center'}} 
                    onPress={() => {}}>
                    <View style={{flexDirection: 'row', display: 'flex', alignItems: 'center', height: 52}}>
                        <Icon
                            name="life-buoy"
                            type="feather"
                            size={24}
                            color="#FFF"
                            iconStyle={{ paddingRight: 12}}
                        />
                        <Text 
                            style={[styles.titleStyle, { color: colors.text}]}>
                            Help & Support
                        </Text>
                    </View>
                    <Icon
                        name="chevron-right"
                        type="entypo"
                        size={18}
                        color="#717273"
                    />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{flexDirection: 'row', display: 'flex', height: 52, justifyContent: 'space-between', alignItems: 'center'}} 
                    onPress={() => {}}>
                    <View style={{flexDirection: 'row', display: 'flex', alignItems: 'center', height: 52}}>
                        <Icon
                            name="help-circle"
                            type="feather"
                            size={24}
                            color="#FFF"
                            iconStyle={{ paddingRight: 12}}
                        />
                        <Text 
                            style={[styles.titleStyle, { color: colors.text}]}>
                            FAQ
                        </Text>
                    </View>
                    <Icon
                        name="chevron-right"
                        type="entypo"
                        size={18}
                        color="#717273"
                    />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{flexDirection: 'row', display: 'flex', height: 52, justifyContent: 'space-between', alignItems: 'center'}} 
                    onPress={() => {}}>
                    <View style={{flexDirection: 'row', display: 'flex', alignItems: 'center', height: 52}}>
                        <Icon
                            name="info"
                            type="feather"
                            size={24}
                            color="#FFF"
                            iconStyle={{ paddingRight: 12}}
                        />
                        <Text 
                            style={[styles.titleStyle, { color: colors.text}]}>
                            About us
                        </Text>
                    </View>
                    <Icon
                        name="chevron-right"
                        type="entypo"
                        size={18}
                        color="#717273"
                    />
                </TouchableOpacity>
            </View>
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

export default connect(mapStateToProps)(ProfileModal);