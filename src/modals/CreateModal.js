import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, SearchBar } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';

const CreateModal = () => {
    const { colors } = useTheme();

    return (
        <SafeAreaView>
            <SearchBar
                placeholder="Type Here..."
                platform="ios"
                containerStyle={[styles.searchbarStyle, {backgroundColor: colors.background}]}
                inputContainerStyle={[{backgroundColor: colors.card}]}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    searchbarStyle: {
        marginHorizontal: 8
    },
});

export default CreateModal;