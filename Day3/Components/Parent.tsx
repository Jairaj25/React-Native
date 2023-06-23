import React, { useState } from 'react';
const img1 =require ("./Images/img1.jpg");
const img2 =require ("./Images/img2.jpg");
const img3 =require ("./Images/img3.jpg");
const img4 =require ("./Images/img4.jpg");

import {
  Alert,
  Button,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { CartView } from './CartView';
import { MoreProducts } from './MoreProducts';

export interface IProduct  {
    id: number,
    name: string,
    price: number,
    availableUnits: number,
    url:string,
  }
  
  export interface IProductInCart  {
    id: number,
    quantity: number,
    
  }
  
  
  
  export class Parent extends React.Component{
    state: {
      ProductList : IProduct[],
      ProductCart : IProductInCart[],
      TotalNumber: number}={ProductList: [],ProductCart: [], TotalNumber:0}
    constructor(Props:any){
      super(Props)
      this.state.ProductList=[
      {
        id: 1,
        name: 'Samsung 138 cm (55 inches) Crystal 4K Series Ultra HD Smart LED TV UA55AUE60AKLXL',
        price: 45990,
        availableUnits: 4,
        url: img1
      },
     {
        id: 2,
        name: 'OnePlus 108 cm (43 inches) Y Series 4K Ultra HD Smart Android LED TV 43Y1S Pro',
        price: 42990,
        availableUnits: 2,
        url:img2
      },
      {
        id: 3,
        name: 'Nu 165 cm (65 inch) Premium Series 4K Ultra HD WebOS Smart LED TV LED65UWA1',
        price: 46990,
        availableUnits: 5,
        url:img3
      },
      {
        id: 4,
        name: 'TCL 108 cm (43 inches) 4K Ultra HD Certified Android Smart LED TV 43P615',
        price: 45999,
        availableUnits: 1,
        url:img4  
      },]
    }
    
    AddProduct=(itemId:number)=>{
      
      this.setState((prev: {ProductList: IProduct[], ProductCart: IProductInCart[], TotalNumber:number})=>{
        const ProductsInCart = prev.ProductCart.find(p=>p.id===itemId);
        const ProductsInProductList = prev.ProductList.find(p=>p.id===itemId);
        const quantityincart = ProductsInCart?ProductsInCart.quantity:0;
        const quantityinproductlist = ProductsInProductList?ProductsInProductList.availableUnits:0;
        if(quantityincart === quantityinproductlist){
          return prev;
        }
        if(!ProductsInCart){
            prev.ProductCart.push({id:itemId,quantity:1})
            prev.TotalNumber+=ProductsInProductList?ProductsInProductList.price:0;
            return{...prev}
        }
        else{
            const UpdateCart = prev.ProductCart.map(p=>{
                if(p.id===itemId){
                    p.quantity+=1;
                    prev.TotalNumber += ProductsInProductList?ProductsInProductList.price:0;
                }
                return p
            })
            return {...prev, ProductsInCart:UpdateCart}
        }

      }
)
    }
    RemoveProduct=(itemId:number) => {
     
      this.setState((prev:{ProductList: IProduct[],ProductCart: IProductInCart[], TotalNumber:number})=>{
        const ProductsInCart = prev.ProductCart.find(p=>p.id===itemId);
        const ProductsInProductList = prev.ProductList.find(p=>p.id===itemId);

        if(ProductsInCart && ProductsInCart.id==itemId){
            if(ProductsInCart?.quantity===1){
                prev.TotalNumber -= ProductsInProductList?ProductsInProductList.price:0;
                prev.ProductCart = prev.ProductCart.filter(p=>p.id!==ProductsInCart.id)
            }
            
        
        else{
            ProductsInCart.quantity -= 1;
            prev.TotalNumber -= ProductsInProductList?ProductsInProductList.price:0;
            
        }
      }
      return prev;
      })
    }
    ResetCart =()=>{
      this.setState((prev:{ProductList:IProduct[], ProductCart: IProductInCart[], TotalNumber:number}) =>{
        prev.ProductCart=[];
        prev.TotalNumber=0;
        return prev;
      })
      

    }
    
    render(){
      
      return (
        <ScrollView>
        <View style={styles.container}>
        
          <View style={{flexDirection:'row', flex: 2,}}>
            <Text style={{marginTop:10,}}> Total Amount {this.state.TotalNumber}</Text>
            <View style={{position: 'absolute', right: 10,}}>
              <Button title="Clear Cart" onPress={()=>this.ResetCart()} />
            </View>
          </View>
          <CartView ProductList={this.state.ProductList} ProductCart={this.state.ProductCart} AddProduct={this.AddProduct} RemoveProduct={this.RemoveProduct} ResetCart={this.ResetCart} TotalNumber={this.state.TotalNumber} />
          <Text>
            More Products:
          </Text>
          <MoreProducts ProductList={this.state.ProductList} AddProduct={this.AddProduct} RemoveProduct={this.RemoveProduct} />
        </View>
        </ScrollView>
      )
    }
  }
  
  
  const styles = StyleSheet.create({
    container: {
      
      backgroundColor: 'white'
    },
  });
  
  
  