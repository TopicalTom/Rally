import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';

const ProfileModal = () => {
    return (
        <SafeAreaView>
            <Text>Profile</Text>
            <Button title="Sign out of rally" onPress={() => auth().signOut()}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default ProfileModal;