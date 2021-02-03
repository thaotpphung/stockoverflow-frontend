import { combineReducers } from 'redux';

import posts from './posts';

export const reducers = combineReducers({ posts });

// reducer take in state and action, base on action type, we return state change or action