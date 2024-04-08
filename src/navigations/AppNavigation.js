import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer' 

import DrawerContainer from '../screens/DrawerContainer/DrawerContainer'
import WelcomeScreen2 from '../screens/Welcome/WelcomeScreen2'
import SignUpScreen from '../screens/SignUp/SignUpScreen'
import HomeScreen from '../screens/Home/HomeScreen'
import CategoriesScreen from '../screens/Categories/CategoriesScreen'
import VideoPlayerComponent from '../screens/VideoPlayer/VideoPlayer'

import Albums from '../screens/Albums/Albums'
import Player from '../screens/Player/Player'


const Stack = createStackNavigator();

function MainNavigator() {
  return(
    <Stack.Navigator
      screenOptions={{
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'center',
            margin:0,
            flex: 1,
          }
      }}
      initialRouteName='Player'    >
      <Stack.Screen name='welcome' component={WelcomeScreen2} 
            options={{ headerShown: false }}/>
      <Stack.Screen name='signup' component={SignUpScreen} 
            options={{ headerShown: false }}/>
      <Stack.Screen name='Discover' component={HomeScreen}
       options={{ headerShown: false }}/>
      <Stack.Screen name='categories' component={CategoriesScreen} 
        options={{ headerShown: false }}/>
      <Stack.Screen name='videoplayer' component={VideoPlayerComponent} 
        options={{ headerShown: false }}/>
        
      <Stack.Screen name='Albums' component={Albums} 
        options={{ headerShown: false }}/>
        
      <Stack.Screen name='Player' component={Player} 
        options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
} 

 const Drawer = createDrawerNavigator();

function DrawerStack() {
  return(
    <Drawer.Navigator
      drawerPosition='left'
      initialRouteName='Main'
      drawerStyle={{
        width: 250
      }}
      screenOptions={{headerShown: false}}
      drawerContent={({navigation})=> <DrawerContainer navigation={navigation}/>}
    > 
      <Drawer.Screen name='Main' component={MainNavigator} />
    </Drawer.Navigator>
  )
} 


 export default function AppContainer() {
  return(
    <NavigationContainer>
      <DrawerStack/>
    </NavigationContainer>
  )
} 
 

console.disableYellowBox = true;