import { combineReducers } from 'redux';
import { UserReducers } from './userReducer';

const rootReducer = combineReducers({
  user: UserReducers,
});

export default rootReducer;
