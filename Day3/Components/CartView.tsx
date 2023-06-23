import { Alert, Button, Image, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {IProduct, IProductInCart, Parent} from "./Parent";
import { useState } from "react";
export interface ICartView{
    ProductCart: IProductInCart[],
    ProductList: IProduct[],
    AddProduct: Function,
    RemoveProduct: Function,
    ResetCart: Function,
    TotalNumber: number
}


export function CartView(props: ICartView) {
    const [modalVisible, setModalVisible] = useState(false);
        
    return(
        <View style={styles.div2}>
        
        {props.ProductCart.length>0?props.ProductCart.map((p:IProductInCart, index: number) => {
            const ProductDetails = props.ProductList.find(prod => prod.id === p.id)
            return(
                <View style={styles.container}>
                <View key={index} style={styles.prods}>
                <View>
                <Text> Name: {ProductDetails?.name}</Text>
                <Text> Price {ProductDetails?.price}</Text>
                <Text> Quantity {p.quantity}</Text>
                <Image style={styles.Image} source={ProductDetails?.url}/>
                </View>
                <View style={{flexDirection:"row"}}>
                <Button title="+" onPress={()=> props.AddProduct(p.id)} />
                <Button title="-" onPress={()=> props.RemoveProduct(p.id)} />
                </View>
                </View>
                </View>
            )
        }):
        <>
      <View style={styles.div}>
      
      <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>THIS CART IS EMPTY!!!!!!!!!!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      </View>
        <TouchableOpacity  style={{alignItems: 'center'}} onPress={() => setModalVisible(true)}>
            <Text> Cart Empty (click me?)</Text>
        </TouchableOpacity>
        
        </View></>}
        {props.ProductCart.length>0?
        <View >
            
        <Text style={styles.total}>Total: {props.TotalNumber}</Text>
        
        </View>:<></>
        }
        
        </View>
        

        
    )
}

const styles = StyleSheet.create({
    cart: {
        alignItems: 'flex-end',
    },
    div: {
        backgroundColor: 'white',
        marginBottom:20,
        marginTop: 20,
    },
    div2: {
        backgroundColor: 'white',
    },
    container: {
        marginRight: 20,
        paddingLeft: 10,

    },
    prods: {
        backgroundColor: 'white',
        borderRadius: 15,
        border: 5,
        borderWidth:2,
        borderColor: 'black',
        marginTop: 30,
        marginBottom: 10,
        paddingLeft: 8,
    },
    total: {
        fontSize:20,
        marginBottom: 10,
    },
    Image: {
        marginLeft: 150,
        width: 150,
        height: 150,
        resizeMode: 'contain'
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
     color: 'white',
     fontWeight: 'bold',
     textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },


  });