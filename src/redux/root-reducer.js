import { combineReducers } from 'redux';
import modeReducer from './mode.reducer';

// const rootReducer = combineReducers({mode: modeReducer});
const rootReducer = combineReducers({day: modeReducer});

export default rootReducer;