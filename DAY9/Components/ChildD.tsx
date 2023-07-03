import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Context, useContext, useState } from "react";
import { name } from "./ParentContext";

export function ChildD (){
    const [text, setText] = useState('');
    const {NewName, setNewName} = useContext(name);
    function HandleInput (text : string){
        setNewName(text);
        setText('');
    };
    return (
        <View style={styles.Container}>
            <Text style={{color:'#CC313D',bottom: 5}}>This is Child D</Text>
            <TextInput style={styles.input} placeholder="Name" onChangeText={setText} value={text}/>
            <Button title="Change Name" onPress = {() => HandleInput(text)}/>
            <Text style={{color: '#CC313D',marginTop:5}}>My Name is {NewName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#F7C5CC',
    width: 150,
    height: 150,    
    justifyContent: 'center',
    alignItems: 'center',
    },
    input: {
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: 'white',
        width: 125,
        height: 25,
        color: '#CC313D'
    }
  });