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
            <Image 
                source={{ uri: preview}}
                style={[styles.previewStyle, {                
                    borderColor: colors.border,
                    borderWidth: 1}]}
            />
            <View>
                <Text style={[styles.typeStyle, { color: accent}]}>Nightclub</Text>
                <Text style={[styles.nameStyle, { color: colors.text}]}>{name}</Text>
                <Text style={{color: colors.text}}>3m walk</Text>
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
        borderRadius: 10,
    },
    nameStyle: {
        textAlign: 'left',
        fontWeight: 'bold',
        marginBottom: 1,
        alignSelf: 'stretch',
        marginTop: 6
    },
    promptStyle: {
        textAlign: 'left',
        color: "#717273",
        alignSelf: 'stretch',
        lineHeight: 21,
        fontSize: 15,
    },
    rallyContainerStyle: {
        marginTop: 3,
        alignItems: 'center',
        flexDirection: 'row',
    },
    typeStyle: {
        fontSize: 12,
        //color: "#717273",
        alignSelf: 'stretch',
        marginTop: 10
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
        //justifyContent: 'center',
    },
    previewContainerStyle: {
        //alignItems: 'center',
        //width: 150,
        //width: '50%',
        height: 210,
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