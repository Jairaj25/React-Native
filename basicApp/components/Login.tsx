import axios from "axios";
import { useState } from "react"
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native"

export const Login = (props: any) => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const url = 'http://localhost:6000/users/login';

    const handleLogin = async () => {
        try {
            const res = await axios.post(url, {
                email: email,
                password: password,
            });
            let{ token, message } = res.data;
            switch (message) {
                case 'Wrong Credentials': {
                    Alert.alert('Wrong Credentials')
                    break;
                }
                case 'Access Granted': {
                    Alert.alert('Access Granted, Token: ', token)
                    props.navigation.navigate('Home',{token})
                    break;
                }
                case 'Wrong password': {
                    Alert.alert('Wrong Credentials')
                    break;
                }
                case 'Body Empty': {
                    Alert.alert('Please fill all fields')
                    break;
                }
                default:
                    Alert.alert('Profile not created, please try again')
            }
        }
        catch (err) {
            return err;
        }
    }
    return (
        <View>
            <View>
                <Text>
                    Login
                </Text>
            </View>
            <View>
                <Text>
                    Email:
                </Text>
                <TextInput placeholder="JohnDoe123@example.com" value={email} onChangeText={setEmail} ></TextInput>
            </View>
            <View>
                <Text>
                    Password:
                </Text>
                <TextInput placeholder="Password" value={password} onChangeText={setPassword} ></TextInput>
            </View>
            <View>
                <TouchableOpacity disabled={!password && !email} onPress={() => handleLogin()} >
                    <Text style={{ color: email && password ? 'royalblue' : 'red' }}> Login </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
                    <Text> Register </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}