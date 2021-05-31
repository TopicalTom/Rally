import React, { useRef} from 'react';
import { StyleSheet } from 'react-native';
import { Text, SearchBar } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useTheme } from '@react-navigation/native';

const SearchModal = () => {
    const { colors } = useTheme();
    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <SearchBar
                placeholder="Type Here..."
                platform="ios"
                containerStyle={[styles.searchbarStyle, {backgroundColor: colors.background}]}
                inputContainerStyle={[{backgroundColor: colors.card}]}
                onCancel={() => navigation.navigate('Search')}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    searchbarStyle: {
        marginHorizontal: 8
    },
});

export default SearchModal;