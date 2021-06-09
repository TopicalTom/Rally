import React from 'react';
import { StyleSheet } from 'react-native';
import { ListItem, Icon, Divider } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

const AccountListing = ({ icon, title, redirect }) => {
    const { colors } = useTheme();
    return (
        <>
            <ListItem 
                containerStyle={[styles.listingContainerStyle, {backgroundColor: colors.background}]}
                onPress={redirect}>   
                <Icon
                    name={icon}
                    type="feather"
                    size={24}
                    color="#FFF"
                />
                <ListItem.Content style={styles.contentStyle}>
                    <ListItem.Title 
                        style={[styles.titleStyle, {color: colors.text}]}>
                        {title}
                    </ListItem.Title>
                </ListItem.Content> 
                <ListItem.Chevron />
            </ListItem>
            {title === "Settings" && <Divider style={{ backgroundColor: colors.card, marginVertical: 16 }} />}
        </>
    );
};

const styles = StyleSheet.create({
    listingContainerStyle: {
        flexDirection: 'row', 
        display: 'flex', 
        height: 52, 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    contentStyle: {
        //width: '92%',
        alignSelf: 'stretch',
    },
    titleStyle: {
        fontWeight: '500', 
        fontSize: 17, 
    },
    subtitleStyle: {
        textAlign: 'left',
        //color: "#717273",
        alignSelf: 'stretch',
        lineHeight: 21,
        width: '75%'
    },
});

export default AccountListing;