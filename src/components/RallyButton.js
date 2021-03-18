import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

const RallyButton = ({ text, secondaryText, action, rally }) => {
    const { colors } = useTheme();
    return (
        <TouchableOpacity 
            style={[
                styles.buttonStyle, {
                backgroundColor: colors.card, 
                borderColor: colors.card }]} 
                onPress={action}>
            <Text 
                style={[styles.titleStyle, { color: colors.text}]}>
                {text}
            </Text>
            <View style={styles.contextStyle}>
                <Text 
                    style={[styles.titleStyle, { color: secondaryText === rally ? "#8B6FF6" : "#6D6D6D"}]}>
                    {secondaryText}
                </Text>
                <Icon
                    name="chevron-right"
                    type="entypo"
                    size={18}
                    color="#6D6D6D"
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 15,
        fontWeight: '500',
        paddingLeft: 8,
    },
    subtitleStyle: {
        fontSize: 15,
        fontWeight: '500',
        paddingLeft: 8,
    },
    contextStyle: {
        flexDirection: 'row'
    },
    buttonStyle: {
        borderRadius: 12,
        borderWidth: 1,
        marginBottom: 10,
        alignItems: 'center',
        height: 52,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 8
    }
});

export default RallyButton;

/*
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

const RallyButton = ({ text, action }) => {
    const { colors } = useTheme();
    return (
        <>
            <Button 
                title={text}
                titleStyle={styles.titleStyle}
                buttonStyle={[styles.buttonStyle, {
                    backgroundColor: colors.card, 
                    borderColor: colors.card
                }]}
                iconRight
                icon={
                    <Icon
                        name="chevron-right"
                        type="entypo"
                        size={18}
                        color="#6D6D6D"
                    />
                } 
                onPress={action}
            />
        </>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 15,
        fontWeight: '500',
        paddingLeft: 8,
    },
    buttonStyle: {
        borderRadius: 12,
        borderWidth: 1,
        marginBottom: 10,
        alignSelf: 'stretch',
        height: 52,
        justifyContent: 'space-between'
    }
});

export default RallyButton;

*/