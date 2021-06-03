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
                onPress={action}
            />
        </>
    );
};

/*
                iconRight
                icon={
                    <Icon
                        name="chevron-small-right"
                        type="entypo"
                        size={24}
                        color="#fff"
                        paddingLeft={2}
                    />
                } 
*/

const styles = StyleSheet.create({
    titleStyle: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '600',
        //paddingLeft: 8,
    },
    buttonStyle: {
        borderRadius: 8,
        borderWidth: 1,
        //marginBottom: 8,
        alignSelf: 'stretch',
        height: 52,
        justifyContent: 'center'
    }
});

export default ActionButton;