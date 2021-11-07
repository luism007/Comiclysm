import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Comic } from '../../models/Comic';

export default function ComicCard ({ comic }: {comic: Comic})  {
    return(
        <View style = {styles.comicCardContainer }>
            <View style = {styles.comicCardImageContainer}></View>
            <View style = {styles.comicCardTitleContainer}>
                <Text style = { styles.comicTitle }> { comic.name } </Text>
            </View>
            <View style = {styles.comicCardInfo}>
                <Text> Written by { comic.writer } </Text>
                <Text> Illus. by { comic.artist }</Text>
                <Text> Published on {comic.publicationDate} </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    comicCardContainer: {
        flex: 1,
        margin: '2%',
        height: 400,
        width: '90%',
        color: 'black',
        borderRadius: 25,
        borderWidth: 0.3,
        alignSelf: 'center',
        alignItems: 'stretch',
        borderStyle: 'solid',
        borderColor: 'black'
    },
    comicCardTitleContainer: {
        flex: 1,
        borderStyle: 'solid',
        borderColor: 'gray',
        borderWidth: 0.3,
        justifyContent: 'center',
        fontWeight: "bold",
        paddingTop: 0,
        paddingLeft: 10
        
    },
    comicCardImageContainer: {
        flex: 4,
        backgroundColor: 'black',
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24
    },

    comicTitle: {
        fontWeight: "bold",
        fontSize: 20
    },
    comicCardInfo: {
        flex: 1,
        padding: 10
    }
})

 
  