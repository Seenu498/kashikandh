import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Animated, { useSharedValue } from 'react-native-reanimated';

import { useWindowDimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const WelcomeScreen = () => {

  const { width: screenWidth } = useWindowDimensions(); // Get the screen width
  // const videoSource = "https://youtu.be/BlocSA-uHbw?si=ru94acPHfHnx1kSz"
  const videoSource =  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"




  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/landing.jpeg')} style={styles.image} />
      <View style={styles.overlay}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Welcome to Kashi Khand</Text>
          <Text style={styles.subHeading}>Discover and listen to a wide variety of podcasts</Text>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={[styles.buttonContainer, { width: screenWidth * 0.95 }]}
          >
            <LinearGradient
              colors={['#fff', '#D4D4D4', '#939393']} // Add your gradient colors
              style={styles.buttonGradient}
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  textContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
  heading: {
    fontSize: 35,
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    borderRadius: 8,
    overflow: 'hidden', // Ensure the gradient stays within the button bounds
    width: '100%', // Set width to 100% by default
  },
  buttonGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    width: '100%', // Set the width of LinearGradient to 100%
  },
  buttonText: {
    color: '#3d3d3d',
    fontSize: 25,
    fontWeight: '500',
  },
});

export default WelcomeScreen;
