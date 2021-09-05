import { combineReducers } from 'redux'
import { listReducer } from './list';
import { albumsReducer } from './albums';
import { tweetsReducer } from './tweets';
import {  persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'



const persistConfig = {
  key: 'root',
  storage,
  whitelist:["list", "albums", "tweets"]
}

const rootReducer = combineReducers({
  list: listReducer,
  albums: albumsReducer,
  tweets: tweetsReducer,
});

export default persistReducer(persistConfig, rootReducer);