import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

const StyledInput = ({ ref, placeholder, accent, onChange, value, onClear }) => {
    const { colors } = useTheme();
    return (
        <Input 
            ref={ref}
            containerStyle={styles.containerStyle}
            inputContainerStyle={[styles.inputContainerStyle, {
                backgroundColor: colors.background, 
                borderBottomColor: colors.card
            }]}
            placeholder={placeholder}
            placeholderTextColor={colors.grey}
            inputStyle={{color: colors.text}}
            selectionColor={accent}
            onChangeText={onChange}
            rightIcon={() => {
                return (
                    value !== "" &&
                    <TouchableOpacity 
                        style={styles.closeButtonStyle}
                        onPress={onClear}>
                        <Icon
                            name="x"
                            type="feather"
                            size={13}
                            color={colors.background}
                        />
                    </TouchableOpacity>
                )      
            }}
        />
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        paddingHorizontal: 0, 
        height: 48
    },
    inputContainerStyle: {
        borderBottomWidth: 0.5
    },
    closeButtonStyle: {
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        width: 21,
        height: 21,
        backgroundColor: '#FFF', 
        padding: 4, 
        opacity: 0.3
    },
});

export default StyledInput;