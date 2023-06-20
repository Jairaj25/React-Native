import {
    StyleSheet,
    Text, 
    View,
    Button,
  } from 'react-native';


export interface CounterProps {
    counterZZ: number;
}



export default function Counter (Props: CounterProps) {
    return (
        <View style = {styles.conatiner}>
            <Text style={{ color: 'red', fontSize: 24 }}>THIS IS CHILD COMPONENT</Text>
            <Text style={{ color: 'lightblue', fontSize: 18 }}>Counter</Text>
            <Text style={{ color: 'skyblue', fontSize: 18 }}> {Props.counterZZ}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
});