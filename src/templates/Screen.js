import React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Screen = ({ title, offset, children }) => {
    const { colors } = useTheme();

    const dynamicOpacity = offset.interpolate({
        inputRange: [ 0, 80 ],
        outputRange: [ 0, 1],
        extrapolate: 'clamp'
    });

    return (
        <SafeAreaView 
            style={[styles.container, {backgroundColor: colors.background}]} mode="padding" edges={['right', 'left']}>
            <View style={[
                styles.headerStyle, { 
                backgroundColor: colors.background}]}>
                <Animated.Text 
                    h3 style={[styles.titleStyle, {color: colors.text, opacity: dynamicOpacity }]}>
                    {title}
                </Animated.Text>
            </View>
            {children}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    headerStyle: {
        textAlign: 'left',
        //paddingTop: 55,
        alignSelf: 'stretch',
        //position: 'absolute',
        //top: 0,
        //left: 0,
        //right: 0,
        marginHorizontal: 16,
        height: 100,
        zIndex: 900
    },
    titleStyle: {
        textAlign: 'left',
        paddingTop: 58,
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'stretch',
        position: 'absolute',
        top: 0,
        left: 0,
        fontSize: 28,
        zIndex: 1000
    }
});

export default Screen;

/*
import React from 'react';
import { Animated, StyleSheet, View, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

const Screen = ({ title, offset, children }) => {
    const { colors } = useTheme();

    const dynamicOpacity = offset.interpolate({
        inputRange: [ 0, 80 ],
        outputRange: [ 0, 1],
        extrapolate: 'clamp'
    });

    return (
        <View style={[styles.container, {backgroundColor: colors.background}]}>
            <Animated.View style={[
                styles.headerStyle, { 
                backgroundColor: colors.background, 
                opacity: dynamicOpacity}]}>
                <Text 
                    h3 style={[styles.titleStyle, {color: colors.text}]}>
                    {title}
                </Text>
            </Animated.View>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: "#fff",
    },
    headerStyle: {
        textAlign: 'left',
        paddingTop: 55,
        alignSelf: 'stretch',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        marginHorizontal: 16,
        height: 100,
        zIndex: 900
    },
    titleStyle: {
        textAlign: 'left',
        paddingTop: 55,
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'stretch',
        position: 'absolute',
        top: 0,
        left: 0,
        fontSize: 16,
        zIndex: 1000
    }
});

export default Screen;

*/