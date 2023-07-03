import { useState } from "react";
import { View, Text, TextInput, Switch, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import { Task, url } from "./Details";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";

export function AddDetails (props : any) {
    const [data, setData] = useState<Task[]>();
    const [task, setTask] = useState<string>('');
    const [IsCompleted, setIsCompleted] = useState<boolean>(false);
    const toggleSwitch = () => setIsCompleted(previousState => !previousState);

    const fetchData = (task: string, IsCompleted: boolean ) => {
        axios.post(url, {
            Task: task,
            IsCompleted: IsCompleted
        })
        .then((res) => {
            setData(res.data);
            props.navigation.navigate("Details");
        })
        .catch((e) => console.log(e))
    }
    return(
    <SafeAreaView style={styles.container}>
        <View style={styles.MainView}>
            <View style={styles.inputView}>
                <Text style={styles.text}> Task: </Text>
                <TextInput style={styles.textInput} onChangeText={setTask} placeholder=" Enter Your Task: " value={task} />
            </View>
            <View style={styles.SecondInput}>
                <Text style={styles.text}> Completed: </Text>
                <Switch disabled={!task} onValueChange={toggleSwitch} value={ IsCompleted } />
            </View>
        </View>
        <TouchableOpacity style={styles.button2} onPress={() => fetchData(task, IsCompleted)}>
            <Text style={styles.SaveBtn}> Save </Text>
        </TouchableOpacity> 
    </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    button2:{
        backgroundColor:'#008000',
        alignItems:'center',
        justifyContent:'center',
        width:'60%',
        height:30,
        borderRadius:15,
        position:"absolute",
        top:658,
    },
    
    SaveBtn:{
        color:'white',
        fontSize:25
    },
    MainView:{

        justifyContent:'center',
        alignItems:'center', 
        backgroundColor:'#87CEFA' ,
        width:350,
        borderRadius:40,
        height:350,
        bottom: 50
    },
    text:{
        fontSize:20,
        fontWeight:'bold'
    },

    textInput:{
        borderWidth:1.25,
        width:'80%',
    },

    inputView:{
        flexDirection:'row',
        margin:30
    },
    SecondInput:{
        flexDirection:'row',
        margin:20
    }

})