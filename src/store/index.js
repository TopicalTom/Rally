import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducers from '../reducers';

const config = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: []
};

const reducer = persistCombineReducers(config, reducers);

export default configureStore = () => {
    const store = createStore(
        reducer,
        {},
        applyMiddleware(thunk)
    );

    const persistor = persistStore(store);

    return { persistor, store };
};