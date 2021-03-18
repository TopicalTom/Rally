import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, Image, Icon } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

const SocialCard = ({ profile, name, prompt, rally, onPress }) => {
    const { colors } = useTheme();

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.cardStyle, { 
                backgroundColor: colors.background
            }]}
        >
            <View style={styles.profileContainerStyle}>
                <Image 
                    source={{ uri: profile}}
                    style={styles.profileStyle}
                />
            </View>
            <View style={[styles.contentStyle, {borderBottomColor: colors.border }]}>
                <Text style={[styles.nameStyle, { color: colors.text}]}>
                    {name}
                </Text>
                <Text style={[styles.promptStyle, { color: colors.text}]}>
                    {prompt}
                </Text>
                <View style={styles.rallyContainerStyle}>
                    <Icon 
                        name="arrowright"
                        type="antdesign"
                        size={10}
                        color={"Nightlife" === rally ? "#8B6FF6" : "#6D6D6D"}
                        paddingRight={4}
                    />
                    <Text style={[styles.rallyStyle, {color: "Nightlife" === rally ? "#8B6FF6" : "#6D6D6D"}]}>
                        {rally}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    cardStyle: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        marginVertical: 8,
        height: 70
    },
    nameStyle: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 1,
        alignSelf: 'stretch',
    },
    promptStyle: {
        textAlign: 'left',
        color: "#717273",
        alignSelf: 'stretch',
        lineHeight: 21,
        fontSize: 15,
    },
    rallyContainerStyle: {
        marginTop: 3,
        alignItems: 'center',
        flexDirection: 'row',
    },
    rallyStyle: {
        fontSize: 12,
        color: "#717273",
        alignSelf: 'stretch',
    },
    contentStyle: {
        alignItems: 'stretch',
        justifyContent: 'center',
        paddingLeft: 16
    },
    profileStyle: {
        borderRadius: 40,
        alignItems: 'center',
        width: 70,
        height: 70,
        justifyContent: 'center',
    },
    profileContainerStyle: {
        alignItems: 'center',
        width: 70,
        height: 70,
        justifyContent: 'center',
    }
});

export default SocialCard;