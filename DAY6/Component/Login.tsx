import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

 

 export function Login (props : any){
    const [text, setText] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    return(
        <View>
            <View>
                <Text>Login</Text>
            </View>
            <View>
                <Text>Enter Your UserName</Text>
                <TextInput placeholder="Username" value={text} onChangeText={setText}/>
            </View>
            <View>
                <Text>Enter Your Password</Text>
                <TextInput placeholder="Password" value={password} onChangeText={setPassword}/>
            </View>
            <TouchableOpacity disabled={!password && !text} onPress={() => props.navigation.navigate('Home')} >
                <Text style={{color: text && password? 'white' : 'red'}}> Login </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
                <Text> Register </Text>
            </TouchableOpacity>
        </View>
    );
 }