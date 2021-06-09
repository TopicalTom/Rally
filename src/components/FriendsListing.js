import React from 'react';
import { StyleSheet } from 'react-native';
import { ListItem, Image } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

const FriendsListing = ({ name, profile }) => {
    const { colors } = useTheme();
    return (
        <ListItem 
            containerStyle={[styles.listingContainerStyle, {backgroundColor: colors.background}]}>
            <Image 
                source={{ uri: profile}}
                style={styles.profileStyle}
            />   
            <ListItem.Content style={styles.contentStyle}>
                <ListItem.Title 
                    style={[styles.titleStyle, {color: colors.text}]}>
                    {name}
                </ListItem.Title>
                <ListItem.Subtitle
                    style={[styles.subtitleStyle, {color: colors.secondaryText}]}>
                    Inactive
                </ListItem.Subtitle>
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
        width: '100%', 
        alignItems: 'center',
        paddingHorizontal: 16
    },
    profileStyle: {
        borderRadius: 240,
        alignItems: 'center',
        width: 56,
        height: 56,
        justifyContent: 'center',
    },
    contentStyle: {
        //width: '92%',
        alignSelf: 'stretch',
    },
    titleStyle: {
        fontWeight: '500', 
        fontSize: 17, 
        //marginBottom: 8
    },
    subtitleStyle: {
        textAlign: 'left',
        //color: "#717273",
        alignSelf: 'stretch',
        lineHeight: 21,
        width: '75%'
    },
});

export default FriendsListing;