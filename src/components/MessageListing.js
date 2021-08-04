import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ListItem, Avatar, Image, Icon } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

// Store
import { connect } from 'react-redux';

const MessageListing = ({ message, owner, status, accent }) => {
    const { colors } = useTheme();

    return (
        <ListItem 
            containerStyle={[styles.listingContainerStyle, {
                backgroundColor: colors.background, 
                justifyContent: owner ? 'flex-end' : 'flex-start' 
            }]}>   
            <ListItem.Content style={[styles.messageContainerStyle, {
                backgroundColor: owner ? accent : colors.background,
                borderColor: owner ? accent : colors.overlay
            }]}>
                <ListItem.Title 
                    style={[styles.messageStyle, {color: colors.text}]}>
                    {message}
                </ListItem.Title>
            </ListItem.Content> 
        </ListItem>
    );
};

const styles = StyleSheet.create({
    listingContainerStyle: {
        alignSelf: 'stretch',
        //flexDirection: 'row',
        //display: 'flex',
        paddingVertical: 2,
        flexDirection: "row",
        //marginHorizontal: 16
    },
    messageContainerStyle: {
        alignSelf: 'flex-start',
        flexDirection: "row",
        flex: 0,
        //display: 'flex',
        //alignItems: 'stretch',
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 10,
        maxWidth: '65%',
        //maxWidth: 185, 
        borderWidth: 0.5
    },
    messageStyle: {
        textAlign: 'left',
        fontWeight: '400',
        fontSize: 16,
        //width: 50,
    },
});

const mapStateToProps = ({ rally }) => {
    return { 
        status: rally.status,
        accent: rally.accent  
    };
}

export default connect(mapStateToProps)(MessageListing);