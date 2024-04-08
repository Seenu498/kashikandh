import React from 'react';
import { View, Image, Text, Alert,TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';
import styles from './styles';

const WelcomeScreen2 = ({navigation}) => {

  const handleGetStarted = () => {
    // Alert.alert('signup')
    navigation.navigate('signup');
  }

  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

  const fadeInAnimation = useSharedValue(0);
  const slideUpAnimation = useSharedValue(screenHeight);

  React.useEffect(() => {
    fadeInAnimation.value = withTiming(1, { duration: 1500, easing: Easing.ease });
    slideUpAnimation.value = withTiming(2, { duration: 3000, easing: Easing.ease });
  }, [fadeInAnimation, slideUpAnimation]);

  const fadeInStyle = useAnimatedStyle(() => {
    return { opacity: fadeInAnimation.value };
  });

  const slideUpStyle = useAnimatedStyle(() => {
    return { transform: [{ translateY: slideUpAnimation.value }] };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.imageContainer, { height: screenHeight * 0.6 }]}>
        <Image source={require('../../assets/images/landing.jpeg')} style={styles.image} />
        {/* <Image source={require('../../assets/images/landing2.png')} style={styles.image} /> */}
      </Animated.View>
      <View style={styles.overlay}>
        <Animated.View style={[styles.textContainer, fadeInStyle]}>
          <Text style={[styles.heading,{fontSize:43}]}>Welcome to {"\n"}<Text style={{fontSize:50,fontWeight:"500",color:"#000"}}>Kashi Khand</Text></Text>
          <Text style={styles.subHeading}>Discover and listen to a wide variety of podcasts</Text>
        </Animated.View>
        <Animated.View style={[styles.bottomContainer, slideUpStyle]} onPress={handleGetStarted}>
          <TouchableOpacity style={[styles.buttonContainer, { width: screenWidth * 0.95 }]} >
            <LinearGradient colors={['#f8f8f8', '#E9E9E9', '#CFCFCF']} style={styles.buttonGradient}>
              <Text style={styles.buttonText}>Get Started</Text>
            </LinearGradient>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
};


export default WelcomeScreen2;
