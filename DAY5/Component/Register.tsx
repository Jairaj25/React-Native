import { Image, Modal, SafeAreaView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";

interface IRegister {
    ModalV: boolean;
    back: Function;
}

export function Register(props: IRegister) {
    return (
        <Modal animationType='fade' visible={props.ModalV}>
            <SafeAreaView style={styles.safeAreaView}>
                <View style={styles.BoxView}>
                    <Text style={styles.RegText}>Register</Text>
                    <View>
                        <Image source={{ uri: 'https://cdn.freebiesupply.com/logos/large/2x/vegas-golden-knights-logo.png' }} style={styles.IMGlogo}></Image>
                    </View>
                    <View style={styles.inputView}>
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/149/149995.png' }} style={styles.IMGinput}></Image>
                        <TextInput placeholder="Username" style={styles.InputTxt} />
                    </View>
                    <View style={styles.inputView}>
                        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/8105/8105423.png' }} style={styles.IMGinput} ></Image>
                        <TextInput placeholder="Password" style={styles.InputTxt} />
                    </View>
                </View>
                    <TouchableOpacity style={styles.RegBtn}>
                        <Text> Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.BackBtn} onPress={() => props.back()}>
                        <Text style={styles.BackTxt}>Back</Text>
                    </TouchableOpacity>
            </SafeAreaView>
        </Modal>
    )
}

const styles = StyleSheet.create({

    safeAreaView: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    imageLogo: {
        height: 100,
        width: 250,
    },
    BoxView: {
        alignItems: 'center',
        backgroundColor: '#FFDAB9',
        width: 250,
        borderRadius: 10,
    },
    RegText: {
        fontWeight: 'bold',
        fontSize: 40,
        color: '#101820',
        margin: 20

    },
    inputView: {
        flexDirection: 'row',
        margin: 15,
        marginBottom: 30,
    },
    InputTxt: {
        borderBottomColor: '#C71585',
        borderBottomWidth: 1,
        width: 160
    },

    RegBtn: {
        backgroundColor: '#FEE715',
        alignItems: 'center',
        justifyContent: 'center',
        width: '33%',
        height: 30,
        borderRadius: 15,
        position: "absolute",
        top: 580,
    },
    buttonText: {
        color: 'white',
        fontSize: 25
    },
    IMGinput: {
        height: 35,
        width: 35,
        marginRight: 5
        
    },
    IMGlogo: {
        height: 120,
        width: 120,
        borderRadius: 40,
        alignSelf: 'center',
    },
    BackTxt: {
        textAlign:'center', 
        marginTop: 5, 
        color: '#101820'
    },
    BackBtn: {
        backgroundColor: '#FEE715',
        alignSelf: 'center',
        alignItems: 'center',
        width: '33%',
        height: 30,
        borderRadius: 15,
        top: 80

    },

})