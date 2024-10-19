import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import {thunk} from 'redux-thunk';

import { UserReducer } from './UserReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};


const rootReducer = combineReducers({
  user: UserReducer,
})

let persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: () => {
    return [thunk];
  },
});

export const persistor = persistStore(store);
