/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Home} from './Components/Home';
import { Details } from './Components/Details';
import { AddDetails } from './Components/AddDetails';
import { UpdateDetails } from './Components/UpdateDetails';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const stack = createNativeStackNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
     <NavigationContainer>
      <stack.Navigator initialRouteName='Home'>
        <stack.Screen name='Home' component={Home}/>
        <stack.Screen name='AddDetails' component={AddDetails}/>
        <stack.Screen name='Details' component={Details}/>
        <stack.Screen name='UpdateDetails' component={UpdateDetails}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
