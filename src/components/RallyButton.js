import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

// Store
import { connect } from 'react-redux';

const RallyButton = ({ text, secondaryText, action, interest, accent }) => {
    const { colors } = useTheme();
    return (
        <TouchableOpacity 
            style={[
                styles.buttonStyle, {
                backgroundColor: colors.card, 
                borderColor: colors.card }]} 
                onPress={action}>
            <Text 
                style={[styles.titleStyle, {color: colors.grey}]}>
                {text}
            </Text>
            <View style={styles.contextStyle}>
                <Text 
                    style={[styles.subtitleStyle, { color: secondaryText === interest ? accent : colors.text}]}>
                    {secondaryText}
                </Text>
                <Icon
                    name="chevron-right"
                    type="entypo"
                    size={18}
                    color={"#6D6D6D"}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 17,
        fontWeight: '400',
        //color: "#6D6D6D"
    },
    subtitleStyle: {
        fontSize: 17,
        fontWeight: '500',
        paddingRight: 4,
    },
    contextStyle: {
        flexDirection: 'row'
    },
    buttonStyle: {
        borderRadius: 8,
        borderWidth: 1,
        marginBottom: 10,
        alignItems: 'center',
        height: 48,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 12,
        paddingRight: 8
    }
});

const mapStateToProps = ({ rally }) => {
    return { 
        interest: rally.interest,
        accent: rally.accent  
    };
}

export default connect(mapStateToProps)(RallyButton);