import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

const RallyCard = ({ title, selected, caption, activity, onPress }) => {
    const { colors } = useTheme();

    return (
        <TouchableOpacity
            onPress={() => onPress(title)}
            selected={selected === title}
            style={[
                styles.cardStyle, { 
                backgroundColor: colors.card,
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
                {activity > 0 
                    ?   <View style={styles.activityStyle}>
                            <Text>
                                Be the first
                            </Text>
                        </View>
                    :   null
                }
            </View>
            <View style={styles.chevronStyle}>
                <Icon 
                    name="chevron-small-right"
                    type="entypo"
                    size={16}
                    color="#fff"
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
        paddingLeft: 16
    },
    chevronStyle: {
        alignItems: 'center',
        width: 40,
        backgroundColor: 'red',
        justifyContent: 'center',
    }
});

export default RallyCard;