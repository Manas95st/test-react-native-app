import { NavigationContainerRef } from '@react-navigation/native';
import { Container, Content } from 'native-base';
import React from 'react';
import { connect } from 'react-redux';
import { BookList } from '../../share/components/BookList';
import { CustomSpinner } from '../../share/components/CustomSpinner';
import { CustomHeader } from '../../share/components/Header';
import { Book } from '../../store/book/reducer';
import { MainState } from '../../store/rootReducer';

interface FavoritesProps {
    favoriteBookList: Book[],
    navigation: NavigationContainerRef,
    loading: boolean
}

export class Favorites extends React.Component<FavoritesProps> {
    render() {
        return (
            <Container>
                <CustomHeader title="Favorites"/>
                <CustomSpinner isLoading={this.props.loading}/>
                <BookList data={this.props.favoriteBookList} navigation={this.props.navigation}/>
            </Container>
        );
    }
}

const mapStateToProps = (state: MainState) => ({
    favoriteBookList: state.book.favoriteBookList,
    loading: state.app.loading,
});

export default connect(mapStateToProps)(Favorites);