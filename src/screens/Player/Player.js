import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import MusicControl from 'react-native-music-control';
import TrackPlayer, { TrackPlayerEvents } from 'react-native-track-player';
import RNFS from 'react-native-fs';

const Player = ({ route }) => {
  const { song } = { id: 1, title: 'Song 1', image: require('../../assets/images/landing.jpeg') };//route.params;
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  console.log('====================================');
  console.log("${RNFS.DocumentDirectoryPath}",RNFS.DocumentDirectoryPath);
  console.log('====================================');
  // const fileExists = await RNFS.exists(`file://${RNFS.DocumentDirectoryPath}/kasi_khandam.mp3`);
  // if (fileExists) {
  //   console.log('====================================');
  //   console.log("Exists");
  //   console.log('====================================');
  // }else{
  //   console.log("not exists");
  // }
  useEffect(() => {
    setupTrackPlayer();
    return () => TrackPlayer.destroy();
  }, []);

  const setupTrackPlayer = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add({
      id: '1',
      url: `file://${RNFS.DocumentDirectoryPath}/kasi_khandam.mp3`, // Replace with your local song file name
      title: song.title,
      artist: 'Artist Name',
      artwork: song.image,
    });

    MusicControl.setNowPlaying({
      title: song.title,
      artwork: song.image,
      duration: 0, // Set to the actual duration if available
    });

    TrackPlayer.updateOptions({
      stopWithApp: false,
      capabilities: [
        MusicControl.CAPABILITY_PLAY,
        MusicControl.CAPABILITY_PAUSE,
        MusicControl.CAPABILITY_SEEK_TO,
      ],
    });

    TrackPlayer.addEventListener(TrackPlayerEvents.PLAYBACK_STATE, (data) => {
      if (data.state === TrackPlayer.STATE_PLAYING) {
        setIsPlaying(true);
        MusicControl.updatePlayback({
          state: MusicControl.STATE_PLAYING,
        });
      } else if (data.state === TrackPlayer.STATE_PAUSED) {
        setIsPlaying(false);
        MusicControl.updatePlayback({
          state: MusicControl.STATE_PAUSED,
        });
      }
    });

    TrackPlayer.addEventListener(TrackPlayerEvents.PLAYBACK_TRACK_CHANGED, () => {
      updateDuration();
    });

    TrackPlayer.addEventListener(TrackPlayerEvents.PLAYBACK_SEEK_COMPLETE, () => {
      updatePosition();
    });
  };

  const updateDuration = async () => {
    const newDuration = await TrackPlayer.getDuration();
    setDuration(newDuration);
    MusicControl.setNowPlaying({
      duration: newDuration,
    });
  };

  const updatePosition = async () => {
    const newPosition = await TrackPlayer.getPosition();
    setPosition(newPosition);
  };

  const playPause = async () => {
    if (isPlaying) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
  };

  const seekTo = async (value) => {
    await TrackPlayer.seekTo(value);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <View>
      <Text>{song.title}</Text>
      <Image source={song.image} style={{ width: 100, height: 100 }} />

      <View>
        <Slider
          style={{ width: '80%', alignSelf: 'center' }}
          minimumValue={0}
          maximumValue={duration}
          value={position}
          onSlidingComplete={seekTo}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000"
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
          <Text>{formatTime(position)}</Text>
          <Text>{formatTime(duration)}</Text>
        </View>
      </View>

      <TouchableOpacity onPress={playPause}>
        <Text>{isPlaying ? 'Pause' : 'Play'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Player;
