import React, { forwardRef } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

const StyledInput = forwardRef(({ placeholder, accent, onChange, value, onClear, }, ref) => {
    const { colors } = useTheme();
    return (
        <Input 
            ref={ref}
            containerStyle={styles.containerStyle}
            inputContainerStyle={[styles.inputContainerStyle, {
                backgroundColor: 'transparent', 
                borderBottomColor: 'transparent'
            }]}
            placeholder={placeholder}
            placeholderTextColor={colors.grey}
            inputStyle={{color: colors.text, fontWeight: '400', fontSize: 17}}
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
});

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