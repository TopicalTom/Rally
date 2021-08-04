import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

const InterestIndicator = ({ activity, selected, accent }) => {
    const { colors } = useTheme();

    if (activity.length < 1) return <Text style={{color: colors.grey, height: 28,}}>Be the first</Text>;

    console.log(activity);

    return (
        <View style={styles.activityStyle}>
            <View style={[styles.imageContainerStyle, {zIndex: 20}]}>
                <Image 
                    source={{ uri: activity[0].profile}}
                    style={[styles.profileStyle, {
                        borderColor: selected ? accent : colors.overlay, 
                        backgroundColor: selected ? accent : colors.overlay }
                    ]} 
                />
            </View>
            {activity.length > 1 &&
                <View style={[styles.imageContainerStyle, {right: 8}]}>
                    <Image 
                        source={{ uri: activity[1].profile}}
                        style={[styles.profileStyle, {
                            borderColor: selected ? accent : colors.overlay, 
                            backgroundColor: selected ? accent : colors.overlay }
                        ]}  
                    />
                </View>
            }
            <Text style={{color: selected ? colors.altText : colors.grey, fontSize: 13}}>
                {activity.length > 1
                    ?   `${activity[0].name} and ${activity.length} other${activity.length > 1 ? "s" : ""}`
                    :   `${activity[0].name}`
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
        right: 3
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

export default InterestIndicator;