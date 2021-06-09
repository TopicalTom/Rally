import React, { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { useTheme, useNavigation } from '@react-navigation/native';

// Components
import FriendsListing from '../components/FriendsListing';

// Store
import { connect } from 'react-redux';

const AudienceScreen = ({ friendsList }) => {
    const { colors } = useTheme();
    const navigation = useNavigation();

    return (
        <FlatList
            data={friendsList}
            keyExtractor={(item, index) => item + index}
            //extraData={interest}
            scrollEnabled={true}
            renderItem={({item}) => {
                return (
                    <FriendsListing 
                        name={item.name}
                        profile={item.profile}
                    />
                )
            }}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

const mapStateToProps = ({ rally, friends }) => {
    return { 
        interest: rally.interest,
        friendsList: friends.currentFriends
    };
}

export default connect(mapStateToProps)(AudienceScreen);