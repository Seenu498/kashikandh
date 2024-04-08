import React from 'react';
import { View, Text,Image, TouchableOpacity } from 'react-native';

const Albums = ({ navigation }) => {
  const songs = [
    { id: 1, title: 'Song 1', image: require('../../assets/images/landing.jpeg') },
    { id: 2, title: 'Song 2', image: require('../../assets/images/landing.jpeg') },
    // Add more songs with images
  ];

  return (
    <View>
      {songs.map((song) => (
        <TouchableOpacity
          key={song.id}
          onPress={() => navigation.navigate('Player', { song })}
        >
          <View>
            <Text>{song.title}</Text>
            <Image source={song.image} style={{ width: 50, height: 50 }} />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Albums;
