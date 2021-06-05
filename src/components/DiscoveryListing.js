import React from 'react';
import { StyleSheet } from 'react-native';
import { ListItem, Divider } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

// Components
import AudienceIndicator from './AudienceIndicator';
import RadioButton from './RadioButton';

const DiscoveryListing = ({ title, subtitle, audience, type, selected, accent, onSelect }) => {
    const { colors } = useTheme();
    return (
        <>
            <ListItem 
                containerStyle={[styles.listingContainerStyle, {backgroundColor: colors.background}]}
                onPress={() => onSelect(type)}>   
                <ListItem.Content style={styles.contentStyle}>
                    <ListItem.Title 
                        style={[styles.titleStyle, {color: colors.text}]}>
                        {title}
                    </ListItem.Title>
                    <ListItem.Subtitle
                        style={[styles.subtitleStyle, {color: colors.secondaryText}]}>
                        {subtitle}
                    </ListItem.Subtitle>
                    {audience && <AudienceIndicator audience={audience} />}
                </ListItem.Content> 
                <RadioButton selected={selected} accent={accent} />
            </ListItem>
            <Divider style={{ backgroundColor: colors.card, marginHorizontal: 16 }} />
        </>
    );
};

const styles = StyleSheet.create({
    listingContainerStyle: {
        paddingVertical: 16, 
        paddingHorizontal: 0,
        display: 'flex', 
        flexDirection: 'row', 
        width: '100%', 
        alignItems: 'center',
        paddingHorizontal: 16
    },
    contentStyle: {
        //width: '92%',
        alignSelf: 'stretch',
    },
    titleStyle: {
        fontWeight: '400', 
        fontSize: 16, 
        marginBottom: 8
    },
    subtitleStyle: {
        textAlign: 'left',
        //color: "#717273",
        alignSelf: 'stretch',
        lineHeight: 21,
        width: '75%'
    },
});

export default DiscoveryListing;

/*
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Divider, ListItem, } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

// Components
import AudienceIndicator from '../components/AudienceIndicator';
import RadioButton from '../components/RadioButton';

const RadioCard = ({ title, caption, audience, selected, accent }) => {
    const { colors } = useTheme();
    return (
        <>
            <View style={styles.listingContainerStyle}>
                <View style={styles.contentStyle}>
                    <Text 
                        style={[styles.titleStyle, {color: colors.text}]}>
                        {title}
                    </Text>
                    <Text 
                        style={[styles.captionStyle, {color: colors.secondaryText}]}>
                        {caption}
                    </Text>
                    {audience && <AudienceIndicator audience={audience} />}
                </View>
                <RadioButton selected={selected} accent={accent} />
            </View>
            <Divider style={{ backgroundColor: colors.card }} />
        </>
    );
};

const styles = StyleSheet.create({
    listingContainerStyle: {
        paddingVertical: 16, 
        display: 'flex', 
        flexDirection: 'row', 
        width: '100%', 
        alignItems: 'center'
    },
    contentStyle: {
        //width: '92%',
        alignSelf: 'stretch',
    },
    titleStyle: {
        fontWeight: '400', 
        fontSize: 16, 
        marginBottom: 8
    },
    captionStyle: {
        textAlign: 'left',
        //color: "#717273",
        alignSelf: 'stretch',
        lineHeight: 21,
        width: '75%'
    },
});

export default RadioCard;

*/