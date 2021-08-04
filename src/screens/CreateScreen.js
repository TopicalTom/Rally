import React, { useState, useRef } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback, FlatList, TextInput } from 'react-native';
import { Text, SearchBar, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';

// Store
import { connect } from 'react-redux';
import { createChat } from '../actions';

// Components
import ActionButton from '../components/ActionButton';
import Input from '../components/Input';
import FriendsListing from '../components/FriendsListing';
import NavBar from '../components/NavBar';
import ToField from '../components/ToField';



const CreateScreen = ({ accent, friendsList, createChat, interest }) => {
    const { colors } = useTheme();
    const messageRef = useRef(null);
    const searchRef = useRef(null);
    const [ query, setQuery ] = useState('');
    const [ recipient, setRecipient ] = useState(null);
    const [ newChat, setNewChat ] = useState({
        message: "",
        recipient: "",
        sender: "" 
    });

    const handleMessageInput = (newMessage) => {
        setNewChat({...newChat, message: newMessage})
    };

    const makeSelection = (recipientId) => {
        const selectedFriend = friendsList.filter(friend => friend.uid === recipientId);

        if (selectedFriend.length !== 0) {
            setRecipient(selectedFriend[0]);
            messageRef.current.focus();
        };
    };

    const handleSearch = (queryParams) => {
        setQuery(queryParams);
    };

    const clearRecipient = () => {
        setRecipient(null);
        messageRef.current.focus();
    };

    console.log(recipient);

    return (
        <SafeAreaView style={{flex: 1}} edges={'top', 'left', 'right', 'bottom'}>
            <NavBar title="New Message" initial />
            <ToField searchCallback={handleSearch} clearCallback={clearRecipient} recipient={recipient} />
            {!recipient
                ?   <FlatList
                        data={query.length === 0 ? friendsList : friendsList.filter(friend => friend.name == query)}
                        extraData={query}
                        keyExtractor={(item, index) => item + index}
                        scrollEnabled={true}
                        ListHeaderComponent={
                            <View style={{paddingHorizontal: 16, paddingTop: 16}} />
                        }
                        renderItem={({item}) => {
                            return (
                                <FriendsListing 
                                    name={item.name}
                                    profile={item.profile}
                                    uid={item.uid}
                                    accent={accent}
                                    callback={() => makeSelection(item.uid)}
                                />
                            )
                        }}
                    />
                :   <View style={{flex: 1}}></View>
            }
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={48}
                style={[styles.screen]}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{paddingHorizontal: 16, paddingTop: 8, backgroundColor: colors.background, borderTopWidth: 0.5, borderTopColor: colors.overlay}}>
                        <Input 
                            ref={messageRef}
                            placeholder={`Your message...`}
                            accent={accent}
                            //onChange={value => handlePromptInput(value)}
                            //value={preferences.prompt}
                            //onClear={() => handlePromptClear()}
                        />
                    </View>
                </TouchableWithoutFeedback>
                <View style={{ height: 16}}/>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    searchbarStyle: {
        marginHorizontal: 8,
        alignSelf: 'stretch'
    },
    containerStyle: {
        paddingHorizontal: 0, 
        height: 48,
        paddingVertical: 4
    },
    inputContainerStyle: {
        borderBottomWidth: 0.5
    },
    outer: {
        flex: 1
    },
    container: {
        flex: 1
    },
    inner: {
        justifyContent: "space-between",
        //marginBottom: 16,
        //height: 50,
        //justifyContent: 'flex-end',
        alignSelf: 'stretch',
        //flex: 1,
        //maxHeight: 120,,
        paddingHorizontal: 16,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
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

export default connect(mapStateToProps, { createChat })(CreateScreen);