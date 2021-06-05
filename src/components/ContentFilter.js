import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

const ContentFilter = ({ label }) => {
    const [ filter, setFilter ] = useState("Within 2km");
    const { colors } = useTheme();

    return (
        <View style={styles.filterContainerStyle}>
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
        marginBottom: 8,
        lineHeight: 21,
        fontSize: 16,
        fontWeight: 'bold',
    },
    filterContainerStyle: {
        marginTop: 25,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    filterLabelStyle: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    filterStyle: {
        textAlign: 'left',
        alignSelf: 'stretch',
        fontSize: 16,
        lineHeight: 21,
        fontWeight: '400',
        paddingLeft: 4
    },
});

export default ContentFilter;