import React, { useState, useEffect, useRef } from 'react';
import { Animated, StyleSheet, ScrollView, SectionList, FlatList, TouchableOpacity, View } from 'react-native';
import { Text, Button, Icon } from 'react-native-elements';
import { useNavigation, useTheme } from '@react-navigation/native';

// Helpers
import { calculateCentroid } from '../helpers';

// Store
import { connect } from 'react-redux';

// Components
import VenueCard from '../components/VenueCard';
import AnimatedHeader from '../components/AnimatedHeader';
import StickyHeader from '../components/StickyHeader';
import Screen from '../templates/Screen';

const PlacesScreen = ({ interest, accent, accentBorder, accentTint}) => {
    const { colors } = useTheme();
    const navigation = useNavigation();
    const offset = useRef(new Animated.Value(0)).current;

    const SOCIAL_VENUES = [
        {
            id: 0,
            name: "Outcast Club and other services testing",
            description: "Anyone else thinking Outcast tn?",
            preview: "https://images.unsplash.com/photo-1519214605650-76a613ee3245?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80",
            location: {
                latitude: -47,
                longitude: 23
            }
        },
        {
            id: 1,
            name: "Bar",
            description: "Long week, I need to go out...",
            preview: "https://images.unsplash.com/photo-1570872626485-d8ffea69f463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80",
            location: {
                latitude: -47,
                longitude: 23
            }
        },
        {
            id: 2,
            name: "Outcast Club",
            description: "Anyone else thinking Outcast tn?",
            preview: "https://images.unsplash.com/photo-1558043279-a860bfe6d3b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
            location: {
                latitude: -47,
                longitude: 23
            }
        },
        {
            id: 3,
            name: "Bar",
            description: "Long week, I need to go out...",
            preview: "https://images.unsplash.com/photo-1570872626485-d8ffea69f463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80",
            location: {
                latitude: -47,
                longitude: 23
            }
        },
        {
            id: 4,
            name: "Outcast Club and other services testing",
            description: "Anyone else thinking Outcast tn?",
            preview: "https://images.unsplash.com/photo-1519214605650-76a613ee3245?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80",
            location: {
                latitude: -47,
                longitude: 23
            }
        },
        {
            id: 5,
            name: "Bar",
            description: "Long week, I need to go out...",
            preview: "https://images.unsplash.com/photo-1570872626485-d8ffea69f463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80",
            location: {
                latitude: -47,
                longitude: 23
            }
        },
        {
            id: 6,
            name: "Outcast Club",
            description: "Anyone else thinking Outcast tn?",
            preview: "https://images.unsplash.com/photo-1558043279-a860bfe6d3b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
            location: {
                latitude: -47,
                longitude: 23
            }
        },
        {
            id: 7,
            name: "Bar",
            description: "Long week, I need to go out...",
            preview: "https://images.unsplash.com/photo-1570872626485-d8ffea69f463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80",
            location: {
                latitude: -47,
                longitude: 23
            }
        },
    ]

    const animatedMargin = offset.interpolate({
        inputRange: [ 0, 300 ],
        outputRange: [ 300, 0 ],
        extrapolate: 'clamp'
    });

    // const center = calculateCentroid([[ -1.2, 5.1 ],[ -1.3, 5.2 ],[ -1.8, 5.9 ],[ -1.9, 5.8 ]])

    return (
        <>
            <View style={styles.floatingButtonStyle}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Screen', { screen: 'Map'})} 
                    style={[styles.mapButtonStyle, { backgroundColor: colors.card}]}>
                    <Icon 
                        name="map"
                        type="feather"
                        size={20}
                        color="#6D6D6D"
                        paddingLeft={8}
                    />
                    <Text 
                        style={styles.mapTitleStyle}>
                        MAP
                    </Text>
                </TouchableOpacity>
            </View>
            <Screen title="Nearby" offset={offset}>
                <AnimatedHeader animatedValue={offset} headerHeight={300}>
                    <Text 
                        h2 style={[styles.titleStyle, {color: colors.text}]}>
                        Nearby
                    </Text>
                    <Text 
                        h5 style={styles.subtitleStyle}>
                        Find local places that work for you
                    </Text>
                    <Button 
                        title="Coordinate with friends"
                        onPress={() => navigation.navigate('Location')}
                        titleStyle={{ color: colors.text}}
                        buttonStyle={[styles.buttonStyle, { borderColor: colors.border, backgroundColor: colors.background}]}
                    /> 
                </AnimatedHeader>
                <StickyHeader offset={offset} scrollDistance={200}>
                    <View style={styles.filterContainerStyle}>
                        <View style={styles.filterLabelStyle}>
                            <Text 
                                style={[styles.sectionStyle, {color: colors.text}]}>
                                Places
                            </Text>
                            <Text 
                                style={[styles.filterStyle, {color: '#6D6D6D'}]}>
                                ({interest || "Any"})
                            </Text>
                        </View>
                        <Icon 
                            name="sort"
                            type="materialicons"
                            size={24}
                            color="#6D6D6D"
                            paddingLeft={8}
                        />
                    </View>
                </StickyHeader>
                <FlatList
                    data={SOCIAL_VENUES}
                    keyExtractor={item => item.id}
                    contentContainerStyle={{paddingTop: 350}}
                    scrollEnabled={true}
                    scrollEventThrottle={16}
                    columnWrapperStyle={{ paddingHorizontal: 16, justifyContent: 'space-between' }}
                    numColumns={2}
                    renderItem={({item}) => {
                        return (
                            <VenueCard 
                                {...item} 
                                onPress={() => navigation.navigate('Tab', { name: item.name })} 
                            />
                        )
                    }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: offset } } }],
                        { useNativeDriver: false }
                    )}
                />
            </Screen>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: "#fff",
    },
    titleStyle: {
        textAlign: 'left',
        //paddingTop: 120,
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'stretch',
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
        //lineHeight: 21,
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
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        paddingLeft: 4
    },
});

