import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon, Button } from 'react-native-elements';

const ActionButton = ({ text, color, action }) => {
    return (
        <>
            <Button 
                title={text}
                titleStyle={styles.titleStyle}
                buttonStyle={[styles.buttonStyle, {
                    backgroundColor: color, 
                    borderColor: color
                }]}
                iconRight
                icon={
                    <Icon
                        name="chevron-small-right"
                        type="entypo"
                        size={16}
                        color="#fff"
                        paddingLeft={2}
                    />
                } 
                onPress={action}
            />
        </>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
        paddingLeft: 12,
    },
    buttonStyle: {
        borderRadius: 12,
        borderWidth: 1,
        marginBottom: 8,
        //width: 295,
        alignSelf: 'stretch',
        height: 48,
        justifyContent: 'flex-start'
    }
});

export default ActionButton;