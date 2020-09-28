import { NavigationContainerRef } from '@react-navigation/native';
import { Container, Content, Icon, Text, H2, ActionSheet } from 'native-base';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { CustomSpinner } from '../../share/components/CustomSpinner';
import { WIDTH } from '../../share/utils/dimension';
import { addBookToFavoriteList, removeBookFromFavoriteList } from '../../store/book/actions';
import { Book } from '../../store/book/reducer';
import { MainState } from '../../store/rootReducer';

interface BookDetailProps {
    navigation: NavigationContainerRef,
    route: { params: { selectedBook: Book } },
    favoriteList: Book[],
    loading: boolean,
    addBookToFavoriteList: Function,
    removeBookFromFavoriteList: Function
}

export class BookDetail extends React.Component<BookDetailProps> {

    openOption = () => {
        if (!this.props.route.params.selectedBook) return;
        const isAddOption = !this.props.favoriteList.find(item => item.isbn === this.props.route.params.selectedBook.isbn);
        const mainOption = isAddOption ? 'Add to Favorite' : 'Remove from Favorite';
        ActionSheet.show({
            options: [
                mainOption,
                'Cancel'
            ],
            cancelButtonIndex: 1,
        }, async buttonIndex => {
            if (buttonIndex === 0) {
                if (isAddOption) {
                    await this.props.addBookToFavoriteList(this.props.route.params.selectedBook);
                } else {
                    await this.props.removeBookFromFavoriteList(this.props.route.params.selectedBook);
                }
            }
        });
    }

    render() {
        const book = this.props.route.params.selectedBook;
        return (
            <Container>
                <Content>
                    <CustomSpinner isLoading={this.props.loading}/>
                    <View style={styles.imageWrap}>
                        <TouchableOpacity style={styles.closeBtn} onPress={() => this.props.navigation.goBack()}>
                            <Icon type="Ionicons" name="close"/>
                        </TouchableOpacity>
                        {!!book.thumbnailUrl && <Image style={styles.image} source={{uri: this.props.route.params.selectedBook.thumbnailUrl}}/>}
                        <H2 style={styles.title}>{book.title}</H2>
                        <TouchableOpacity style={styles.optionBtn} onPress={() => this.openOption()}>
                            <Icon type="Ionicons" name="ellipsis-vertical"/>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={styles.textWrap}>
                        <Text style={styles.text}>
                            {book.longDescription ? book.longDescription : book.title + ' ' +  book.authors}
                        </Text>
                    </ScrollView>
                </Content>
            </Container>   
        );
    }
}

const mapStateToProp = (state: MainState) => ({
    favoriteList: state.book.favoriteBookList,
    loading: state.app.loading
});

const mapDispatchToProp = {
    addBookToFavoriteList,
    removeBookFromFavoriteList
};

export default connect(mapStateToProp, mapDispatchToProp)(BookDetail);

const styles = StyleSheet.create({
    imageWrap: { width: WIDTH, height: WIDTH * 0.6 },
    image: { width: WIDTH, zIndex: 1, height: WIDTH * 0.6 },
    closeBtn: {zIndex: 2, position: 'absolute', left: 10, top: 10, width: 40, height: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
    optionBtn: {zIndex: 2, position: 'absolute', right: 10, bottom: 10, width: 40, height: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
    textWrap: {width: WIDTH, padding: 10},
    text: {fontSize: 14},
    title: { width: WIDTH * 0.8, zIndex: 2, position: 'absolute', left: 10, bottom: 10 }
});