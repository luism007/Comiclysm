import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Comic } from '../../models/Comic';

export default function ComicCard ({ comic }: {comic: Comic})  {
    return(
        <View style = {styles.comicCardContainer }>
            <View style = {styles.comicCardImageContainer}></View>
            <View style = {styles.comicCardTitleContainer}>
                <Text> { comic.name } </Text>
            </View>
            <View style = {styles.comicCardWriterContainer}>
                <Text> { comic.writer } </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    comicCardContainer: {
        height: 300,
        width: '90%',
        borderStyle: 'solid',
        borderColor: 'black',
        borderRadius: 25,
        color: 'black',
        backgroundColor: 'pink',
        flex: 1,
        alignSelf: 'center',
        alignItems: 'stretch',
        margin: '2%'
    },
    comicCardTitleContainer: {
        flex: 1
    },
    comicCardImageContainer: {
        flex: 3,
        backgroundColor: 'black',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25
    },
    comicCardWriterContainer: {
        flex: 1
    },
    comicCardPublicationDateContainer: {}
})

 
  