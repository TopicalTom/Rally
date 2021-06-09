import React from 'react';
import { StyleSheet, FlatList, View, TouchableOpacity } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useTheme } from '@react-navigation/native';

// Components
import SquadCard from '../components/RallyCard';

// Store
import { connect } from 'react-redux';

const SquadsScreen = ({ squads }) => {
    const { colors } = useTheme();
    const navigation = useNavigation();

    const SQUAD_TYPES = [
        {
            title: "Hangout",
            icon: 'users',
            caption: "Go with the flow and join friends with their plans.",
            accent: "rgba(253,45,85,1)",
            accentBorder: "rgba(253,45,85,.5)",
            accentTint: "rgba(253,45,85,.1)",
            squad: squads.hangout
        },
        {
            title: "Drinks",
            icon: 'coffee',
            caption: "Grab a glass (or two) with friend at a local bar.",
            accent: "rgba(239,135,69,1)",
            accentBorder: "rgba(239,135,69,.5)",
            accentTint: "rgba(239,135,69,.1)",
            squad: squads.drinks
        },
        {
            title: "Food",
            caption: "Get something to eat with friends at a local restaurant.",
            accent: "rgba(252,183,40, 1)",
            accentBorder: "rgba(252,183,40, .5)",
            accentTint: "rgba(252,183,40, .1)",
            squad: squads.food
        },
        {
            title: "Fitness",
            icon: 'users',
            caption: "Get fit with friends by engaging in healthy activities.",
            accent: "rgba(32,215,96,1)",
            accentBorder: "rgba(32,215,96,.5)",
            accentTint: "rgba(32,215,96,.1)",
            squad: squads.fitness
        },
        {
            title: "Entertainment",
            icon: 'smile',
            caption: "Experience day-time event & activities with friends.",
            accent: "rgba(68,173,255,1)",
            accentBorder: "rgba(68,173,255,.5)",
            accentTint: "rgba(68,173,255,.1)",
            squad: squads.entertainment
        },
        {
            title: "Nightlife",
            icon: 'moon',
            caption: "Experience night-time events and activities with friends.",
            accent: "rgba(139,111,246,1)",
            accentBorder: "rgba(139,111,246,.5)",
            accentTint: "rgba(139,111,246,.1)",
            squad: squads.nightlife
        }
    ];

    return (
        <SafeAreaView mode="padding" style={{flex: 1}} edges={['right', 'bottom', 'left']}>
            <FlatList
                style={{paddingHorizontal: 16, paddingTop: 16}}
                data={SQUAD_TYPES}
                keyExtractor={(item, index) => item + index}
                scrollEnabled={true}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between'}}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity
                            style={{backgroundColor: item.accent, width: '47.5%', height: 200, marginBottom: 16, borderRadius: 10, paddingHorizontal: 12, paddingVertical: 16, display: 'flex', justifyContent: 'flex-end'}}
                            onPress={() => navigation.navigate('Account', { 
                                screen: 'Squad',
                                params: {
                                    interest: item.title, 
                                    accent: item.accent,
                                    accentBorder: item.accentBorder,
                                    accentTint: item.accentTint,
                                    squad: item.squad
                                }
                            })}>
                            <View style={{ height: '80%', width: '100%', justifyContent: 'center', alignContent: 'center'}}>
                                <Icon
                                    name={item.icon || 'users'}
                                    type="feather"
                                    size={56}
                                    color="#FFF"
                                />
                            </View>
                            <Text style={{color: colors.text, fontSize: 17, fontWeight: 'bold'}}>{item.title}</Text>
                            <Text style={{color: colors.altText, fontSize: 13, fontWeight: '400'}}>{item.squad.length} friends</Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

const mapStateToProps = ({ rally, squads }) => {
    return { 
        interest: rally.interest,
        squads: squads
    };
}

export default connect(mapStateToProps)(SquadsScreen);