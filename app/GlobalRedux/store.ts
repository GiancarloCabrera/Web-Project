'use client'
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import loginReducer from './Features/login/login'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'web-project-front',
    storage,
  };

const rootReducer = combineReducers({
    login: loginReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: {
        persistedReducer
    }
})

const persistedStore = persistStore(store);

export { store, persistedStore };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;