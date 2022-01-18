import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contacts/contacts-reducers';

const persistConfig = {
  key: 'items',
  storage,
  blacklist: ['filter'],
};

export const store = configureStore({
  reducer: {
    contacts: persistReducer(persistConfig, contactsReducer),
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),

  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
