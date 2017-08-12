import { SET_USER_INFO } from 'actions/userinfo';

const defaultState = {
    id: '',
    level: 0,
    exp: 0,
    rexp: 0,
    spentCash: 0,
    totalPlays: 0,
    totalKills: 0,
    kills: {
        glock: 0,
        mp5k: 0,
        python: 0,
        ump45: 0,
        m870: 0,
        akm: 0
    }
};

export default function(state = defaultState, action) {
    switch(action.type) {
        case SET_USER_INFO:
            const { payload } = action;

            return Object.assign({}, state, {
                id: payload.id,
                level: payload.level,
                exp: payload.exp,
                rexp: payload.rexp,
                spentCash: payload.spentCash,
                totalPlays: payload.totalPlays,
                totalKills: payload.totalKills,
                kills: payload.kills
            });
        default:
            return state;
    }
}