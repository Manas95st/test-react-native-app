import { NavigationContainerRef } from '@react-navigation/native';
import { Container } from 'native-base';
import React from 'react';
import { connect } from 'react-redux';
import { BookList } from '../../share/components/BookList';
import { CustomHeader } from '../../share/components/Header';
import { Book } from '../../store/book/reducer';
import { MainState } from '../../store/rootReducer';

interface CatalogProps {
    bookList: Book[],
    navigation: NavigationContainerRef
}

export class Catalog extends React.Component<CatalogProps> {

    render() {
        return (
            <Container>
                <CustomHeader title="Catalog"/>
                <BookList data={this.props.bookList} navigation={this.props.navigation}/>
            </Container>
        );
    }
}

const mapStateToProps = (state: MainState) => ({
    bookList: state.book.bookList
});

export default connect(mapStateToProps)(Catalog);