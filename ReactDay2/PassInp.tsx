import { useState } from 'react';
import {
    StyleSheet,
    Text, 
    View,
    Button,
    TextInput,
  } from 'react-native';


export interface DispInputProps {
    ShowInput : Function
}



export default function DisplayInput (Props: DispInputProps) {
    const [name, setName] = useState<string>('');
    return (
        <View>
        <View style = {styles.conatiner}>
            <TextInput placeholder="Type Here ... " style={styles.TextInp} onChangeText={setName} value={name}/> 
            <Button title = 'Show Input' onPress={() => Props.ShowInput(name)} />
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    conatiner: {
        
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    TextInp: {
        marginTop : 45, 
        textAlign : 'center',
        
    },
});