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