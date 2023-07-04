import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

interface ILogin {
    Login: Function;
    Animated: Function;
}
export function Login(props: ILogin) {
    return (
        <SafeAreaView style={style.safeAreaView}>
            <View  style={style.MainView}>
                <Image source={{ uri: 'https://cdn.freebiesupply.com/logos/large/2x/batman-01-logo-png-transparent.png' }} style={style.ImgLogo} />
                <View style={style.BoxView}>
                    <Text  style={style.LoginText}>
                        Login
                    </Text>
                    <View style={style.InputView}>
                        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/149/149995.png' }} style={style.InputLogo} />
                        <TextInput placeholder="Username" style={style.textInput} />
                    </View>
                    <View style={style.InputView}>
                        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/8105/8105423.png' }} style={style.InputLogo} />
                        <TextInput placeholder="Password"  style={style.textInput} />
                    </View>
                </View>
                <TouchableOpacity style={style.LoginBtn} onPress={() => props.Login()}>
                    <Text style={style.BtnText}>Login</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={style.button2} onPress={() => props.Animated()}>
                <Text style={style.BtnText}>Animation Demo</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({

    safeAreaView: {
        height: '100%'
    },
    MainView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    ImgLogo: {
        height: 150,
        width: 250,
    },
    BoxView: {

        marginTop: 20,
        alignItems: 'center',
        backgroundColor: '#FFDAB9',
        width: 250,
        height: 250,
        borderRadius: 15,
    },
    LoginText: {
        fontWeight: 'bold',
        fontSize: 40,
        color: '#101820',
        margin: 20

    },
    InputView: {
        flexDirection: 'row',
        margin: 15,
        marginBottom: 20
    },
    textInput: {
        borderBottomColor: '#C71585',
        borderBottomWidth: 1,
        width: 180
    },

    LoginBtn: {
        backgroundColor: '#FEE715',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 30,
        borderRadius: 10,
        position: "absolute",
        top: 530,
    },
    BtnText: {
        color: '#101820',
        fontSize: 20,
    },
    InputLogo: {
        height: 25,
        width: 25,
        marginRight: 10
    },
    button2: {
        backgroundColor: '#FEE715',
        alignSelf: 'center',
        alignItems: 'center',
        width: '65%',
        height: '3.5%',
        borderRadius: 10,
        marginBottom: 60

    },

})