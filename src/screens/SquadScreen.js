import React, { useState } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { Text, Divider, Icon } from 'react-native-elements';
import { useTheme, useNavigation } from '@react-navigation/native';

// Components
import FriendsListing from '../components/FriendsListing';

// Store
import { connect } from 'react-redux';

const SquadScreen = ({ route }) => {
    const { accent, interest, squad } = route.params;
    const { colors } = useTheme();
    const navigation = useNavigation();

    return (
        <FlatList
            data={squad}
            keyExtractor={(item, index) => item + index}
            extraData={interest}
            ListHeaderComponentStyle={{paddingTop: 36}}
            ListHeaderComponent={() => {
                return (
                    <View style={{marginBottom: 16, paddingHorizontal: 16}}>
                        <Text 
                            h4 style={[styles.titleStyle, {color: colors.text}]}>
                            {interest} squad
                        </Text>
                        <Text 
                            style={[styles.captionStyle, {color: colors.altText}]}>
                            Receive notifications for the following friends when they rally for {interest}.
                        </Text>
                    </View>
                )
            }}
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
        flex: 1,
        paddingTop: 36,
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
        //marginBottom: 24,
        lineHeight: 21,
        width: '90%'
    },
});

const mapStateToProps = ({ rally, friends }) => {
    return { 
        interest: rally.interest,
        friendsList: friends.currentFriends
    };
}

export default connect(mapStateToProps)(SquadScreen);