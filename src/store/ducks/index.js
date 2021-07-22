import {combineReducers} from 'redux';

import {login} from './login';
import {policies} from './policies';
import {products} from './products';

export default combineReducers({
  login,
  policies,
  products,
});
