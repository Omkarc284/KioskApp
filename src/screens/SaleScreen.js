import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList,ScrollView, Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';
import SaleCard from '../Components/SaleCard';
const { height } = Dimensions.get('window');
const SaleScreen = (props) => {
    
    return (
        <ScrollView contentContainerStyle={styles.container}>
           <View>
             
            <View >
                <View style={styles.screen}>
                    <Text style={styles.title}>Product</Text>
                    
                    
                </View>
                <View
                    style={{ 
                        borderBottomColor: 'black',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                />
                <TextInput 
                    style={styles.searchbox} 
                    underlineColor='transparent'
                    placeholder='Search Product'
                    left={<TextInput.Icon icon="magnify" size={35} />}
                />
            </View>
            <View style={styles.list}>
                <SaleCard id="1" name="Rice Bag" count='30' price='50' navigation={props.navigation}/>
                <SaleCard id="2" name="Coconut" count='20' price='55' navigation={props.navigation}/>
                <SaleCard id="3" name="Rice Bag" count='30' price='60' navigation={props.navigation}/>
            </View>
            <View  style={styles.design}></View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    
    container:{
        overflow: 'scroll',
        flexGrow: 1,
    },
    design:{
        borderTopRightRadius: 45,
        borderBottomRightRadius: 45,
        marginTop: 256,
        position: 'absolute',
        width: "35%",
        height: height,
        backgroundColor: '#6C971F',
        zIndex: -5
    },
    screen: {
        margin: 36
    },
    title: {
        color:'#000F4D',
        fontSize: 32,
        fontWeight: '500'
    },
    subtitle: {
        color:'#000F4D',
        fontSize: 18,
        fontWeight: '300'
    },
    searchbox:{
        fontSize: 18,
        overflow: 'hidden',
        borderRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        margin: 36,
        height: 60
    },
    list:{
     marginTop: 50,
    }
});

export default SaleScreen;