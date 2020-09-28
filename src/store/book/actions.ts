import { MainState } from './../rootReducer';
import { Book } from './reducer';
import { INIT_FAVORITE_LIST, ADD_BOOK_TO_FAVORITE_LIST, REMOVE_BOOK_FROM_FAVORITE_LIST } from './constants';
import { showSpinner, hideSpinner } from "../app/actions"
import AsyncStorage from '@react-native-community/async-storage';

const FAVORITE_LIST_KEY = 'FAVORITE_LIST_KEY';

export function loadFavoriteList() {
    return async (dispatch: Function) => {
        dispatch(showSpinner());
        try {
            const jsonValue = await AsyncStorage.getItem(FAVORITE_LIST_KEY);
            const list = jsonValue ? JSON.parse(jsonValue) : [];
            dispatch({
                type: INIT_FAVORITE_LIST,
                payload: list
            });
        } catch(e)  {
            console.log(e);
        }
        dispatch(hideSpinner());
    }
}

export function addBookToFavoriteList(book: Book) {
    return async (dispatch: Function, getState: Function) => {
        dispatch(showSpinner());
        try {
            const state = getState() as MainState;
            const favoriteBookList = state.book.favoriteBookList.concat([book]);
            await AsyncStorage.setItem(FAVORITE_LIST_KEY, JSON.stringify(favoriteBookList));
            dispatch({ type: ADD_BOOK_TO_FAVORITE_LIST, payload: book });
        } catch(e)  {
            console.log(e);
        }
        dispatch(hideSpinner());
    }
}

export function removeBookFromFavoriteList(book: Book) {
    return async (dispatch: Function, getState: Function) => {
        dispatch(showSpinner());
        try {
            const state = getState() as MainState;
            const favoriteBookList = state.book.favoriteBookList.filter(item => item.isbn !== book.isbn);
            await AsyncStorage.setItem(FAVORITE_LIST_KEY, JSON.stringify(favoriteBookList));
            dispatch({ type: REMOVE_BOOK_FROM_FAVORITE_LIST, payload: book });
        } catch(e)  {
            console.log(e);
        }
        dispatch(hideSpinner());
    }
}