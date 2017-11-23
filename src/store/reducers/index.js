import {combineReducers} from 'redux';
import home from './home';

import lessons from './lessons';
import search from './search';
import session from './session';
import user from './user';
import getOthers from './getOthers'

import {routerReducer} from 'react-router-redux';
export default combineReducers({
    router: routerReducer,
    home,
    lessons,
    search,
    session,
    user,
    getOthers
})
