import { Dimensions, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Home (props : any) {
    return(
    <SafeAreaView style={styles.container}>
        <View style={styles.MainView}>
            <Text style={styles.Hometext}>Home</Text>
        </View>
        <TouchableOpacity style={styles.GetDbtn} onPress={() => props.navigation.navigate("Details")}>
            <Text style={styles.text}>Get Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.AddDBtn} onPress={() => props.navigation.navigate("AddDetails")}>
            <Text style= {styles.text2}>Add Details</Text>
        </TouchableOpacity>
    </SafeAreaView>
    )
}

const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems :'center',
        justifyContent : 'center'
    },
     GetDbtn:{
        backgroundColor:'#008000',
        alignItems:'center',
        justifyContent:'center',
        width: '60%',
        height:100,
        borderRadius:55,
        position:"absolute",
        top:200,
    },
    AddDBtn:{
        backgroundColor:'#008000',
        alignItems:'center',
        justifyContent:'center',
        width:'60%',
        height:100,
        borderRadius:55,
        position:"absolute",
        top:350,
    },
    
    text2:{
        color:'#FFFFE0',
        fontSize:20,
        fontWeight:'bold'
    },
    MainView:{

        justifyContent:'center',
        bottom:320,
        alignItems:'center', 
        backgroundColor:'#87CEFA' ,
        width:250,
        borderRadius:10,
        height:screenHeight/15
    },
    text:{
        color: '#FFFFE0',
        fontSize:20,
        fontWeight:'bold'
    },
    Hometext: {
        fontWeight:'bold',
        fontSize: 30,
        color: '#FF8C00'
    }

})