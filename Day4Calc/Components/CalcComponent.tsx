import React, { useState } from 'react';
import {
FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface ICalcButtons {
    array: Array<string>
}

export function CalcBtns(props: ICalcButtons){
    
   const[input, setInput] = useState('');
   const [total, setTotal] = useState<number>(0);
   const [operator, setOperator] = useState('');
   let operand = [];
   const onPress = (input: string) => {
    if(input!=='clearAll' && input !=='='){
        if(input!=='0' && !parseInt(input)){
            setOperator(input);
        }
        setInput(prev => prev+input);
    }
    else if(input === 'clearAll'){
        setInput('');
        setTotal(0);
    }
    else if(input === '='){
        operand = input.split(/[+-/*]/)
        let operand1 = parseInt(operand[0]);
        const operand2 = parseInt(operand[1]);
        switch(operator){
            case '+':{
                setTotal(operand1+operand2); 
                setInput((operand1+operand2) +"")
                break;
            }
            case '-':{
                setTotal(operand1-operand2);
                setInput((operand1-operand2) +"")
        
                break;
            }
            case '/':{
                setTotal(operand1/operand2);
                setInput((operand1/operand2) +"")
                break;
            }
            case '*':{
                setTotal(operand1*operand2);
                setInput((operand1*operand2) +"")
                break;
            }
            
        }   

    }
   }
   type ItemProps = {value:string};
   const Item = ({value}:ItemProps)=> (
    <View style={styles.number}>
        <TouchableOpacity style={styles.touchableOpacity} onPress={() => onPress(value)}>
            <Text style={styles.numText}> {value}</Text>
        </TouchableOpacity>
    </View>
   );
   return (
    <View style={styles.MainView}>
        <Text style={{fontSize: 20}}>Your Input: </Text>
        <View style={styles.textInputView}>
            <TextInput style={{fontSize: 20}} placeholder='0...' onChangeText={setInput} value = {input}></TextInput>
        </View>
        <View>
            
            <Text style={{fontSize: 20 ,textAlign: 'center'}}>Output: </Text>
            <Text style={styles.text}>{total}</Text>
        </View>
        <FlatList 
        data={props.array}
        renderItem={({item})=><Item value={item} />}
        numColumns={3}/>
    </View>
   )

}

const styles = StyleSheet.create({
    textInputView :{
        borderColor: 'black',
        borderWidth: 1,
        margin: 15,
        width:200,
        height:25,
        alignSelf:'center',
    },
    text :{
        marginTop:20,
        paddingBottom:25,
        width:200,
        height:20,
        fontSize:20,
        alignSelf:'center',
        borderWidth: 1,
        color:'royalblue'
    },
    number :{
        padding:30,
    },
    touchableOpacity:{
        
        padding:10
        
    },
    numText:{
        fontSize:20,
        
    }, 
    MainView: {
        marginTop: 25,
        justifyContent: 'center', 
        alignItems: 'center'
    }

      
  });