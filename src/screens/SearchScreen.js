import React, { useState, useEffect, useRef } from 'react';
import { Animated, StyleSheet, ScrollView, SectionList, FlatList, TouchableOpacity, View } from 'react-native';
import { Text, Image, SearchBar, Icon } from 'react-native-elements';
import { useNavigation, useTheme } from '@react-navigation/native';

// Templates
import Screen from '../templates/Screen';

// Components
import AnimatedHeader from '../components/AnimatedHeader';
import StickyHeader from '../components/StickyHeader';

// Store
import { connect } from 'react-redux';

const SearchScreen = ({ status, interest, accent }) => {
    const [ filter, setFilter ] = useState("Active");
    const { colors } = useTheme();
    const navigation = useNavigation();
    const offset = useRef(new Animated.Value(0)).current;

    const SOCIAL_VENUES = [
        {
            id: 0,
            name: "Nightlife",
            categories: [
                {
                    id: '4bf58dd8d48988d18e941735',
                    name: "Comedy club"
                },
                {
                    id: '5032792091d4c4b30a586d5c',
                    name: "Concert hall"
                },
                {
                    id: '5f2c2834b6d05514c704451e',
                    name: "Escape room"
                },
                {
                    id: '5744ccdfe4b0c0459246b4bb',
                    name: "Karaoke"
                },
            ]
        },
        {
            id: 1,
            name: "Activities",
            categories: [
                {
                    id: '4bf58dd8d48988d1e1931735',
                    name: "Arcade"
                },
                {
                    id: '4bf58dd8d48988d1e4931735',
                    name: "Bowling alley"
                },
                {
                    id: '52e81612bcbc57f1066b79eb',
                    name: "Mini-Golf"
                },
                {
                    id: '4bf58dd8d48988d17b941735',
                    name: "Zoo"
                },
            ]
        },
        {
            id: 2,
            name: "Comedy club",
        },
        {
            id: 3,
            name: "Concert hall",
        },
        {
            id: 4,
            name: "Escape room",
        },
        {
            id: 5,
            name: "Bar",
        },
        {
            id: 6,
            name: "Outcast Club",
        },
        {
            id: 7,
            name: "Bar",
        },
        {
            id: 8,
            name: "Restaurants",
        },
        {
            id: 9,
            name: "Bar",
        },
        {
            id: 10,
            name: "Outcast Club",
        },
        {
            id: 11,
            name: "Bar",
        },
        {
            id: 12,
            name: "Outcast Club and other services testing",
        },
        {
            id: 13,
            name: "Bar",
        },
        {
            id: 14,
            name: "Outcast Club",
        },
        {
            id: 15,
            name: "Bar",
        },
    ]

    return (
        <Screen title="Search" offset={offset}>
            <AnimatedHeader animatedValue={offset} headerHeight={300}>
                <Text 
                    h2 style={[styles.titleStyle, {color: colors.text}]}>
                    Search
                </Text>
            </AnimatedHeader>
            <StickyHeader offset={offset} scrollDistance={70} height={150}>
                <TouchableOpacity 
                    style={[styles.searchbarStyle, {backgroundColor: '#FFF'}]} 
                    onPress={() => navigation.navigate('Find')}>
                    <Icon
                        name="search"
                        type="feather"
                        size={20}
                        color="#6D6D6D"
                        iconStyle={{ paddingHorizontal: 4}}
                    />
                    <Text 
                        style={{color: "#6D6D6D", fontSize: 17, fontWeight: '400', paddingLeft: 4}}>
                        Find places...
                    </Text>
                </TouchableOpacity>
            </StickyHeader>
            <FlatList
                data={SOCIAL_VENUES}
                keyExtractor={item => item.id}
                contentContainerStyle={{paddingTop: 280}}
                scrollEnabled={true}
                scrollEventThrottle={16}
                columnWrapperStyle={{ paddingHorizontal: 16, justifyContent: 'space-between' }}
                numColumns={2}
                ListHeaderComponent={() => {
                    return (
                        <View style={{marginHorizontal: 16, marginBottom: 8}}>
                            <Text style={{fontSize: 16, color: colors.text, fontWeight: 'bold'}}>All Categories</Text>
                        </View>
                    )
                }}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity style={[styles.cardStyle, {backgroundColor: colors.card}]}>
                            <Image 
                                source={{ uri: item.preview}}
                                style={[styles.previewStyle, {                
                                    borderColor: colors.overlay,
                                    backgroundColor: colors.overlay,
                                    borderWidth: 1}]}
                                />
                            <Text style={styles.categoryLabelStyle}>{item.name}</Text>
                        </TouchableOpacity>
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
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: "#fff",
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
    categoryLabelStyle: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        position: 'absolute',
        bottom: 12,
        left: 12
    },
    searchbarStyle: {
        height: 48,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
        alignItems: 'center',
        borderRadius: 8,
        paddingHorizontal: 8
    },
    titleStyle: {
        textAlign: 'left',
        //paddingTop: 120,
        fontWeight: 'bold',
        //marginBottom: 10,
        alignSelf: 'stretch',
    },
    cardStyle: {
        alignSelf: 'stretch',
        flexDirection: 'column',
        marginVertical: 8,
        //height: 100,
        width: '48%',
        //width: 240,
        borderRadius: 8,
        //marginRight: 14,
    },
    previewStyle: {
        borderRadius: 8,
        height: 100,
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
        fontSize: 18,
        fontWeight: 'bold',
        //marginTop: 35
    },
    mapStyle: {
        height: 180,
        borderRadius: 10,
        overflow: 'hidden'
    },
    filterContainerStyle: {
        marginTop: 25,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    filterLabelStyle: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    filterStyle: {
        textAlign: 'left',
        alignSelf: 'stretch',
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        paddingLeft: 4
    },
});

const mapStateToProps = ({ rally }) => {
    return { 
        status: rally.status,
        interest: rally.interest,  
        accent: rally.accent,
        accentBorder: rally.accentBorder,
        accentTint: rally.accentTint     
    };
}

export default connect(mapStateToProps)(SearchScreen);