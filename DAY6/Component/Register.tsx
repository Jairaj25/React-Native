import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";


export function Register (props : any) {
    const [text, setText] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    function HandleBtn () {
        props.setAuthentication(true);
        props.navigation.navigate('Home');
    }
    return(
        <View>
            <View>
                <Text>Register</Text>
            </View>
            <View>
                <Text>
                    Enter Your Username: 
                </Text>
                <TextInput maxLength={10} placeholder="Username" value={text} onChangeText={setText}/>
            </View>
            <View>
                <Text>
                    Enter Your Password: 
                </Text>
                <TextInput secureTextEntry={true} placeholder="Password" value={password} onChangeText={setPassword}/>
            </View>
            <TouchableOpacity style={{backgroundColor: text && password? 'white' : 'red'}} disabled={!password && !text} onPress={() => props.navigation.navigate('Home')}>
                <Text> Register </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Login')} >
                <Text> Login </Text>
            </TouchableOpacity>
        </View>
    );
}