import React, { useState, useEffect, useRef } from 'react';
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

    const updateIndex = (selected) => {
        setCurrentIndex(selected)
    };

    const SOCIAL_CIRCLE = [
        {
            name: "Natalie",
            prompt: "Anyone else thinking Outcast tn?",
            rally: "Nightlife",
            profile: "https://images.unsplash.com/photo-1558507652-2d9626c4e67a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
            coords: {
                latitude: -47,
                longitude: 23
            }
        },
        {
            name: "Shawn",
            prompt: "Long week, I need to go out...",
            rally: "Nightlife",
            profile: "https://images.unsplash.com/photo-1601582589907-f92af5ed9db8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
            coords: {
                latitude: -47,
                longitude: 23
            }
        },
        {
            name: "Calista",
            prompt: "Feeling a chill night",
            rally: "Hangout",
            profile: "https://images.unsplash.com/photo-1614514161228-9f1543003961?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
            coords: {
                latitude: -47,
                longitude: 23
            }
        },
        {
            name: "Andre",
            prompt: "Hit me up if anything is going on tn",
            rally: "Hangout",
            profile: "https://images.unsplash.com/photo-1484517186945-df8151a1a871?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=687&q=80",
            coords: {
                latitude: -47,
                longitude: 23
            }
        },
        {
            name: "Shawn",
            prompt: "Anyone else thinking Outcast tn?",
            rally: "Nightlife",
            profile: "https://images.unsplash.com/photo-1527047614336-194da60dacd9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
            coords: {
                latitude: -47,
                longitude: 23
            }
        },
        {
            name: "Natalie",
            prompt: "Anyone else thinking Outcast tn?",
            rally: "Nightlife",
            profile: "https://images.unsplash.com/photo-1558507652-2d9626c4e67a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
            coords: {
                latitude: -47,
                longitude: 23
            }
        },
        {
            name: "Shawn",
            prompt: "Long week, I need to go out...",
            rally: "Nightlife",
            profile: "https://images.unsplash.com/photo-1601582589907-f92af5ed9db8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
            coords: {
                latitude: -47,
                longitude: 23
            }
        },
        {
            name: "Calista",
            prompt: "Feeling a chill night",
            rally: "Hangout",
            profile: "https://images.unsplash.com/photo-1614514161228-9f1543003961?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
            coords: {
                latitude: -47,
                longitude: 23
            }
        },
        {
            name: "Andre",
            prompt: "Hit me up if anything is going on tn",
            rally: "Hangout",
            profile: "https://images.unsplash.com/photo-1484517186945-df8151a1a871?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=687&q=80",
            coords: {
                latitude: -47,
                longitude: 23
            }
        },
        {
            name: "Shawn",
            prompt: "Anyone else thinking Outcast tn?",
            rally: "Nightlife",
            profile: "https://images.unsplash.com/photo-1527047614336-194da60dacd9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
            coords: {
                latitude: -47,
                longitude: 23
            }
        }
    ];

    return (
        <Screen title='Messages' offset={offset}>
            <AnimatedHeader animatedValue={offset} headerHeight={180}>
                <Text 
                    h2 style={[styles.titleStyle, {color: colors.text}]}>
                    Messages
                </Text>
            </AnimatedHeader>
            <StickyHeader offset={offset} scrollDistance={80} height={150}>
                <ButtonGroup 
                    buttons={['All', 'Unread']}
                    underlayColor="red"
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
                data={SOCIAL_CIRCLE}
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
        width: '35%',
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