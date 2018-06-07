import { NAME_CHANGED } from './type';

export const nameChanged = (text) => {
    return {
        type: NAME_CHANGED,
        payload: text,
    };
};
