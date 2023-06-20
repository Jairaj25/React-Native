import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import DisplayInput from "./PassInp";






export default function ShowInput(){
    const[name,setName] = useState('');
    
    function StoreName (name1:string){

        setName(name1);
      }
    
    return (
      <View>
        <DisplayInput ShowInput={StoreName}></DisplayInput>
        <Text style= {styles.showinps}>You Typed:  {name}</Text>
    </View>
    )

  };

  const styles = StyleSheet.create({
    conatiner: {
        
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    showinps:{
        marginTop: 16,
        textAlign: 'center',
        fontSize: 30,
        
      },
});

