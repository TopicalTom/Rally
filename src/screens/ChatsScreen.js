import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, ButtonGroup, Divider } from 'react-native-elements';
import { useNavigation, useTheme } from '@react-navigation/native';

const ChatsScreen = () => {
    const { colors } = useTheme();
    const navigation = useNavigation();
    const [ currentIndex, setCurrentIndex] = useState(0);

    const updateIndex = (selected) => {
        setCurrentIndex(selected)
    };

    return (
        <View style={[styles.container, {backgroundColor: colors.background}]}>
            <Text 
                h2 style={[styles.titleStyle, {color: colors.text}]}>
                Inbox
            </Text>
            <ButtonGroup 
                buttons={['Messages', 'Plans']}
                underlayColor="red"
                onPress={updateIndex}
                selectedIndex={currentIndex}
                selectedTextStyle={{color: colors.text}}
                textStyle={{fontSize: 15}}
                selectedButtonStyle={{
                    backgroundColor: colors.background,
                    borderBottomColor: colors.text,
                    borderBottomWidth: 1
                }}
                innerBorderStyle={{ width: 1, color: colors.background }}
                buttonContainerStyle={{
                    alignItems: 'flex-start',
                    paddingHorizontal: 0,
                    backgroundColor: colors.background,
                }}
                containerStyle={[styles.tabsStyle, { backgroundColor: colors.background}]}
            />
            <Divider style={[styles.dividerStyle, {backgroundColor: colors.border}]}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        paddingTop: 120,
    },
    titleStyle: {
        textAlign: 'left',
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'stretch',
    },
    tabsStyle: {
        borderWidth: 0,
        width: '55%',
        left: -10,
        zIndex: 90
    },
    dividerStyle: {
        top: -6,
        height: 2
    }
});

export default ChatsScreen;