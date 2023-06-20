import {
    StyleSheet,
    Text, 
    View,
    Button,
  } from 'react-native';


export interface GreetingProps {
    name : string
}

export default function Greetings (Props: GreetingProps) {
    return (
        <View style = {styles.conatiner}>
            <Text style={{ color: 'red', fontSize: 24 }}>This is Another Child Component</Text>
            <Text style={{ color: 'lightgreen', fontSize: 18 }}>Name</Text>
            <Text style={{ color: 'purple', fontSize: 18 }}> {Props.name}</Text>
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