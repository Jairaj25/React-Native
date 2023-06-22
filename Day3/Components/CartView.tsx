import { Button, Text, View } from "react-native";
import {IProduct, IProductInCart, Parent} from "./Parent";
export interface ICartView{
    ProductCart: IProductInCart[],
    ProductList: IProduct[],
    AddProduct: Function,
    RemoveProduct: Function,
    ResetCart: Function,
    TotalNumber: number
}


export function CartView(props: ICartView) {
    
    return(
        <View>
        {props.ProductCart.length>0?props.ProductCart.map((p:IProductInCart, index: number) => {
            const ProductDetails = props.ProductList.find(prod => prod.id === p.id)
            return(
                <View key={index} >
                <View>
                <Text> Name: {ProductDetails?.name}</Text>
                <Text> Price {ProductDetails?.price}</Text>
                <Text> Quantity {p.quantity}</Text>
                </View>
                <View style={{flexDirection:"row"}}>
                <Button title="+" onPress={()=> props.AddProduct(p.id)} />
                <Button title="-" onPress={()=> props.RemoveProduct(p.id)} />
                </View>
                </View>
            )
        }):<View><Text>Cart Empty</Text></View>}
        {props.ProductCart.length>0?
        <View>
        <Text>Total: {props.TotalNumber}</Text>
        <Button title="Clear Cart" onPress={()=>props.ResetCart()} />
        </View>:<></>
        }
        </View>

        
    )
}