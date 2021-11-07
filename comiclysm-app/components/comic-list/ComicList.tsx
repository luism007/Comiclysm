import React from 'react';
import { VirtualizedList, RefreshControl, View, Text } from 'react-native';
import  ComicCard from '../comic-card/ComicCard';
import { getCustomTabsSupportingBrowsersAsync } from 'expo-web-browser';
import { Comic } from '../../models/Comic';
import {comicListStyles} from './ComicListStyles';

export default function ComicList() {

    const [comicList, setComicList] = React.useState([]);
    const [refreshing, setRefreshing ] = React.useState(false);

    const getComic = (data: any, index: number) => {
        return comicList[index];
    }

    const getComicCount = () =>{
        return comicList.length;
    }

    const getComics = async() => {
        const response = await fetch("http://192.168.254.26:3000/api/comics");
        await response.json()
        .then((any: []) =>{
            const comics  = any.map((o) => {
                return new Comic(o.comic_id, o.comic_name, o.comic_writer, o.comic_artist, o.comic_publication_date, o.comic_cover_img);
            });
            setComicList(comics);
            setRefreshing(false);
        })
        .catch((e) => {
            setRefreshing(false);
        });
    }

    const onRefresh = () => {
        setRefreshing(true);
        getComics();
    }

    return(
        <View style = { comicListStyles.container }>
            <VirtualizedList
            data = { comicList }
            initialNumToRender = { 0 }
            renderItem = { 
            ({item}) => 
            <ComicCard comic = { item } />
            }
            keyExtractor = { comic => comic.id }
            getItem = { getComic }
            getItemCount = { getComicCount }
            refreshControl = {
                <RefreshControl refreshing = {refreshing} onRefresh = {onRefresh} />
            }
        >
        </VirtualizedList>
        </View>
    );
}