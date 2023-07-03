import { StyleSheet, Text, View } from "react-native";
import { ChildD } from "./ChildD";

export function ChildC (){
    return (
        <View style={styles.Container}>
            <Text style={styles.textview}>This is Child C</Text>
            <ChildD/>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#CCF381',
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    },
    textview: {
        textAlign: 'center',
        bottom: 5,
        color: '#4831D4'
      },
  });