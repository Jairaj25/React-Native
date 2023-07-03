import { StyleSheet, Text, View } from "react-native";
import { ChildB } from "./ChildB";

export function ChildA (){
    return (
        <View style={styles.Container}>
            <Text style={styles.textview}>This is Child A</Text>
            <ChildB/>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'c',
    marginBottom: 10,
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    },
    textview: {
        textAlign: 'center',
        bottom: 5,
        color: '#FEE715'
      },
  });