import * as types from '../constants/action_types';

const INITIAL_STATE = { userIntent: 'calcola' };

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case types.SWITCH_INTENT:
            return { userIntent: action.payload };
        default:
            return state;
    }
}
