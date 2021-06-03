import firestore from '@react-native-firebase/firestore';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

const AudienceIndicator = ({ audience }) => {
    const { colors } = useTheme();
    //const [ audience, setAudience ] = useState([]);

    if (audience.length === 0) { return <></> }

    return (
        <View style={[styles.activityStyle, {backgroundColor: colors.background}]}>
            <View style={[styles.imageContainerStyle, {zIndex: 20}]}>
                <Image 
                    source={{ uri: audience[0].profile}}
                    style={[styles.profileStyle, {
                        borderColor: colors.background, 
                        backgroundColor: colors.background }
                    ]} 
                />
            </View>
            {audience && audience.length > 1 &&
                <View style={[styles.imageContainerStyle, {right: 8}]}>
                    <Image 
                        source={{ uri: audience[1].profile}}
                        style={[styles.profileStyle, {
                            borderColor: colors.background, 
                            backgroundColor: colors.background }
                        ]}  
                    />
                </View>
            }
            <Text style={{color: '#717273'}}>
                {audience && audience.length > 1
                    ?   `${audience && audience.length} friends`
                    :   `${audience[0].name}`
                }
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    activityStyle: {
        //marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
        right: 3,
        marginTop: 12,
        padding: 2,
        width: 130,
        borderRadius: 4
    },
    profileStyle: {
        height: 28,
        width: 28,
        borderRadius: 20,
        borderWidth: 3,
        overflow: 'hidden'
    },
    friendsStyle: {
        color: "#717273"
    }
});

export default AudienceIndicator;

/*
import firestore from '@react-native-firebase/firestore';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

const AudienceIndicator = ({ data }) => {
    const { colors } = useTheme();
    const [ audience, setAudience ] = useState([]);

    useEffect(async () => {
        if (data.length !== 0) {
            const socialCircleRef = firestore().collection("social");
            await socialCircleRef
                .where(firestore.FieldPath.documentId(), "in", data)
                .limit(2)
                .get()
                .then((querySnapshot) => {
                    const query = querySnapshot.docs.map(doc => ({
                        name: doc._data.name,
                        profile: doc._data.profile,
                    }));
                    setAudience(query);
                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });
        }
    }, [data]);

    if (audience.length === 0) { return <></> }

    return (
        <View style={[styles.activityStyle, {backgroundColor: colors.background}]}>
            <View style={[styles.imageContainerStyle, {zIndex: 20}]}>
                <Image 
                    source={{ uri: audience[0].profile}}
                    style={[styles.profileStyle, {
                        borderColor: colors.background, 
                        backgroundColor: colors.background }
                    ]} 
                />
            </View>
            {data && data.length > 1 &&
                <View style={[styles.imageContainerStyle, {right: 8}]}>
                    <Image 
                        source={{ uri: audience[1].profile}}
                        style={[styles.profileStyle, {
                            borderColor: colors.background, 
                            backgroundColor: colors.background }
                        ]}  
                    />
                </View>
            }
            <Text style={{color: '#717273'}}>
                {data && data.length > 1
                    ?   `${data && data.length} friends`
                    :   `${audience[0].name}`
                }
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    activityStyle: {
        //marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
        right: 3,
        marginTop: 12,
        padding: 2,
        width: 130,
        borderRadius: 4
    },
    profileStyle: {
        height: 28,
        width: 28,
        borderRadius: 20,
        borderWidth: 3,
        overflow: 'hidden'
    },
    friendsStyle: {
        color: "#717273"
    }
});

export default AudienceIndicator;

*/