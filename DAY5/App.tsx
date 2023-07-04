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
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Login } from './Component/Login';
import { Animation } from './Component/Animation'
import { Register } from './Component/Register'

function App(): JSX.Element {
  const [ModalVisible, setModalVisible] = useState<boolean>(false);
  const [ModalVisible2, setModalVisible2] =useState<boolean>(false);
  function login () {
    setModalVisible(true);
  }
  function GoBack () {
    setModalVisible(false);
  }
  function Animated () {
    setModalVisible2(true);
  }
  function GoBack2 () {
    setModalVisible2(false);
  }

  return (
    <SafeAreaView>
        <View>
          <Login Login={login} Animated={Animated} />
          <Register ModalV={ModalVisible} back={GoBack}/>
          <Animation ModalV={ModalVisible2} back={GoBack2}/>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
