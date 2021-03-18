import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

const Profile = ({ profile, rally, onPress }) => {
    const { colors } = useTheme();

    return (
        <TouchableOpacity
            onPress={onPress}
            style={
                styles.profileContainerStyle}
        >
            <Image 
                source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png'}}
                style={[styles.profileStyle, { borderColor: colors.card}]}
            />
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    profileStyle: {
        borderRadius: 40,
        width: 36,
        height: 36,
        borderWidth: 1,
    },
    profileContainerStyle: {
        borderRadius: 40,
        marginRight: 16,
        marginLeft: 8
    }
});

export default Profile;