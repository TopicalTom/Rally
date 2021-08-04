import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ListItem, Avatar, Image, Icon } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

// Store
import { connect } from 'react-redux';

const SocialListing = ({ profile, name, prompt, rally, onPress, interest, accent }) => {
    const { colors } = useTheme();

    return (
        <ListItem 
            containerStyle={[styles.listingContainerStyle, {backgroundColor: colors.background}]}
            onPress={onPress}>   
            <Avatar
                rounded
                source={{ uri: profile}}
                size={64}
                containerStyle={{borderColor: colors.overlay}}
            />
            <ListItem.Content style={[styles.contentStyle, {backgroundColor: colors.background}]}>
                <ListItem.Title 
                    style={[styles.nameStyle, {color: colors.text}]}>
                    {name}
                </ListItem.Title>
                <ListItem.Subtitle
                    style={[styles.subtitleStyle, {color: colors.altText}]}>
                    {prompt}
                </ListItem.Subtitle>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <Icon
                        name="arrow-right-circle"
                        type="feather"
                        size={13}
                        color={interest === rally ? accent : colors.grey}
                    />
                    <ListItem.Subtitle
                        ellipsizeMode='tail' numberOfLines={1}
                        style={[styles.rallyStyle, {color: interest === rally ? accent : colors.grey}]}>
                        {rally}
                    </ListItem.Subtitle>
                </View>
            </ListItem.Content> 
        </ListItem>
    );
};

const styles = StyleSheet.create({
    listingContainerStyle: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        paddingVertical: 8,
        height: 86,
        paddingHorizontal: 16
    },
    contentStyle: {
        alignSelf: 'stretch',
        alignItems: 'stretch',
        justifyContent: 'center',
        paddingLeft: 4,
        paddingBottom: 2
    },
    nameStyle: {
        textAlign: 'left',
        fontWeight: '500',
        fontSize: 17,
        marginBottom: 1,
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
    rallyStyle: {
        fontSize: 13,
        //color: "#717273",
        alignSelf: 'stretch',
        paddingLeft: 6
    },
});

const mapStateToProps = ({ rally }) => {
    return { 
        interest: rally.interest,
        accent: rally.accent  
    };
}

export default connect(mapStateToProps)(SocialListing);
