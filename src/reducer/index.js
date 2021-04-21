import { combineReducers } from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import itemReducer from './itemReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import infoReducer from './infoReducer';
import { reducer as formReducer } from 'redux-form'



const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['item','error','auth']
}

const rootReducer = combineReducers( {
  item: itemReducer,
  error: errorReducer,
  auth: authReducer,
  info: infoReducer,
  form: formReducer

})
export default persistReducer(persistConfig, rootReducer)
 