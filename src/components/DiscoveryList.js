import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Divider } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

// Components
import DiscoveryListing from './DiscoveryListing';

const DiscoveryList = ({ interest, accent, friendsList, squad, custonList, value, generalCallback, customCallback }) => {
    const { colors } = useTheme();
    return (
        <>
            <Divider style={{ backgroundColor: colors.card, marginHorizontal: 16 }} />
            <DiscoveryListing 
                title="All friends (default)"
                subtitle="Anyone within your social circle will be able to see this."
                audience={friendsList}
                type="All friends"
                selected={value === "All friends" ? true : false}
                accent={accent}
                onSelect={generalCallback}
            />
            {squad.length > 0 &&
                <DiscoveryListing 
                    title="Squad"
                    subtitle={`Only those in your ${interest} squad will be able to see this.`}
                    audience={squad}
                    type="Squad"
                    selected={value === "Squad" ? true : false}
                    accent={accent}
                    onSelect={generalCallback}
                />
            }
            <DiscoveryListing 
                title="Custom"
                subtitle="Limit your reach to only those you select."
                audience={custonList}
                type="Custom"
                selected={value === "Custom" ? true : false}
                accent={accent}
                onSelect={customCallback}
            />
        </>
    );
};

const styles = StyleSheet.create({});

export default DiscoveryList;