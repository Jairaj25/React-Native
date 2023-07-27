import axios from "axios"
import { useState } from "react"
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native"

export const Register = (props: any) => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [name, setName] = useState<string>('')
    const url = 'http://localhost:6000/users/register';

    const handleRegister = async () => {
        try {
            const res = await axios.post(url, {
                email: email,
                password: password,
                name: name
            });
            switch (res.data) {
                case 'Profile not created, please try again': {
                    Alert.alert('Profile not created, please try again')
                    break;
                }
                case 'User Created Successfully': {
                    Alert.alert('User Created Successfully')
                    props.navigation.navigate('Home')
                    break;
                }
                case 'User Already Exists': {
                    Alert.alert('User Already Exists')
                    break;
                }
                case 'Incomplete Profile': {
                    Alert.alert('Incomplete Profile')
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
                    Register
                </Text>
            </View>
            <View>
                <Text>
                    Email:
                </Text>
                <TextInput autoCorrect={false} autoCapitalize="none" placeholder="JohnDoe123@example.com" value={email} onChangeText={setEmail} />
            </View>
            <View>
                <Text>
                    Password:
                </Text>
                <TextInput secureTextEntry={true} autoCorrect={false} autoCapitalize="none" placeholder="Password" value={password} onChangeText={setPassword} />
            </View>
            <View>
                <Text>
                    Full Name:
                </Text>
                <TextInput autoCorrect={false} placeholder="name" value={name} onChangeText={setName} />
            </View>
            <View>
                <TouchableOpacity disabled={!password && !email && !name} onPress={() => handleRegister()} >
                    <Text style={{ color: email && password && name ? 'royalblue' : 'red' }}> Register </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                    <Text> Login </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}