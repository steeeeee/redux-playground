import * as types from '../constants/action_types';

export function switchIntent(intent) {
    return {
        type: types.SWITCH_INTENT,
        intent
    };
} 