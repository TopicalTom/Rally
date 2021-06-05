import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon, Button } from 'react-native-elements';

const ActionButton = ({ text, color, action, disabled }) => {
    return (
        <Button 
            title={text}
            titleStyle={styles.titleStyle}
            buttonStyle={[styles.buttonStyle, {
                backgroundColor: color, 
                borderColor: color
            }]}
            disabled={disabled || false}
            disabledTitleStyle={styles.titleStyle}
            disabledStyle={{
                opacity: 0.5,
                backgroundColor: color, 
                borderColor: color
            }}
            onPress={action}
        />
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '600',
    },
    buttonStyle: {
        borderRadius: 8,
        borderWidth: 1,
        alignSelf: 'stretch',
        height: 52,
        justifyContent: 'center'
    }
});

export default ActionButton;