import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist-indexeddb-storage';
import UserSlice from '@slice/UserSlice'
import GlobalSlice from '@slice/GlobalSlice'
import {encryptTransform} from "redux-persist-transform-encrypt";

function keys() {
    const array = new Uint8Array(256);
    crypto.getRandomValues(array);
    return Array.from(array).map(byte => byte.toString(16).padStart(2, '0')).join('');
}

const persistConfig = {
    key: 'root',
    storage: storage('r_security-center'),
    blacklist: ['GlobalSlice'], // 不持久化
    transforms: [
        encryptTransform({
            secretKey:'r_security-center',
        }),
    ],
};

const reducer = combineReducers({
    UserSlice,
    GlobalSlice,
});

/**
 * 解决数据状态不持久化
 */
// @ts-ignore
const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

