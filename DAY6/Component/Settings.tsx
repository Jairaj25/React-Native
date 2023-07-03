import { Text, TouchableOpacity, View } from "react-native";


export function Settings (props:any) {
    return(
        <View>
            <View>
                <Text>Settings</Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                    <Text>Go Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}