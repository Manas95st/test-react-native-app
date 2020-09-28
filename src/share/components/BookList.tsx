import { NavigationContainerRef } from '@react-navigation/native';
import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { Book } from '../../store/book/reducer';
import { BookItem } from './BookItem';

export const BookList = ({ data, navigation }: {data: Book[], navigation: NavigationContainerRef}): JSX.Element => {
    return (
        <FlatList
            data={data}
            renderItem={(_data: ListRenderItemInfo<Book>) => (
                <BookItem data={_data.item}
                    navigation={navigation}/>
            )}
            keyExtractor={(_, index) => index.toString()}
        />
    );
}