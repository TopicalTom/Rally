import React, { useState } from 'react';
import { StyleSheet, ScrollView, SectionList, FlatList, TouchableOpacity, View } from 'react-native';
import { Text, Button, Icon } from 'react-native-elements';
import { useNavigation, useTheme } from '@react-navigation/native';

// Store
import { connect } from 'react-redux';

// Components
import Map from '../components/Map';
import VenueCard from '../components/VenueCard';
import { colorsDark } from 'react-native-elements/dist/config';

const PlacesScreen = ({ interest, accent, accentBorder, accentTint}) => {
    const { colors } = useTheme();
    const navigation = useNavigation();

    const VENUE_TYPES = [
        {
            id: 0,
            type: "Nightclub"
        },
        {
            id: 1,
            type: "Lounge"
        },
        {
            id: 2,
            type: "Bar"
        },
    ];

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
    ]

    return (
        <ScrollView contentContainerStyle={[styles.container, {backgroundColor: colors.background}]}>
            <Text 
                h2 style={[styles.titleStyle, {color: colors.text}]}>
                {interest || "Places"}
            </Text>
            <Text 
                style={styles.subtitleStyle}>
                Explore by venue type
            </Text>
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
            <Text 
                style={[styles.sectionStyle, {color: colors.text}]}>
                Trending
            </Text>
            <FlatList
                data={SOCIAL_VENUES}
                scrollEnabled={false}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={({item}) => {
                    return (
                        <VenueCard 
                            {...item} 
                            onPress={() => navigation.navigate('Tab', { name: item.name })} 
                        />
                    )
                }}
                keyExtractor={item => item.id}
                horizontal={false}
                numColumns={2}
            />
            <Button 
                title="Show all trending"
                titleStyle={{ color: colors.text}}
                buttonStyle={[styles.buttonStyle, { borderColor: colors.border, backgroundColor: colors.backgroundColor}]}
            />
            <Text 
                style={[styles.sectionStyle, {color: colors.text}]}>
                Recommended
            </Text>
            <FlatList
                data={SOCIAL_VENUES}
                scrollEnabled={false}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={({item}) => {
                    return (
                        <VenueCard 
                            {...item} 
                            onPress={() => navigation.navigate('Tab', { name: item.name })} 
                        />
                    )
                }}
                keyExtractor={item => item.id}
                horizontal={false}
                numColumns={2}
            />
            <Button 
                title="Show all recommended"
                titleStyle={{ color: colors.text}}
                buttonStyle={[styles.buttonStyle, { borderColor: colors.border, backgroundColor: colors.backgroundColor}]}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        //flex: 1,
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
    buttonStyle: {
        height: 52,
        borderRadius: 10,
        textAlign: 'center',
        justifyContent: 'space-around',
        borderWidth: 1,
        marginVertical: 20
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
        fontWeight: '500',
        fontSize: 18,
        marginTop: 35
    },
    mapStyle: {
        height: 180,
        borderRadius: 10,
        overflow: 'hidden'
    },
    filterContainerStyle: {
        //marginTop: 25,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    filterLabelStyle: {
        flexDirection: 'row',
        alignItems: 'flex-start',
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

            <SectionList  
                sections={SOCIAL_VENUES}
                keyExtractor={(item, index) => item + index}
                renderSectionHeader={({ section: { title }}) => {
                    return (
                        <View style={styles.filterContainerStyle}>
                            <View style={styles.filterLabelStyle}>
                                <Text 
                                    style={[styles.sectionStyle, {color: colors.text}]}>
                                    {title} 
                                </Text>
                            </View>
                        </View>
                    )
                }}
                renderItem={({ item }) => {
                    return (
                        <VenueCard 
                            {...item} 
                            onPress={() => navigation.navigate('Tab', { name: item.name })} 
                        />
                    )
                }}
            />
            <View style={styles.mapStyle}>
                <Map />
            </View>

import React, { useRef } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon, Button } from 'react-native-elements';
//import Animated from 'react-native-reanimated';
//import BottomSheet from 'reanimated-bottom-sheet';

// Components
import Map from '../components/Map';
//<Map />

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

*/

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
*/