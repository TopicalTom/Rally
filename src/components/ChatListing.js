import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ListItem, Avatar, Image, Icon } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

// Store
import { connect } from 'react-redux';

const ChatListing = ({ user, recentMessage, onPress }) => {
    const { colors } = useTheme();

    return (
        <ListItem 
            containerStyle={[styles.listingContainerStyle, {backgroundColor: colors.background}]}
            onPress={onPress}>   
            <Avatar
                rounded
                source={{ uri: user.profile}}
                size={64}
                containerStyle={{borderColor: colors.overlay}}
            />
            <ListItem.Content style={[{backgroundColor: colors.background, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}]}>
                <ListItem.Content style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'stretch', alignItems: 'center', paddingBottom: 1, maxHeight: 24}}>
                    <ListItem.Title 
                        style={[styles.nameStyle, {color: colors.text, alignSelf: 'stretch'}]}>
                        {user.name}
                    </ListItem.Title>
                    <ListItem.Content style={{display: 'flex', flexDirection: 'row', alignSelf: 'stretch', alignItems: 'center', justifyContent: 'flex-end'}}>
                        <ListItem.Subtitle
                            style={[styles.dateStyle, {color: colors.grey}]}>
                            Friday
                        </ListItem.Subtitle>
                        <ListItem.Chevron />
                    </ListItem.Content>
                </ListItem.Content>
                <ListItem.Subtitle
                    ellipsizeMode='tail' numberOfLines={1}
                    style={[styles.subtitleStyle, {color: colors.grey}]}>
                    {recentMessage.message}
                </ListItem.Subtitle>
            </ListItem.Content> 
        </ListItem>
    );
};

const styles = StyleSheet.create({
    listingContainerStyle: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        paddingVertical: 8,
        //height: 86,
        paddingHorizontal: 16
    },
    contentStyle: {
        alignSelf: 'stretch',
        //alignItems: 'stretch',
        //justifyContent: 'flex-start',
        paddingLeft: 4,
        paddingBottom: 2
    },
    nameStyle: {
        textAlign: 'left',
        fontWeight: '500',
        fontSize: 19,
        //marginBottom: 1,
        alignSelf: 'stretch',
    },
    subtitleStyle: {
        textAlign: 'left',
        fontWeight: '400',
        alignSelf: 'stretch',
        marginBottom: 3,
        lineHeight: 21,
        fontSize: 15,
    },
    dateStyle: {
        fontSize: 15,
        //color: "#717273",
        //alignSelf: 'flex-start',
        paddingRight: 2
    },
});

const mapStateToProps = ({ rally }) => {
    return { 
        interest: rally.interest,
        accent: rally.accent  
    };
}

export default connect(mapStateToProps)(ChatListing);