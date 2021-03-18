import React, { useRef } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon, Button } from 'react-native-elements';
//import Animated from 'react-native-reanimated';
//import BottomSheet from 'reanimated-bottom-sheet';

// Components
import Map from '../components/Map';

const PlacesScreen = () => {

    return (
        <View style={styles.container}>
            <Map />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: "white",
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        shadowOffset:{ width: 0,  height: -5 },
        shadowColor: 'black',
        shadowOpacity: 0.05,
    },
    scrollBar: {
        backgroundColor: "#DBDCDB",
        width: 36,
        height: 5,
        borderRadius: 2,
        alignSelf: "center"
    },
    text: {
        fontSize: 26,
        fontWeight: "800",
        color: "#2e2e2e",
        paddingBottom: 10,
        paddingTop: 10,
    },
    rally: {
        borderRadius: 200,
        width: 100,
        height: 45, 
        top: 55,
        position: "absolute",
        zIndex: 20,
        alignSelf: "center",
        alignItems: "center",
        paddingTop: 5,
    },
    logo: {
        color: "white",
    },
    block: {
        width: 375,
        height: 95,
        backgroundColor: "white",
        position: "absolute",
        zIndex: 21,
        opacity: 0
    }
});

export default PlacesScreen;

/*
    const sheetRef = useRef(null);
    const fall = new Animated.Value(1);

    // Header for Bottom Drawer
    const renderHeader = () => (
        <View style={styles.header}>
            <View style={styles.scrollBar}/>
            <Text 
                style={styles.text}>
                Rallying
            </Text>
        </View>
    );

    // Scrollable Content for Bottom Drawer
    const renderContent = () => (
        <Text 
            style={styles.text}>
            Rallying
        </Text>
    );
            <BottomSheet
                ref={sheetRef}
                snapPoints={[220, 740]}
                initialSnap={1}
                renderHeader={renderHeader}
                renderContent={renderContent}
                enabledBottomClamp={true}
                callbackNode={fall}
                enabledGestureInteraction={true}
            />
*/