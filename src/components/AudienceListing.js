import React from 'react';
import { StyleSheet } from 'react-native';
import { ListItem, Avatar, Image, Icon } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

// Store
import { connect } from 'react-redux';
import { addMember, removeMember } from '../actions';

// Components
import Checkbox from './Checkbox';

const AudienceListing = ({ name, profile, uid, selected, accent, addMember, removeMember, socialCircle }) => {
    const { colors } = useTheme();
    const currentStatus = socialCircle.filter(item => item.uid === uid)[0];

    return (
        <ListItem 
            containerStyle={[styles.listingContainerStyle, {backgroundColor: colors.background}]}
            onPress={() => {
                if (selected) {
                    removeMember(uid)
                } else {
                    addMember(uid)
                }
            }}>
            <Avatar
                rounded
                source={{ uri: profile}}
                size={56}
                containerStyle={{borderColor: colors.overlay}}
            />
            <ListItem.Content style={styles.contentStyle, {display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <ListItem.Content style={[styles.contentStyle, {display: 'flex', flexDirection: 'column',}]}>
                    <ListItem.Title 
                        style={[styles.titleStyle, {color: colors.text}]}>
                        {name}
                    </ListItem.Title>
                    {currentStatus !== undefined 
                        ?   <ListItem.Content style={{display: 'flex', alignSelf: 'flex-start', flexDirection: 'row', alignItems: 'center'}}>
                                {currentStatus !== undefined &&
                                    <Icon
                                        name="arrow-right-circle"
                                        type="feather"
                                        size={14}
                                        style={{marginRight: 4}}
                                        color={colors.grey}
                                    />
                                }
                                <ListItem.Subtitle
                                    style={[styles.subtitleStyle, {color: colors.grey}]}>
                                    {currentStatus.rally}
                                </ListItem.Subtitle>
                            </ListItem.Content>
                        :   <ListItem.Subtitle
                                style={[styles.subtitleStyle, {color: colors.grey}]}>
                                Inactive
                            </ListItem.Subtitle>
                    }
                </ListItem.Content> 
                <Checkbox selected={selected} accent={accent} />
            </ListItem.Content>
        </ListItem>
    );
};

const styles = StyleSheet.create({
    listingContainerStyle: {
        paddingVertical: 8, 
        paddingHorizontal: 0,
        display: 'flex', 
        flexDirection: 'row', 
        alignSelf: 'stretch',
        alignItems: 'center',
        paddingHorizontal: 16
    },
    contentStyle: {
        alignSelf: 'stretch',
    },
    titleStyle: {
        fontWeight: '500', 
        fontSize: 15, 
        //marginBottom: 8
    },
    subtitleStyle: {
        textAlign: 'left',
        fontSize: 15, 
        //color: "#717273",
        alignSelf: 'stretch',
        lineHeight: 21,
        //width: '75%'
    },
});

const mapStateToProps = ({ friends, social }) => {
    return { 
        friendsList: friends.currentFriends,
        socialCircle: social.socialCircle
    };
;}

export default connect(mapStateToProps, { addMember, removeMember })(AudienceListing);