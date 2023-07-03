import axios from 'axios';
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export type Task = {
    id: number,
    Task: string,
    IsCompleted: boolean
}
export const url = 'https://649bc4c9048075719236e4d6.mockapi.io/api/Task/'

export function Details (props : any) {

    const [data, setData] = useState<Task[]>();
    const fetchData = () => {
        axios.get(url)
        .then((res) => {
            setData(res.data);
        })
        .catch((e) => {
            console.log(e)
            return ( <View><Text>Error</Text></View> )
        })
    }

    function HandleDelete (id:number){
        axios.delete(url+id)
        .then((res) => {
            setData(res.data)
            props.navigation.navigate("Details");
        })
        .catch ((e) => console.log(e))

        
    }
    useEffect(() => {
        fetchData()
    },[data]);

    return(
    <SafeAreaView>
        <View>
            <View style= {styles.headView}>
                <Text style= {styles.headText}>Task</Text>
                <Text style= {styles.headText}>Completion</Text>
                <Text style= {styles.headText}>Update</Text>
                <Text style= {styles.headText}>Delete</Text>
            </View>
            <FlatList
            data = {data}
            renderItem={({item, index}) => 
            <View style={[styles.flatView,{backgroundColor :item.IsCompleted!==false?'white':'#FFA07A'}]}>
                <View><Text>{item.Task}</Text></View>
                <View><Text>{item.IsCompleted? 'True' :'False'}</Text></View>
                <TouchableOpacity onPress={() => props.navigation.navigate('UpdateDetails', item)}>
                    <View>
                        <Text>Update</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => HandleDelete(item.id)}>
                    <View>
                        <Text>Delete</Text>
                    </View>
                </TouchableOpacity>
            </View>
            } />
        </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headView:{
        flexDirection:'row' , 
        justifyContent:'space-around',
        borderBottomWidth:4,
    },
    headText:{
        fontSize:15,
        color: '#696969'
    },
    flatView:{
        flexDirection:'row',
        justifyContent:'space-around',
        borderBottomWidth:1.5,
    },
})