import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

const RallyButton = ({ text, action }) => {
    const { colors } = useTheme();
    return (
        <>
            <Button 
                title={text}
                titleStyle={styles.titleStyle}
                buttonStyle={[styles.buttonStyle, {
                    backgroundColor: colors.card, 
                    borderColor: colors.card
                }]}
                iconRight
                icon={
                    <Icon
                        name="chevron-right"
                        type="entypo"
                        size={18}
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
        fontSize: 15,
        fontWeight: '500',
        paddingLeft: 10,
    },
    buttonStyle: {
        borderRadius: 12,
        borderWidth: 1,
        marginBottom: 10,
        alignSelf: 'stretch',
        height: 52,
        justifyContent: 'space-between'
    }
});

export default RallyButton;