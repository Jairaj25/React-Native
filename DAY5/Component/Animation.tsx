import { useRef, useState } from "react";
import { Animated, Button, Modal, StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";

interface IAnimated{
    ModalV: boolean;
    back:Function;
}

export function Animation (props : IAnimated) {
    const value = useRef(new Animated.Value(0)).current;
    const [UseAnimation, setUseAnimation] = useState(false);

    function HandleColor(){
        Animated.timing(value,{
            toValue: 1000,
            duration:1000,
            useNativeDriver:false
        }).start();
    }
    function HandleChange () {
        HandleColor();
        setUseAnimation (prev => !prev)
    }

    return(
        <Modal animationType="slide" visible={props.ModalV}>
                <Animated.View style={[styles.safeAreaView,{backgroundColor: value.interpolate({
                    inputRange:[0,1350],
                    outputRange: [UseAnimation?'#E2D1F9':'#F96167',UseAnimation?'#F96167':'#E2D1F9']
                })}]} >
                    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                    <Button title="Change Color" onPress={HandleChange}/>
                    </View>
                </Animated.View>

                <TouchableOpacity  style={styles.button} onPress={() => props.back()}>
                    <Text style={styles.buttonText}> Back</Text>
                </TouchableOpacity>
        </Modal>
    )
}

const styles = StyleSheet.create({
    safeAreaView:{
        height:'100%',
        backgroundColor:'#E2D1F9'
    },
    switchView: {
        top: 250,
        alignSelf: 'center'
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#E2D1F9'

    },
    button:{
        backgroundColor:'#2F3C7E',
        alignSelf:'center',
        alignItems:'center',
        width:'33%',
        height:30,
        borderRadius:15,
        bottom: 100
        
    },
    buttonText:{
        color:'#F9E795',
        fontSize:25
    },

 })