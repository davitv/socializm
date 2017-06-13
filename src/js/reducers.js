import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer  } from 'redux-form';

import {

} from './actions';

import { head, clone } from 'fp';



export default combineReducers({
  routing: routerReducer,
  form: formReducer
});
