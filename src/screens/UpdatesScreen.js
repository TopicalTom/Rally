import React, { useState, useEffect, useRef } from 'react';
import firestore from '@react-native-firebase/firestore';
import { Animated, StyleSheet, FlatList, View } from 'react-native';
import { Text, ButtonGroup, Button, Divider, Icon } from 'react-native-elements';
import { useNavigation, useTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Components
import SocialCard from '../components/SocialCard';

const UpdatesScreen = () => {
    const { colors } = useTheme();
    const navigation = useNavigation();
    const offset = useRef(new Animated.Value(0)).current;
    //socialCircle.sort(item => item.rally === interest).reverse()
    const [chats, setChats] = useState([]);
    const updateIndex = (selected) => {
        setCurrentIndex(selected)
    };
    const [ currentIndex, setCurrentIndex] = useState(0);
    const scrollDistance = 80;

    const animatedHeight = offset.interpolate({
        inputRange: [ 0, scrollDistance],
        outputRange: [ 0 + 32, -scrollDistance + 32],
        extrapolate: 'clamp'
    });

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
    
    return (
        <SafeAreaView mode="padding" style={styles.container} edges={['right', 'left']}>
            <Animated.View style={{
                position: 'absolute',
                transform: [{translateY: animatedHeight}],
                left: 0,
                right: 0,
                zIndex: 10,
                paddingHorizontal: 16,
                backgroundColor: colors.background
            }}>
                <Text 
                    h2 style={[styles.titleStyle, {color: colors.text}]}>
                    Inbox
                </Text>
                <ButtonGroup 
                    buttons={['Messages', 'Notifications']}
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
            </Animated.View>
            <Animated.FlatList
                data={chats}
                keyExtractor={(item, index) => item + index}
                contentContainerStyle={{paddingTop: 150}}
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
                    { useNativeDriver: true }
                )}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    swipeCardStyle: {
        height: 180,
        borderRadius: 8,
        width: '100%',
        marginBottom: 16,
        paddingHorizontal: 16,
        paddingVertical: 24
    },
    headerContainerStyle: {
        textAlign: 'left',
        paddingTop: 55,
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'stretch',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        marginHorizontal: 16,
        height: 100,
        zIndex: 900
    },
    headerTitleStyle: {
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
    },
    titleStyle: {
        textAlign: 'left',
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'stretch',
    },
    buttonStyle: {
        height: 52,
        borderRadius: 10,
        textAlign: 'center',
        justifyContent: 'space-around',
        borderWidth: 1,
        marginVertical: 20
    },
    floatingButtonStyle: {
        position: "absolute",
        bottom: 10,
        zIndex: 90,
        height: 36,
        right: 0,
        left: 0,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    mapButtonStyle: {
        width: 100,
        height: 36,
        textAlign: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mapTitleStyle: {
        paddingLeft: 6,
        paddingRight: 10,
        color: "#6D6D6D",
        //color: "#FFF",
        fontWeight: '500'
    },
    subtitleStyle: {
        textAlign: 'left',
        color: "#717273",
        alignSelf: 'stretch',
        marginBottom: 8,
        lineHeight: 21,
        fontWeight: '500'
    },
    sectionStyle: {
        textAlign: 'left',
        color: "#717273",
        alignSelf: 'stretch',
        marginBottom: 8,
        lineHeight: 21,
        fontSize: 16,
        fontWeight: 'bold',
        //marginTop: 35
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

const mapStateToProps = ({ rally, authentication, social }) => {
    return { 
        status: rally.status,
        interest: rally.interest, 
        prompt: rally.prompt,  
        type: rally.type,  
        accent: rally.accent,
        accentBorder: rally.accentBorder,
        accentTint: rally.accentTint  ,
        user: authentication.user,
        socialCircle: social.socialCircle,
    };
}

export default UpdatesScreen;