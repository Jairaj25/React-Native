import { StyleSheet, Text, View } from "react-native";
import { ChildC } from "./ChildC";

export function ChildB (){
    return (
        <View style={styles.Container}>
            <Text style={styles.textview}>This is Child B</Text>
            <ChildC/>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#F96167',
    width: 250,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    },
    textview: {
        textAlign: 'center',
        bottom: 5,
        color: '#F9E795'
      },
  });