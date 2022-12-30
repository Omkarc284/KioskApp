import React, { useState } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";

const { h, w} = Dimensions.get('window');
const AddSale = (props) => {
    const [sale, setSale] = useState({
        product_id: props.navigation.state.params.product.product_id,
        product_name: props.navigation.state.params.product.product_name,
        product_price: props.navigation.state.params.product.product_price,
        quantity: props.navigation.state.params.quantity,
        total: parseInt(props.navigation.state.params.quantity) * parseInt(props.navigation.state.params.product.product_price),
        payment_mode:'Cash',
        transaction_id: ''
    })
    return (
        <View>
            <View>
                <View style={styles.screen}>
                    <Text style={styles.title}>Cart:</Text>  
                </View>
                <View
                    style={{ 
                        width: w,
                        borderBottomColor: 'black',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                />
                <View style={{margin: 32}}>
                    <View style={styles.sideview}>
                        <Text style={styles.leftside}>Product Name: </Text>
                        <Text style={{fontSize: 18,color:'#4A4B4D', fontWeight: '600'}}>{sale.product_name}</Text>
                    </View>
                    <View style={styles.sideview}>
                        <Text style={styles.leftside}>Unit Price: </Text>
                        <Text style={{fontSize: 18,color:'#4A4B4D', fontWeight: '600'}}>₹ {sale.product_price}</Text>
                    </View>
                    <View style={styles.sideview}>
                        <Text style={styles.leftside}>Quantity: </Text>
                        <Text style={{fontSize: 18,color:'#4A4B4D', fontWeight: '600'}}>{sale.quantity}</Text>
                    </View>
                    <View
                        style={{ 
                            borderBottomColor: 'black',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }}
                    />
                    <View style={styles.sideview}>
                        <Text style={{flex: 1, fontSize: 16, color:'#4A4B4D', fontWeight: '900'}}>SubTotal: </Text>
                        <Text style={{fontSize: 16,color:'#4A4B4D', fontWeight: '900'}}>₹ {parseInt(sale.product_price) * parseInt(sale.quantity)}</Text>
                    </View>

                    <View style={styles.sideview}>
                        <Text style={{flex: 1, fontSize: 16, color:'#4A4B4D', fontWeight: '900'}}>Handling Charges: </Text>
                        <Text style={{fontSize: 16,color:'#4A4B4D', fontWeight: '900'}}>₹ 0</Text>
                    </View>
                    <View
                        style={{ 
                            borderBottomColor: 'black',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }}
                    />
                    <View style={styles.sideview}>
                        <Text style={{flex: 1, fontSize: 24, color:'#4A4B4D', fontWeight: '900'}}>Total: </Text>
                        <Text style={{fontSize: 24,color:'#4A4B4D', fontWeight: '900'}}>₹ {sale.total}</Text>
                    </View>
                    
                </View>
                    <View
                        style={{ 
                            width: w,
                            borderBottomColor: 'black',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }}
                    />
                    <View>
                        <View>
                            <Text>Payment Mode: </Text>
                            <View>

                            </View>
                        </View>
                    </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        margin: 36
    },
    title: {
        color:'#000F4D',
        fontSize: 32,
        fontWeight: '500'
    },
    sideview:{
        flexDirection: "row"
    },
    leftside: {
        flex: 1,
        fontSize: 18
    },


})

export default AddSale