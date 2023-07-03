import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export function Home (props:any) {
    return(
        <View style={styles.MainView} >
            <View style={styles.homeview}>
                <Text style={styles.text}>Home</Text>
            </View>
        <TouchableOpacity onPress={() => props.navigation.navigate('Settings')} >
            <Text>
                Settings
            </Text>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    MainView: {
        justifyContent:'center',
        alignItems:'center'
    },
    homeview: {
        marginTop: 150,
        borderWidth: 4,
        borderRadius: 10,
        width: 300,
        height: 250,
        alignItems: 'center',
        
    },
    text: {
        marginTop: 125,
    },
}) 