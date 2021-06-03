import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon, Text } from 'react-native-elements';

const AuthButton = ({ text, buttonColor, textColor, icon, iconType, iconColor, action }) => {
    const toggleStyle = text.includes("Log") || text.includes("Sign") ? 'flex-start': 'space-between';
    return (
        <TouchableOpacity 
            style={[ styles.buttonStyle, buttonColor, {justifyContent: toggleStyle }]} 
                onPress={action}>
            <View style={styles.typeStyle}>
                {icon 
                    ?   <Icon
                            name={icon}
                            type={iconType}
                            size={18}
                            color={iconColor}
                            iconStyle={{ paddingHorizontal: 4}}
                        />
                    :   null
                }
                <Text 
                    style={[styles.titleStyle, textColor]}>
                    {text}
                </Text>
            </View>
            <Icon
                name="chevron-right"
                type="entypo"
                size={18}
                color={iconColor}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 16,
        fontWeight: '500',
        paddingLeft: 8,
    },
    typeStyle: {
        flexDirection: 'row'
    },
    buttonStyle: {
        borderRadius: 12,
        borderWidth: 1,
        marginBottom: 10,
        alignItems: 'center',
        height: 52,
        flexDirection: 'row',
        paddingHorizontal: 8
    }
});

export default AuthButton;

/*
import React from 'react';
import { Icon, Button } from 'react-native-elements';

const AuthButton = ({ text, textStyle, buttonStyle, icon, iconRight, iconType, iconColor, action  }) => {
    return (
        <>
            <Button 
                title={text}
                titleStyle={textStyle}
                buttonStyle={buttonStyle}
                iconRight={iconRight ? true : false}
                icon={
                    <Icon
                        name={icon}
                        type={iconType}
                        size={16}
                        color={iconColor}
                        paddingLeft={iconRight ? 2 : 6}
                    />
                } 
                onPress={action}
            />
        </>
    );
};

export default AuthButton;
*/