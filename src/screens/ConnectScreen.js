import React, { useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback, TextInput, Button } from 'react-native';
import { Text, Input, FlatList, Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';

// Store
import { connect } from 'react-redux';

const ConnectScreen = ({ interest, accent}) => {
    const { colors } = useTheme();

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={[styles.screen, {backgroundColor: colors.background}]}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <>
                <View style={styles.outer} />
                <View style={[styles.inner, { backgroundColor: colors.background}]}>
                    <TextInput placeholder="Message" style={[styles.textInput, {backgroundColor: colors.card, borderTopColor: colors.border}]} />
                    <Text style={[styles.actionStyle, { color: interest ? accent : "#6D6D6D"}]}>Send</Text>
                </View>
                </>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    outer: {
        flex: 1,
    },
    inner: {
        justifyContent: "space-between",
        marginBottom: 96,
        height: 50,
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

const mapStateToProps = ({ rally }) => {
    return { 
        interest: rally.interest,
        accent: rally.accent,   
    };
}

export default connect(mapStateToProps)(ConnectScreen);