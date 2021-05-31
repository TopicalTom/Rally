import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, Image, Icon } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

// Store
import { connect } from 'react-redux';

// Components
import InterestIndicator from './InterestIndicator';

const VenueCard = ({ preview, name, description, location, interest, accent, onPress }) => {
    const { colors } = useTheme();

    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.cardStyle}
        >
            <View style={styles.previewContainerStyle}>
                <View style={[styles.floatingLabelStyle, {display: 'flex', flexDirection: 'row'}]}>
                    <Icon 
                        name="heart"
                        type="feather"
                        size={18}
                        color="#FFF"
                        paddingRight={4}
                    />
                </View>
                <Image 
                    source={{ uri: preview}}
                    style={styles.previewStyle}
                />
            </View>
            <View>
                <Text h5 style={[styles.nameStyle, { color: colors.text}]}>{name}</Text>                
            </View>
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    cardStyle: {
        alignSelf: 'stretch',
        flexDirection: 'column',
        marginVertical: 8,
        //height: 160
        width: '48%',
        //width: 240,
        borderRadius: 10,
        marginRight: 14,
        marginBottom: 16,
    },
    floatingLabelStyle: {
        position: 'absolute',
        top: 8,
        right: 8,
        zIndex: 90,
    },
    nameStyle: {
        textAlign: 'left',
        fontWeight: '700',
        alignSelf: 'stretch',
        fontSize: 13,
        marginTop: 10,
    },
    rallyContainerStyle: {
        marginTop: 3,
        alignItems: 'center',
        flexDirection: 'row',
    },
    typeStyle: {
        fontSize: 14,        
        marginTop: 4,
        //color: "#717273",
        alignSelf: 'stretch',
    },
    contentStyle: {
        alignItems: 'stretch',
        justifyContent: 'center',
        paddingLeft: 16
    },
    previewStyle: {
        borderRadius: 10,
        //alignItems: 'center',
        height: 210,
        //height: 160,
        //justifyContent: 'center',
    },
    previewContainerStyle: {
        //alignItems: 'center',
        //width: 150,
        //width: '50%',
        height: 210,
        position: 'relative'
        //justifyContent: 'center',
    }
});

const mapStateToProps = ({ rally }) => {
    return { 
        interest: rally.interest,
        accent: rally.accent  
    };
}

export default connect(mapStateToProps)(VenueCard);

/*
            <View style={[styles.contentStyle, {borderBottomColor: colors.border }]}>
                <Text style={[styles.nameStyle, { color: colors.text}]}>
                    {name}
                </Text>
                <Text style={[styles.promptStyle, { color: colors.text}]}>
                    {description}
                </Text>
                <Text>
                    {location.latitude} - {location.longitude}
                </Text>
                <InterestIndicator activity={[{name: "Sam"}, {name: "Bill"}, {name: "Claire"}]} />
            </View>
*/