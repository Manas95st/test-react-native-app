import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Book } from '../../store/book/reducer';
import { Thumbnail, H2, Text } from 'native-base';
import { WIDTH } from '../utils/dimension';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainerRef } from '@react-navigation/native';

export const BookItem = ({data, navigation}: {data: Book, navigation: NavigationContainerRef}) => {
    return (
        <TouchableOpacity style={styles.wrapper} onPress={() => navigation.navigate('Detail', { selectedBook: data })}>
            <React.Fragment>
                <Thumbnail size={WIDTH * 0.25} square={true} large source={{uri: data.thumbnailUrl}}/>
                <View style={styles.info}>
                    <H2 numberOfLines={1}>{data.title}</H2>
                    <Text numberOfLines={3} style={styles.description}>{data.shortDescription ? data.shortDescription : (data.longDescription ? data.longDescription : data.authors)}</Text>
                </View>
            </React.Fragment>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    wrapper: { width: WIDTH * 0.9, height: WIDTH * 0.25 + 20, flexDirection: 'row', justifyContent: 'space-between',
        alignItems: 'flex-start', padding: 10, },
    info: {width: WIDTH * 0.6},
    description: {}
});