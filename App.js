import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';

// Contexts
import { SafeAreaProvider } from 'react-native-safe-area-context';
//import { Provider } from 'react-redux';
//import { PersistGate } from 'redux-persist/integration/react';
//import configureStore from './src/store';

// Router
//import RootRouter from './src/routers/RootRouter';

const App = () => {
    //const { persistor, store } = configureStore();
    return (
        <SafeAreaProvider>
            <View>
                <Text>Rally</Text>
            </View>
        </SafeAreaProvider>
    );
};

export default App;

/*
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <RootRouter />
                </PersistGate>
            </Provider>

*/
