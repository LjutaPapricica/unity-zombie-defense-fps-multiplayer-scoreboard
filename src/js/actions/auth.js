export const SET_TOKEN = 'SET_TOKEN';

export function setToken(newToken) {
    return {
        type: SET_TOKEN,
        payload: newToken
    };
}