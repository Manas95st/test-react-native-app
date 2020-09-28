import { BookStateInterface, bookReducer } from './book/reducer';
import { AppStateInterface, appReducer } from './app/reducer';
import { combineReducers } from 'redux'

export interface MainState {
    book: BookStateInterface,
    app: AppStateInterface,
}

export const rootReducer = combineReducers({
    app: appReducer,
    book: bookReducer
});
