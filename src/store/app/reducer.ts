import { SHOW_SPINNER, HIDE_SPINNER } from './constants';
import { Action } from "../../share/utils/Action";

export  interface AppStateInterface {
    loading: boolean
}

const initalState: AppStateInterface = {
    loading: false
};

export const appReducer = (state: AppStateInterface = initalState, action: Action<any>): AppStateInterface => {
    switch (action.type) {
        case SHOW_SPINNER:
            return {
                ...state,
                loading: true
            }
        case HIDE_SPINNER:
            return {
                ...state,
                loading: false
            }
        default: return state;
    }
}