import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from 'formik';
import { useTheme } from '@react-navigation/native';

// Components
import ActionButton from '../components/ActionButton';

const PhoneScreen = () => {
    const { colors } = useTheme();
    return (
        <SafeAreaView style={[styles.screen, {backgroundColor: colors.background}]}>
            <View style={styles.container}>
                <Text 
                    h4 style={[styles.titleStyle, {color: colors.text}]}>
                    What's your number?
                </Text>
                <Formik
                    initialValues={{
                        phoneNumber: ""
                    }}
                    onSubmit={values => console.log(values)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <Input
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            placeholder="Phone Numberr"
                        />
                        <ActionButton 
                            text="Continue"
                            color="#FD2D55"
                            action={handleSubmit}
                        />
                    </View>
                    )}
                </Formik>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingVertical: 80,
        paddingHorizontal: 40
    },
    container: {
        alignItems: 'stretch'
    },
    titleStyle: {
        textAlign: 'left',
        fontWeight: '700',
        marginBottom: 40,
    },
    inputStyle: {
        textAlign: 'left',
    },
});

export default PhoneScreen;