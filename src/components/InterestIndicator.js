import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

const InterestIndicator = ({ activity }) => {
    const { colors } = useTheme();

    if (activity.length < 1) return null;

    return (
        <View style={styles.activityStyle}>
            <View style={[styles.imageContainerStyle, {zIndex: 20}]}>
                <Image 
                    source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png'}}
                    style={[styles.profileStyle, {borderColor: colors.card, backgroundColor: colors.card }]} 
                />
            </View>
            <View style={[styles.imageContainerStyle, {right: 8}]}>
                <Image 
                    source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png'}}
                    style={[styles.profileStyle, {borderColor: colors.card, backgroundColor: colors.card }]}  />
            </View>
            <Text style={styles.friendsStyle}>
                {activity[0].name} and {activity.length} other{activity.length > 1 ? "s" : ""}
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    activityStyle: {
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    profileStyle: {
        height: 20,
        width: 20,
        borderRadius: 20,
        borderWidth: 2,
        overflow: 'hidden'
    },
    friendsStyle: {
        color: "#717273"
    }
});

export default InterestIndicator;