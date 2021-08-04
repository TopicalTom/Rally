import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

const ContentFilter = ({ label }) => {
    const [ filter, setFilter ] = useState("Within 2km");
    const { colors } = useTheme();

    return (
        <View style={[styles.filterContainerStyle, {borderTopColor: colors.background}]}>
            <View style={styles.filterLabelStyle}>
                <Text 
                    style={[styles.sectionStyle, {color: colors.text}]}>
                    {label}
                </Text>
                <Text 
                    style={[styles.filterStyle, {color: colors.grey}]}>
                    ({filter})
                </Text>
            </View>
            <Icon 
                name="sort"
                type="materialicons"
                size={24}
                color={colors.grey}
                paddingLeft={8}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    sectionStyle: {
        textAlign: 'left',
        color: "#717273",
        alignSelf: 'stretch',
        fontSize: 17,
        fontWeight: 'bold',
    },
    filterContainerStyle: {
        marginTop: 32,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        borderTopWidth: 0.5
    },
    filterLabelStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    filterStyle: {
        textAlign: 'left',
        alignSelf: 'stretch',
        fontSize: 17,
        //lineHeight: 21,
        fontWeight: '400',
        paddingLeft: 4
    },
});

export default ContentFilter;