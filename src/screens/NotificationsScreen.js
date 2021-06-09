import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { useTheme, useNavigation } from '@react-navigation/native';

// Store
import { connect } from 'react-redux';

const NotificationsScreen = ({  }) => {
    const { colors } = useTheme();
    const navigation = useNavigation();

    return (
        <SafeAreaView>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

const mapStateToProps = ({ rally }) => {
    return { 
        interest: rally.interest,
    };
}

export default connect(mapStateToProps)(NotificationsScreen);