// Install react-native-modal
// npm install react-native-modal

import React, { useState } from 'react';
import { View, Text, ImageBackground, TextInput, Button, StyleSheet, Platform } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import styles from './styles';

const SignUpScreen = ({navigation}) => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [preferredLanguage, setPreferredLanguage] = useState('English');
  const languages = ['English', 'Hindi', 'Telugu', 'Tamil'];

  const handleSignUp = () => {
    
    navigation.navigate('home');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/landing.jpeg')} // Replace with your background image path
        style={styles.backgroundImage}
      >
        <Text style={styles.heading}>Sign Up</Text>

        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          placeholder="Name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />

        <View style={styles.pickerContainer}>
          <ModalDropdown
            options={languages}
            defaultValue={preferredLanguage}
            onSelect={(index, value) => setPreferredLanguage(value)}
            textStyle={styles.pickerText}
            dropdownStyle={styles.dropdownContainer}
            dropdownTextStyle={styles.dropdownText}
          />
        </View>

        <Button title="Sign Up" onPress={handleSignUp} style={styles.button} />
      </ImageBackground>
    </View>
  );
};


export default SignUpScreen;
