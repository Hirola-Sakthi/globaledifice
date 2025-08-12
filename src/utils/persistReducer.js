import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import propertyReducer from '../reducers/propertyReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  property: propertyReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
