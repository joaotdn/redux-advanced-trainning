//import cart from './cart';
import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
    todos,
    visibilityFilter
});

// const rootReducer = combineReducers({
//     cart
// });

export default rootReducer;