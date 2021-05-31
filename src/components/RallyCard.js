import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

// Store
import { connect } from 'react-redux';

// Components
import Interest from './InterestIndicator';

const RallyCard = ({ title, caption, activity, interest, accent, onPress }) => {
    const { colors } = useTheme();

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.cardStyle, { 
                backgroundColor: title === interest ? accent : colors.card,
                borderColor: colors.card
            }]}
        >
            <View style={styles.contentStyle}>
                <Text style={[styles.titleStyle, { color: colors.text}]}>
                    {title}
                </Text>
                <Text style={[styles.captionStyle, { color: colors.text}]}>
                    {caption}
                </Text>
                <Interest activity={activity} />
            </View>
            <View style={styles.chevronStyle}>
                <Icon 
                    name="chevron-right"
                    type="entypo"
                    size={16}
                    color="#717273"
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
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 3,
        alignSelf: 'stretch',
    },
    captionStyle: {
        textAlign: 'left',
        color: "#717273",
        alignSelf: 'stretch',
        lineHeight: 21,
        fontSize: 15,
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

const mapStateToProps = ({ rally }) => {
    return { 
        interest: rally.interest,
        accent: rally.accent  
    };
}

export default connect(mapStateToProps)(RallyCard);