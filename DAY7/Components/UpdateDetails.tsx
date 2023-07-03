import axios from 'axios';
import { View, Text, TextInput, Switch, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Task, url } from './Details'
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export function UpdateDetails (props: any) {
    const Id = props.route.params.id;
    const taskToBeUpdated = props.route.params.Task;
    const isCompletedToBeUpdated = props.route.params.IsCompleted;

    const [data, setData] = useState<Task[]>();
    const [task, setTask] = useState<string>(taskToBeUpdated);
    const [IsCompleted, setIsCompleted] = useState<boolean>(isCompletedToBeUpdated);
    const toggleSwitch = () => setIsCompleted(previousState => !previousState);
    const fetchData = (task: string, IsCompleted: boolean) => {
        axios.put(url+Id, {
            Task: task,
            IsCompleted: IsCompleted
        })
        .then((res) => {
            setData(res.data);
            props.navigation.navigate("Details");
        })
        .catch((e) => console.log(e));
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.purpleView}>
                <View style={styles.inputView}>
                    <Text style={styles.text}> Task: </Text>
                    <TextInput style={styles.textInput} onChangeText={setTask} placeholder='Enter Task' value={task} />
                </View>
                <View style={styles.inputView2}>
                    <Text style={styles.text}> Completed: </Text>
                    <Switch onValueChange={toggleSwitch}
                    value={IsCompleted}/>
                </View>
            </View>
            <TouchableOpacity style={styles.button2} onPress={() => fetchData(task, IsCompleted)} >
                <Text style={styles.buttonText}> Update </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    button:{
        backgroundColor:'#4f1d7a',
        alignItems:'center',
        justifyContent:'center',
        width:'60%',
        height:30,
        borderRadius:15,
        position:"absolute",
        top:598,
    },
    button2:{
        backgroundColor:'#4f1d7a',
        alignItems:'center',
        justifyContent:'center',
        width:'60%',
        height:30,
        borderRadius:15,
        position:"absolute",
        top:658,
    },
    
    buttonText:{
        color:'white',
        fontSize:25
    },
    purpleView:{

        justifyContent:'center',
        marginTop:20,
        alignItems:'center', 
        backgroundColor:'#d8c3eb' ,
        width:250,
        borderRadius:10,
        height:screenHeight/3
    },
    text:{
        fontSize:20,
        fontWeight:'bold'
    },

    textInput:{
        borderWidth:2,
        width:'80%',
    },

    inputView:{
        flexDirection:'row',
        margin:20
    },
    inputView2:{
        flexDirection:'row',
        margin:20
    }

})