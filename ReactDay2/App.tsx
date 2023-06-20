/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Counter from './CounterDisp';
import Greetings from './Greet';
import DisplayInput from './PassInp';
import ShowInput from './ShowInput';
type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [Count, setCount] = useState<number>(0);
  function IncreaseCounter() {
    setCount(Count + 1);
  }
  function DecreaseCounter() {
    setCount(Count - 1);
  }
  function ResetCounter() {
    setCount(Count - Count);
  }
  

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
            
            
            <Text>THIS IS QUESTION 1 OF EXCERCISE</Text>
            <Counter counterZZ={Count} />
            <View style = {styles.buttonContainer}>
            <View style={styles.button}>
            <Button title='Increase' onPress={IncreaseCounter} />
            </View>
            <View style={styles.button}>
            <Button title='Decrease' onPress={DecreaseCounter} />
            </View>
            <View style={styles.button}>
            <Button title='Reset' onPress={ResetCounter} />
            </View>
            
            </View>
            <Greetings name='Angular Better' />
            <Text>THIS IS END OF QUESTION 1 OF EXCERCISE, </Text>
            <Text>BELOW IS QUESTION 2 OF EXCERCISE</Text>
            <ShowInput/>
            
        </View>
      </ScrollView>
    </SafeAreaView>
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
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button:{
    width: '30%',
    height: 40
  },
  
});

export default App;
