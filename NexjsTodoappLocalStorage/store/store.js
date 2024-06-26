import {combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

// export default configureStore({
//   reducer: {
//     user: userReducer,
//   },
  
// })
const rootReducer = combineReducers({
        user: userReducer,
})
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer
});
export const persistor = persistStore(store);