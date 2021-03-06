import { View, Text, FlatList, Dimensions, Platform } from 'react-native';
import React from 'react';
import styles from '../../components/Post/styles';


import Post from '../../components/Post/Post';

import posts from '../../../data/posts';



export default function Home() {
  return (
    <View>
      <View style={styles.topContainer}>
          <Text style={{fontSize: 18, color: 'white', marginRight: 15}}>Following</Text>
          <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>For You</Text>
        </View>
      <FlatList 
      data={posts}
      renderItem={({item}) => <Post post={item}/>}
      showsVerticalScrollIndicator={false}
      snapToInterval={Platform.OS == 'android' ? Dimensions.get('window').height + 14 : Dimensions.get('window').height - 78}
      snapToAlignment={'start'}
      decelerationRate={'fast'}
      />
    </View>
  );
}
