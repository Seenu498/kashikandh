// VideoPlayer.js
import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import VideoControls from 'react-native-video-controls';
import Orientation from 'react-native-orientation-locker';

const VideoPlayerComponent = () => {
  const videoSource = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  useEffect(() => {
    // Lock the initial orientation to portrait
    Orientation.lockToPortrait();

    // Cleanup on component unmount
    return () => {
      Orientation.unlockAllOrientations();
    };
  }, []);

  const onEnterFullscreen = () => {
    // Lock the orientation to landscape when entering fullscreen
    Orientation.lockToLandscape();
  };

  const onExitFullscreen = () => {
    // Lock the orientation to portrait when exiting fullscreen
    Orientation.lockToPortrait();
  };

  return (
    <View style={styles.container}>
      <VideoControls
        source={{ uri: videoSource }}
        resizeMode="cover"
        style={styles.video}
        disableVolume={false}
        onBack={() => console.log('onBack')}
        onEnd={() => console.log('onEnd')}
        onScreenTouch={() => console.log('onScreenTouch')}
        onPause={() => console.log('onPause')}
        onPlay={() => console.log('onPlay')}
        onSeek={() => console.log('onSeek')}
        onEnterFullscreen={onEnterFullscreen}
        onExitFullscreen={onExitFullscreen}
        showFullscreenButton={true} // Ensure this is set to true
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: 200, // Adjust the height as needed
  },
});

export default VideoPlayerComponent;
