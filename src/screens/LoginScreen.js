import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from 'formik';
import { useNavigation, useTheme } from '@react-navigation/native';

// Store
import { connect } from 'react-redux';
import { googleSignIn } from '../actions';

// Components
import ActionButton from '../components/ActionButton';
import AuthButton from '../components/AuthButton';

const LoginScreen = () => {
    const { colors } = useTheme();
    const navigation = useNavigation();
    
    return (
        <View 
            style={[
                styles.screen, 
                {backgroundColor: colors.background}
            ]}>
            <View style={styles.container}>
                <Text 
                    h3 style={[styles.titleStyle, {color: colors.text}]}>
                    Log in
                </Text>
                <Formik
                    initialValues={{
                        email: "",
                        password: ""
                    }}
                    onSubmit={values => console.log(values)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <Input
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            placeholder="Email"
                            autoCorrect={false}
                            autoCapitalize='none'
                        />
                        <Input
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            placeholder="Password"
                            autoCorrect={false}
                            autoCapitalize='none'
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
        </View>
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

export default connect(null, { googleSignIn })(LoginScreen);