const mapStateToProps = ({ rally }) => {
    return { 
        interest: rally.interest,
        accent: rally.accent,
        accentBorder: rally.accentBorder,
        accentTint: rally.accentTint      
    };
}

export default connect(mapStateToProps)(PlacesScreen);

/*
                    ListHeaderComponent={() => {
                        return (
                            <View style={{ backgroundColor: colors.background, paddingHorizontal: 16}}>
                                <View style={styles.filterContainerStyle}>
                                    <View style={styles.filterLabelStyle}>
                                        <Text 
                                            style={[styles.sectionStyle, {color: colors.text}]}>
                                            Nearby
                                        </Text>
                                        <Text 
                                            style={[styles.filterStyle, {color: '#6D6D6D'}]}>
                                            (All)
                                        </Text>
                                    </View>
                                    <Icon 
                                        name="sort"
                                        type="materialicons"
                                        size={24}
                                        color="#6D6D6D"
                                        paddingLeft={8}
                                    />
                                </View>
                            </View>
                        )
                    }}

*/

/*
                            <View style={{ backgroundColor: colors.background, paddingHorizontal: 16, marginTop: 300}}>
                                <View style={styles.filterContainerStyle}>
                                    <View style={styles.filterLabelStyle}>
                                        <Text 
                                            style={[styles.sectionStyle, {color: colors.text}]}>
                                            Nearby
                                        </Text>
                                        <Text 
                                            style={[styles.filterStyle, {color: '#6D6D6D'}]}>
                                            (All)
                                        </Text>
                                    </View>
                                    <Icon 
                                        name="sort"
                                        type="materialicons"
                                        size={24}
                                        color="#6D6D6D"
                                        paddingLeft={8}
                                    />
                                </View>
                            </View>

*/

/*
                <FlatList
                    data={VENUE_TYPES}
                    extraData={accent, accentBorder, accentTint}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity 
                                onPress={() => navigation.navigate('Location')}
                                style={{ borderRadius: 10, borderColor: accentBorder || colors.border, borderWidth: 1, paddingHorizontal: 12, paddingVertical: 8, marginRight: 8, backgroundColor: accentTint || colors.border}}>
                                <Text style={{color: accent || colors.border}}>
                                    {item.type}
                                </Text>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={item => item.id}
                    horizontal
                />

            <FlatList
                data={VENUE_TYPES}
                extraData={accent, accentBorder, accentTint}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity style={{ borderRadius: 10, borderColor: accentBorder || colors.border, borderWidth: 1, paddingHorizontal: 12, paddingVertical: 8, marginRight: 8, backgroundColor: accentTint || colors.border}}>
                            <Text style={{color: accent || colors.border}}>
                                {item.type}
                            </Text>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={item => item.id}
                horizontal
            />

*/

/*
            <FlatList
                data={SOCIAL_VENUES}
                //scrollEnabled={false}
                //columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={({item}) => {
                    return (
                        <VenueCard 
                            {...item} 
                            onPress={() => navigation.navigate('Tab', { name: item.name })} 
                        />
                    )
                }}
                keyExtractor={item => item.id}
                horizontal
                //numColumns={2}
            />

*/