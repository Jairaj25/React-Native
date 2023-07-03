import { Button, Image, StyleSheet, Text, View } from "react-native";
import {IProduct, IProductInCart, Parent} from "./Parent";
export interface IMoreProducts{
    ProductList: IProduct[],
    AddProduct: Function,
    RemoveProduct: Function
}


export function MoreProducts(props: IMoreProducts) {
    
    return (
        <View style={styles.container}>
            {props.ProductList.map((p,index)=>{
                return(
                    <View key={index} style={styles.prods}>
                        <View>
                            <Text style={{color: '#101820'}}>Name: {p.name}</Text>
                            <Text style={{color: '#101820'}}>Price: {p.price}</Text>
                            <Text style={{color: '#101820'}}>Stock Left: {p.availableUnits}</Text>
                            <Image style={styles.Image} source={p.url}/>
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <Button title="+" onPress={()=>props.AddProduct(p.id)} />
                            <Button title="-" onPress={()=>props.RemoveProduct(p.id)} />
                        </View>
                    </View>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
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
        paddingLeft: 8,
        
    },
    Image: {
        marginLeft: 150,
        width: 150,
        height: 150,
        resizeMode: 'contain'
    }
  });
  