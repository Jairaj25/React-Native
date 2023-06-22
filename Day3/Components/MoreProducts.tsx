import { Button, Text, View } from "react-native";
import {IProduct, IProductInCart, Parent} from "./Parent";
export interface IMoreProducts{
    ProductList: IProduct[],
    AddProduct: Function,
    RemoveProduct: Function
}


export function MoreProducts(props: IMoreProducts) {
    
    return (
        <View>
            {props.ProductList.map((p,index)=>{
                return(
                    <View key={index}>
                        <View>
                            <Text>Name: {p.name}</Text>
                            <Text>Price: {p.price}</Text>
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