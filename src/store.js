import { combineReducers } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import { thunk as thunkMiddleware } from 'redux-thunk';
import persistedReducer from './utils/persistReducer';
import propertyReducer from './reducers/propertyReducer';

const reducer = combineReducers({
  persistReducer: persistedReducer,
  property: propertyReducer,

})

let initialState = {};

const store = configureStore({
    reducer: reducer,
    devTools: true,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableStateInvariantCheck: false,
    }),
});

export default store;