import React from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

// Store
import { connect } from 'react-redux';

// Components
import FriendsListing from './FriendsListing';
import AudienceListing from './AudienceListing';

const AudienceList = ({ preferences, friendsList, squad, accent, callback, customList }) => {
    const { colors } = useTheme();
    switch (preferences.type) {
        case 'All friends': {
            return ( 
                <FlatList
                    data={friendsList}
                    keyExtractor={(item, index) => item + index}
                    scrollEnabled={true}
                    ListHeaderComponent={
                        <View style={{paddingHorizontal: 16, paddingTop: 24}}>
                            <Text 
                                style={{color: colors.text,         marginBottom: 16,
                                    lineHeight: 21,
                                    fontSize: 17,
                                    fontWeight: 'bold'}}>
                                Friends ({friendsList.length})
                            </Text>
                        </View>
                    }
                    renderItem={({item}) => {
                        return (
                            <FriendsListing 
                                uid={item.uid}
                                name={item.name}
                                profile={item.profile}
                                accent={accent}
                            />
                        )
                    }}
                />
            );
        }
        case 'Squad': {
            return ( 
                <FlatList
                    data={squad}
                    keyExtractor={(item, index) => item + index}
                    scrollEnabled={true}
                    ListHeaderComponent={
                        <View style={{paddingHorizontal: 16, paddingTop: 24}}>
                            <Text 
                                style={{color: colors.text,         marginBottom: 16,
                                    lineHeight: 21,
                                    fontSize: 17,
                                    fontWeight: 'bold'}}>
                                Members ({squad.length})
                            </Text>
                        </View>
                    }
                    renderItem={({item}) => {
                        return (
                            <FriendsListing 
                                uid={item.uid}
                                name={item.name}
                                profile={item.profile}
                                accent={accent}
                            />
                        )
                    }}
                />
            );
        }
        case 'Custom': {

            if (customList === undefined) return <></>;
            return ( 
                <FlatList
                    data={friendsList}
                    keyExtractor={(item, index) => item + index}
                    scrollEnabled={true}
                    ListHeaderComponent={
                        <View style={{paddingHorizontal: 16, paddingTop: 24}}>
                            <Text 
                                style={{color: colors.text,         marginBottom: 16,
                                    lineHeight: 21,
                                    fontSize: 17,
                                    fontWeight: 'bold'}}>
                                {customList.length === 0 ? 'Select friends' : `Selected (${customList.length})`}
                            </Text>
                        </View>
                    }
                    renderItem={({item}) => {
                        return (
                            <AudienceListing 
                                name={item.name}
                                profile={item.profile}
                                uid={item.uid}
                                accent={accent}
                                callback={callback}
                                selected={customList.includes(item.uid) ? true : false}
                            />
                        )
                    }}
                />
            );
        }
        default:
            return <></>;
    }
};

const styles = StyleSheet.create({
    headerContainerStyle: {
        paddingHorizontal: 16,
        paddingBottom: 8,
        paddingTop: 24
    },
    profileStyle: {
        height: 28,
        width: 28,
        borderRadius: 20,
        borderWidth: 3,
        overflow: 'hidden'
    },
    friendsStyle: {
        color: "#717273"
    }
});

const mapStateToProps = ({ audience }) => {
    return { 
        customList: audience.customKeys
    };
;}

export default connect(mapStateToProps)(AudienceList);