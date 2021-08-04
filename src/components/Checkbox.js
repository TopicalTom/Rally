import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

const Checkbox = ({ selected, accent }) => {
    const { colors } = useTheme();
    return (selected === true 
        ?
        <View style={[styles.radioOuter, {
            borderColor: accent, 
            backgroundColor: accent
        }]}>
            <View>
                <Icon
                    name='check'
                    type='feather'
                    size={18}
                    color={colors.background}
                />
            </View>
        </View>
        :
        <View style={[styles.radioOuter, {
            borderColor: colors.card, 
            backgroundColor: colors.background
        }]} />
    );
};

const styles = StyleSheet.create({
    radioOuter: {
        borderWidth: 1, 
        height: 24, 
        width: 24, 
        borderRadius: 80,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    radioInner: {
        borderWidth: 1, 
        height: 16, 
        width: 16, 
        borderRadius: 80
    }
});

export default Checkbox;