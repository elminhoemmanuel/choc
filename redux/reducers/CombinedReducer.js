import { combineReducers } from 'redux'
import { listReducer } from './list';
import { albumsReducer } from './albums';
import {  persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'



const persistConfig = {
  key: 'root',
  storage,
  whitelist:[]
}

const rootReducer = combineReducers({
  list: listReducer,
  albums: albumsReducer,
});

export default persistReducer(persistConfig, rootReducer);