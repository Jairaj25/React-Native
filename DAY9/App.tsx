/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Context } from 'react';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { name } from './Components/ParentContext';
import { ChildA } from './Components/ChildA';



function App(): JSX.Element {

  const [NewName,setNewName] = useState<any>('Default');

  return (
    <SafeAreaView>
      <View style={styles.Container}>
          <name.Provider value={{NewName, setNewName}}>
            <View>
            <Text style={styles.textview}>This is the {NewName}</Text>
            <ChildA/>
            </View>
          </name.Provider>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    height: 350,
    marginTop: 250,
    marginLeft:20,
    backgroundColor: '#00539C'
  },
  textview: {
    textAlign: 'center',
    bottom: 5,
    color: '#EEA47F'
    },
});

export default App;
