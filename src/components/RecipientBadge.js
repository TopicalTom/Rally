import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

// Store
import { connect } from 'react-redux';

const RecipientBadge = ({recipient, callback, accent}) => {
    const { colors } = useTheme();

    return (
        <View 
            style={[styles.badgeStyle, { backgroundColor: accent ? accent : colors.card}]}>
            <Image 
                source={{ uri: recipient.profile}}
                style={styles.profileStyle}
            />
            <Text style={{ color: colors.text, fontSize: 16, marginLeft: 8, paddingRight: 12}}>{recipient.name}</Text>
            <Icon
                name='x'
                type='feather'
                size={18}
                color={colors.text}
                onPress={callback}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    badgeStyle: {
        //marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
        right: 3,
        paddingHorizontal: 6,
        paddingVertical: 6,
        borderRadius: 8
    },
    profileStyle: {
        height: 24,
        width: 24,
        borderRadius: 20,
        //borderWidth: 3,
        overflow: 'hidden'
    },
    friendsStyle: {
        color: "#717273"
    }
});

const mapStateToProps = ({ rally }) => {
    return { 
        accent: rally.accent,
    };
;}

export default connect(mapStateToProps, null)(RecipientBadge);