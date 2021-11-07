import React from 'react';
import { View, Text } from 'react-native';

export default function ComicCard ({ title }: {title: string})  {
    return(
        <View>
        <Text> { title } </Text>
        </View>
    );
}

 
  