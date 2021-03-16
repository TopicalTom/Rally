import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";

MapboxGL.setAccessToken("pk.eyJ1Ijoic2hhbWFsMWFtYSIsImEiOiJja21ibHUyN2MyMzQ1Mm9xbDhpZTFtazJkIn0._G4tdcfVUBt0YNpGAt2kug");

// Contexts
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './src/store';

// Router
import RootRouter from './src/routers/RootRouter';

const App = () => {
    const { persistor, store } = configureStore();
    return (
        <SafeAreaProvider>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <RootRouter />
                </PersistGate>
            </Provider>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({});

export default App;