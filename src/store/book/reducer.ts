import { INIT_FAVORITE_LIST, ADD_BOOK_TO_FAVORITE_LIST, REMOVE_BOOK_FROM_FAVORITE_LIST } from './constants';
import { Action } from "../../share/utils/Action";
import testBookData from "../../test-data/test-data.json";

export interface Book {
    title: string,
    isbn: string,
    pageCount: number,
    publishedDate: { $date: string },
    thumbnailUrl: string,
    shortDescription: string,
    longDescription: string,
    status: string,
    authors: string[],
    categories: string[]
}

export interface BookStateInterface {
    bookList: Book[],
    favoriteBookList: Book[],
}

const initalState: BookStateInterface = {
    bookList: testBookData as Book[],
    favoriteBookList: [],
};

export const bookReducer = (state: BookStateInterface = initalState, action: Action<any>): BookStateInterface => {
    switch (action.type) {
        case INIT_FAVORITE_LIST:
            return {
                ...state,
                favoriteBookList: action.payload
            }
        case ADD_BOOK_TO_FAVORITE_LIST:
            return {
                ...state,
                favoriteBookList: state.favoriteBookList.concat([action.payload])
            }
        case REMOVE_BOOK_FROM_FAVORITE_LIST:
            return {
                ...state,
                favoriteBookList: state.favoriteBookList.filter(item => item.isbn !== action.payload.isbn)
            }
        default: return state;
    }
}