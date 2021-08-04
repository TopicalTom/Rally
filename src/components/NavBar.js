import React from 'react';
import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native';
import { HeaderBackButton } from '@react-navigation/stack';
import { Icon, Text } from 'react-native-elements';
import { useNavigation, useTheme } from '@react-navigation/native';

const dynamicOpacity = (offset, threshold) => offset.interpolate({
    inputRange: [ threshold - 10, threshold ],
    outputRange: [ 0, 1],
    extrapolate: 'clamp'
});

const dynamicAppear = (offset, threshold) => offset.interpolate({
    inputRange: [ threshold - 10, threshold ],
    outputRange: [ 5, 0],
    extrapolate: 'clamp'
});

const HeaderNav = ({initial, moreActions, title, offset, accent, threshold}) => {
    const { colors } = useTheme();
    const navigation = useNavigation();

    return (
        <View style={[styles.container, { backgroundColor: colors.background}]}>
            <View style={[styles.headerLeft]}>
                {!initial
                    ?   <HeaderBackButton 
                            labelVisible={false}
                            tintColor={accent || 'white'}
                            style={{height: 37, width: 37}}
                            onPress={() => navigation.goBack()}
                        />
                    :   <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Icon
                                name="x"
                                type="feather"
                                size={36}
                                color={accent || 'white'}
                            />
                        </TouchableOpacity>
                }
            </View>
            <View style={[styles.headerCenter]}>
                {offset !== undefined
                    ?   <Animated.Text style={[styles.title, { 
                            color: colors.text, 
                            opacity: dynamicOpacity(offset, threshold), 
                            transform: [{ translateY: dynamicAppear(offset, threshold) }]}]}>
                            {title}
                        </Animated.Text>
                    :   <Text style={[styles.title, { 
                            color: colors.text}]}>
                            {title}
                        </Text>
                }
            </View>
            <View style={[styles.headerRight]}>
                {moreActions &&
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon
                            name="more-vertical"
                            type="feather"
                            size={36}
                            color={'rgba(255,255,255,1)'}
                        />
                    </TouchableOpacity>
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 56,
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 8
    },
    headerLeft: {
        paddingLeft: 8,
        alignItems: 'flex-start',
        justifyContent: 'center',
        alignSelf: 'stretch',
        minWidth: '30%',
    },
    headerCenter: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    headerRight: {
        paddingRight: 16,
        alignItems: 'flex-end',
        justifyContent: 'center',
        alignSelf: 'stretch',
        minWidth: '30%',
    },
});

export default HeaderNav;