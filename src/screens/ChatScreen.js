import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback, TextInput, Button, FlatList, } from 'react-native';
import { Text, Input, Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';

// Store
import { connect } from 'react-redux';
import { retrieveChat, updateMessages, sendMessage } from '../actions';

// Component
import MessageListing from '../components/MessageListing';

const ChatScreen = ({ route, interest, accent, messages, retrieveChat, updateMessages }) => {
    const { colors } = useTheme();
    const { chatId } = route.params;
    const [ newMessage, setNewMessage ] = useState("");
    const messageChain = useRef(null);

    // Grabs updated Message Logs
    useEffect(() => {
        const unsubscribe = updateMessages(chatId);
        return () => unsubscribe;
    }, []);

    // Grabs the required Chat
    useEffect(() => {
        retrieveChat(chatId);
    }, []);

    return (
        <SafeAreaView style={{flex: 1}} edges={'top', 'left', 'right', 'bottom'}>
            <FlatList
                ref={messageChain}      
                data={messages}
                keyExtractor={(item, index) => item + index}
                scrollEnabled={true}
                style={{maxHeight: 620}}
                decelerationRate="fast"
                scrollEventThrottle={16}
                onContentSizeChange={() => messageChain.current.scrollToEnd({animated: true})}
                onLayout={() => messageChain.current.scrollToEnd({animated: true})}
                renderItem={({item, index}) => {
                    return (
                        <MessageListing 
                            key={index}
                            message={item.message}
                            owner={item.owner === "iOEaqDpLSbelERq4rZdjVyWq8PV2" ? true : false}
                        />
                    )
                }}
            />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                contentContainerStyle={{flex: 1}}
                keyboardVerticalOffset={106 + 64}
                style={[styles.screen, {flex: 1}]}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{flex: 1, minHeight: 60, justifyContent: 'flex-end', marginBottom: 64}}>
                        <View style={[styles.inner, { backgroundColor: colors.background}]}>
                            <TextInput 
                                scrollEnabled={true}
                                //multiline={true}
                                placeholder="Message" 
                                style={[styles.textInput, {backgroundColor: colors.overlay, borderColor: colors.card, borderWidth: 1}]} 
                                onChangeText={(text) => setNewMessage(text)}
                                value={newMessage}
                            />
                            <Button 
                                title="Send" 
                                style={[styles.actionStyle, { color: interest ? accent : "#6D6D6D"}]} 
                                onPress={() => sendMessage(chatId, "iOEaqDpLSbelERq4rZdjVyWq8PV2", newMessage)}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView> 
        </SafeAreaView>
    );
};

/*
                        <Button 
                            title="Send" 
                            style={[styles.actionStyle, { color: interest ? accent : "#6D6D6D"}]} 
                            onPress={() => sendMessage(chatId, "iOEaqDpLSbelERq4rZdjVyWq8PV2", newMessage)}
                        />
            <FlatList
                data={messages}
                keyExtractor={(item, index) => item + index}
                //contentContainerStyle={{paddingTop: status === "Rallying" ? 392 : 268, paddingBottom: status === "Rallying" ? 90 : 120}}
                scrollEnabled={true}
                decelerationRate="fast"
                //snapToOffsets={status === "Rallying" ? [0, 339] : [0, 215]}
                scrollEventThrottle={16}
                renderItem={({item, index}) => {
                    return (
                        <MessageListing 
                            key={index}
                            message={item.message}
                            position={'flex-end'}
                        />
                    )
                }}
            />
*/

const styles = StyleSheet.create({
    screen: {
        //flex: 1,
        //height: 50,
        //maxHeight: 120,
    },
    outer: {
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

const mapStateToProps = ({ rally, chats }) => {
    return { 
        interest: rally.interest,
        accent: rally.accent,
        messages: chats.messages   
    };
}

export default connect(mapStateToProps, { retrieveChat, updateMessages, sendMessage})(ChatScreen);

/*
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback, TextInput, Button, FlatList, } from 'react-native';
import { Text, Input, Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';

// Store
import { connect } from 'react-redux';
import { retrieveChat, updateMessages, sendMessage } from '../actions';

// Component
import MessageListing from '../components/MessageListing';

const ChatScreen = ({ route, interest, accent, messages, retrieveChat, updateMessages }) => {
    const { colors } = useTheme();
    const { chatId } = route.params;
    const [ newMessage, setNewMessage ] = useState("");
    const messageChain = useRef(null);

    // Grabs updated Message Logs
    useEffect(() => {
        const unsubscribe = updateMessages(chatId);
        return () => unsubscribe;
    }, []);

    // Grabs the required Chat
    useEffect(() => {
        retrieveChat(chatId);
    }, []);

    return (
        <SafeAreaView style={{flex: 1}} edges={'top', 'left', 'right', 'bottom'}>
            <FlatList
                ref={messageChain}      
                data={messages}
                keyExtractor={(item, index) => item + index}
                scrollEnabled={true}
                //style={styles.outer}
                decelerationRate="fast"
                scrollEventThrottle={16}
                onContentSizeChange={() => messageChain.current.scrollToEnd({animated: true})}
                onLayout={() => messageChain.current.scrollToEnd({animated: true})}
                renderItem={({item, index}) => {
                    return (
                        <MessageListing 
                            key={index}
                            message={item.message}
                            owner={item.owner === "iOEaqDpLSbelERq4rZdjVyWq8PV2" ? true : false}
                        />
                    )
                }}
            />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={[styles.screen, {backgroundColor: 'red', flex: 1}]}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={[styles.inner, { backgroundColor: colors.background}]}>
                        <TextInput 
                            scrollEnabled={true}
                            //multiline={true}
                            placeholder="Message" 
                            style={[styles.textInput, {backgroundColor: colors.overlay, borderColor: colors.card, borderWidth: 1}]} 
                            onChangeText={(text) => setNewMessage(text)}
                            value={newMessage}
                        />
                        <Button 
                            title="Send" 
                            style={[styles.actionStyle, { color: interest ? accent : "#6D6D6D"}]} 
                            onPress={() => sendMessage(chatId, "iOEaqDpLSbelERq4rZdjVyWq8PV2", newMessage)}
                        />
                    </View>
                </TouchableWithoutFeedback>
                <View style={{ height: 24 }}/>
            </KeyboardAvoidingView> 
        </SafeAreaView>
    );
};

            <FlatList
                data={messages}
                keyExtractor={(item, index) => item + index}
                //contentContainerStyle={{paddingTop: status === "Rallying" ? 392 : 268, paddingBottom: status === "Rallying" ? 90 : 120}}
                scrollEnabled={true}
                decelerationRate="fast"
                //snapToOffsets={status === "Rallying" ? [0, 339] : [0, 215]}
                scrollEventThrottle={16}
                renderItem={({item, index}) => {
                    return (
                        <MessageListing 
                            key={index}
                            message={item.message}
                            position={'flex-end'}
                        />
                    )
                }}
            />

const styles = StyleSheet.create({
    screen: {
        //flex: 1,
        //height: 50,
        //maxHeight: 120,
    },
    outer: {
        flex: 1,
    },
    inner: {
        justifyContent: "space-between",
        //marginBottom: 16,
        height: 50,
        maxHeight: 120,
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

const mapStateToProps = ({ rally, chats }) => {
    return { 
        interest: rally.interest,
        accent: rally.accent,
        messages: chats.messages   
    };
}

export default connect(mapStateToProps, { retrieveChat, updateMessages, sendMessage})(ChatScreen);
*/