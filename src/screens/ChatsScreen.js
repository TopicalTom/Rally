import React, { useState, useEffect, useRef } from 'react';
import firestore from '@react-native-firebase/firestore';
import { Animated, StyleSheet, ScrollView, SectionList, FlatList, TouchableOpacity, View } from 'react-native';
import { Text, ButtonGroup, Divider, Icon } from 'react-native-elements';
import { useNavigation, useTheme } from '@react-navigation/native';

// Template
import Screen from '../templates/Screen';

// Components
import SocialCard from '../components/SocialCard';
import AnimatedHeader from '../components/AnimatedHeader';
import StickyHeader from '../components/StickyHeader';

const ChatsScreen = () => {
    const { colors } = useTheme();
    const navigation = useNavigation();
    const [ currentIndex, setCurrentIndex] = useState(0);
    const offset = useRef(new Animated.Value(0)).current;
    const [chats, setChats] = useState([]);

    useEffect(async () => {
        const chatsRef = firestore().collection("chats");
        const unsubscribe = await chatsRef
            .where("owners", "array-contains", 'iOEaqDpLSbelERq4rZdjVyWq8PV2')
            .get()
            .then((querySnapshot) => {
                const data = querySnapshot.docs.map(doc => ({
                    name: doc._data.users[1].name,
                    profile: doc._data.users[1].profile,
                    id: doc._data.users[1].id,
                }));
                setChats(data);
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
        return () => unsubscribe;
    }, []);

    const updateIndex = (selected) => {
        setCurrentIndex(selected)
    };

    return (
        <Screen title='Inbox' offset={offset}>
            <AnimatedHeader animatedValue={offset} headerHeight={180}>
                <Text 
                    h2 style={[styles.titleStyle, {color: colors.text}]}>
                    Inbox
                </Text>
            </AnimatedHeader>
            <StickyHeader offset={offset} scrollDistance={80} height={150}>
                <ButtonGroup 
                    buttons={['Messages', 'Requests']}
                    onPress={updateIndex}
                    selectedIndex={currentIndex}
                    selectedTextStyle={{color: colors.text}}
                    textStyle={{fontSize: 16}}
                    selectedButtonStyle={{
                        backgroundColor: colors.background,
                        borderBottomColor: colors.text,
                        borderBottomWidth: 1
                    }}
                    innerBorderStyle={{ width: 1, color: colors.background }}
                    buttonContainerStyle={{
                        alignItems: 'flex-start',
                        paddingHorizontal: 0,
                        backgroundColor: colors.background,
                    }}
                    containerStyle={[styles.tabsStyle, { backgroundColor: colors.background}]}
                />
                <Divider style={[styles.dividerStyle, {backgroundColor: colors.border}]}/>
            </StickyHeader>
            <FlatList
                data={chats}
                keyExtractor={(item, index) => item + index}
                contentContainerStyle={{paddingTop: 240}}
                scrollEnabled={true}
                scrollEventThrottle={16}
                style={{ paddingHorizontal: 16 }}
                renderItem={({item}) => {
                    return (
                        <SocialCard 
                            {...item} 
                            onPress={() => navigation.navigate('Screen', { screen: 'Connect', params: { name: item.name, profile: item.profile, rally: item.rally } })} 
                        />
                    )
                }}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: offset } } }],
                    { useNativeDriver: false }
                )}
            />
        </Screen>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        textAlign: 'left',
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'stretch',
    },
    tabsStyle: {
        borderWidth: 0,
        width: '56%',
        left: -10,
        zIndex: 90,
    },
    dividerStyle: {
        top: -6,
        height: 2
    }
});

export default ChatsScreen;

/*
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, ButtonGroup, Divider } from 'react-native-elements';
import { useNavigation, useTheme } from '@react-navigation/native';

const ChatsScreen = () => {
    const { colors } = useTheme();
    const navigation = useNavigation();
    const [ currentIndex, setCurrentIndex] = useState(0);

    const updateIndex = (selected) => {
        setCurrentIndex(selected)
    };

    return (
        <View style={[styles.container, {backgroundColor: colors.background}]}>
            <Text 
                h2 style={[styles.titleStyle, {color: colors.text}]}>
                Message
            </Text>
            <ButtonGroup 
                buttons={['Messages', 'Plans']}
                underlayColor="red"
                onPress={updateIndex}
                selectedIndex={currentIndex}
                selectedTextStyle={{color: colors.text}}
                textStyle={{fontSize: 15}}
                selectedButtonStyle={{
                    backgroundColor: colors.background,
                    borderBottomColor: colors.text,
                    borderBottomWidth: 1
                }}
                innerBorderStyle={{ width: 1, color: colors.background }}
                buttonContainerStyle={{
                    alignItems: 'flex-start',
                    paddingHorizontal: 0,
                    backgroundColor: colors.background,
                }}
                containerStyle={[styles.tabsStyle, { backgroundColor: colors.background}]}
            />
            <Divider style={[styles.dividerStyle, {backgroundColor: colors.border}]}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        paddingTop: 120,
    },
    titleStyle: {
        textAlign: 'left',
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'stretch',
    },
    tabsStyle: {
        borderWidth: 0,
        width: '55%',
        left: -10,
        zIndex: 90
    },
    dividerStyle: {
        top: -6,
        height: 2
    }
});

export default ChatsScreen;

*/