import React, { useState, useEffect, useRef } from 'react';
import { Animated, StyleSheet, SectionList, View } from 'react-native';
import { Text, Button, } from 'react-native-elements';
import { useNavigation, useTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Store
import { connect } from 'react-redux';
import { stopRallying, clearCustomList } from '../actions';

// Data
import { rallyTypes } from '../data/rallyTypes';

// Components
import RallyCard from '../components/RallyCard';
import NavBar from '../components/NavBar';

const ManageScreen = ({ interest, prompt, status, squads, socialCircle, stopRallying, clearCustomList, accent }) => {
    const { colors } = useTheme();
    const navigation = useNavigation();
    const offset = useRef(new Animated.Value(0)).current;
    //const scrollDistance = status === "Rallying" ? 280 : 215;
    const scrollView = useRef(null);

    const handleSelection = (item) => {
        clearCustomList();
        navigation.navigate('Audience', { 
            interest: item.title, 
            accent: item.accent,
            accentBorder: item.accentBorder,
            accentTint: item.accentTint,
            squad: item.squad
        });
    };

    const handleUpdate = (item) => {
        clearCustomList();
        navigation.navigate('Audience', { 
            interest: item.title, 
            accent: item.accent,
            accentBorder: item.accentBorder,
            accentTint: item.accentTint,
            squad: item.squad
        });
    };

    const handleRally = () => {
        stopRallying();
        setTimeout(() => {
            navigation.navigate('Tab');
        }, 500);
    };

    const RALLY_TYPES = [
        {
            headerTitle: "Selected",
            data: rallyTypes(squads, socialCircle).filter(item => item.title === interest)
        },
        {
            headerTitle: "Other options",
            data: rallyTypes(squads, socialCircle).filter(item => item.title !== interest).sort((a, b) => a.activity.length < b.activity.length ? 1 : -1)
        }
    ];
    
    return (
        <SafeAreaView style={{flex: 1}} edges={'left', 'right'}>
            <NavBar title={'Your rally'} offset={offset} initial threshold={80} />
            <Animated.SectionList
                ref={scrollView}
                sections={RALLY_TYPES}
                style={{paddingHorizontal: 16}}
                keyExtractor={(item, index) => item + index}
                extraData={interest}
                scrollEnabled={true}
                scrollEventThrottle={16}
                ListHeaderComponent={() => {
                    return (
                        <>
                            <Text 
                                style={[styles.titleStyle, {color: colors.text}]}>
                                Your rally
                            </Text>
                            <Text 
                                style={styles.subtitleStyle}>
                                Let your friends know what you are interested in doing. You can switch this at any time.
                            </Text>
                        </>
                    )
                }}
                renderSectionHeader={({ section: { headerTitle } }) => (
                    <Text style={[styles.sectionStyle, {color: colors.text}]}>{headerTitle}</Text>
                )}
                stickySectionHeadersEnabled={false}
                renderItem={({item}) => {
                    if (item.title !== interest) {
                        return (
                            <RallyCard 
                                {...item} 
                                onPress={() => handleSelection({...item})} 
                            />
                        )
                    } else {
                        return (
                            <>
                                <RallyCard 
                                    {...item} 
                                    onPress={() => handleUpdate({...item})} 
                                />
                                <Button 
                                    title="Cancel rally"
                                    onPress={handleRally}
                                    titleStyle={{ color: colors.text}}
                                    buttonStyle={[styles.buttonStyle, { borderColor: colors.border, backgroundColor: colors.background}]}
                                />
                            </>
                        )
                    }
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
    sectionStyle: {
        marginTop: 40,
        marginBottom: 16,
        color: "#B6B6B6",
        fontSize: 17,
        fontWeight: 'bold',
    },
    titleStyle: {
        paddingTop: 40,
        textAlign: 'left',
        fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 34,
        alignSelf: 'stretch',
    },
    subtitleStyle: {
        textAlign: 'left',
        color: "#717273",
        alignSelf: 'stretch',
        marginBottom: 8,
        lineHeight: 21,
        fontWeight: '500'
    },
    buttonStyle: {
        height: 52,
        borderRadius: 10,
        textAlign: 'center',
        justifyContent: 'space-around',
        borderWidth: 1,
        //marginVertical: 10
    },
});

const mapStateToProps = ({ rally, squads, social }) => {
    return { 
        interest: rally.interest,
        status: rally.status,
        accent: rally.accent,
        prompt: rally.prompt,
        squads: squads.squadList,
        socialCircle: social.socialCircle
    };
}

export default connect(mapStateToProps, { stopRallying, clearCustomList })(ManageScreen);