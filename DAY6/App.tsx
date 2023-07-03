/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  StyleSheet,
  useColorScheme,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Login } from './Component/Login';
import { Home } from './Component/Home';
import { Settings } from './Component/Settings';
import { Register } from './Component/Register';

const stack = createNativeStackNavigator();

function App(): JSX.Element {
  const [authentication, setAuthentication] = useState <boolean> (true)

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Home'>
        {authentication?(<stack.Group>
          <stack.Screen name='Home' component={Home}/>
          <stack.Screen name='Settings' component={Settings}/>
        </stack.Group>):(<stack.Group>
          <stack.Screen name='Register' component={Register} />
          <stack.Screen name='Login' component={Login}/>
        </stack.Group>)}
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
