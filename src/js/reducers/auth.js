import { SET_TOKEN } from 'actions/auth';

const defaultState = {
    token: ''
};

export default function(state = defaultState, action) {
    switch(action.type) {
        case SET_TOKEN:
            return Object.assign({}, state, {
                token: action.payload
            });
        default:
            return state;
    }
}