import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

// Store
import { connect } from 'react-redux';

// Components
import Interest from './InterestIndicator';

const RallyCard = ({ title, caption, interest, accent, onPress, socialCircle }) => {
    const { colors } = useTheme();
    const activity = socialCircle.filter(item => item.rally === title);

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.cardStyle, { 
                backgroundColor: title === interest ? accent : colors.card,
                borderColor: title === interest ? accent : colors.card
            }]}
        >
            <View style={styles.contentStyle}>
                <Text style={[styles.titleStyle, { color: colors.text}]}>
                    {title}
                </Text>
                <Text style={[styles.captionStyle, { color: colors.text, opacity: 0.8}]}>
                    {caption}
                </Text>
                <Interest activity={activity} selected={interest === title ? true : false} accent={accent} />
            </View>
            <View style={styles.chevronStyle}>
                <Icon 
                    name="chevron-right"
                    type="entypo"
                    size={24}
                    color={`#FFF`}
                />
            </View>
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    cardStyle: {
        borderRadius: 10,
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderWidth: 1,
        marginBottom: 12,
        paddingVertical: 16
    },
    titleStyle: {
        textAlign: 'left',
        fontWeight: '500',
        fontSize: 22,
        marginBottom: 4,
        alignSelf: 'stretch',
    },
    captionStyle: {
        textAlign: 'left',
        color: "#717273",
        alignSelf: 'stretch',
        lineHeight: 21,
        fontSize: 15,
        marginBottom: 16
    },
    activityStyle: {
        marginTop: 8,
    },
    contentStyle: {
        paddingLeft: 16,
        maxWidth: '80%'
    },
    chevronStyle: {
        alignItems: 'center',
        width: 40,
        justifyContent: 'center',
    }
});

const mapStateToProps = ({ rally, social }) => {
    return { 
        interest: rally.interest,
        accent: rally.accent,
        socialCircle: social.socialCircle 
    };
}

export default connect(mapStateToProps)(RallyCard);