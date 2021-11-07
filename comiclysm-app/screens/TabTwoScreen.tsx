import * as React from 'react';
import { StyleSheet, Button, VirtualizedList } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Comic } from '../models/Comic';
import ComicList from '../components/comic-list/ComicList';

export default function TabTwoScreen() {

  const [comicList, setComicList] = React.useState([]);
  
  const getComic = (data: any, index: number) => {
    return comicList[index];
  }

  const getComicCount = () =>{ return comicList.length }

  
  const getComics = async() => {
    const response = await fetch("http://192.168.254.26:3000/api/comics");

    await response.json()
    .then((any: []) =>{ 
      console.log("Debug :" , any);
      const comics = any.map((o) => { return new Comic(o.comic_id, o.comic_name, o.comic_writer, o.comic_artist, o.publication_data, o.comic_cover_img )})
      setComicList(comics);
    })
    .catch((e) => {
      console.log("Error", e);
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ComicList/>
      <Button 
        title="Get Comics"
        color="#f194ff"
        onPress = { () => { getComics() }} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
