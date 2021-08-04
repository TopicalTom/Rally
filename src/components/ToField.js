import React, { useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

// Store
import { connect } from 'react-redux';

// Components
import RecipientBadge from './RecipientBadge';

const ToField = ({ accent, recipient, searchCallback, clearCallback }) => {
    const { colors } = useTheme();
    const inputRef = useRef(null);
    const [ query, setQuery ] = useState('');

    const handleSearch = (value) => {
        searchCallback(value);
        setQuery(value);
    };

    return (
        <View style={{paddingBottom: 4, paddingHorizontal: 16, display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: 4, alignSelf: 'stretch', backgroundColor: colors.background, borderBottomColor: colors.overlay, borderBottomWidth: 0.5, borderTopColor: colors.overlay, borderTopWidth: 0.5, height: 56}}>
            <Text style={{ fontSize: 17, color: colors.grey, paddingRight: 12 }}>To:</Text>
            {!recipient
                ?   <Input 
                        ref={inputRef}
                        containerStyle={styles.containerStyle}
                        inputContainerStyle={[styles.inputContainerStyle, {
                            backgroundColor: 'transparent', 
                            borderBottomColor: 'transparent'
                        }]}
                        placeholder='Search friends'
                        placeholderTextColor={colors.card}
                        inputStyle={{color: colors.text, fontWeight: '400', fontSize: 17}}
                        selectionColor={accent}
                        value={query}
                        onChangeText={(value) => handleSearch(value)}
                    />   
                :   <RecipientBadge recipient={recipient} callback={clearCallback} />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        paddingHorizontal: 0, 
        height: 48,
        paddingVertical: 4
    },
    inputContainerStyle: {
        borderBottomWidth: 0.5
    },
    textInput: {
        height: 44,
        paddingHorizontal: 16,
        borderTopWidth: 0.5,
        borderRadius: 100,
        fontSize: 16,
        flex: 1
    },  
});

const mapStateToProps = ({ friends, rally }) => {
    return { 
        friendsList: friends.currentFriends,
        accent: rally.accent,
        interest: rally.interest
    };
;}

export default connect(mapStateToProps, null)(ToField);