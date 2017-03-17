import { combineReducers } from 'redux';
import userIntent from './reducer_userintent';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    dataFlow: userIntent,
    form: formReducer
});

export default rootReducer;