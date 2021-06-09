import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import MessagesScreen from '../screens/MessagesScreen';
import UpdatesScreen from '../screens/UpdatesScreen';

const Tab = createBottomTabNavigator();

const InboxRouter = () => {
    return (
        <Tab.Navigator 
            initialRouteName="Messages"
            tabBarOptions={{
                showLabel: false,
                tabBarVisible: false
              }}>
            <Tab.Screen 
                name="Messages" 
                component={MessagesScreen}
                options={() => ({ 
                    tabBarVisible: false
                })}
            />
            <Tab.Screen 
                name="Updates" 
                component={UpdatesScreen}
                options={() => ({ 
                    tabBarVisible: false
                })}
            />
        </Tab.Navigator>
    );
};

export default InboxRouter;