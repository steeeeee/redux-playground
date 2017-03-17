import * as types from '../constants/action_types';
import * as actions from '../actions/index';

describe('Actions', () => {
    it('should create an action to switch the user intent', () => {
        const intent = 'ricalcola';
        const expectedAction = {
            type: types.SWITCH_INTENT,
            intent
        }
        expect(actions.switchIntent(intent)).toEqual(expectedAction);
    });
});